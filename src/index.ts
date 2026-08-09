import express from 'express';
import cors from 'cors';
import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { PrismaClient } from './generated/client';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const updatesDir = path.join(__dirname, '..', 'updates');
if (!fs.existsSync(updatesDir)) {
  fs.mkdirSync(updatesDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, updatesDir),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocketServer({ noServer: true });

// Map of active branch WebSocket connections: branchId -> WebSocket
const activeBranches = new Map<string, WebSocket>();

// In-memory loyalty database for testing
const loyaltyDb = new Map<string, { points: number; memberName: string }>([
  ['M001', { points: 420, memberName: 'Jane Smith' }],
  ['M002', { points: 150, memberName: 'John Doe' }],
]);

wss.on('connection', (ws) => {
  let registeredBranchId: string | null = null;

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message.toString());
      if (data.type === 'REGISTER_BRANCH') {
        registeredBranchId = data.branchId;
        if (registeredBranchId) {
          activeBranches.set(registeredBranchId, ws);
          console.log(`[Cloud WS] Branch registered: ${registeredBranchId}`);
        }
      }
    } catch (err) {
      console.error('[Cloud WS] Parsing error:', err);
    }
  });

  ws.on('close', () => {
    if (registeredBranchId) {
      activeBranches.delete(registeredBranchId);
      console.log(`[Cloud WS] Branch disconnected: ${registeredBranchId}`);
    }
  });
});

// Upgrade HTTP to WS
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

// ----------------------------------------------------
// 1. HEALTH HEARTBEAT
// ----------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Cloud Central Server is online.' });
});

app.use('/updates', express.static(updatesDir));

// ----------------------------------------------------
// 1.5 AUTO-UPDATE PUBLISHING
// ----------------------------------------------------
app.get('/admin/publish', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Publish POS Update</title>
      <style>
        body { font-family: system-ui; background: #f4f4f5; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 400px; text-align: center; }
        input[type="text"], input[type="file"] { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box; }
        button { background: #3b82f6; color: white; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold; margin-top: 10px; }
        button:hover { background: #2563eb; }
      </style>
    </head>
    <body>
      <div class="card">
        <h2>Publish POS Update</h2>
        <form action="/api/admin/publish-update" method="POST" enctype="multipart/form-data">
          <label style="display:block; text-align:left; font-weight:bold; font-size:14px; margin-top:10px;">Version (e.g. 1.0.1)</label>
          <input type="text" name="version" placeholder="1.0.1" required />
          
          <label style="display:block; text-align:left; font-weight:bold; font-size:14px; margin-top:10px;">Setup .exe File</label>
          <input type="file" name="installer" accept=".exe" required />
          
          <button type="submit">Upload & Publish to Cloud</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

app.post('/api/admin/publish-update', upload.single('installer'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No installer file uploaded.' });
  }

  const { version } = req.body;
  if (!version) {
    return res.status(400).json({ error: 'Version is required.' });
  }

  const filePath = req.file.path;
  const fileName = req.file.originalname;

  try {
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha512');
    hashSum.update(fileBuffer);
    const sha512Base64 = hashSum.digest('base64');
    const size = fileBuffer.length;
    const releaseDate = new Date().toISOString();

    const ymlContent = `version: ${version}
files:
  - url: ${fileName}
    sha512: ${sha512Base64}
    size: ${size}
path: ${fileName}
sha512: ${sha512Base64}
releaseDate: '${releaseDate}'
`;
    
    fs.writeFileSync(path.join(updatesDir, 'latest.yml'), ymlContent);

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Update Published</title>
        <style>
          body { font-family: system-ui; background: #f4f4f5; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
          .card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 400px; text-align: center; }
          a { display: inline-block; background: #10b981; color: white; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-weight: bold; margin-top: 20px; }
          a:hover { background: #059669; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2 style="color: #10b981;">✅ Update Published Successfully!</h2>
          <p>Version <strong>${version}</strong> is now live on the cloud.</p>
          <p style="font-size: 13px; color: #666;">All restaurant POS terminals will detect and download this update automatically.</p>
          <a href="/admin/publish">Upload Another Update</a>
        </div>
      </body>
      </html>
    `);
  } catch (err: any) {
    console.error('Error publishing update:', err);
    res.status(500).send('<h2>Internal Server Error: Failed to publish update.</h2><a href="/admin/publish">Go Back</a>');
  }
});

// ----------------------------------------------------
// 2. HYBRID SYNC INGESTION (OUTBOX PATTERN)
// ----------------------------------------------------
app.post('/api/sync/batch', async (req, res) => {
  const { branchId, terminalId, enterpriseTenantId, events } = req.body;
  const results = [];

  for (const event of events) {
    const { id, entityName, entityId, action, payload } = event;
    try {
      const data = JSON.parse(payload);
      console.log(`[Cloud Sync Batch] Ingesting ${action} on ${entityName} (${entityId}) from branch ${branchId}`);

      if (entityName === 'EmployeeShift') {
        // Upsert EmployeeShift into PostgreSQL
        await prisma.employeeShift.upsert({
          where: { id: entityId },
          create: {
            id: entityId,
            branchId,
            terminalId,
            enterpriseTenantId,
            employeePin: data.employeePin,
            employeeName: data.employeeName,
            openedAt: new Date(data.openedAt),
            closedAt: data.closedAt ? new Date(data.closedAt) : null,
            openingBalance: data.openingBalance,
            closingBalance: data.closingBalance,
            actualCash: data.actualCash,
            expectedCash: data.expectedCash,
            cardSales: data.cardSales,
            cashSales: data.cashSales,
            synchronizedAt: new Date()
          },
          update: {
            closedAt: data.closedAt ? new Date(data.closedAt) : null,
            closingBalance: data.closingBalance,
            actualCash: data.actualCash,
            expectedCash: data.expectedCash,
            cardSales: data.cardSales,
            cashSales: data.cashSales,
            synchronizedAt: new Date()
          }
        });
      } else if (entityName === 'Product') {
        // Upsert Product and ProductVariant from local outbox sync event
        if (data.deletedAt) {
          try {
            await prisma.product.delete({
              where: { id: entityId }
            });
          } catch (e: any) {
            console.log(`[Cloud Sync Batch] Product ${entityId} already deleted:`, e.message);
          }
        } else {
          await prisma.product.upsert({
            where: { id: entityId },
            create: {
              id: entityId,
              enterpriseTenantId,
              name: data.name,
              description: data.description,
              category: data.category,
              imageUrl: data.imageUrl,
              bgColor: data.bgColor,
              textColor: data.textColor,
              status: data.status || 'ACTIVE',
            },
            update: {
              name: data.name,
              description: data.description,
              category: data.category,
              imageUrl: data.imageUrl,
              bgColor: data.bgColor,
              textColor: data.textColor,
              status: data.status || 'ACTIVE',
            }
          });

          if (data.variants && Array.isArray(data.variants)) {
            for (const v of data.variants) {
              await prisma.productVariant.upsert({
                where: { id: v.id },
                create: {
                  id: v.id,
                  enterpriseTenantId,
                  productId: entityId,
                  name: v.name,
                  price: v.price,
                  sku: v.sku
                },
                update: {
                  name: v.name,
                  price: v.price,
                  sku: v.sku
                }
              });
            }
          }
        }
      } else if (entityName === 'Order') {
        // Ensure shift exists in database to satisfy foreign key constraint
        const shiftExists = await prisma.employeeShift.findUnique({
          where: { id: data.shiftId }
        });
        if (!shiftExists) {
          console.log(`[Cloud Sync Batch] Creating placeholder shift ${data.shiftId} for order ${entityId}`);
          await prisma.employeeShift.create({
            data: {
              id: data.shiftId,
              branchId,
              terminalId,
              enterpriseTenantId,
              employeePin: data.employeeId || '0000',
              employeeName: 'Synchronized Cashier',
              openedAt: data.createdAt ? new Date(data.createdAt) : new Date(),
              openingBalance: 0.0,
            }
          });
        }

        // Auto-heal missing products/variants/modifiers
        if (data.items && Array.isArray(data.items)) {
          for (const item of data.items) {
            // Check if productVariant and product details are present in the item payload
            if (item.productVariant) {
              const pv = item.productVariant;

              // Ensure Product exists
              if (pv.product) {
                const prod = pv.product;
                await prisma.product.upsert({
                  where: { id: pv.productId },
                  create: {
                    id: pv.productId,
                    enterpriseTenantId,
                    name: prod.name,
                    description: prod.description,
                    category: prod.category,
                    imageUrl: prod.imageUrl,
                  },
                  update: {
                    name: prod.name,
                    description: prod.description,
                    category: prod.category,
                    imageUrl: prod.imageUrl,
                  }
                });
              }

              // Ensure ProductVariant exists
              await prisma.productVariant.upsert({
                where: { id: item.productVariantId },
                create: {
                  id: item.productVariantId,
                  enterpriseTenantId,
                  productId: pv.productId,
                  name: pv.name,
                  price: pv.price,
                  sku: pv.sku
                },
                update: {
                  name: pv.name,
                  price: pv.price,
                  sku: pv.sku
                }
              });
            }

            // Ensure Modifiers exist
            if (item.modifiers && Array.isArray(item.modifiers)) {
              for (const m of item.modifiers) {
                if (m.modifier) {
                  const mod = m.modifier;

                  // Ensure ModifierGroup exists
                  const groupExists = await prisma.modifierGroup.findUnique({
                    where: { id: mod.groupId }
                  });
                  if (!groupExists) {
                    await prisma.modifierGroup.create({
                      data: {
                        id: mod.groupId,
                        enterpriseTenantId,
                        name: 'Synchronized Modifier Group',
                        minSelected: 0,
                        maxSelected: 1
                      }
                    });
                  }

                  // Ensure Modifier exists
                  await prisma.modifier.upsert({
                    where: { id: m.modifierId },
                    create: {
                      id: m.modifierId,
                      enterpriseTenantId,
                      groupId: mod.groupId,
                      name: mod.name,
                      price: mod.price
                    },
                    update: {
                      name: mod.name,
                      price: mod.price
                    }
                  });
                }
              }
            }
          }
        }

        // Upsert Order and OrderItems into PostgreSQL
        await prisma.order.upsert({
          where: { orderNumber: data.orderNumber },
          create: {
            id: entityId,
            branchId,
            terminalId,
            enterpriseTenantId,
            orderNumber: data.orderNumber,
            status: data.status,
            paymentStatus: data.paymentStatus,
            paymentMethod: data.paymentMethod,
            subtotal: data.subtotal,
            tax: data.tax,
            total: data.total,
            employeeId: data.employeeId,
            shiftId: data.shiftId,
            memberId: data.memberId,
            tableNumber: data.tableNumber,
            waiterInfo: data.waiterInfo,
            orderType: data.orderType,
            customerName: data.customerName,
            customerPhone: data.customerPhone,
            deliveryAddress: data.deliveryAddress,
            deliveryPlatform: data.deliveryPlatform,
            isPrinted: data.isPrinted,
            synchronizedAt: new Date(),
            createdAt: new Date(data.createdAt),
            items: {
              create: (data.items || []).map((item: any) => ({
                id: item.id,
                productVariantId: item.productVariantId,
                quantity: item.quantity,
                unitPrice: item.unitPrice,
                totalPrice: item.totalPrice,
                modifiers: {
                  create: (item.modifiers || []).map((m: any) => ({
                    id: m.id,
                    modifierId: m.modifierId,
                    price: m.price
                  }))
                }
              }))
            }
          },
          update: {
            status: data.status,
            paymentStatus: data.paymentStatus,
            tableNumber: data.tableNumber,
            waiterInfo: data.waiterInfo,
            orderType: data.orderType,
            customerName: data.customerName,
            customerPhone: data.customerPhone,
            deliveryAddress: data.deliveryAddress,
            deliveryPlatform: data.deliveryPlatform,
            isPrinted: data.isPrinted,
            synchronizedAt: new Date()
          }
        });

        // Award loyalty points if memberId is present
        if (data.memberId && loyaltyDb.has(data.memberId)) {
          const member = loyaltyDb.get(data.memberId)!;
          const pointsEarned = Math.floor(parseFloat(data.total));
          member.points += pointsEarned;
          console.log(`[Cloud Loyalty] Credited ${pointsEarned} points to ${member.memberName} (New total: ${member.points})`);
        }
      } else if (entityName === 'InventoryStock') {
        // Upsert InventoryStock into PostgreSQL based on branch + ingredient unique key
        await prisma.inventoryStock.upsert({
          where: {
            branchId_ingredientName: {
              branchId,
              ingredientName: data.ingredientName
            }
          },
          create: {
            id: entityId,
            branchId,
            enterpriseTenantId,
            ingredientName: data.ingredientName,
            quantity: data.quantity,
            minThreshold: data.minThreshold
          },
          update: {
            quantity: data.quantity,
            minThreshold: data.minThreshold
          }
        });
      }

      results.push({ id, success: true });
    } catch (err: any) {
      console.error(`[Cloud Sync Batch] Failed to ingest event ${id}:`, err.message);
      results.push({ id, success: false, error: err.message });
    }
  }

  res.json({ results });
});

// ----------------------------------------------------
// 3. ONLINE DELIVERIES WEBHOOK (FOODPANDA / UBER EATS)
// ----------------------------------------------------
app.post('/api/deliveries/webhook', async (req, res) => {
  const { aggregator, branchId, orderId, items, customerName, total } = req.body;

  console.log(`[Cloud Webhook] Received delivery order ${orderId} from ${aggregator} for branch ${branchId}`);

  // Check if target store terminal is active on WebSocket
  const branchSocket = activeBranches.get(branchId);

  if (!branchSocket || branchSocket.readyState !== WebSocket.OPEN) {
    console.log(`[Cloud Webhook] Branch ${branchId} is currently OFFLINE. Rejecting order.`);
    // Return 503: Tells aggregator the store terminal is disconnected, closing online branch
    return res.status(503).json({ error: 'Store branch is offline / closed' });
  }

  // Store terminal is online, push order details downstream to trigger receipt auto-print
  branchSocket.send(JSON.stringify({
    type: 'ONLINE_DELIVERY_ORDER',
    aggregator,
    orderId,
    customerName,
    items,
    total
  }));

  console.log(`[Cloud Webhook] Dispatched order ${orderId} downstream to branch ${branchId}`);
  res.json({ success: true, message: 'Order dispatched to branch terminal' });
});

// ----------------------------------------------------
// 4. LOYALTY MEMBER POINTS SYSTEM
// ----------------------------------------------------
app.get('/api/loyalty/:memberId', async (req, res) => {
  const { memberId } = req.params;
  const member = loyaltyDb.get(memberId);
  if (!member) {
    return res.status(404).json({ error: 'Loyalty member not found' });
  }
  res.json({ memberId, points: member.points, memberName: member.memberName });
});

app.post('/api/loyalty/redeem', async (req, res) => {
  const { memberId, pointsToRedeem } = req.body;
  const member = loyaltyDb.get(memberId);
  if (!member) {
    return res.status(404).json({ error: 'Loyalty member not found' });
  }
  if (pointsToRedeem > member.points) {
    return res.status(400).json({ error: 'Insufficient points' });
  }
  member.points -= pointsToRedeem;
  res.json({ success: true, remainingPoints: member.points });
});

// Boot Cloud Control Plane
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`[Central Cloud Control Plane] Running on http://localhost:${PORT}`);
});
export { server };
