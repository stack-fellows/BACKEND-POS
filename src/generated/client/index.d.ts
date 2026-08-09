
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductVariant
 * 
 */
export type ProductVariant = $Result.DefaultSelection<Prisma.$ProductVariantPayload>
/**
 * Model ModifierGroup
 * 
 */
export type ModifierGroup = $Result.DefaultSelection<Prisma.$ModifierGroupPayload>
/**
 * Model Modifier
 * 
 */
export type Modifier = $Result.DefaultSelection<Prisma.$ModifierPayload>
/**
 * Model InventoryStock
 * 
 */
export type InventoryStock = $Result.DefaultSelection<Prisma.$InventoryStockPayload>
/**
 * Model RecipeIngredient
 * 
 */
export type RecipeIngredient = $Result.DefaultSelection<Prisma.$RecipeIngredientPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model OrderItemModifier
 * 
 */
export type OrderItemModifier = $Result.DefaultSelection<Prisma.$OrderItemModifierPayload>
/**
 * Model EmployeeShift
 * 
 */
export type EmployeeShift = $Result.DefaultSelection<Prisma.$EmployeeShiftPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.productVariant`: Exposes CRUD operations for the **ProductVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductVariants
    * const productVariants = await prisma.productVariant.findMany()
    * ```
    */
  get productVariant(): Prisma.ProductVariantDelegate<ExtArgs>;

  /**
   * `prisma.modifierGroup`: Exposes CRUD operations for the **ModifierGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModifierGroups
    * const modifierGroups = await prisma.modifierGroup.findMany()
    * ```
    */
  get modifierGroup(): Prisma.ModifierGroupDelegate<ExtArgs>;

  /**
   * `prisma.modifier`: Exposes CRUD operations for the **Modifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modifiers
    * const modifiers = await prisma.modifier.findMany()
    * ```
    */
  get modifier(): Prisma.ModifierDelegate<ExtArgs>;

  /**
   * `prisma.inventoryStock`: Exposes CRUD operations for the **InventoryStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryStocks
    * const inventoryStocks = await prisma.inventoryStock.findMany()
    * ```
    */
  get inventoryStock(): Prisma.InventoryStockDelegate<ExtArgs>;

  /**
   * `prisma.recipeIngredient`: Exposes CRUD operations for the **RecipeIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeIngredients
    * const recipeIngredients = await prisma.recipeIngredient.findMany()
    * ```
    */
  get recipeIngredient(): Prisma.RecipeIngredientDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.orderItemModifier`: Exposes CRUD operations for the **OrderItemModifier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItemModifiers
    * const orderItemModifiers = await prisma.orderItemModifier.findMany()
    * ```
    */
  get orderItemModifier(): Prisma.OrderItemModifierDelegate<ExtArgs>;

  /**
   * `prisma.employeeShift`: Exposes CRUD operations for the **EmployeeShift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeShifts
    * const employeeShifts = await prisma.employeeShift.findMany()
    * ```
    */
  get employeeShift(): Prisma.EmployeeShiftDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    ProductVariant: 'ProductVariant',
    ModifierGroup: 'ModifierGroup',
    Modifier: 'Modifier',
    InventoryStock: 'InventoryStock',
    RecipeIngredient: 'RecipeIngredient',
    Order: 'Order',
    OrderItem: 'OrderItem',
    OrderItemModifier: 'OrderItemModifier',
    EmployeeShift: 'EmployeeShift'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "product" | "productVariant" | "modifierGroup" | "modifier" | "inventoryStock" | "recipeIngredient" | "order" | "orderItem" | "orderItemModifier" | "employeeShift"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductVariant: {
        payload: Prisma.$ProductVariantPayload<ExtArgs>
        fields: Prisma.ProductVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findFirst: {
            args: Prisma.ProductVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          findMany: {
            args: Prisma.ProductVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          create: {
            args: Prisma.ProductVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          createMany: {
            args: Prisma.ProductVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>[]
          }
          delete: {
            args: Prisma.ProductVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          update: {
            args: Prisma.ProductVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          deleteMany: {
            args: Prisma.ProductVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductVariantPayload>
          }
          aggregate: {
            args: Prisma.ProductVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductVariant>
          }
          groupBy: {
            args: Prisma.ProductVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ProductVariantCountAggregateOutputType> | number
          }
        }
      }
      ModifierGroup: {
        payload: Prisma.$ModifierGroupPayload<ExtArgs>
        fields: Prisma.ModifierGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModifierGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModifierGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload>
          }
          findFirst: {
            args: Prisma.ModifierGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModifierGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload>
          }
          findMany: {
            args: Prisma.ModifierGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload>[]
          }
          create: {
            args: Prisma.ModifierGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload>
          }
          createMany: {
            args: Prisma.ModifierGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModifierGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload>[]
          }
          delete: {
            args: Prisma.ModifierGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload>
          }
          update: {
            args: Prisma.ModifierGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload>
          }
          deleteMany: {
            args: Prisma.ModifierGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModifierGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModifierGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierGroupPayload>
          }
          aggregate: {
            args: Prisma.ModifierGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModifierGroup>
          }
          groupBy: {
            args: Prisma.ModifierGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModifierGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModifierGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ModifierGroupCountAggregateOutputType> | number
          }
        }
      }
      Modifier: {
        payload: Prisma.$ModifierPayload<ExtArgs>
        fields: Prisma.ModifierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModifierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModifierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          findFirst: {
            args: Prisma.ModifierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModifierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          findMany: {
            args: Prisma.ModifierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>[]
          }
          create: {
            args: Prisma.ModifierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          createMany: {
            args: Prisma.ModifierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModifierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>[]
          }
          delete: {
            args: Prisma.ModifierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          update: {
            args: Prisma.ModifierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          deleteMany: {
            args: Prisma.ModifierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModifierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModifierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModifierPayload>
          }
          aggregate: {
            args: Prisma.ModifierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModifier>
          }
          groupBy: {
            args: Prisma.ModifierGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModifierCountArgs<ExtArgs>
            result: $Utils.Optional<ModifierCountAggregateOutputType> | number
          }
        }
      }
      InventoryStock: {
        payload: Prisma.$InventoryStockPayload<ExtArgs>
        fields: Prisma.InventoryStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          findFirst: {
            args: Prisma.InventoryStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          findMany: {
            args: Prisma.InventoryStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>[]
          }
          create: {
            args: Prisma.InventoryStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          createMany: {
            args: Prisma.InventoryStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>[]
          }
          delete: {
            args: Prisma.InventoryStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          update: {
            args: Prisma.InventoryStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          deleteMany: {
            args: Prisma.InventoryStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          aggregate: {
            args: Prisma.InventoryStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryStock>
          }
          groupBy: {
            args: Prisma.InventoryStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryStockCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryStockCountAggregateOutputType> | number
          }
        }
      }
      RecipeIngredient: {
        payload: Prisma.$RecipeIngredientPayload<ExtArgs>
        fields: Prisma.RecipeIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findFirst: {
            args: Prisma.RecipeIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          findMany: {
            args: Prisma.RecipeIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          create: {
            args: Prisma.RecipeIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          createMany: {
            args: Prisma.RecipeIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>[]
          }
          delete: {
            args: Prisma.RecipeIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          update: {
            args: Prisma.RecipeIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          deleteMany: {
            args: Prisma.RecipeIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecipeIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipeIngredientPayload>
          }
          aggregate: {
            args: Prisma.RecipeIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipeIngredient>
          }
          groupBy: {
            args: Prisma.RecipeIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeIngredientCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      OrderItemModifier: {
        payload: Prisma.$OrderItemModifierPayload<ExtArgs>
        fields: Prisma.OrderItemModifierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemModifierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemModifierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload>
          }
          findFirst: {
            args: Prisma.OrderItemModifierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemModifierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload>
          }
          findMany: {
            args: Prisma.OrderItemModifierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload>[]
          }
          create: {
            args: Prisma.OrderItemModifierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload>
          }
          createMany: {
            args: Prisma.OrderItemModifierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemModifierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload>[]
          }
          delete: {
            args: Prisma.OrderItemModifierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload>
          }
          update: {
            args: Prisma.OrderItemModifierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemModifierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemModifierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemModifierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemModifierPayload>
          }
          aggregate: {
            args: Prisma.OrderItemModifierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItemModifier>
          }
          groupBy: {
            args: Prisma.OrderItemModifierGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemModifierGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemModifierCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemModifierCountAggregateOutputType> | number
          }
        }
      }
      EmployeeShift: {
        payload: Prisma.$EmployeeShiftPayload<ExtArgs>
        fields: Prisma.EmployeeShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload>
          }
          findFirst: {
            args: Prisma.EmployeeShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload>
          }
          findMany: {
            args: Prisma.EmployeeShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload>[]
          }
          create: {
            args: Prisma.EmployeeShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload>
          }
          createMany: {
            args: Prisma.EmployeeShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload>[]
          }
          delete: {
            args: Prisma.EmployeeShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload>
          }
          update: {
            args: Prisma.EmployeeShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftPayload>
          }
          aggregate: {
            args: Prisma.EmployeeShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeShift>
          }
          groupBy: {
            args: Prisma.EmployeeShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeShiftCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeShiftCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
  }


  /**
   * Count Type ProductVariantCountOutputType
   */

  export type ProductVariantCountOutputType = {
    recipeIngredients: number
    orderItems: number
  }

  export type ProductVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeIngredients?: boolean | ProductVariantCountOutputTypeCountRecipeIngredientsArgs
    orderItems?: boolean | ProductVariantCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariantCountOutputType
     */
    select?: ProductVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountRecipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * ProductVariantCountOutputType without action
   */
  export type ProductVariantCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type ModifierGroupCountOutputType
   */

  export type ModifierGroupCountOutputType = {
    modifiers: number
  }

  export type ModifierGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modifiers?: boolean | ModifierGroupCountOutputTypeCountModifiersArgs
  }

  // Custom InputTypes
  /**
   * ModifierGroupCountOutputType without action
   */
  export type ModifierGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroupCountOutputType
     */
    select?: ModifierGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModifierGroupCountOutputType without action
   */
  export type ModifierGroupCountOutputTypeCountModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierWhereInput
  }


  /**
   * Count Type ModifierCountOutputType
   */

  export type ModifierCountOutputType = {
    recipeIngredients: number
    itemModifiers: number
  }

  export type ModifierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeIngredients?: boolean | ModifierCountOutputTypeCountRecipeIngredientsArgs
    itemModifiers?: boolean | ModifierCountOutputTypeCountItemModifiersArgs
  }

  // Custom InputTypes
  /**
   * ModifierCountOutputType without action
   */
  export type ModifierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierCountOutputType
     */
    select?: ModifierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModifierCountOutputType without action
   */
  export type ModifierCountOutputTypeCountRecipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }

  /**
   * ModifierCountOutputType without action
   */
  export type ModifierCountOutputTypeCountItemModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemModifierWhereInput
  }


  /**
   * Count Type InventoryStockCountOutputType
   */

  export type InventoryStockCountOutputType = {
    recipeIngredients: number
  }

  export type InventoryStockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeIngredients?: boolean | InventoryStockCountOutputTypeCountRecipeIngredientsArgs
  }

  // Custom InputTypes
  /**
   * InventoryStockCountOutputType without action
   */
  export type InventoryStockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStockCountOutputType
     */
    select?: InventoryStockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryStockCountOutputType without action
   */
  export type InventoryStockCountOutputTypeCountRecipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderItemCountOutputType
   */

  export type OrderItemCountOutputType = {
    modifiers: number
  }

  export type OrderItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modifiers?: boolean | OrderItemCountOutputTypeCountModifiersArgs
  }

  // Custom InputTypes
  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCountOutputType
     */
    select?: OrderItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemModifierWhereInput
  }


  /**
   * Count Type EmployeeShiftCountOutputType
   */

  export type EmployeeShiftCountOutputType = {
    orders: number
  }

  export type EmployeeShiftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | EmployeeShiftCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * EmployeeShiftCountOutputType without action
   */
  export type EmployeeShiftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftCountOutputType
     */
    select?: EmployeeShiftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeShiftCountOutputType without action
   */
  export type EmployeeShiftCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    name: string | null
    description: string | null
    category: string | null
    imageUrl: string | null
    bgColor: string | null
    textColor: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    name: string | null
    description: string | null
    category: string | null
    imageUrl: string | null
    bgColor: string | null
    textColor: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    enterpriseTenantId: number
    name: number
    description: number
    category: number
    imageUrl: number
    bgColor: number
    textColor: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    name?: true
    description?: true
    category?: true
    imageUrl?: true
    bgColor?: true
    textColor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    name?: true
    description?: true
    category?: true
    imageUrl?: true
    bgColor?: true
    textColor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    name?: true
    description?: true
    category?: true
    imageUrl?: true
    bgColor?: true
    textColor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    enterpriseTenantId: string
    name: string
    description: string | null
    category: string
    imageUrl: string | null
    bgColor: string | null
    textColor: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    imageUrl?: boolean
    bgColor?: boolean
    textColor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    imageUrl?: boolean
    bgColor?: boolean
    textColor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    enterpriseTenantId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    imageUrl?: boolean
    bgColor?: boolean
    textColor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      variants: Prisma.$ProductVariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enterpriseTenantId: string
      name: string
      description: string | null
      category: string
      imageUrl: string | null
      bgColor: string | null
      textColor: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly enterpriseTenantId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly bgColor: FieldRef<"Product", 'String'>
    readonly textColor: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    cursor?: ProductVariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductVariant
   */

  export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  export type ProductVariantAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductVariantSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductVariantMinAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    productId: string | null
    name: string | null
    price: Decimal | null
    sku: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantMaxAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    productId: string | null
    name: string | null
    price: Decimal | null
    sku: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductVariantCountAggregateOutputType = {
    id: number
    enterpriseTenantId: number
    productId: number
    name: number
    price: number
    sku: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductVariantAvgAggregateInputType = {
    price?: true
  }

  export type ProductVariantSumAggregateInputType = {
    price?: true
  }

  export type ProductVariantMinAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    productId?: true
    name?: true
    price?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantMaxAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    productId?: true
    name?: true
    price?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductVariantCountAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    productId?: true
    name?: true
    price?: true
    sku?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariant to aggregate.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductVariants
    **/
    _count?: true | ProductVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductVariantMaxAggregateInputType
  }

  export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductVariant[P]>
      : GetScalarType<T[P], AggregateProductVariant[P]>
  }




  export type ProductVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductVariantWhereInput
    orderBy?: ProductVariantOrderByWithAggregationInput | ProductVariantOrderByWithAggregationInput[]
    by: ProductVariantScalarFieldEnum[] | ProductVariantScalarFieldEnum
    having?: ProductVariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductVariantCountAggregateInputType | true
    _avg?: ProductVariantAvgAggregateInputType
    _sum?: ProductVariantSumAggregateInputType
    _min?: ProductVariantMinAggregateInputType
    _max?: ProductVariantMaxAggregateInputType
  }

  export type ProductVariantGroupByOutputType = {
    id: string
    enterpriseTenantId: string
    productId: string
    name: string
    price: Decimal
    sku: string
    createdAt: Date
    updatedAt: Date
    _count: ProductVariantCountAggregateOutputType | null
    _avg: ProductVariantAvgAggregateOutputType | null
    _sum: ProductVariantSumAggregateOutputType | null
    _min: ProductVariantMinAggregateOutputType | null
    _max: ProductVariantMaxAggregateOutputType | null
  }

  type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ProductVariantGroupByOutputType[P]>
        }
      >
    >


  export type ProductVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    sku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recipeIngredients?: boolean | ProductVariant$recipeIngredientsArgs<ExtArgs>
    orderItems?: boolean | ProductVariant$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    sku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productVariant"]>

  export type ProductVariantSelectScalar = {
    id?: boolean
    enterpriseTenantId?: boolean
    productId?: boolean
    name?: boolean
    price?: boolean
    sku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    recipeIngredients?: boolean | ProductVariant$recipeIngredientsArgs<ExtArgs>
    orderItems?: boolean | ProductVariant$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductVariant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      recipeIngredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enterpriseTenantId: string
      productId: string
      name: string
      price: Prisma.Decimal
      sku: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["productVariant"]>
    composites: {}
  }

  type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = $Result.GetResult<Prisma.$ProductVariantPayload, S>

  type ProductVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductVariantCountAggregateInputType | true
    }

  export interface ProductVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'], meta: { name: 'ProductVariant' } }
    /**
     * Find zero or one ProductVariant that matches the filter.
     * @param {ProductVariantFindUniqueArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductVariantFindUniqueArgs>(args: SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProductVariant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductVariantFindUniqueOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductVariantFindFirstArgs>(args?: SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProductVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindFirstOrThrowArgs} args - Arguments to find a ProductVariant
     * @example
     * // Get one ProductVariant
     * const productVariant = await prisma.productVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProductVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductVariants
     * const productVariants = await prisma.productVariant.findMany()
     * 
     * // Get first 10 ProductVariants
     * const productVariants = await prisma.productVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductVariantFindManyArgs>(args?: SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProductVariant.
     * @param {ProductVariantCreateArgs} args - Arguments to create a ProductVariant.
     * @example
     * // Create one ProductVariant
     * const ProductVariant = await prisma.productVariant.create({
     *   data: {
     *     // ... data to create a ProductVariant
     *   }
     * })
     * 
     */
    create<T extends ProductVariantCreateArgs>(args: SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProductVariants.
     * @param {ProductVariantCreateManyArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductVariantCreateManyArgs>(args?: SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductVariants and returns the data saved in the database.
     * @param {ProductVariantCreateManyAndReturnArgs} args - Arguments to create many ProductVariants.
     * @example
     * // Create many ProductVariants
     * const productVariant = await prisma.productVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductVariants and only return the `id`
     * const productVariantWithIdOnly = await prisma.productVariant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProductVariant.
     * @param {ProductVariantDeleteArgs} args - Arguments to delete one ProductVariant.
     * @example
     * // Delete one ProductVariant
     * const ProductVariant = await prisma.productVariant.delete({
     *   where: {
     *     // ... filter to delete one ProductVariant
     *   }
     * })
     * 
     */
    delete<T extends ProductVariantDeleteArgs>(args: SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProductVariant.
     * @param {ProductVariantUpdateArgs} args - Arguments to update one ProductVariant.
     * @example
     * // Update one ProductVariant
     * const productVariant = await prisma.productVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductVariantUpdateArgs>(args: SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProductVariants.
     * @param {ProductVariantDeleteManyArgs} args - Arguments to filter ProductVariants to delete.
     * @example
     * // Delete a few ProductVariants
     * const { count } = await prisma.productVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductVariants
     * const productVariant = await prisma.productVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductVariantUpdateManyArgs>(args: SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductVariant.
     * @param {ProductVariantUpsertArgs} args - Arguments to update or create a ProductVariant.
     * @example
     * // Update or create a ProductVariant
     * const productVariant = await prisma.productVariant.upsert({
     *   create: {
     *     // ... data to create a ProductVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductVariant we want to update
     *   }
     * })
     */
    upsert<T extends ProductVariantUpsertArgs>(args: SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProductVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantCountArgs} args - Arguments to filter ProductVariants to count.
     * @example
     * // Count the number of ProductVariants
     * const count = await prisma.productVariant.count({
     *   where: {
     *     // ... the filter for the ProductVariants we want to count
     *   }
     * })
    **/
    count<T extends ProductVariantCountArgs>(
      args?: Subset<T, ProductVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductVariantAggregateArgs>(args: Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>

    /**
     * Group by ProductVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductVariantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductVariantGroupByArgs['orderBy'] }
        : { orderBy?: ProductVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductVariant model
   */
  readonly fields: ProductVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    recipeIngredients<T extends ProductVariant$recipeIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$recipeIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany"> | Null>
    orderItems<T extends ProductVariant$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariant$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductVariant model
   */ 
  interface ProductVariantFieldRefs {
    readonly id: FieldRef<"ProductVariant", 'String'>
    readonly enterpriseTenantId: FieldRef<"ProductVariant", 'String'>
    readonly productId: FieldRef<"ProductVariant", 'String'>
    readonly name: FieldRef<"ProductVariant", 'String'>
    readonly price: FieldRef<"ProductVariant", 'Decimal'>
    readonly sku: FieldRef<"ProductVariant", 'String'>
    readonly createdAt: FieldRef<"ProductVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ProductVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductVariant findUnique
   */
  export type ProductVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findUniqueOrThrow
   */
  export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant findFirst
   */
  export type ProductVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findFirstOrThrow
   */
  export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariant to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductVariants.
     */
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant findMany
   */
  export type ProductVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter, which ProductVariants to fetch.
     */
    where?: ProductVariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductVariants to fetch.
     */
    orderBy?: ProductVariantOrderByWithRelationInput | ProductVariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductVariants.
     */
    cursor?: ProductVariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductVariants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductVariants.
     */
    skip?: number
    distinct?: ProductVariantScalarFieldEnum | ProductVariantScalarFieldEnum[]
  }

  /**
   * ProductVariant create
   */
  export type ProductVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductVariant.
     */
    data: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
  }

  /**
   * ProductVariant createMany
   */
  export type ProductVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductVariant createManyAndReturn
   */
  export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProductVariants.
     */
    data: ProductVariantCreateManyInput | ProductVariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductVariant update
   */
  export type ProductVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductVariant.
     */
    data: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
    /**
     * Choose, which ProductVariant to update.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant updateMany
   */
  export type ProductVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductVariants.
     */
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyInput>
    /**
     * Filter which ProductVariants to update
     */
    where?: ProductVariantWhereInput
  }

  /**
   * ProductVariant upsert
   */
  export type ProductVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductVariant to update in case it exists.
     */
    where: ProductVariantWhereUniqueInput
    /**
     * In case the ProductVariant found by the `where` argument doesn't exist, create a new ProductVariant with this data.
     */
    create: XOR<ProductVariantCreateInput, ProductVariantUncheckedCreateInput>
    /**
     * In case the ProductVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductVariantUpdateInput, ProductVariantUncheckedUpdateInput>
  }

  /**
   * ProductVariant delete
   */
  export type ProductVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    /**
     * Filter which ProductVariant to delete.
     */
    where: ProductVariantWhereUniqueInput
  }

  /**
   * ProductVariant deleteMany
   */
  export type ProductVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductVariants to delete
     */
    where?: ProductVariantWhereInput
  }

  /**
   * ProductVariant.recipeIngredients
   */
  export type ProductVariant$recipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * ProductVariant.orderItems
   */
  export type ProductVariant$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * ProductVariant without action
   */
  export type ProductVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
  }


  /**
   * Model ModifierGroup
   */

  export type AggregateModifierGroup = {
    _count: ModifierGroupCountAggregateOutputType | null
    _avg: ModifierGroupAvgAggregateOutputType | null
    _sum: ModifierGroupSumAggregateOutputType | null
    _min: ModifierGroupMinAggregateOutputType | null
    _max: ModifierGroupMaxAggregateOutputType | null
  }

  export type ModifierGroupAvgAggregateOutputType = {
    minSelected: number | null
    maxSelected: number | null
  }

  export type ModifierGroupSumAggregateOutputType = {
    minSelected: number | null
    maxSelected: number | null
  }

  export type ModifierGroupMinAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    name: string | null
    minSelected: number | null
    maxSelected: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModifierGroupMaxAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    name: string | null
    minSelected: number | null
    maxSelected: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModifierGroupCountAggregateOutputType = {
    id: number
    enterpriseTenantId: number
    name: number
    minSelected: number
    maxSelected: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModifierGroupAvgAggregateInputType = {
    minSelected?: true
    maxSelected?: true
  }

  export type ModifierGroupSumAggregateInputType = {
    minSelected?: true
    maxSelected?: true
  }

  export type ModifierGroupMinAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    name?: true
    minSelected?: true
    maxSelected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModifierGroupMaxAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    name?: true
    minSelected?: true
    maxSelected?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModifierGroupCountAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    name?: true
    minSelected?: true
    maxSelected?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModifierGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierGroup to aggregate.
     */
    where?: ModifierGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierGroups to fetch.
     */
    orderBy?: ModifierGroupOrderByWithRelationInput | ModifierGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModifierGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModifierGroups
    **/
    _count?: true | ModifierGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModifierGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModifierGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModifierGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModifierGroupMaxAggregateInputType
  }

  export type GetModifierGroupAggregateType<T extends ModifierGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateModifierGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModifierGroup[P]>
      : GetScalarType<T[P], AggregateModifierGroup[P]>
  }




  export type ModifierGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierGroupWhereInput
    orderBy?: ModifierGroupOrderByWithAggregationInput | ModifierGroupOrderByWithAggregationInput[]
    by: ModifierGroupScalarFieldEnum[] | ModifierGroupScalarFieldEnum
    having?: ModifierGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModifierGroupCountAggregateInputType | true
    _avg?: ModifierGroupAvgAggregateInputType
    _sum?: ModifierGroupSumAggregateInputType
    _min?: ModifierGroupMinAggregateInputType
    _max?: ModifierGroupMaxAggregateInputType
  }

  export type ModifierGroupGroupByOutputType = {
    id: string
    enterpriseTenantId: string
    name: string
    minSelected: number
    maxSelected: number
    createdAt: Date
    updatedAt: Date
    _count: ModifierGroupCountAggregateOutputType | null
    _avg: ModifierGroupAvgAggregateOutputType | null
    _sum: ModifierGroupSumAggregateOutputType | null
    _min: ModifierGroupMinAggregateOutputType | null
    _max: ModifierGroupMaxAggregateOutputType | null
  }

  type GetModifierGroupGroupByPayload<T extends ModifierGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModifierGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModifierGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModifierGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ModifierGroupGroupByOutputType[P]>
        }
      >
    >


  export type ModifierGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    name?: boolean
    minSelected?: boolean
    maxSelected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    modifiers?: boolean | ModifierGroup$modifiersArgs<ExtArgs>
    _count?: boolean | ModifierGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modifierGroup"]>

  export type ModifierGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    name?: boolean
    minSelected?: boolean
    maxSelected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["modifierGroup"]>

  export type ModifierGroupSelectScalar = {
    id?: boolean
    enterpriseTenantId?: boolean
    name?: boolean
    minSelected?: boolean
    maxSelected?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModifierGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modifiers?: boolean | ModifierGroup$modifiersArgs<ExtArgs>
    _count?: boolean | ModifierGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModifierGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ModifierGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModifierGroup"
    objects: {
      modifiers: Prisma.$ModifierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enterpriseTenantId: string
      name: string
      minSelected: number
      maxSelected: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modifierGroup"]>
    composites: {}
  }

  type ModifierGroupGetPayload<S extends boolean | null | undefined | ModifierGroupDefaultArgs> = $Result.GetResult<Prisma.$ModifierGroupPayload, S>

  type ModifierGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModifierGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModifierGroupCountAggregateInputType | true
    }

  export interface ModifierGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModifierGroup'], meta: { name: 'ModifierGroup' } }
    /**
     * Find zero or one ModifierGroup that matches the filter.
     * @param {ModifierGroupFindUniqueArgs} args - Arguments to find a ModifierGroup
     * @example
     * // Get one ModifierGroup
     * const modifierGroup = await prisma.modifierGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModifierGroupFindUniqueArgs>(args: SelectSubset<T, ModifierGroupFindUniqueArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ModifierGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModifierGroupFindUniqueOrThrowArgs} args - Arguments to find a ModifierGroup
     * @example
     * // Get one ModifierGroup
     * const modifierGroup = await prisma.modifierGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModifierGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ModifierGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ModifierGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupFindFirstArgs} args - Arguments to find a ModifierGroup
     * @example
     * // Get one ModifierGroup
     * const modifierGroup = await prisma.modifierGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModifierGroupFindFirstArgs>(args?: SelectSubset<T, ModifierGroupFindFirstArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ModifierGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupFindFirstOrThrowArgs} args - Arguments to find a ModifierGroup
     * @example
     * // Get one ModifierGroup
     * const modifierGroup = await prisma.modifierGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModifierGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ModifierGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ModifierGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModifierGroups
     * const modifierGroups = await prisma.modifierGroup.findMany()
     * 
     * // Get first 10 ModifierGroups
     * const modifierGroups = await prisma.modifierGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modifierGroupWithIdOnly = await prisma.modifierGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModifierGroupFindManyArgs>(args?: SelectSubset<T, ModifierGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ModifierGroup.
     * @param {ModifierGroupCreateArgs} args - Arguments to create a ModifierGroup.
     * @example
     * // Create one ModifierGroup
     * const ModifierGroup = await prisma.modifierGroup.create({
     *   data: {
     *     // ... data to create a ModifierGroup
     *   }
     * })
     * 
     */
    create<T extends ModifierGroupCreateArgs>(args: SelectSubset<T, ModifierGroupCreateArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ModifierGroups.
     * @param {ModifierGroupCreateManyArgs} args - Arguments to create many ModifierGroups.
     * @example
     * // Create many ModifierGroups
     * const modifierGroup = await prisma.modifierGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModifierGroupCreateManyArgs>(args?: SelectSubset<T, ModifierGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModifierGroups and returns the data saved in the database.
     * @param {ModifierGroupCreateManyAndReturnArgs} args - Arguments to create many ModifierGroups.
     * @example
     * // Create many ModifierGroups
     * const modifierGroup = await prisma.modifierGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModifierGroups and only return the `id`
     * const modifierGroupWithIdOnly = await prisma.modifierGroup.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModifierGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, ModifierGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ModifierGroup.
     * @param {ModifierGroupDeleteArgs} args - Arguments to delete one ModifierGroup.
     * @example
     * // Delete one ModifierGroup
     * const ModifierGroup = await prisma.modifierGroup.delete({
     *   where: {
     *     // ... filter to delete one ModifierGroup
     *   }
     * })
     * 
     */
    delete<T extends ModifierGroupDeleteArgs>(args: SelectSubset<T, ModifierGroupDeleteArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ModifierGroup.
     * @param {ModifierGroupUpdateArgs} args - Arguments to update one ModifierGroup.
     * @example
     * // Update one ModifierGroup
     * const modifierGroup = await prisma.modifierGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModifierGroupUpdateArgs>(args: SelectSubset<T, ModifierGroupUpdateArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ModifierGroups.
     * @param {ModifierGroupDeleteManyArgs} args - Arguments to filter ModifierGroups to delete.
     * @example
     * // Delete a few ModifierGroups
     * const { count } = await prisma.modifierGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModifierGroupDeleteManyArgs>(args?: SelectSubset<T, ModifierGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModifierGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModifierGroups
     * const modifierGroup = await prisma.modifierGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModifierGroupUpdateManyArgs>(args: SelectSubset<T, ModifierGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModifierGroup.
     * @param {ModifierGroupUpsertArgs} args - Arguments to update or create a ModifierGroup.
     * @example
     * // Update or create a ModifierGroup
     * const modifierGroup = await prisma.modifierGroup.upsert({
     *   create: {
     *     // ... data to create a ModifierGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModifierGroup we want to update
     *   }
     * })
     */
    upsert<T extends ModifierGroupUpsertArgs>(args: SelectSubset<T, ModifierGroupUpsertArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ModifierGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupCountArgs} args - Arguments to filter ModifierGroups to count.
     * @example
     * // Count the number of ModifierGroups
     * const count = await prisma.modifierGroup.count({
     *   where: {
     *     // ... the filter for the ModifierGroups we want to count
     *   }
     * })
    **/
    count<T extends ModifierGroupCountArgs>(
      args?: Subset<T, ModifierGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModifierGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModifierGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModifierGroupAggregateArgs>(args: Subset<T, ModifierGroupAggregateArgs>): Prisma.PrismaPromise<GetModifierGroupAggregateType<T>>

    /**
     * Group by ModifierGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModifierGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModifierGroupGroupByArgs['orderBy'] }
        : { orderBy?: ModifierGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModifierGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifierGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModifierGroup model
   */
  readonly fields: ModifierGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModifierGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModifierGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modifiers<T extends ModifierGroup$modifiersArgs<ExtArgs> = {}>(args?: Subset<T, ModifierGroup$modifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModifierGroup model
   */ 
  interface ModifierGroupFieldRefs {
    readonly id: FieldRef<"ModifierGroup", 'String'>
    readonly enterpriseTenantId: FieldRef<"ModifierGroup", 'String'>
    readonly name: FieldRef<"ModifierGroup", 'String'>
    readonly minSelected: FieldRef<"ModifierGroup", 'Int'>
    readonly maxSelected: FieldRef<"ModifierGroup", 'Int'>
    readonly createdAt: FieldRef<"ModifierGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"ModifierGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModifierGroup findUnique
   */
  export type ModifierGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * Filter, which ModifierGroup to fetch.
     */
    where: ModifierGroupWhereUniqueInput
  }

  /**
   * ModifierGroup findUniqueOrThrow
   */
  export type ModifierGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * Filter, which ModifierGroup to fetch.
     */
    where: ModifierGroupWhereUniqueInput
  }

  /**
   * ModifierGroup findFirst
   */
  export type ModifierGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * Filter, which ModifierGroup to fetch.
     */
    where?: ModifierGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierGroups to fetch.
     */
    orderBy?: ModifierGroupOrderByWithRelationInput | ModifierGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierGroups.
     */
    cursor?: ModifierGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierGroups.
     */
    distinct?: ModifierGroupScalarFieldEnum | ModifierGroupScalarFieldEnum[]
  }

  /**
   * ModifierGroup findFirstOrThrow
   */
  export type ModifierGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * Filter, which ModifierGroup to fetch.
     */
    where?: ModifierGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierGroups to fetch.
     */
    orderBy?: ModifierGroupOrderByWithRelationInput | ModifierGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModifierGroups.
     */
    cursor?: ModifierGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModifierGroups.
     */
    distinct?: ModifierGroupScalarFieldEnum | ModifierGroupScalarFieldEnum[]
  }

  /**
   * ModifierGroup findMany
   */
  export type ModifierGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * Filter, which ModifierGroups to fetch.
     */
    where?: ModifierGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModifierGroups to fetch.
     */
    orderBy?: ModifierGroupOrderByWithRelationInput | ModifierGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModifierGroups.
     */
    cursor?: ModifierGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModifierGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModifierGroups.
     */
    skip?: number
    distinct?: ModifierGroupScalarFieldEnum | ModifierGroupScalarFieldEnum[]
  }

  /**
   * ModifierGroup create
   */
  export type ModifierGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ModifierGroup.
     */
    data: XOR<ModifierGroupCreateInput, ModifierGroupUncheckedCreateInput>
  }

  /**
   * ModifierGroup createMany
   */
  export type ModifierGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModifierGroups.
     */
    data: ModifierGroupCreateManyInput | ModifierGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModifierGroup createManyAndReturn
   */
  export type ModifierGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ModifierGroups.
     */
    data: ModifierGroupCreateManyInput | ModifierGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModifierGroup update
   */
  export type ModifierGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ModifierGroup.
     */
    data: XOR<ModifierGroupUpdateInput, ModifierGroupUncheckedUpdateInput>
    /**
     * Choose, which ModifierGroup to update.
     */
    where: ModifierGroupWhereUniqueInput
  }

  /**
   * ModifierGroup updateMany
   */
  export type ModifierGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModifierGroups.
     */
    data: XOR<ModifierGroupUpdateManyMutationInput, ModifierGroupUncheckedUpdateManyInput>
    /**
     * Filter which ModifierGroups to update
     */
    where?: ModifierGroupWhereInput
  }

  /**
   * ModifierGroup upsert
   */
  export type ModifierGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ModifierGroup to update in case it exists.
     */
    where: ModifierGroupWhereUniqueInput
    /**
     * In case the ModifierGroup found by the `where` argument doesn't exist, create a new ModifierGroup with this data.
     */
    create: XOR<ModifierGroupCreateInput, ModifierGroupUncheckedCreateInput>
    /**
     * In case the ModifierGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModifierGroupUpdateInput, ModifierGroupUncheckedUpdateInput>
  }

  /**
   * ModifierGroup delete
   */
  export type ModifierGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
    /**
     * Filter which ModifierGroup to delete.
     */
    where: ModifierGroupWhereUniqueInput
  }

  /**
   * ModifierGroup deleteMany
   */
  export type ModifierGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModifierGroups to delete
     */
    where?: ModifierGroupWhereInput
  }

  /**
   * ModifierGroup.modifiers
   */
  export type ModifierGroup$modifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    where?: ModifierWhereInput
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    cursor?: ModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModifierScalarFieldEnum | ModifierScalarFieldEnum[]
  }

  /**
   * ModifierGroup without action
   */
  export type ModifierGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModifierGroup
     */
    select?: ModifierGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierGroupInclude<ExtArgs> | null
  }


  /**
   * Model Modifier
   */

  export type AggregateModifier = {
    _count: ModifierCountAggregateOutputType | null
    _avg: ModifierAvgAggregateOutputType | null
    _sum: ModifierSumAggregateOutputType | null
    _min: ModifierMinAggregateOutputType | null
    _max: ModifierMaxAggregateOutputType | null
  }

  export type ModifierAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ModifierSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ModifierMinAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    groupId: string | null
    name: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModifierMaxAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    groupId: string | null
    name: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModifierCountAggregateOutputType = {
    id: number
    enterpriseTenantId: number
    groupId: number
    name: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModifierAvgAggregateInputType = {
    price?: true
  }

  export type ModifierSumAggregateInputType = {
    price?: true
  }

  export type ModifierMinAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    groupId?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModifierMaxAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    groupId?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModifierCountAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    groupId?: true
    name?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModifierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modifier to aggregate.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modifiers
    **/
    _count?: true | ModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModifierMaxAggregateInputType
  }

  export type GetModifierAggregateType<T extends ModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModifier[P]>
      : GetScalarType<T[P], AggregateModifier[P]>
  }




  export type ModifierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModifierWhereInput
    orderBy?: ModifierOrderByWithAggregationInput | ModifierOrderByWithAggregationInput[]
    by: ModifierScalarFieldEnum[] | ModifierScalarFieldEnum
    having?: ModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModifierCountAggregateInputType | true
    _avg?: ModifierAvgAggregateInputType
    _sum?: ModifierSumAggregateInputType
    _min?: ModifierMinAggregateInputType
    _max?: ModifierMaxAggregateInputType
  }

  export type ModifierGroupByOutputType = {
    id: string
    enterpriseTenantId: string
    groupId: string
    name: string
    price: Decimal
    createdAt: Date
    updatedAt: Date
    _count: ModifierCountAggregateOutputType | null
    _avg: ModifierAvgAggregateOutputType | null
    _sum: ModifierSumAggregateOutputType | null
    _min: ModifierMinAggregateOutputType | null
    _max: ModifierMaxAggregateOutputType | null
  }

  type GetModifierGroupByPayload<T extends ModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModifierGroupByOutputType[P]>
            : GetScalarType<T[P], ModifierGroupByOutputType[P]>
        }
      >
    >


  export type ModifierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    groupId?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | ModifierGroupDefaultArgs<ExtArgs>
    recipeIngredients?: boolean | Modifier$recipeIngredientsArgs<ExtArgs>
    itemModifiers?: boolean | Modifier$itemModifiersArgs<ExtArgs>
    _count?: boolean | ModifierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modifier"]>

  export type ModifierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    groupId?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | ModifierGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modifier"]>

  export type ModifierSelectScalar = {
    id?: boolean
    enterpriseTenantId?: boolean
    groupId?: boolean
    name?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModifierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ModifierGroupDefaultArgs<ExtArgs>
    recipeIngredients?: boolean | Modifier$recipeIngredientsArgs<ExtArgs>
    itemModifiers?: boolean | Modifier$itemModifiersArgs<ExtArgs>
    _count?: boolean | ModifierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModifierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | ModifierGroupDefaultArgs<ExtArgs>
  }

  export type $ModifierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Modifier"
    objects: {
      group: Prisma.$ModifierGroupPayload<ExtArgs>
      recipeIngredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
      itemModifiers: Prisma.$OrderItemModifierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enterpriseTenantId: string
      groupId: string
      name: string
      price: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modifier"]>
    composites: {}
  }

  type ModifierGetPayload<S extends boolean | null | undefined | ModifierDefaultArgs> = $Result.GetResult<Prisma.$ModifierPayload, S>

  type ModifierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModifierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModifierCountAggregateInputType | true
    }

  export interface ModifierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Modifier'], meta: { name: 'Modifier' } }
    /**
     * Find zero or one Modifier that matches the filter.
     * @param {ModifierFindUniqueArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModifierFindUniqueArgs>(args: SelectSubset<T, ModifierFindUniqueArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Modifier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModifierFindUniqueOrThrowArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModifierFindUniqueOrThrowArgs>(args: SelectSubset<T, ModifierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Modifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindFirstArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModifierFindFirstArgs>(args?: SelectSubset<T, ModifierFindFirstArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Modifier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindFirstOrThrowArgs} args - Arguments to find a Modifier
     * @example
     * // Get one Modifier
     * const modifier = await prisma.modifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModifierFindFirstOrThrowArgs>(args?: SelectSubset<T, ModifierFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Modifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modifiers
     * const modifiers = await prisma.modifier.findMany()
     * 
     * // Get first 10 Modifiers
     * const modifiers = await prisma.modifier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modifierWithIdOnly = await prisma.modifier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModifierFindManyArgs>(args?: SelectSubset<T, ModifierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Modifier.
     * @param {ModifierCreateArgs} args - Arguments to create a Modifier.
     * @example
     * // Create one Modifier
     * const Modifier = await prisma.modifier.create({
     *   data: {
     *     // ... data to create a Modifier
     *   }
     * })
     * 
     */
    create<T extends ModifierCreateArgs>(args: SelectSubset<T, ModifierCreateArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Modifiers.
     * @param {ModifierCreateManyArgs} args - Arguments to create many Modifiers.
     * @example
     * // Create many Modifiers
     * const modifier = await prisma.modifier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModifierCreateManyArgs>(args?: SelectSubset<T, ModifierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modifiers and returns the data saved in the database.
     * @param {ModifierCreateManyAndReturnArgs} args - Arguments to create many Modifiers.
     * @example
     * // Create many Modifiers
     * const modifier = await prisma.modifier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modifiers and only return the `id`
     * const modifierWithIdOnly = await prisma.modifier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModifierCreateManyAndReturnArgs>(args?: SelectSubset<T, ModifierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Modifier.
     * @param {ModifierDeleteArgs} args - Arguments to delete one Modifier.
     * @example
     * // Delete one Modifier
     * const Modifier = await prisma.modifier.delete({
     *   where: {
     *     // ... filter to delete one Modifier
     *   }
     * })
     * 
     */
    delete<T extends ModifierDeleteArgs>(args: SelectSubset<T, ModifierDeleteArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Modifier.
     * @param {ModifierUpdateArgs} args - Arguments to update one Modifier.
     * @example
     * // Update one Modifier
     * const modifier = await prisma.modifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModifierUpdateArgs>(args: SelectSubset<T, ModifierUpdateArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Modifiers.
     * @param {ModifierDeleteManyArgs} args - Arguments to filter Modifiers to delete.
     * @example
     * // Delete a few Modifiers
     * const { count } = await prisma.modifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModifierDeleteManyArgs>(args?: SelectSubset<T, ModifierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modifiers
     * const modifier = await prisma.modifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModifierUpdateManyArgs>(args: SelectSubset<T, ModifierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Modifier.
     * @param {ModifierUpsertArgs} args - Arguments to update or create a Modifier.
     * @example
     * // Update or create a Modifier
     * const modifier = await prisma.modifier.upsert({
     *   create: {
     *     // ... data to create a Modifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modifier we want to update
     *   }
     * })
     */
    upsert<T extends ModifierUpsertArgs>(args: SelectSubset<T, ModifierUpsertArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Modifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierCountArgs} args - Arguments to filter Modifiers to count.
     * @example
     * // Count the number of Modifiers
     * const count = await prisma.modifier.count({
     *   where: {
     *     // ... the filter for the Modifiers we want to count
     *   }
     * })
    **/
    count<T extends ModifierCountArgs>(
      args?: Subset<T, ModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModifierAggregateArgs>(args: Subset<T, ModifierAggregateArgs>): Prisma.PrismaPromise<GetModifierAggregateType<T>>

    /**
     * Group by Modifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModifierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModifierGroupByArgs['orderBy'] }
        : { orderBy?: ModifierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Modifier model
   */
  readonly fields: ModifierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Modifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModifierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends ModifierGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModifierGroupDefaultArgs<ExtArgs>>): Prisma__ModifierGroupClient<$Result.GetResult<Prisma.$ModifierGroupPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    recipeIngredients<T extends Modifier$recipeIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, Modifier$recipeIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany"> | Null>
    itemModifiers<T extends Modifier$itemModifiersArgs<ExtArgs> = {}>(args?: Subset<T, Modifier$itemModifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Modifier model
   */ 
  interface ModifierFieldRefs {
    readonly id: FieldRef<"Modifier", 'String'>
    readonly enterpriseTenantId: FieldRef<"Modifier", 'String'>
    readonly groupId: FieldRef<"Modifier", 'String'>
    readonly name: FieldRef<"Modifier", 'String'>
    readonly price: FieldRef<"Modifier", 'Decimal'>
    readonly createdAt: FieldRef<"Modifier", 'DateTime'>
    readonly updatedAt: FieldRef<"Modifier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Modifier findUnique
   */
  export type ModifierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifier to fetch.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier findUniqueOrThrow
   */
  export type ModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifier to fetch.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier findFirst
   */
  export type ModifierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifier to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modifiers.
     */
    distinct?: ModifierScalarFieldEnum | ModifierScalarFieldEnum[]
  }

  /**
   * Modifier findFirstOrThrow
   */
  export type ModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifier to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modifiers.
     */
    distinct?: ModifierScalarFieldEnum | ModifierScalarFieldEnum[]
  }

  /**
   * Modifier findMany
   */
  export type ModifierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter, which Modifiers to fetch.
     */
    where?: ModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modifiers to fetch.
     */
    orderBy?: ModifierOrderByWithRelationInput | ModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modifiers.
     */
    cursor?: ModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modifiers.
     */
    skip?: number
    distinct?: ModifierScalarFieldEnum | ModifierScalarFieldEnum[]
  }

  /**
   * Modifier create
   */
  export type ModifierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a Modifier.
     */
    data: XOR<ModifierCreateInput, ModifierUncheckedCreateInput>
  }

  /**
   * Modifier createMany
   */
  export type ModifierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modifiers.
     */
    data: ModifierCreateManyInput | ModifierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Modifier createManyAndReturn
   */
  export type ModifierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Modifiers.
     */
    data: ModifierCreateManyInput | ModifierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Modifier update
   */
  export type ModifierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a Modifier.
     */
    data: XOR<ModifierUpdateInput, ModifierUncheckedUpdateInput>
    /**
     * Choose, which Modifier to update.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier updateMany
   */
  export type ModifierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modifiers.
     */
    data: XOR<ModifierUpdateManyMutationInput, ModifierUncheckedUpdateManyInput>
    /**
     * Filter which Modifiers to update
     */
    where?: ModifierWhereInput
  }

  /**
   * Modifier upsert
   */
  export type ModifierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the Modifier to update in case it exists.
     */
    where: ModifierWhereUniqueInput
    /**
     * In case the Modifier found by the `where` argument doesn't exist, create a new Modifier with this data.
     */
    create: XOR<ModifierCreateInput, ModifierUncheckedCreateInput>
    /**
     * In case the Modifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModifierUpdateInput, ModifierUncheckedUpdateInput>
  }

  /**
   * Modifier delete
   */
  export type ModifierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    /**
     * Filter which Modifier to delete.
     */
    where: ModifierWhereUniqueInput
  }

  /**
   * Modifier deleteMany
   */
  export type ModifierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modifiers to delete
     */
    where?: ModifierWhereInput
  }

  /**
   * Modifier.recipeIngredients
   */
  export type Modifier$recipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * Modifier.itemModifiers
   */
  export type Modifier$itemModifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    where?: OrderItemModifierWhereInput
    orderBy?: OrderItemModifierOrderByWithRelationInput | OrderItemModifierOrderByWithRelationInput[]
    cursor?: OrderItemModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemModifierScalarFieldEnum | OrderItemModifierScalarFieldEnum[]
  }

  /**
   * Modifier without action
   */
  export type ModifierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
  }


  /**
   * Model InventoryStock
   */

  export type AggregateInventoryStock = {
    _count: InventoryStockCountAggregateOutputType | null
    _avg: InventoryStockAvgAggregateOutputType | null
    _sum: InventoryStockSumAggregateOutputType | null
    _min: InventoryStockMinAggregateOutputType | null
    _max: InventoryStockMaxAggregateOutputType | null
  }

  export type InventoryStockAvgAggregateOutputType = {
    quantity: number | null
    minThreshold: number | null
  }

  export type InventoryStockSumAggregateOutputType = {
    quantity: number | null
    minThreshold: number | null
  }

  export type InventoryStockMinAggregateOutputType = {
    id: string | null
    branchId: string | null
    enterpriseTenantId: string | null
    ingredientName: string | null
    quantity: number | null
    minThreshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryStockMaxAggregateOutputType = {
    id: string | null
    branchId: string | null
    enterpriseTenantId: string | null
    ingredientName: string | null
    quantity: number | null
    minThreshold: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryStockCountAggregateOutputType = {
    id: number
    branchId: number
    enterpriseTenantId: number
    ingredientName: number
    quantity: number
    minThreshold: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryStockAvgAggregateInputType = {
    quantity?: true
    minThreshold?: true
  }

  export type InventoryStockSumAggregateInputType = {
    quantity?: true
    minThreshold?: true
  }

  export type InventoryStockMinAggregateInputType = {
    id?: true
    branchId?: true
    enterpriseTenantId?: true
    ingredientName?: true
    quantity?: true
    minThreshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryStockMaxAggregateInputType = {
    id?: true
    branchId?: true
    enterpriseTenantId?: true
    ingredientName?: true
    quantity?: true
    minThreshold?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryStockCountAggregateInputType = {
    id?: true
    branchId?: true
    enterpriseTenantId?: true
    ingredientName?: true
    quantity?: true
    minThreshold?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryStock to aggregate.
     */
    where?: InventoryStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryStocks to fetch.
     */
    orderBy?: InventoryStockOrderByWithRelationInput | InventoryStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryStocks
    **/
    _count?: true | InventoryStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryStockMaxAggregateInputType
  }

  export type GetInventoryStockAggregateType<T extends InventoryStockAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryStock[P]>
      : GetScalarType<T[P], AggregateInventoryStock[P]>
  }




  export type InventoryStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryStockWhereInput
    orderBy?: InventoryStockOrderByWithAggregationInput | InventoryStockOrderByWithAggregationInput[]
    by: InventoryStockScalarFieldEnum[] | InventoryStockScalarFieldEnum
    having?: InventoryStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryStockCountAggregateInputType | true
    _avg?: InventoryStockAvgAggregateInputType
    _sum?: InventoryStockSumAggregateInputType
    _min?: InventoryStockMinAggregateInputType
    _max?: InventoryStockMaxAggregateInputType
  }

  export type InventoryStockGroupByOutputType = {
    id: string
    branchId: string
    enterpriseTenantId: string
    ingredientName: string
    quantity: number
    minThreshold: number
    createdAt: Date
    updatedAt: Date
    _count: InventoryStockCountAggregateOutputType | null
    _avg: InventoryStockAvgAggregateOutputType | null
    _sum: InventoryStockSumAggregateOutputType | null
    _min: InventoryStockMinAggregateOutputType | null
    _max: InventoryStockMaxAggregateOutputType | null
  }

  type GetInventoryStockGroupByPayload<T extends InventoryStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryStockGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryStockGroupByOutputType[P]>
        }
      >
    >


  export type InventoryStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    enterpriseTenantId?: boolean
    ingredientName?: boolean
    quantity?: boolean
    minThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recipeIngredients?: boolean | InventoryStock$recipeIngredientsArgs<ExtArgs>
    _count?: boolean | InventoryStockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryStock"]>

  export type InventoryStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    enterpriseTenantId?: boolean
    ingredientName?: boolean
    quantity?: boolean
    minThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inventoryStock"]>

  export type InventoryStockSelectScalar = {
    id?: boolean
    branchId?: boolean
    enterpriseTenantId?: boolean
    ingredientName?: boolean
    quantity?: boolean
    minThreshold?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipeIngredients?: boolean | InventoryStock$recipeIngredientsArgs<ExtArgs>
    _count?: boolean | InventoryStockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InventoryStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryStock"
    objects: {
      recipeIngredients: Prisma.$RecipeIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      branchId: string
      enterpriseTenantId: string
      ingredientName: string
      quantity: number
      minThreshold: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventoryStock"]>
    composites: {}
  }

  type InventoryStockGetPayload<S extends boolean | null | undefined | InventoryStockDefaultArgs> = $Result.GetResult<Prisma.$InventoryStockPayload, S>

  type InventoryStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryStockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryStockCountAggregateInputType | true
    }

  export interface InventoryStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryStock'], meta: { name: 'InventoryStock' } }
    /**
     * Find zero or one InventoryStock that matches the filter.
     * @param {InventoryStockFindUniqueArgs} args - Arguments to find a InventoryStock
     * @example
     * // Get one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryStockFindUniqueArgs>(args: SelectSubset<T, InventoryStockFindUniqueArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryStock that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryStockFindUniqueOrThrowArgs} args - Arguments to find a InventoryStock
     * @example
     * // Get one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryStockFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockFindFirstArgs} args - Arguments to find a InventoryStock
     * @example
     * // Get one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryStockFindFirstArgs>(args?: SelectSubset<T, InventoryStockFindFirstArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockFindFirstOrThrowArgs} args - Arguments to find a InventoryStock
     * @example
     * // Get one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryStockFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryStocks
     * const inventoryStocks = await prisma.inventoryStock.findMany()
     * 
     * // Get first 10 InventoryStocks
     * const inventoryStocks = await prisma.inventoryStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryStockWithIdOnly = await prisma.inventoryStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryStockFindManyArgs>(args?: SelectSubset<T, InventoryStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryStock.
     * @param {InventoryStockCreateArgs} args - Arguments to create a InventoryStock.
     * @example
     * // Create one InventoryStock
     * const InventoryStock = await prisma.inventoryStock.create({
     *   data: {
     *     // ... data to create a InventoryStock
     *   }
     * })
     * 
     */
    create<T extends InventoryStockCreateArgs>(args: SelectSubset<T, InventoryStockCreateArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryStocks.
     * @param {InventoryStockCreateManyArgs} args - Arguments to create many InventoryStocks.
     * @example
     * // Create many InventoryStocks
     * const inventoryStock = await prisma.inventoryStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryStockCreateManyArgs>(args?: SelectSubset<T, InventoryStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryStocks and returns the data saved in the database.
     * @param {InventoryStockCreateManyAndReturnArgs} args - Arguments to create many InventoryStocks.
     * @example
     * // Create many InventoryStocks
     * const inventoryStock = await prisma.inventoryStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryStocks and only return the `id`
     * const inventoryStockWithIdOnly = await prisma.inventoryStock.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryStockCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryStock.
     * @param {InventoryStockDeleteArgs} args - Arguments to delete one InventoryStock.
     * @example
     * // Delete one InventoryStock
     * const InventoryStock = await prisma.inventoryStock.delete({
     *   where: {
     *     // ... filter to delete one InventoryStock
     *   }
     * })
     * 
     */
    delete<T extends InventoryStockDeleteArgs>(args: SelectSubset<T, InventoryStockDeleteArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryStock.
     * @param {InventoryStockUpdateArgs} args - Arguments to update one InventoryStock.
     * @example
     * // Update one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryStockUpdateArgs>(args: SelectSubset<T, InventoryStockUpdateArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryStocks.
     * @param {InventoryStockDeleteManyArgs} args - Arguments to filter InventoryStocks to delete.
     * @example
     * // Delete a few InventoryStocks
     * const { count } = await prisma.inventoryStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryStockDeleteManyArgs>(args?: SelectSubset<T, InventoryStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryStocks
     * const inventoryStock = await prisma.inventoryStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryStockUpdateManyArgs>(args: SelectSubset<T, InventoryStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryStock.
     * @param {InventoryStockUpsertArgs} args - Arguments to update or create a InventoryStock.
     * @example
     * // Update or create a InventoryStock
     * const inventoryStock = await prisma.inventoryStock.upsert({
     *   create: {
     *     // ... data to create a InventoryStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryStock we want to update
     *   }
     * })
     */
    upsert<T extends InventoryStockUpsertArgs>(args: SelectSubset<T, InventoryStockUpsertArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockCountArgs} args - Arguments to filter InventoryStocks to count.
     * @example
     * // Count the number of InventoryStocks
     * const count = await prisma.inventoryStock.count({
     *   where: {
     *     // ... the filter for the InventoryStocks we want to count
     *   }
     * })
    **/
    count<T extends InventoryStockCountArgs>(
      args?: Subset<T, InventoryStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryStockAggregateArgs>(args: Subset<T, InventoryStockAggregateArgs>): Prisma.PrismaPromise<GetInventoryStockAggregateType<T>>

    /**
     * Group by InventoryStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryStockGroupByArgs['orderBy'] }
        : { orderBy?: InventoryStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryStock model
   */
  readonly fields: InventoryStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipeIngredients<T extends InventoryStock$recipeIngredientsArgs<ExtArgs> = {}>(args?: Subset<T, InventoryStock$recipeIngredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryStock model
   */ 
  interface InventoryStockFieldRefs {
    readonly id: FieldRef<"InventoryStock", 'String'>
    readonly branchId: FieldRef<"InventoryStock", 'String'>
    readonly enterpriseTenantId: FieldRef<"InventoryStock", 'String'>
    readonly ingredientName: FieldRef<"InventoryStock", 'String'>
    readonly quantity: FieldRef<"InventoryStock", 'Float'>
    readonly minThreshold: FieldRef<"InventoryStock", 'Float'>
    readonly createdAt: FieldRef<"InventoryStock", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryStock findUnique
   */
  export type InventoryStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStock to fetch.
     */
    where: InventoryStockWhereUniqueInput
  }

  /**
   * InventoryStock findUniqueOrThrow
   */
  export type InventoryStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStock to fetch.
     */
    where: InventoryStockWhereUniqueInput
  }

  /**
   * InventoryStock findFirst
   */
  export type InventoryStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStock to fetch.
     */
    where?: InventoryStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryStocks to fetch.
     */
    orderBy?: InventoryStockOrderByWithRelationInput | InventoryStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryStocks.
     */
    cursor?: InventoryStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryStocks.
     */
    distinct?: InventoryStockScalarFieldEnum | InventoryStockScalarFieldEnum[]
  }

  /**
   * InventoryStock findFirstOrThrow
   */
  export type InventoryStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStock to fetch.
     */
    where?: InventoryStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryStocks to fetch.
     */
    orderBy?: InventoryStockOrderByWithRelationInput | InventoryStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryStocks.
     */
    cursor?: InventoryStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryStocks.
     */
    distinct?: InventoryStockScalarFieldEnum | InventoryStockScalarFieldEnum[]
  }

  /**
   * InventoryStock findMany
   */
  export type InventoryStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStocks to fetch.
     */
    where?: InventoryStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryStocks to fetch.
     */
    orderBy?: InventoryStockOrderByWithRelationInput | InventoryStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryStocks.
     */
    cursor?: InventoryStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryStocks.
     */
    skip?: number
    distinct?: InventoryStockScalarFieldEnum | InventoryStockScalarFieldEnum[]
  }

  /**
   * InventoryStock create
   */
  export type InventoryStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryStock.
     */
    data: XOR<InventoryStockCreateInput, InventoryStockUncheckedCreateInput>
  }

  /**
   * InventoryStock createMany
   */
  export type InventoryStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryStocks.
     */
    data: InventoryStockCreateManyInput | InventoryStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryStock createManyAndReturn
   */
  export type InventoryStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryStocks.
     */
    data: InventoryStockCreateManyInput | InventoryStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryStock update
   */
  export type InventoryStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryStock.
     */
    data: XOR<InventoryStockUpdateInput, InventoryStockUncheckedUpdateInput>
    /**
     * Choose, which InventoryStock to update.
     */
    where: InventoryStockWhereUniqueInput
  }

  /**
   * InventoryStock updateMany
   */
  export type InventoryStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryStocks.
     */
    data: XOR<InventoryStockUpdateManyMutationInput, InventoryStockUncheckedUpdateManyInput>
    /**
     * Filter which InventoryStocks to update
     */
    where?: InventoryStockWhereInput
  }

  /**
   * InventoryStock upsert
   */
  export type InventoryStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryStock to update in case it exists.
     */
    where: InventoryStockWhereUniqueInput
    /**
     * In case the InventoryStock found by the `where` argument doesn't exist, create a new InventoryStock with this data.
     */
    create: XOR<InventoryStockCreateInput, InventoryStockUncheckedCreateInput>
    /**
     * In case the InventoryStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryStockUpdateInput, InventoryStockUncheckedUpdateInput>
  }

  /**
   * InventoryStock delete
   */
  export type InventoryStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter which InventoryStock to delete.
     */
    where: InventoryStockWhereUniqueInput
  }

  /**
   * InventoryStock deleteMany
   */
  export type InventoryStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryStocks to delete
     */
    where?: InventoryStockWhereInput
  }

  /**
   * InventoryStock.recipeIngredients
   */
  export type InventoryStock$recipeIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    cursor?: RecipeIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * InventoryStock without action
   */
  export type InventoryStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
  }


  /**
   * Model RecipeIngredient
   */

  export type AggregateRecipeIngredient = {
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  export type RecipeIngredientAvgAggregateOutputType = {
    amountRequired: number | null
  }

  export type RecipeIngredientSumAggregateOutputType = {
    amountRequired: number | null
  }

  export type RecipeIngredientMinAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    productVariantId: string | null
    modifierId: string | null
    inventoryStockId: string | null
    amountRequired: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeIngredientMaxAggregateOutputType = {
    id: string | null
    enterpriseTenantId: string | null
    productVariantId: string | null
    modifierId: string | null
    inventoryStockId: string | null
    amountRequired: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeIngredientCountAggregateOutputType = {
    id: number
    enterpriseTenantId: number
    productVariantId: number
    modifierId: number
    inventoryStockId: number
    amountRequired: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecipeIngredientAvgAggregateInputType = {
    amountRequired?: true
  }

  export type RecipeIngredientSumAggregateInputType = {
    amountRequired?: true
  }

  export type RecipeIngredientMinAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    productVariantId?: true
    modifierId?: true
    inventoryStockId?: true
    amountRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeIngredientMaxAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    productVariantId?: true
    modifierId?: true
    inventoryStockId?: true
    amountRequired?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeIngredientCountAggregateInputType = {
    id?: true
    enterpriseTenantId?: true
    productVariantId?: true
    modifierId?: true
    inventoryStockId?: true
    amountRequired?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecipeIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredient to aggregate.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeIngredients
    **/
    _count?: true | RecipeIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type GetRecipeIngredientAggregateType<T extends RecipeIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeIngredient[P]>
      : GetScalarType<T[P], AggregateRecipeIngredient[P]>
  }




  export type RecipeIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeIngredientWhereInput
    orderBy?: RecipeIngredientOrderByWithAggregationInput | RecipeIngredientOrderByWithAggregationInput[]
    by: RecipeIngredientScalarFieldEnum[] | RecipeIngredientScalarFieldEnum
    having?: RecipeIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeIngredientCountAggregateInputType | true
    _avg?: RecipeIngredientAvgAggregateInputType
    _sum?: RecipeIngredientSumAggregateInputType
    _min?: RecipeIngredientMinAggregateInputType
    _max?: RecipeIngredientMaxAggregateInputType
  }

  export type RecipeIngredientGroupByOutputType = {
    id: string
    enterpriseTenantId: string
    productVariantId: string | null
    modifierId: string | null
    inventoryStockId: string
    amountRequired: number
    createdAt: Date
    updatedAt: Date
    _count: RecipeIngredientCountAggregateOutputType | null
    _avg: RecipeIngredientAvgAggregateOutputType | null
    _sum: RecipeIngredientSumAggregateOutputType | null
    _min: RecipeIngredientMinAggregateOutputType | null
    _max: RecipeIngredientMaxAggregateOutputType | null
  }

  type GetRecipeIngredientGroupByPayload<T extends RecipeIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeIngredientGroupByOutputType[P]>
        }
      >
    >


  export type RecipeIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    productVariantId?: boolean
    modifierId?: boolean
    inventoryStockId?: boolean
    amountRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariant?: boolean | RecipeIngredient$productVariantArgs<ExtArgs>
    modifier?: boolean | RecipeIngredient$modifierArgs<ExtArgs>
    inventoryStock?: boolean | InventoryStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enterpriseTenantId?: boolean
    productVariantId?: boolean
    modifierId?: boolean
    inventoryStockId?: boolean
    amountRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productVariant?: boolean | RecipeIngredient$productVariantArgs<ExtArgs>
    modifier?: boolean | RecipeIngredient$modifierArgs<ExtArgs>
    inventoryStock?: boolean | InventoryStockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipeIngredient"]>

  export type RecipeIngredientSelectScalar = {
    id?: boolean
    enterpriseTenantId?: boolean
    productVariantId?: boolean
    modifierId?: boolean
    inventoryStockId?: boolean
    amountRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecipeIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | RecipeIngredient$productVariantArgs<ExtArgs>
    modifier?: boolean | RecipeIngredient$modifierArgs<ExtArgs>
    inventoryStock?: boolean | InventoryStockDefaultArgs<ExtArgs>
  }
  export type RecipeIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productVariant?: boolean | RecipeIngredient$productVariantArgs<ExtArgs>
    modifier?: boolean | RecipeIngredient$modifierArgs<ExtArgs>
    inventoryStock?: boolean | InventoryStockDefaultArgs<ExtArgs>
  }

  export type $RecipeIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecipeIngredient"
    objects: {
      productVariant: Prisma.$ProductVariantPayload<ExtArgs> | null
      modifier: Prisma.$ModifierPayload<ExtArgs> | null
      inventoryStock: Prisma.$InventoryStockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      enterpriseTenantId: string
      productVariantId: string | null
      modifierId: string | null
      inventoryStockId: string
      amountRequired: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recipeIngredient"]>
    composites: {}
  }

  type RecipeIngredientGetPayload<S extends boolean | null | undefined | RecipeIngredientDefaultArgs> = $Result.GetResult<Prisma.$RecipeIngredientPayload, S>

  type RecipeIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecipeIngredientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecipeIngredientCountAggregateInputType | true
    }

  export interface RecipeIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeIngredient'], meta: { name: 'RecipeIngredient' } }
    /**
     * Find zero or one RecipeIngredient that matches the filter.
     * @param {RecipeIngredientFindUniqueArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeIngredientFindUniqueArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RecipeIngredient that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecipeIngredientFindUniqueOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RecipeIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeIngredientFindFirstArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RecipeIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindFirstOrThrowArgs} args - Arguments to find a RecipeIngredient
     * @example
     * // Get one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RecipeIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany()
     * 
     * // Get first 10 RecipeIngredients
     * const recipeIngredients = await prisma.recipeIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeIngredientFindManyArgs>(args?: SelectSubset<T, RecipeIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RecipeIngredient.
     * @param {RecipeIngredientCreateArgs} args - Arguments to create a RecipeIngredient.
     * @example
     * // Create one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.create({
     *   data: {
     *     // ... data to create a RecipeIngredient
     *   }
     * })
     * 
     */
    create<T extends RecipeIngredientCreateArgs>(args: SelectSubset<T, RecipeIngredientCreateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RecipeIngredients.
     * @param {RecipeIngredientCreateManyArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeIngredientCreateManyArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecipeIngredients and returns the data saved in the database.
     * @param {RecipeIngredientCreateManyAndReturnArgs} args - Arguments to create many RecipeIngredients.
     * @example
     * // Create many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecipeIngredients and only return the `id`
     * const recipeIngredientWithIdOnly = await prisma.recipeIngredient.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RecipeIngredient.
     * @param {RecipeIngredientDeleteArgs} args - Arguments to delete one RecipeIngredient.
     * @example
     * // Delete one RecipeIngredient
     * const RecipeIngredient = await prisma.recipeIngredient.delete({
     *   where: {
     *     // ... filter to delete one RecipeIngredient
     *   }
     * })
     * 
     */
    delete<T extends RecipeIngredientDeleteArgs>(args: SelectSubset<T, RecipeIngredientDeleteArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RecipeIngredient.
     * @param {RecipeIngredientUpdateArgs} args - Arguments to update one RecipeIngredient.
     * @example
     * // Update one RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeIngredientUpdateArgs>(args: SelectSubset<T, RecipeIngredientUpdateArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RecipeIngredients.
     * @param {RecipeIngredientDeleteManyArgs} args - Arguments to filter RecipeIngredients to delete.
     * @example
     * // Delete a few RecipeIngredients
     * const { count } = await prisma.recipeIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeIngredientDeleteManyArgs>(args?: SelectSubset<T, RecipeIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeIngredients
     * const recipeIngredient = await prisma.recipeIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeIngredientUpdateManyArgs>(args: SelectSubset<T, RecipeIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RecipeIngredient.
     * @param {RecipeIngredientUpsertArgs} args - Arguments to update or create a RecipeIngredient.
     * @example
     * // Update or create a RecipeIngredient
     * const recipeIngredient = await prisma.recipeIngredient.upsert({
     *   create: {
     *     // ... data to create a RecipeIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeIngredient we want to update
     *   }
     * })
     */
    upsert<T extends RecipeIngredientUpsertArgs>(args: SelectSubset<T, RecipeIngredientUpsertArgs<ExtArgs>>): Prisma__RecipeIngredientClient<$Result.GetResult<Prisma.$RecipeIngredientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RecipeIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientCountArgs} args - Arguments to filter RecipeIngredients to count.
     * @example
     * // Count the number of RecipeIngredients
     * const count = await prisma.recipeIngredient.count({
     *   where: {
     *     // ... the filter for the RecipeIngredients we want to count
     *   }
     * })
    **/
    count<T extends RecipeIngredientCountArgs>(
      args?: Subset<T, RecipeIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeIngredientAggregateArgs>(args: Subset<T, RecipeIngredientAggregateArgs>): Prisma.PrismaPromise<GetRecipeIngredientAggregateType<T>>

    /**
     * Group by RecipeIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeIngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeIngredientGroupByArgs['orderBy'] }
        : { orderBy?: RecipeIngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecipeIngredient model
   */
  readonly fields: RecipeIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productVariant<T extends RecipeIngredient$productVariantArgs<ExtArgs> = {}>(args?: Subset<T, RecipeIngredient$productVariantArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    modifier<T extends RecipeIngredient$modifierArgs<ExtArgs> = {}>(args?: Subset<T, RecipeIngredient$modifierArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    inventoryStock<T extends InventoryStockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryStockDefaultArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecipeIngredient model
   */ 
  interface RecipeIngredientFieldRefs {
    readonly id: FieldRef<"RecipeIngredient", 'String'>
    readonly enterpriseTenantId: FieldRef<"RecipeIngredient", 'String'>
    readonly productVariantId: FieldRef<"RecipeIngredient", 'String'>
    readonly modifierId: FieldRef<"RecipeIngredient", 'String'>
    readonly inventoryStockId: FieldRef<"RecipeIngredient", 'String'>
    readonly amountRequired: FieldRef<"RecipeIngredient", 'Float'>
    readonly createdAt: FieldRef<"RecipeIngredient", 'DateTime'>
    readonly updatedAt: FieldRef<"RecipeIngredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecipeIngredient findUnique
   */
  export type RecipeIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findUniqueOrThrow
   */
  export type RecipeIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient findFirst
   */
  export type RecipeIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findFirstOrThrow
   */
  export type RecipeIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredient to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeIngredients.
     */
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient findMany
   */
  export type RecipeIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter, which RecipeIngredients to fetch.
     */
    where?: RecipeIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeIngredients to fetch.
     */
    orderBy?: RecipeIngredientOrderByWithRelationInput | RecipeIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeIngredients.
     */
    cursor?: RecipeIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeIngredients.
     */
    skip?: number
    distinct?: RecipeIngredientScalarFieldEnum | RecipeIngredientScalarFieldEnum[]
  }

  /**
   * RecipeIngredient create
   */
  export type RecipeIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeIngredient.
     */
    data: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
  }

  /**
   * RecipeIngredient createMany
   */
  export type RecipeIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecipeIngredient createManyAndReturn
   */
  export type RecipeIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RecipeIngredients.
     */
    data: RecipeIngredientCreateManyInput | RecipeIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecipeIngredient update
   */
  export type RecipeIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeIngredient.
     */
    data: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
    /**
     * Choose, which RecipeIngredient to update.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient updateMany
   */
  export type RecipeIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeIngredients.
     */
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyInput>
    /**
     * Filter which RecipeIngredients to update
     */
    where?: RecipeIngredientWhereInput
  }

  /**
   * RecipeIngredient upsert
   */
  export type RecipeIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeIngredient to update in case it exists.
     */
    where: RecipeIngredientWhereUniqueInput
    /**
     * In case the RecipeIngredient found by the `where` argument doesn't exist, create a new RecipeIngredient with this data.
     */
    create: XOR<RecipeIngredientCreateInput, RecipeIngredientUncheckedCreateInput>
    /**
     * In case the RecipeIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeIngredientUpdateInput, RecipeIngredientUncheckedUpdateInput>
  }

  /**
   * RecipeIngredient delete
   */
  export type RecipeIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
    /**
     * Filter which RecipeIngredient to delete.
     */
    where: RecipeIngredientWhereUniqueInput
  }

  /**
   * RecipeIngredient deleteMany
   */
  export type RecipeIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeIngredients to delete
     */
    where?: RecipeIngredientWhereInput
  }

  /**
   * RecipeIngredient.productVariant
   */
  export type RecipeIngredient$productVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductVariant
     */
    select?: ProductVariantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductVariantInclude<ExtArgs> | null
    where?: ProductVariantWhereInput
  }

  /**
   * RecipeIngredient.modifier
   */
  export type RecipeIngredient$modifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Modifier
     */
    select?: ModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModifierInclude<ExtArgs> | null
    where?: ModifierWhereInput
  }

  /**
   * RecipeIngredient without action
   */
  export type RecipeIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeIngredient
     */
    select?: RecipeIngredientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIngredientInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    subtotal: Decimal | null
    tax: Decimal | null
    total: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    subtotal: Decimal | null
    tax: Decimal | null
    total: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    branchId: string | null
    terminalId: string | null
    enterpriseTenantId: string | null
    orderNumber: string | null
    status: string | null
    paymentStatus: string | null
    paymentMethod: string | null
    subtotal: Decimal | null
    tax: Decimal | null
    total: Decimal | null
    employeeId: string | null
    shiftId: string | null
    memberId: string | null
    tableNumber: string | null
    waiterInfo: string | null
    orderType: string | null
    customerName: string | null
    customerPhone: string | null
    deliveryAddress: string | null
    deliveryPlatform: string | null
    isPrinted: boolean | null
    synchronizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    branchId: string | null
    terminalId: string | null
    enterpriseTenantId: string | null
    orderNumber: string | null
    status: string | null
    paymentStatus: string | null
    paymentMethod: string | null
    subtotal: Decimal | null
    tax: Decimal | null
    total: Decimal | null
    employeeId: string | null
    shiftId: string | null
    memberId: string | null
    tableNumber: string | null
    waiterInfo: string | null
    orderType: string | null
    customerName: string | null
    customerPhone: string | null
    deliveryAddress: string | null
    deliveryPlatform: string | null
    isPrinted: boolean | null
    synchronizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    branchId: number
    terminalId: number
    enterpriseTenantId: number
    orderNumber: number
    status: number
    paymentStatus: number
    paymentMethod: number
    subtotal: number
    tax: number
    total: number
    employeeId: number
    shiftId: number
    memberId: number
    tableNumber: number
    waiterInfo: number
    orderType: number
    customerName: number
    customerPhone: number
    deliveryAddress: number
    deliveryPlatform: number
    isPrinted: number
    synchronizedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    subtotal?: true
    tax?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    subtotal?: true
    tax?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    branchId?: true
    terminalId?: true
    enterpriseTenantId?: true
    orderNumber?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    subtotal?: true
    tax?: true
    total?: true
    employeeId?: true
    shiftId?: true
    memberId?: true
    tableNumber?: true
    waiterInfo?: true
    orderType?: true
    customerName?: true
    customerPhone?: true
    deliveryAddress?: true
    deliveryPlatform?: true
    isPrinted?: true
    synchronizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    branchId?: true
    terminalId?: true
    enterpriseTenantId?: true
    orderNumber?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    subtotal?: true
    tax?: true
    total?: true
    employeeId?: true
    shiftId?: true
    memberId?: true
    tableNumber?: true
    waiterInfo?: true
    orderType?: true
    customerName?: true
    customerPhone?: true
    deliveryAddress?: true
    deliveryPlatform?: true
    isPrinted?: true
    synchronizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    branchId?: true
    terminalId?: true
    enterpriseTenantId?: true
    orderNumber?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    subtotal?: true
    tax?: true
    total?: true
    employeeId?: true
    shiftId?: true
    memberId?: true
    tableNumber?: true
    waiterInfo?: true
    orderType?: true
    customerName?: true
    customerPhone?: true
    deliveryAddress?: true
    deliveryPlatform?: true
    isPrinted?: true
    synchronizedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal
    tax: Decimal
    total: Decimal
    employeeId: string
    shiftId: string
    memberId: string | null
    tableNumber: string | null
    waiterInfo: string | null
    orderType: string | null
    customerName: string | null
    customerPhone: string | null
    deliveryAddress: string | null
    deliveryPlatform: string | null
    isPrinted: boolean
    synchronizedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    terminalId?: boolean
    enterpriseTenantId?: boolean
    orderNumber?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    subtotal?: boolean
    tax?: boolean
    total?: boolean
    employeeId?: boolean
    shiftId?: boolean
    memberId?: boolean
    tableNumber?: boolean
    waiterInfo?: boolean
    orderType?: boolean
    customerName?: boolean
    customerPhone?: boolean
    deliveryAddress?: boolean
    deliveryPlatform?: boolean
    isPrinted?: boolean
    synchronizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shift?: boolean | EmployeeShiftDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    terminalId?: boolean
    enterpriseTenantId?: boolean
    orderNumber?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    subtotal?: boolean
    tax?: boolean
    total?: boolean
    employeeId?: boolean
    shiftId?: boolean
    memberId?: boolean
    tableNumber?: boolean
    waiterInfo?: boolean
    orderType?: boolean
    customerName?: boolean
    customerPhone?: boolean
    deliveryAddress?: boolean
    deliveryPlatform?: boolean
    isPrinted?: boolean
    synchronizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shift?: boolean | EmployeeShiftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    branchId?: boolean
    terminalId?: boolean
    enterpriseTenantId?: boolean
    orderNumber?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    subtotal?: boolean
    tax?: boolean
    total?: boolean
    employeeId?: boolean
    shiftId?: boolean
    memberId?: boolean
    tableNumber?: boolean
    waiterInfo?: boolean
    orderType?: boolean
    customerName?: boolean
    customerPhone?: boolean
    deliveryAddress?: boolean
    deliveryPlatform?: boolean
    isPrinted?: boolean
    synchronizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | EmployeeShiftDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | EmployeeShiftDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      shift: Prisma.$EmployeeShiftPayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      branchId: string
      terminalId: string
      enterpriseTenantId: string
      orderNumber: string
      status: string
      paymentStatus: string
      paymentMethod: string
      subtotal: Prisma.Decimal
      tax: Prisma.Decimal
      total: Prisma.Decimal
      employeeId: string
      shiftId: string
      memberId: string | null
      tableNumber: string | null
      waiterInfo: string | null
      orderType: string | null
      customerName: string | null
      customerPhone: string | null
      deliveryAddress: string | null
      deliveryPlatform: string | null
      isPrinted: boolean
      synchronizedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shift<T extends EmployeeShiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeShiftDefaultArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly branchId: FieldRef<"Order", 'String'>
    readonly terminalId: FieldRef<"Order", 'String'>
    readonly enterpriseTenantId: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly paymentStatus: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly subtotal: FieldRef<"Order", 'Decimal'>
    readonly tax: FieldRef<"Order", 'Decimal'>
    readonly total: FieldRef<"Order", 'Decimal'>
    readonly employeeId: FieldRef<"Order", 'String'>
    readonly shiftId: FieldRef<"Order", 'String'>
    readonly memberId: FieldRef<"Order", 'String'>
    readonly tableNumber: FieldRef<"Order", 'String'>
    readonly waiterInfo: FieldRef<"Order", 'String'>
    readonly orderType: FieldRef<"Order", 'String'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly customerPhone: FieldRef<"Order", 'String'>
    readonly deliveryAddress: FieldRef<"Order", 'String'>
    readonly deliveryPlatform: FieldRef<"Order", 'String'>
    readonly isPrinted: FieldRef<"Order", 'Boolean'>
    readonly synchronizedAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productVariantId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productVariantId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productVariantId: number
    quantity: number
    unitPrice: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productVariantId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productVariantId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productVariantId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productVariantId: string
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    createdAt: Date
    updatedAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productVariantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    modifiers?: boolean | OrderItem$modifiersArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productVariantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productVariantId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
    modifiers?: boolean | OrderItem$modifiersArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    productVariant?: boolean | ProductVariantDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      productVariant: Prisma.$ProductVariantPayload<ExtArgs>
      modifiers: Prisma.$OrderItemModifierPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productVariantId: string
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    productVariant<T extends ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductVariantDefaultArgs<ExtArgs>>): Prisma__ProductVariantClient<$Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    modifiers<T extends OrderItem$modifiersArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$modifiersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productVariantId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly totalPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem.modifiers
   */
  export type OrderItem$modifiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    where?: OrderItemModifierWhereInput
    orderBy?: OrderItemModifierOrderByWithRelationInput | OrderItemModifierOrderByWithRelationInput[]
    cursor?: OrderItemModifierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemModifierScalarFieldEnum | OrderItemModifierScalarFieldEnum[]
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model OrderItemModifier
   */

  export type AggregateOrderItemModifier = {
    _count: OrderItemModifierCountAggregateOutputType | null
    _avg: OrderItemModifierAvgAggregateOutputType | null
    _sum: OrderItemModifierSumAggregateOutputType | null
    _min: OrderItemModifierMinAggregateOutputType | null
    _max: OrderItemModifierMaxAggregateOutputType | null
  }

  export type OrderItemModifierAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type OrderItemModifierSumAggregateOutputType = {
    price: Decimal | null
  }

  export type OrderItemModifierMinAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    modifierId: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemModifierMaxAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    modifierId: string | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemModifierCountAggregateOutputType = {
    id: number
    orderItemId: number
    modifierId: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemModifierAvgAggregateInputType = {
    price?: true
  }

  export type OrderItemModifierSumAggregateInputType = {
    price?: true
  }

  export type OrderItemModifierMinAggregateInputType = {
    id?: true
    orderItemId?: true
    modifierId?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemModifierMaxAggregateInputType = {
    id?: true
    orderItemId?: true
    modifierId?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemModifierCountAggregateInputType = {
    id?: true
    orderItemId?: true
    modifierId?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemModifierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemModifier to aggregate.
     */
    where?: OrderItemModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemModifiers to fetch.
     */
    orderBy?: OrderItemModifierOrderByWithRelationInput | OrderItemModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItemModifiers
    **/
    _count?: true | OrderItemModifierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemModifierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemModifierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemModifierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemModifierMaxAggregateInputType
  }

  export type GetOrderItemModifierAggregateType<T extends OrderItemModifierAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItemModifier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItemModifier[P]>
      : GetScalarType<T[P], AggregateOrderItemModifier[P]>
  }




  export type OrderItemModifierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemModifierWhereInput
    orderBy?: OrderItemModifierOrderByWithAggregationInput | OrderItemModifierOrderByWithAggregationInput[]
    by: OrderItemModifierScalarFieldEnum[] | OrderItemModifierScalarFieldEnum
    having?: OrderItemModifierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemModifierCountAggregateInputType | true
    _avg?: OrderItemModifierAvgAggregateInputType
    _sum?: OrderItemModifierSumAggregateInputType
    _min?: OrderItemModifierMinAggregateInputType
    _max?: OrderItemModifierMaxAggregateInputType
  }

  export type OrderItemModifierGroupByOutputType = {
    id: string
    orderItemId: string
    modifierId: string
    price: Decimal
    createdAt: Date
    updatedAt: Date
    _count: OrderItemModifierCountAggregateOutputType | null
    _avg: OrderItemModifierAvgAggregateOutputType | null
    _sum: OrderItemModifierSumAggregateOutputType | null
    _min: OrderItemModifierMinAggregateOutputType | null
    _max: OrderItemModifierMaxAggregateOutputType | null
  }

  type GetOrderItemModifierGroupByPayload<T extends OrderItemModifierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemModifierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemModifierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemModifierGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemModifierGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemModifierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    modifierId?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemModifier"]>

  export type OrderItemModifierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    modifierId?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemModifier"]>

  export type OrderItemModifierSelectScalar = {
    id?: boolean
    orderItemId?: boolean
    modifierId?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemModifierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }
  export type OrderItemModifierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
    modifier?: boolean | ModifierDefaultArgs<ExtArgs>
  }

  export type $OrderItemModifierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItemModifier"
    objects: {
      orderItem: Prisma.$OrderItemPayload<ExtArgs>
      modifier: Prisma.$ModifierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderItemId: string
      modifierId: string
      price: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItemModifier"]>
    composites: {}
  }

  type OrderItemModifierGetPayload<S extends boolean | null | undefined | OrderItemModifierDefaultArgs> = $Result.GetResult<Prisma.$OrderItemModifierPayload, S>

  type OrderItemModifierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemModifierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemModifierCountAggregateInputType | true
    }

  export interface OrderItemModifierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItemModifier'], meta: { name: 'OrderItemModifier' } }
    /**
     * Find zero or one OrderItemModifier that matches the filter.
     * @param {OrderItemModifierFindUniqueArgs} args - Arguments to find a OrderItemModifier
     * @example
     * // Get one OrderItemModifier
     * const orderItemModifier = await prisma.orderItemModifier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemModifierFindUniqueArgs>(args: SelectSubset<T, OrderItemModifierFindUniqueArgs<ExtArgs>>): Prisma__OrderItemModifierClient<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItemModifier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemModifierFindUniqueOrThrowArgs} args - Arguments to find a OrderItemModifier
     * @example
     * // Get one OrderItemModifier
     * const orderItemModifier = await prisma.orderItemModifier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemModifierFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemModifierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemModifierClient<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItemModifier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemModifierFindFirstArgs} args - Arguments to find a OrderItemModifier
     * @example
     * // Get one OrderItemModifier
     * const orderItemModifier = await prisma.orderItemModifier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemModifierFindFirstArgs>(args?: SelectSubset<T, OrderItemModifierFindFirstArgs<ExtArgs>>): Prisma__OrderItemModifierClient<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItemModifier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemModifierFindFirstOrThrowArgs} args - Arguments to find a OrderItemModifier
     * @example
     * // Get one OrderItemModifier
     * const orderItemModifier = await prisma.orderItemModifier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemModifierFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemModifierFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemModifierClient<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItemModifiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemModifierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItemModifiers
     * const orderItemModifiers = await prisma.orderItemModifier.findMany()
     * 
     * // Get first 10 OrderItemModifiers
     * const orderItemModifiers = await prisma.orderItemModifier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemModifierWithIdOnly = await prisma.orderItemModifier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemModifierFindManyArgs>(args?: SelectSubset<T, OrderItemModifierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItemModifier.
     * @param {OrderItemModifierCreateArgs} args - Arguments to create a OrderItemModifier.
     * @example
     * // Create one OrderItemModifier
     * const OrderItemModifier = await prisma.orderItemModifier.create({
     *   data: {
     *     // ... data to create a OrderItemModifier
     *   }
     * })
     * 
     */
    create<T extends OrderItemModifierCreateArgs>(args: SelectSubset<T, OrderItemModifierCreateArgs<ExtArgs>>): Prisma__OrderItemModifierClient<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItemModifiers.
     * @param {OrderItemModifierCreateManyArgs} args - Arguments to create many OrderItemModifiers.
     * @example
     * // Create many OrderItemModifiers
     * const orderItemModifier = await prisma.orderItemModifier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemModifierCreateManyArgs>(args?: SelectSubset<T, OrderItemModifierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItemModifiers and returns the data saved in the database.
     * @param {OrderItemModifierCreateManyAndReturnArgs} args - Arguments to create many OrderItemModifiers.
     * @example
     * // Create many OrderItemModifiers
     * const orderItemModifier = await prisma.orderItemModifier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItemModifiers and only return the `id`
     * const orderItemModifierWithIdOnly = await prisma.orderItemModifier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemModifierCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemModifierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderItemModifier.
     * @param {OrderItemModifierDeleteArgs} args - Arguments to delete one OrderItemModifier.
     * @example
     * // Delete one OrderItemModifier
     * const OrderItemModifier = await prisma.orderItemModifier.delete({
     *   where: {
     *     // ... filter to delete one OrderItemModifier
     *   }
     * })
     * 
     */
    delete<T extends OrderItemModifierDeleteArgs>(args: SelectSubset<T, OrderItemModifierDeleteArgs<ExtArgs>>): Prisma__OrderItemModifierClient<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItemModifier.
     * @param {OrderItemModifierUpdateArgs} args - Arguments to update one OrderItemModifier.
     * @example
     * // Update one OrderItemModifier
     * const orderItemModifier = await prisma.orderItemModifier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemModifierUpdateArgs>(args: SelectSubset<T, OrderItemModifierUpdateArgs<ExtArgs>>): Prisma__OrderItemModifierClient<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItemModifiers.
     * @param {OrderItemModifierDeleteManyArgs} args - Arguments to filter OrderItemModifiers to delete.
     * @example
     * // Delete a few OrderItemModifiers
     * const { count } = await prisma.orderItemModifier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemModifierDeleteManyArgs>(args?: SelectSubset<T, OrderItemModifierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItemModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemModifierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItemModifiers
     * const orderItemModifier = await prisma.orderItemModifier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemModifierUpdateManyArgs>(args: SelectSubset<T, OrderItemModifierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItemModifier.
     * @param {OrderItemModifierUpsertArgs} args - Arguments to update or create a OrderItemModifier.
     * @example
     * // Update or create a OrderItemModifier
     * const orderItemModifier = await prisma.orderItemModifier.upsert({
     *   create: {
     *     // ... data to create a OrderItemModifier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItemModifier we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemModifierUpsertArgs>(args: SelectSubset<T, OrderItemModifierUpsertArgs<ExtArgs>>): Prisma__OrderItemModifierClient<$Result.GetResult<Prisma.$OrderItemModifierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItemModifiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemModifierCountArgs} args - Arguments to filter OrderItemModifiers to count.
     * @example
     * // Count the number of OrderItemModifiers
     * const count = await prisma.orderItemModifier.count({
     *   where: {
     *     // ... the filter for the OrderItemModifiers we want to count
     *   }
     * })
    **/
    count<T extends OrderItemModifierCountArgs>(
      args?: Subset<T, OrderItemModifierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemModifierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItemModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemModifierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemModifierAggregateArgs>(args: Subset<T, OrderItemModifierAggregateArgs>): Prisma.PrismaPromise<GetOrderItemModifierAggregateType<T>>

    /**
     * Group by OrderItemModifier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemModifierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemModifierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemModifierGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemModifierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemModifierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemModifierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItemModifier model
   */
  readonly fields: OrderItemModifierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItemModifier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemModifierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    modifier<T extends ModifierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModifierDefaultArgs<ExtArgs>>): Prisma__ModifierClient<$Result.GetResult<Prisma.$ModifierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItemModifier model
   */ 
  interface OrderItemModifierFieldRefs {
    readonly id: FieldRef<"OrderItemModifier", 'String'>
    readonly orderItemId: FieldRef<"OrderItemModifier", 'String'>
    readonly modifierId: FieldRef<"OrderItemModifier", 'String'>
    readonly price: FieldRef<"OrderItemModifier", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItemModifier", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItemModifier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItemModifier findUnique
   */
  export type OrderItemModifierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemModifier to fetch.
     */
    where: OrderItemModifierWhereUniqueInput
  }

  /**
   * OrderItemModifier findUniqueOrThrow
   */
  export type OrderItemModifierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemModifier to fetch.
     */
    where: OrderItemModifierWhereUniqueInput
  }

  /**
   * OrderItemModifier findFirst
   */
  export type OrderItemModifierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemModifier to fetch.
     */
    where?: OrderItemModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemModifiers to fetch.
     */
    orderBy?: OrderItemModifierOrderByWithRelationInput | OrderItemModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemModifiers.
     */
    cursor?: OrderItemModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemModifiers.
     */
    distinct?: OrderItemModifierScalarFieldEnum | OrderItemModifierScalarFieldEnum[]
  }

  /**
   * OrderItemModifier findFirstOrThrow
   */
  export type OrderItemModifierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemModifier to fetch.
     */
    where?: OrderItemModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemModifiers to fetch.
     */
    orderBy?: OrderItemModifierOrderByWithRelationInput | OrderItemModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemModifiers.
     */
    cursor?: OrderItemModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemModifiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemModifiers.
     */
    distinct?: OrderItemModifierScalarFieldEnum | OrderItemModifierScalarFieldEnum[]
  }

  /**
   * OrderItemModifier findMany
   */
  export type OrderItemModifierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemModifiers to fetch.
     */
    where?: OrderItemModifierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemModifiers to fetch.
     */
    orderBy?: OrderItemModifierOrderByWithRelationInput | OrderItemModifierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItemModifiers.
     */
    cursor?: OrderItemModifierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemModifiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemModifiers.
     */
    skip?: number
    distinct?: OrderItemModifierScalarFieldEnum | OrderItemModifierScalarFieldEnum[]
  }

  /**
   * OrderItemModifier create
   */
  export type OrderItemModifierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItemModifier.
     */
    data: XOR<OrderItemModifierCreateInput, OrderItemModifierUncheckedCreateInput>
  }

  /**
   * OrderItemModifier createMany
   */
  export type OrderItemModifierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItemModifiers.
     */
    data: OrderItemModifierCreateManyInput | OrderItemModifierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItemModifier createManyAndReturn
   */
  export type OrderItemModifierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderItemModifiers.
     */
    data: OrderItemModifierCreateManyInput | OrderItemModifierCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItemModifier update
   */
  export type OrderItemModifierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItemModifier.
     */
    data: XOR<OrderItemModifierUpdateInput, OrderItemModifierUncheckedUpdateInput>
    /**
     * Choose, which OrderItemModifier to update.
     */
    where: OrderItemModifierWhereUniqueInput
  }

  /**
   * OrderItemModifier updateMany
   */
  export type OrderItemModifierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItemModifiers.
     */
    data: XOR<OrderItemModifierUpdateManyMutationInput, OrderItemModifierUncheckedUpdateManyInput>
    /**
     * Filter which OrderItemModifiers to update
     */
    where?: OrderItemModifierWhereInput
  }

  /**
   * OrderItemModifier upsert
   */
  export type OrderItemModifierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItemModifier to update in case it exists.
     */
    where: OrderItemModifierWhereUniqueInput
    /**
     * In case the OrderItemModifier found by the `where` argument doesn't exist, create a new OrderItemModifier with this data.
     */
    create: XOR<OrderItemModifierCreateInput, OrderItemModifierUncheckedCreateInput>
    /**
     * In case the OrderItemModifier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemModifierUpdateInput, OrderItemModifierUncheckedUpdateInput>
  }

  /**
   * OrderItemModifier delete
   */
  export type OrderItemModifierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
    /**
     * Filter which OrderItemModifier to delete.
     */
    where: OrderItemModifierWhereUniqueInput
  }

  /**
   * OrderItemModifier deleteMany
   */
  export type OrderItemModifierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemModifiers to delete
     */
    where?: OrderItemModifierWhereInput
  }

  /**
   * OrderItemModifier without action
   */
  export type OrderItemModifierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemModifier
     */
    select?: OrderItemModifierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemModifierInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeShift
   */

  export type AggregateEmployeeShift = {
    _count: EmployeeShiftCountAggregateOutputType | null
    _avg: EmployeeShiftAvgAggregateOutputType | null
    _sum: EmployeeShiftSumAggregateOutputType | null
    _min: EmployeeShiftMinAggregateOutputType | null
    _max: EmployeeShiftMaxAggregateOutputType | null
  }

  export type EmployeeShiftAvgAggregateOutputType = {
    openingBalance: Decimal | null
    closingBalance: Decimal | null
    actualCash: Decimal | null
    expectedCash: Decimal | null
    cardSales: Decimal | null
    cashSales: Decimal | null
  }

  export type EmployeeShiftSumAggregateOutputType = {
    openingBalance: Decimal | null
    closingBalance: Decimal | null
    actualCash: Decimal | null
    expectedCash: Decimal | null
    cardSales: Decimal | null
    cashSales: Decimal | null
  }

  export type EmployeeShiftMinAggregateOutputType = {
    id: string | null
    branchId: string | null
    terminalId: string | null
    enterpriseTenantId: string | null
    employeePin: string | null
    employeeName: string | null
    openedAt: Date | null
    closedAt: Date | null
    openingBalance: Decimal | null
    closingBalance: Decimal | null
    actualCash: Decimal | null
    expectedCash: Decimal | null
    cardSales: Decimal | null
    cashSales: Decimal | null
    synchronizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeShiftMaxAggregateOutputType = {
    id: string | null
    branchId: string | null
    terminalId: string | null
    enterpriseTenantId: string | null
    employeePin: string | null
    employeeName: string | null
    openedAt: Date | null
    closedAt: Date | null
    openingBalance: Decimal | null
    closingBalance: Decimal | null
    actualCash: Decimal | null
    expectedCash: Decimal | null
    cardSales: Decimal | null
    cashSales: Decimal | null
    synchronizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeShiftCountAggregateOutputType = {
    id: number
    branchId: number
    terminalId: number
    enterpriseTenantId: number
    employeePin: number
    employeeName: number
    openedAt: number
    closedAt: number
    openingBalance: number
    closingBalance: number
    actualCash: number
    expectedCash: number
    cardSales: number
    cashSales: number
    synchronizedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeShiftAvgAggregateInputType = {
    openingBalance?: true
    closingBalance?: true
    actualCash?: true
    expectedCash?: true
    cardSales?: true
    cashSales?: true
  }

  export type EmployeeShiftSumAggregateInputType = {
    openingBalance?: true
    closingBalance?: true
    actualCash?: true
    expectedCash?: true
    cardSales?: true
    cashSales?: true
  }

  export type EmployeeShiftMinAggregateInputType = {
    id?: true
    branchId?: true
    terminalId?: true
    enterpriseTenantId?: true
    employeePin?: true
    employeeName?: true
    openedAt?: true
    closedAt?: true
    openingBalance?: true
    closingBalance?: true
    actualCash?: true
    expectedCash?: true
    cardSales?: true
    cashSales?: true
    synchronizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeShiftMaxAggregateInputType = {
    id?: true
    branchId?: true
    terminalId?: true
    enterpriseTenantId?: true
    employeePin?: true
    employeeName?: true
    openedAt?: true
    closedAt?: true
    openingBalance?: true
    closingBalance?: true
    actualCash?: true
    expectedCash?: true
    cardSales?: true
    cashSales?: true
    synchronizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeShiftCountAggregateInputType = {
    id?: true
    branchId?: true
    terminalId?: true
    enterpriseTenantId?: true
    employeePin?: true
    employeeName?: true
    openedAt?: true
    closedAt?: true
    openingBalance?: true
    closingBalance?: true
    actualCash?: true
    expectedCash?: true
    cardSales?: true
    cashSales?: true
    synchronizedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeShift to aggregate.
     */
    where?: EmployeeShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeShifts to fetch.
     */
    orderBy?: EmployeeShiftOrderByWithRelationInput | EmployeeShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeShifts
    **/
    _count?: true | EmployeeShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeShiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeShiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeShiftMaxAggregateInputType
  }

  export type GetEmployeeShiftAggregateType<T extends EmployeeShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeShift[P]>
      : GetScalarType<T[P], AggregateEmployeeShift[P]>
  }




  export type EmployeeShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeShiftWhereInput
    orderBy?: EmployeeShiftOrderByWithAggregationInput | EmployeeShiftOrderByWithAggregationInput[]
    by: EmployeeShiftScalarFieldEnum[] | EmployeeShiftScalarFieldEnum
    having?: EmployeeShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeShiftCountAggregateInputType | true
    _avg?: EmployeeShiftAvgAggregateInputType
    _sum?: EmployeeShiftSumAggregateInputType
    _min?: EmployeeShiftMinAggregateInputType
    _max?: EmployeeShiftMaxAggregateInputType
  }

  export type EmployeeShiftGroupByOutputType = {
    id: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    employeePin: string
    employeeName: string
    openedAt: Date
    closedAt: Date | null
    openingBalance: Decimal
    closingBalance: Decimal | null
    actualCash: Decimal | null
    expectedCash: Decimal | null
    cardSales: Decimal
    cashSales: Decimal
    synchronizedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: EmployeeShiftCountAggregateOutputType | null
    _avg: EmployeeShiftAvgAggregateOutputType | null
    _sum: EmployeeShiftSumAggregateOutputType | null
    _min: EmployeeShiftMinAggregateOutputType | null
    _max: EmployeeShiftMaxAggregateOutputType | null
  }

  type GetEmployeeShiftGroupByPayload<T extends EmployeeShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeShiftGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeShiftGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    terminalId?: boolean
    enterpriseTenantId?: boolean
    employeePin?: boolean
    employeeName?: boolean
    openedAt?: boolean
    closedAt?: boolean
    openingBalance?: boolean
    closingBalance?: boolean
    actualCash?: boolean
    expectedCash?: boolean
    cardSales?: boolean
    cashSales?: boolean
    synchronizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | EmployeeShift$ordersArgs<ExtArgs>
    _count?: boolean | EmployeeShiftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeShift"]>

  export type EmployeeShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    terminalId?: boolean
    enterpriseTenantId?: boolean
    employeePin?: boolean
    employeeName?: boolean
    openedAt?: boolean
    closedAt?: boolean
    openingBalance?: boolean
    closingBalance?: boolean
    actualCash?: boolean
    expectedCash?: boolean
    cardSales?: boolean
    cashSales?: boolean
    synchronizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employeeShift"]>

  export type EmployeeShiftSelectScalar = {
    id?: boolean
    branchId?: boolean
    terminalId?: boolean
    enterpriseTenantId?: boolean
    employeePin?: boolean
    employeeName?: boolean
    openedAt?: boolean
    closedAt?: boolean
    openingBalance?: boolean
    closingBalance?: boolean
    actualCash?: boolean
    expectedCash?: boolean
    cardSales?: boolean
    cashSales?: boolean
    synchronizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | EmployeeShift$ordersArgs<ExtArgs>
    _count?: boolean | EmployeeShiftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeeShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeShift"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      branchId: string
      terminalId: string
      enterpriseTenantId: string
      employeePin: string
      employeeName: string
      openedAt: Date
      closedAt: Date | null
      openingBalance: Prisma.Decimal
      closingBalance: Prisma.Decimal | null
      actualCash: Prisma.Decimal | null
      expectedCash: Prisma.Decimal | null
      cardSales: Prisma.Decimal
      cashSales: Prisma.Decimal
      synchronizedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeeShift"]>
    composites: {}
  }

  type EmployeeShiftGetPayload<S extends boolean | null | undefined | EmployeeShiftDefaultArgs> = $Result.GetResult<Prisma.$EmployeeShiftPayload, S>

  type EmployeeShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeeShiftFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeeShiftCountAggregateInputType | true
    }

  export interface EmployeeShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeShift'], meta: { name: 'EmployeeShift' } }
    /**
     * Find zero or one EmployeeShift that matches the filter.
     * @param {EmployeeShiftFindUniqueArgs} args - Arguments to find a EmployeeShift
     * @example
     * // Get one EmployeeShift
     * const employeeShift = await prisma.employeeShift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeShiftFindUniqueArgs>(args: SelectSubset<T, EmployeeShiftFindUniqueArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmployeeShift that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmployeeShiftFindUniqueOrThrowArgs} args - Arguments to find a EmployeeShift
     * @example
     * // Get one EmployeeShift
     * const employeeShift = await prisma.employeeShift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmployeeShift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftFindFirstArgs} args - Arguments to find a EmployeeShift
     * @example
     * // Get one EmployeeShift
     * const employeeShift = await prisma.employeeShift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeShiftFindFirstArgs>(args?: SelectSubset<T, EmployeeShiftFindFirstArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmployeeShift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftFindFirstOrThrowArgs} args - Arguments to find a EmployeeShift
     * @example
     * // Get one EmployeeShift
     * const employeeShift = await prisma.employeeShift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmployeeShifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeShifts
     * const employeeShifts = await prisma.employeeShift.findMany()
     * 
     * // Get first 10 EmployeeShifts
     * const employeeShifts = await prisma.employeeShift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeShiftWithIdOnly = await prisma.employeeShift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeShiftFindManyArgs>(args?: SelectSubset<T, EmployeeShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmployeeShift.
     * @param {EmployeeShiftCreateArgs} args - Arguments to create a EmployeeShift.
     * @example
     * // Create one EmployeeShift
     * const EmployeeShift = await prisma.employeeShift.create({
     *   data: {
     *     // ... data to create a EmployeeShift
     *   }
     * })
     * 
     */
    create<T extends EmployeeShiftCreateArgs>(args: SelectSubset<T, EmployeeShiftCreateArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmployeeShifts.
     * @param {EmployeeShiftCreateManyArgs} args - Arguments to create many EmployeeShifts.
     * @example
     * // Create many EmployeeShifts
     * const employeeShift = await prisma.employeeShift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeShiftCreateManyArgs>(args?: SelectSubset<T, EmployeeShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeShifts and returns the data saved in the database.
     * @param {EmployeeShiftCreateManyAndReturnArgs} args - Arguments to create many EmployeeShifts.
     * @example
     * // Create many EmployeeShifts
     * const employeeShift = await prisma.employeeShift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeShifts and only return the `id`
     * const employeeShiftWithIdOnly = await prisma.employeeShift.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmployeeShift.
     * @param {EmployeeShiftDeleteArgs} args - Arguments to delete one EmployeeShift.
     * @example
     * // Delete one EmployeeShift
     * const EmployeeShift = await prisma.employeeShift.delete({
     *   where: {
     *     // ... filter to delete one EmployeeShift
     *   }
     * })
     * 
     */
    delete<T extends EmployeeShiftDeleteArgs>(args: SelectSubset<T, EmployeeShiftDeleteArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmployeeShift.
     * @param {EmployeeShiftUpdateArgs} args - Arguments to update one EmployeeShift.
     * @example
     * // Update one EmployeeShift
     * const employeeShift = await prisma.employeeShift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeShiftUpdateArgs>(args: SelectSubset<T, EmployeeShiftUpdateArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmployeeShifts.
     * @param {EmployeeShiftDeleteManyArgs} args - Arguments to filter EmployeeShifts to delete.
     * @example
     * // Delete a few EmployeeShifts
     * const { count } = await prisma.employeeShift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeShiftDeleteManyArgs>(args?: SelectSubset<T, EmployeeShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeShifts
     * const employeeShift = await prisma.employeeShift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeShiftUpdateManyArgs>(args: SelectSubset<T, EmployeeShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmployeeShift.
     * @param {EmployeeShiftUpsertArgs} args - Arguments to update or create a EmployeeShift.
     * @example
     * // Update or create a EmployeeShift
     * const employeeShift = await prisma.employeeShift.upsert({
     *   create: {
     *     // ... data to create a EmployeeShift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeShift we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeShiftUpsertArgs>(args: SelectSubset<T, EmployeeShiftUpsertArgs<ExtArgs>>): Prisma__EmployeeShiftClient<$Result.GetResult<Prisma.$EmployeeShiftPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmployeeShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftCountArgs} args - Arguments to filter EmployeeShifts to count.
     * @example
     * // Count the number of EmployeeShifts
     * const count = await prisma.employeeShift.count({
     *   where: {
     *     // ... the filter for the EmployeeShifts we want to count
     *   }
     * })
    **/
    count<T extends EmployeeShiftCountArgs>(
      args?: Subset<T, EmployeeShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeShiftAggregateArgs>(args: Subset<T, EmployeeShiftAggregateArgs>): Prisma.PrismaPromise<GetEmployeeShiftAggregateType<T>>

    /**
     * Group by EmployeeShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeShiftGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeShiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeShift model
   */
  readonly fields: EmployeeShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeShift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends EmployeeShift$ordersArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeShift$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmployeeShift model
   */ 
  interface EmployeeShiftFieldRefs {
    readonly id: FieldRef<"EmployeeShift", 'String'>
    readonly branchId: FieldRef<"EmployeeShift", 'String'>
    readonly terminalId: FieldRef<"EmployeeShift", 'String'>
    readonly enterpriseTenantId: FieldRef<"EmployeeShift", 'String'>
    readonly employeePin: FieldRef<"EmployeeShift", 'String'>
    readonly employeeName: FieldRef<"EmployeeShift", 'String'>
    readonly openedAt: FieldRef<"EmployeeShift", 'DateTime'>
    readonly closedAt: FieldRef<"EmployeeShift", 'DateTime'>
    readonly openingBalance: FieldRef<"EmployeeShift", 'Decimal'>
    readonly closingBalance: FieldRef<"EmployeeShift", 'Decimal'>
    readonly actualCash: FieldRef<"EmployeeShift", 'Decimal'>
    readonly expectedCash: FieldRef<"EmployeeShift", 'Decimal'>
    readonly cardSales: FieldRef<"EmployeeShift", 'Decimal'>
    readonly cashSales: FieldRef<"EmployeeShift", 'Decimal'>
    readonly synchronizedAt: FieldRef<"EmployeeShift", 'DateTime'>
    readonly createdAt: FieldRef<"EmployeeShift", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeShift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeShift findUnique
   */
  export type EmployeeShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShift to fetch.
     */
    where: EmployeeShiftWhereUniqueInput
  }

  /**
   * EmployeeShift findUniqueOrThrow
   */
  export type EmployeeShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShift to fetch.
     */
    where: EmployeeShiftWhereUniqueInput
  }

  /**
   * EmployeeShift findFirst
   */
  export type EmployeeShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShift to fetch.
     */
    where?: EmployeeShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeShifts to fetch.
     */
    orderBy?: EmployeeShiftOrderByWithRelationInput | EmployeeShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeShifts.
     */
    cursor?: EmployeeShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeShifts.
     */
    distinct?: EmployeeShiftScalarFieldEnum | EmployeeShiftScalarFieldEnum[]
  }

  /**
   * EmployeeShift findFirstOrThrow
   */
  export type EmployeeShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShift to fetch.
     */
    where?: EmployeeShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeShifts to fetch.
     */
    orderBy?: EmployeeShiftOrderByWithRelationInput | EmployeeShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeShifts.
     */
    cursor?: EmployeeShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeShifts.
     */
    distinct?: EmployeeShiftScalarFieldEnum | EmployeeShiftScalarFieldEnum[]
  }

  /**
   * EmployeeShift findMany
   */
  export type EmployeeShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShifts to fetch.
     */
    where?: EmployeeShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeShifts to fetch.
     */
    orderBy?: EmployeeShiftOrderByWithRelationInput | EmployeeShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeShifts.
     */
    cursor?: EmployeeShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeShifts.
     */
    skip?: number
    distinct?: EmployeeShiftScalarFieldEnum | EmployeeShiftScalarFieldEnum[]
  }

  /**
   * EmployeeShift create
   */
  export type EmployeeShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeShift.
     */
    data: XOR<EmployeeShiftCreateInput, EmployeeShiftUncheckedCreateInput>
  }

  /**
   * EmployeeShift createMany
   */
  export type EmployeeShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeShifts.
     */
    data: EmployeeShiftCreateManyInput | EmployeeShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeShift createManyAndReturn
   */
  export type EmployeeShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmployeeShifts.
     */
    data: EmployeeShiftCreateManyInput | EmployeeShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeShift update
   */
  export type EmployeeShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeShift.
     */
    data: XOR<EmployeeShiftUpdateInput, EmployeeShiftUncheckedUpdateInput>
    /**
     * Choose, which EmployeeShift to update.
     */
    where: EmployeeShiftWhereUniqueInput
  }

  /**
   * EmployeeShift updateMany
   */
  export type EmployeeShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeShifts.
     */
    data: XOR<EmployeeShiftUpdateManyMutationInput, EmployeeShiftUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeShifts to update
     */
    where?: EmployeeShiftWhereInput
  }

  /**
   * EmployeeShift upsert
   */
  export type EmployeeShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeShift to update in case it exists.
     */
    where: EmployeeShiftWhereUniqueInput
    /**
     * In case the EmployeeShift found by the `where` argument doesn't exist, create a new EmployeeShift with this data.
     */
    create: XOR<EmployeeShiftCreateInput, EmployeeShiftUncheckedCreateInput>
    /**
     * In case the EmployeeShift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeShiftUpdateInput, EmployeeShiftUncheckedUpdateInput>
  }

  /**
   * EmployeeShift delete
   */
  export type EmployeeShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
    /**
     * Filter which EmployeeShift to delete.
     */
    where: EmployeeShiftWhereUniqueInput
  }

  /**
   * EmployeeShift deleteMany
   */
  export type EmployeeShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeShifts to delete
     */
    where?: EmployeeShiftWhereInput
  }

  /**
   * EmployeeShift.orders
   */
  export type EmployeeShift$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * EmployeeShift without action
   */
  export type EmployeeShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShift
     */
    select?: EmployeeShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    enterpriseTenantId: 'enterpriseTenantId',
    name: 'name',
    description: 'description',
    category: 'category',
    imageUrl: 'imageUrl',
    bgColor: 'bgColor',
    textColor: 'textColor',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductVariantScalarFieldEnum: {
    id: 'id',
    enterpriseTenantId: 'enterpriseTenantId',
    productId: 'productId',
    name: 'name',
    price: 'price',
    sku: 'sku',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductVariantScalarFieldEnum = (typeof ProductVariantScalarFieldEnum)[keyof typeof ProductVariantScalarFieldEnum]


  export const ModifierGroupScalarFieldEnum: {
    id: 'id',
    enterpriseTenantId: 'enterpriseTenantId',
    name: 'name',
    minSelected: 'minSelected',
    maxSelected: 'maxSelected',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModifierGroupScalarFieldEnum = (typeof ModifierGroupScalarFieldEnum)[keyof typeof ModifierGroupScalarFieldEnum]


  export const ModifierScalarFieldEnum: {
    id: 'id',
    enterpriseTenantId: 'enterpriseTenantId',
    groupId: 'groupId',
    name: 'name',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModifierScalarFieldEnum = (typeof ModifierScalarFieldEnum)[keyof typeof ModifierScalarFieldEnum]


  export const InventoryStockScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    enterpriseTenantId: 'enterpriseTenantId',
    ingredientName: 'ingredientName',
    quantity: 'quantity',
    minThreshold: 'minThreshold',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryStockScalarFieldEnum = (typeof InventoryStockScalarFieldEnum)[keyof typeof InventoryStockScalarFieldEnum]


  export const RecipeIngredientScalarFieldEnum: {
    id: 'id',
    enterpriseTenantId: 'enterpriseTenantId',
    productVariantId: 'productVariantId',
    modifierId: 'modifierId',
    inventoryStockId: 'inventoryStockId',
    amountRequired: 'amountRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecipeIngredientScalarFieldEnum = (typeof RecipeIngredientScalarFieldEnum)[keyof typeof RecipeIngredientScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    terminalId: 'terminalId',
    enterpriseTenantId: 'enterpriseTenantId',
    orderNumber: 'orderNumber',
    status: 'status',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    subtotal: 'subtotal',
    tax: 'tax',
    total: 'total',
    employeeId: 'employeeId',
    shiftId: 'shiftId',
    memberId: 'memberId',
    tableNumber: 'tableNumber',
    waiterInfo: 'waiterInfo',
    orderType: 'orderType',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    deliveryAddress: 'deliveryAddress',
    deliveryPlatform: 'deliveryPlatform',
    isPrinted: 'isPrinted',
    synchronizedAt: 'synchronizedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productVariantId: 'productVariantId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderItemModifierScalarFieldEnum: {
    id: 'id',
    orderItemId: 'orderItemId',
    modifierId: 'modifierId',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemModifierScalarFieldEnum = (typeof OrderItemModifierScalarFieldEnum)[keyof typeof OrderItemModifierScalarFieldEnum]


  export const EmployeeShiftScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    terminalId: 'terminalId',
    enterpriseTenantId: 'enterpriseTenantId',
    employeePin: 'employeePin',
    employeeName: 'employeeName',
    openedAt: 'openedAt',
    closedAt: 'closedAt',
    openingBalance: 'openingBalance',
    closingBalance: 'closingBalance',
    actualCash: 'actualCash',
    expectedCash: 'expectedCash',
    cardSales: 'cardSales',
    cashSales: 'cashSales',
    synchronizedAt: 'synchronizedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeShiftScalarFieldEnum = (typeof EmployeeShiftScalarFieldEnum)[keyof typeof EmployeeShiftScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    enterpriseTenantId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    imageUrl?: StringNullableFilter<"Product"> | string | null
    bgColor?: StringNullableFilter<"Product"> | string | null
    textColor?: StringNullableFilter<"Product"> | string | null
    status?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    variants?: ProductVariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bgColor?: SortOrderInput | SortOrder
    textColor?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    variants?: ProductVariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    enterpriseTenantId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    imageUrl?: StringNullableFilter<"Product"> | string | null
    bgColor?: StringNullableFilter<"Product"> | string | null
    textColor?: StringNullableFilter<"Product"> | string | null
    status?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    variants?: ProductVariantListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bgColor?: SortOrderInput | SortOrder
    textColor?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    enterpriseTenantId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringWithAggregatesFilter<"Product"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    bgColor?: StringNullableWithAggregatesFilter<"Product"> | string | null
    textColor?: StringNullableWithAggregatesFilter<"Product"> | string | null
    status?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductVariantWhereInput = {
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    enterpriseTenantId?: StringFilter<"ProductVariant"> | string
    productId?: StringFilter<"ProductVariant"> | string
    name?: StringFilter<"ProductVariant"> | string
    price?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    sku?: StringFilter<"ProductVariant"> | string
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    recipeIngredients?: RecipeIngredientListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductVariantOrderByWithRelationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    recipeIngredients?: RecipeIngredientOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductVariantWhereInput | ProductVariantWhereInput[]
    OR?: ProductVariantWhereInput[]
    NOT?: ProductVariantWhereInput | ProductVariantWhereInput[]
    enterpriseTenantId?: StringFilter<"ProductVariant"> | string
    productId?: StringFilter<"ProductVariant"> | string
    name?: StringFilter<"ProductVariant"> | string
    price?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    recipeIngredients?: RecipeIngredientListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id" | "sku">

  export type ProductVariantOrderByWithAggregationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductVariantCountOrderByAggregateInput
    _avg?: ProductVariantAvgOrderByAggregateInput
    _max?: ProductVariantMaxOrderByAggregateInput
    _min?: ProductVariantMinOrderByAggregateInput
    _sum?: ProductVariantSumOrderByAggregateInput
  }

  export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    OR?: ProductVariantScalarWhereWithAggregatesInput[]
    NOT?: ProductVariantScalarWhereWithAggregatesInput | ProductVariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductVariant"> | string
    enterpriseTenantId?: StringWithAggregatesFilter<"ProductVariant"> | string
    productId?: StringWithAggregatesFilter<"ProductVariant"> | string
    name?: StringWithAggregatesFilter<"ProductVariant"> | string
    price?: DecimalWithAggregatesFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    sku?: StringWithAggregatesFilter<"ProductVariant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string
  }

  export type ModifierGroupWhereInput = {
    AND?: ModifierGroupWhereInput | ModifierGroupWhereInput[]
    OR?: ModifierGroupWhereInput[]
    NOT?: ModifierGroupWhereInput | ModifierGroupWhereInput[]
    id?: StringFilter<"ModifierGroup"> | string
    enterpriseTenantId?: StringFilter<"ModifierGroup"> | string
    name?: StringFilter<"ModifierGroup"> | string
    minSelected?: IntFilter<"ModifierGroup"> | number
    maxSelected?: IntFilter<"ModifierGroup"> | number
    createdAt?: DateTimeFilter<"ModifierGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ModifierGroup"> | Date | string
    modifiers?: ModifierListRelationFilter
  }

  export type ModifierGroupOrderByWithRelationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    minSelected?: SortOrder
    maxSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    modifiers?: ModifierOrderByRelationAggregateInput
  }

  export type ModifierGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModifierGroupWhereInput | ModifierGroupWhereInput[]
    OR?: ModifierGroupWhereInput[]
    NOT?: ModifierGroupWhereInput | ModifierGroupWhereInput[]
    enterpriseTenantId?: StringFilter<"ModifierGroup"> | string
    name?: StringFilter<"ModifierGroup"> | string
    minSelected?: IntFilter<"ModifierGroup"> | number
    maxSelected?: IntFilter<"ModifierGroup"> | number
    createdAt?: DateTimeFilter<"ModifierGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ModifierGroup"> | Date | string
    modifiers?: ModifierListRelationFilter
  }, "id">

  export type ModifierGroupOrderByWithAggregationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    minSelected?: SortOrder
    maxSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModifierGroupCountOrderByAggregateInput
    _avg?: ModifierGroupAvgOrderByAggregateInput
    _max?: ModifierGroupMaxOrderByAggregateInput
    _min?: ModifierGroupMinOrderByAggregateInput
    _sum?: ModifierGroupSumOrderByAggregateInput
  }

  export type ModifierGroupScalarWhereWithAggregatesInput = {
    AND?: ModifierGroupScalarWhereWithAggregatesInput | ModifierGroupScalarWhereWithAggregatesInput[]
    OR?: ModifierGroupScalarWhereWithAggregatesInput[]
    NOT?: ModifierGroupScalarWhereWithAggregatesInput | ModifierGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModifierGroup"> | string
    enterpriseTenantId?: StringWithAggregatesFilter<"ModifierGroup"> | string
    name?: StringWithAggregatesFilter<"ModifierGroup"> | string
    minSelected?: IntWithAggregatesFilter<"ModifierGroup"> | number
    maxSelected?: IntWithAggregatesFilter<"ModifierGroup"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ModifierGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModifierGroup"> | Date | string
  }

  export type ModifierWhereInput = {
    AND?: ModifierWhereInput | ModifierWhereInput[]
    OR?: ModifierWhereInput[]
    NOT?: ModifierWhereInput | ModifierWhereInput[]
    id?: StringFilter<"Modifier"> | string
    enterpriseTenantId?: StringFilter<"Modifier"> | string
    groupId?: StringFilter<"Modifier"> | string
    name?: StringFilter<"Modifier"> | string
    price?: DecimalFilter<"Modifier"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Modifier"> | Date | string
    updatedAt?: DateTimeFilter<"Modifier"> | Date | string
    group?: XOR<ModifierGroupRelationFilter, ModifierGroupWhereInput>
    recipeIngredients?: RecipeIngredientListRelationFilter
    itemModifiers?: OrderItemModifierListRelationFilter
  }

  export type ModifierOrderByWithRelationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: ModifierGroupOrderByWithRelationInput
    recipeIngredients?: RecipeIngredientOrderByRelationAggregateInput
    itemModifiers?: OrderItemModifierOrderByRelationAggregateInput
  }

  export type ModifierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModifierWhereInput | ModifierWhereInput[]
    OR?: ModifierWhereInput[]
    NOT?: ModifierWhereInput | ModifierWhereInput[]
    enterpriseTenantId?: StringFilter<"Modifier"> | string
    groupId?: StringFilter<"Modifier"> | string
    name?: StringFilter<"Modifier"> | string
    price?: DecimalFilter<"Modifier"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Modifier"> | Date | string
    updatedAt?: DateTimeFilter<"Modifier"> | Date | string
    group?: XOR<ModifierGroupRelationFilter, ModifierGroupWhereInput>
    recipeIngredients?: RecipeIngredientListRelationFilter
    itemModifiers?: OrderItemModifierListRelationFilter
  }, "id">

  export type ModifierOrderByWithAggregationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModifierCountOrderByAggregateInput
    _avg?: ModifierAvgOrderByAggregateInput
    _max?: ModifierMaxOrderByAggregateInput
    _min?: ModifierMinOrderByAggregateInput
    _sum?: ModifierSumOrderByAggregateInput
  }

  export type ModifierScalarWhereWithAggregatesInput = {
    AND?: ModifierScalarWhereWithAggregatesInput | ModifierScalarWhereWithAggregatesInput[]
    OR?: ModifierScalarWhereWithAggregatesInput[]
    NOT?: ModifierScalarWhereWithAggregatesInput | ModifierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Modifier"> | string
    enterpriseTenantId?: StringWithAggregatesFilter<"Modifier"> | string
    groupId?: StringWithAggregatesFilter<"Modifier"> | string
    name?: StringWithAggregatesFilter<"Modifier"> | string
    price?: DecimalWithAggregatesFilter<"Modifier"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Modifier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Modifier"> | Date | string
  }

  export type InventoryStockWhereInput = {
    AND?: InventoryStockWhereInput | InventoryStockWhereInput[]
    OR?: InventoryStockWhereInput[]
    NOT?: InventoryStockWhereInput | InventoryStockWhereInput[]
    id?: StringFilter<"InventoryStock"> | string
    branchId?: StringFilter<"InventoryStock"> | string
    enterpriseTenantId?: StringFilter<"InventoryStock"> | string
    ingredientName?: StringFilter<"InventoryStock"> | string
    quantity?: FloatFilter<"InventoryStock"> | number
    minThreshold?: FloatFilter<"InventoryStock"> | number
    createdAt?: DateTimeFilter<"InventoryStock"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryStock"> | Date | string
    recipeIngredients?: RecipeIngredientListRelationFilter
  }

  export type InventoryStockOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrder
    enterpriseTenantId?: SortOrder
    ingredientName?: SortOrder
    quantity?: SortOrder
    minThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recipeIngredients?: RecipeIngredientOrderByRelationAggregateInput
  }

  export type InventoryStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    branchId_ingredientName?: InventoryStockBranchIdIngredientNameCompoundUniqueInput
    AND?: InventoryStockWhereInput | InventoryStockWhereInput[]
    OR?: InventoryStockWhereInput[]
    NOT?: InventoryStockWhereInput | InventoryStockWhereInput[]
    branchId?: StringFilter<"InventoryStock"> | string
    enterpriseTenantId?: StringFilter<"InventoryStock"> | string
    ingredientName?: StringFilter<"InventoryStock"> | string
    quantity?: FloatFilter<"InventoryStock"> | number
    minThreshold?: FloatFilter<"InventoryStock"> | number
    createdAt?: DateTimeFilter<"InventoryStock"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryStock"> | Date | string
    recipeIngredients?: RecipeIngredientListRelationFilter
  }, "id" | "branchId_ingredientName">

  export type InventoryStockOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrder
    enterpriseTenantId?: SortOrder
    ingredientName?: SortOrder
    quantity?: SortOrder
    minThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryStockCountOrderByAggregateInput
    _avg?: InventoryStockAvgOrderByAggregateInput
    _max?: InventoryStockMaxOrderByAggregateInput
    _min?: InventoryStockMinOrderByAggregateInput
    _sum?: InventoryStockSumOrderByAggregateInput
  }

  export type InventoryStockScalarWhereWithAggregatesInput = {
    AND?: InventoryStockScalarWhereWithAggregatesInput | InventoryStockScalarWhereWithAggregatesInput[]
    OR?: InventoryStockScalarWhereWithAggregatesInput[]
    NOT?: InventoryStockScalarWhereWithAggregatesInput | InventoryStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryStock"> | string
    branchId?: StringWithAggregatesFilter<"InventoryStock"> | string
    enterpriseTenantId?: StringWithAggregatesFilter<"InventoryStock"> | string
    ingredientName?: StringWithAggregatesFilter<"InventoryStock"> | string
    quantity?: FloatWithAggregatesFilter<"InventoryStock"> | number
    minThreshold?: FloatWithAggregatesFilter<"InventoryStock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InventoryStock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryStock"> | Date | string
  }

  export type RecipeIngredientWhereInput = {
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    id?: StringFilter<"RecipeIngredient"> | string
    enterpriseTenantId?: StringFilter<"RecipeIngredient"> | string
    productVariantId?: StringNullableFilter<"RecipeIngredient"> | string | null
    modifierId?: StringNullableFilter<"RecipeIngredient"> | string | null
    inventoryStockId?: StringFilter<"RecipeIngredient"> | string
    amountRequired?: FloatFilter<"RecipeIngredient"> | number
    createdAt?: DateTimeFilter<"RecipeIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"RecipeIngredient"> | Date | string
    productVariant?: XOR<ProductVariantNullableRelationFilter, ProductVariantWhereInput> | null
    modifier?: XOR<ModifierNullableRelationFilter, ModifierWhereInput> | null
    inventoryStock?: XOR<InventoryStockRelationFilter, InventoryStockWhereInput>
  }

  export type RecipeIngredientOrderByWithRelationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productVariantId?: SortOrderInput | SortOrder
    modifierId?: SortOrderInput | SortOrder
    inventoryStockId?: SortOrder
    amountRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    productVariant?: ProductVariantOrderByWithRelationInput
    modifier?: ModifierOrderByWithRelationInput
    inventoryStock?: InventoryStockOrderByWithRelationInput
  }

  export type RecipeIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    OR?: RecipeIngredientWhereInput[]
    NOT?: RecipeIngredientWhereInput | RecipeIngredientWhereInput[]
    enterpriseTenantId?: StringFilter<"RecipeIngredient"> | string
    productVariantId?: StringNullableFilter<"RecipeIngredient"> | string | null
    modifierId?: StringNullableFilter<"RecipeIngredient"> | string | null
    inventoryStockId?: StringFilter<"RecipeIngredient"> | string
    amountRequired?: FloatFilter<"RecipeIngredient"> | number
    createdAt?: DateTimeFilter<"RecipeIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"RecipeIngredient"> | Date | string
    productVariant?: XOR<ProductVariantNullableRelationFilter, ProductVariantWhereInput> | null
    modifier?: XOR<ModifierNullableRelationFilter, ModifierWhereInput> | null
    inventoryStock?: XOR<InventoryStockRelationFilter, InventoryStockWhereInput>
  }, "id">

  export type RecipeIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productVariantId?: SortOrderInput | SortOrder
    modifierId?: SortOrderInput | SortOrder
    inventoryStockId?: SortOrder
    amountRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecipeIngredientCountOrderByAggregateInput
    _avg?: RecipeIngredientAvgOrderByAggregateInput
    _max?: RecipeIngredientMaxOrderByAggregateInput
    _min?: RecipeIngredientMinOrderByAggregateInput
    _sum?: RecipeIngredientSumOrderByAggregateInput
  }

  export type RecipeIngredientScalarWhereWithAggregatesInput = {
    AND?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    OR?: RecipeIngredientScalarWhereWithAggregatesInput[]
    NOT?: RecipeIngredientScalarWhereWithAggregatesInput | RecipeIngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    enterpriseTenantId?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    productVariantId?: StringNullableWithAggregatesFilter<"RecipeIngredient"> | string | null
    modifierId?: StringNullableWithAggregatesFilter<"RecipeIngredient"> | string | null
    inventoryStockId?: StringWithAggregatesFilter<"RecipeIngredient"> | string
    amountRequired?: FloatWithAggregatesFilter<"RecipeIngredient"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RecipeIngredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecipeIngredient"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    branchId?: StringFilter<"Order"> | string
    terminalId?: StringFilter<"Order"> | string
    enterpriseTenantId?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"Order"> | string
    shiftId?: StringFilter<"Order"> | string
    memberId?: StringNullableFilter<"Order"> | string | null
    tableNumber?: StringNullableFilter<"Order"> | string | null
    waiterInfo?: StringNullableFilter<"Order"> | string | null
    orderType?: StringNullableFilter<"Order"> | string | null
    customerName?: StringNullableFilter<"Order"> | string | null
    customerPhone?: StringNullableFilter<"Order"> | string | null
    deliveryAddress?: StringNullableFilter<"Order"> | string | null
    deliveryPlatform?: StringNullableFilter<"Order"> | string | null
    isPrinted?: BoolFilter<"Order"> | boolean
    synchronizedAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    shift?: XOR<EmployeeShiftRelationFilter, EmployeeShiftWhereInput>
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    employeeId?: SortOrder
    shiftId?: SortOrder
    memberId?: SortOrderInput | SortOrder
    tableNumber?: SortOrderInput | SortOrder
    waiterInfo?: SortOrderInput | SortOrder
    orderType?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerPhone?: SortOrderInput | SortOrder
    deliveryAddress?: SortOrderInput | SortOrder
    deliveryPlatform?: SortOrderInput | SortOrder
    isPrinted?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shift?: EmployeeShiftOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    branchId?: StringFilter<"Order"> | string
    terminalId?: StringFilter<"Order"> | string
    enterpriseTenantId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"Order"> | string
    shiftId?: StringFilter<"Order"> | string
    memberId?: StringNullableFilter<"Order"> | string | null
    tableNumber?: StringNullableFilter<"Order"> | string | null
    waiterInfo?: StringNullableFilter<"Order"> | string | null
    orderType?: StringNullableFilter<"Order"> | string | null
    customerName?: StringNullableFilter<"Order"> | string | null
    customerPhone?: StringNullableFilter<"Order"> | string | null
    deliveryAddress?: StringNullableFilter<"Order"> | string | null
    deliveryPlatform?: StringNullableFilter<"Order"> | string | null
    isPrinted?: BoolFilter<"Order"> | boolean
    synchronizedAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    shift?: XOR<EmployeeShiftRelationFilter, EmployeeShiftWhereInput>
    items?: OrderItemListRelationFilter
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    employeeId?: SortOrder
    shiftId?: SortOrder
    memberId?: SortOrderInput | SortOrder
    tableNumber?: SortOrderInput | SortOrder
    waiterInfo?: SortOrderInput | SortOrder
    orderType?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerPhone?: SortOrderInput | SortOrder
    deliveryAddress?: SortOrderInput | SortOrder
    deliveryPlatform?: SortOrderInput | SortOrder
    isPrinted?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    branchId?: StringWithAggregatesFilter<"Order"> | string
    terminalId?: StringWithAggregatesFilter<"Order"> | string
    enterpriseTenantId?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    paymentStatus?: StringWithAggregatesFilter<"Order"> | string
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
    subtotal?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringWithAggregatesFilter<"Order"> | string
    shiftId?: StringWithAggregatesFilter<"Order"> | string
    memberId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    tableNumber?: StringNullableWithAggregatesFilter<"Order"> | string | null
    waiterInfo?: StringNullableWithAggregatesFilter<"Order"> | string | null
    orderType?: StringNullableWithAggregatesFilter<"Order"> | string | null
    customerName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    customerPhone?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryAddress?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryPlatform?: StringNullableWithAggregatesFilter<"Order"> | string | null
    isPrinted?: BoolWithAggregatesFilter<"Order"> | boolean
    synchronizedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productVariantId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    productVariant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
    modifiers?: OrderItemModifierListRelationFilter
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    productVariant?: ProductVariantOrderByWithRelationInput
    modifiers?: OrderItemModifierOrderByRelationAggregateInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productVariantId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    productVariant?: XOR<ProductVariantRelationFilter, ProductVariantWhereInput>
    modifiers?: OrderItemModifierListRelationFilter
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productVariantId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type OrderItemModifierWhereInput = {
    AND?: OrderItemModifierWhereInput | OrderItemModifierWhereInput[]
    OR?: OrderItemModifierWhereInput[]
    NOT?: OrderItemModifierWhereInput | OrderItemModifierWhereInput[]
    id?: StringFilter<"OrderItemModifier"> | string
    orderItemId?: StringFilter<"OrderItemModifier"> | string
    modifierId?: StringFilter<"OrderItemModifier"> | string
    price?: DecimalFilter<"OrderItemModifier"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItemModifier"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItemModifier"> | Date | string
    orderItem?: XOR<OrderItemRelationFilter, OrderItemWhereInput>
    modifier?: XOR<ModifierRelationFilter, ModifierWhereInput>
  }

  export type OrderItemModifierOrderByWithRelationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    modifierId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderItem?: OrderItemOrderByWithRelationInput
    modifier?: ModifierOrderByWithRelationInput
  }

  export type OrderItemModifierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemModifierWhereInput | OrderItemModifierWhereInput[]
    OR?: OrderItemModifierWhereInput[]
    NOT?: OrderItemModifierWhereInput | OrderItemModifierWhereInput[]
    orderItemId?: StringFilter<"OrderItemModifier"> | string
    modifierId?: StringFilter<"OrderItemModifier"> | string
    price?: DecimalFilter<"OrderItemModifier"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItemModifier"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItemModifier"> | Date | string
    orderItem?: XOR<OrderItemRelationFilter, OrderItemWhereInput>
    modifier?: XOR<ModifierRelationFilter, ModifierWhereInput>
  }, "id">

  export type OrderItemModifierOrderByWithAggregationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    modifierId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemModifierCountOrderByAggregateInput
    _avg?: OrderItemModifierAvgOrderByAggregateInput
    _max?: OrderItemModifierMaxOrderByAggregateInput
    _min?: OrderItemModifierMinOrderByAggregateInput
    _sum?: OrderItemModifierSumOrderByAggregateInput
  }

  export type OrderItemModifierScalarWhereWithAggregatesInput = {
    AND?: OrderItemModifierScalarWhereWithAggregatesInput | OrderItemModifierScalarWhereWithAggregatesInput[]
    OR?: OrderItemModifierScalarWhereWithAggregatesInput[]
    NOT?: OrderItemModifierScalarWhereWithAggregatesInput | OrderItemModifierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItemModifier"> | string
    orderItemId?: StringWithAggregatesFilter<"OrderItemModifier"> | string
    modifierId?: StringWithAggregatesFilter<"OrderItemModifier"> | string
    price?: DecimalWithAggregatesFilter<"OrderItemModifier"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItemModifier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItemModifier"> | Date | string
  }

  export type EmployeeShiftWhereInput = {
    AND?: EmployeeShiftWhereInput | EmployeeShiftWhereInput[]
    OR?: EmployeeShiftWhereInput[]
    NOT?: EmployeeShiftWhereInput | EmployeeShiftWhereInput[]
    id?: StringFilter<"EmployeeShift"> | string
    branchId?: StringFilter<"EmployeeShift"> | string
    terminalId?: StringFilter<"EmployeeShift"> | string
    enterpriseTenantId?: StringFilter<"EmployeeShift"> | string
    employeePin?: StringFilter<"EmployeeShift"> | string
    employeeName?: StringFilter<"EmployeeShift"> | string
    openedAt?: DateTimeFilter<"EmployeeShift"> | Date | string
    closedAt?: DateTimeNullableFilter<"EmployeeShift"> | Date | string | null
    openingBalance?: DecimalFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    closingBalance?: DecimalNullableFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    actualCash?: DecimalNullableFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    expectedCash?: DecimalNullableFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeFilter<"EmployeeShift"> | Date | string
    createdAt?: DateTimeFilter<"EmployeeShift"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeShift"> | Date | string
    orders?: OrderListRelationFilter
  }

  export type EmployeeShiftOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    employeePin?: SortOrder
    employeeName?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    openingBalance?: SortOrder
    closingBalance?: SortOrderInput | SortOrder
    actualCash?: SortOrderInput | SortOrder
    expectedCash?: SortOrderInput | SortOrder
    cardSales?: SortOrder
    cashSales?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type EmployeeShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeShiftWhereInput | EmployeeShiftWhereInput[]
    OR?: EmployeeShiftWhereInput[]
    NOT?: EmployeeShiftWhereInput | EmployeeShiftWhereInput[]
    branchId?: StringFilter<"EmployeeShift"> | string
    terminalId?: StringFilter<"EmployeeShift"> | string
    enterpriseTenantId?: StringFilter<"EmployeeShift"> | string
    employeePin?: StringFilter<"EmployeeShift"> | string
    employeeName?: StringFilter<"EmployeeShift"> | string
    openedAt?: DateTimeFilter<"EmployeeShift"> | Date | string
    closedAt?: DateTimeNullableFilter<"EmployeeShift"> | Date | string | null
    openingBalance?: DecimalFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    closingBalance?: DecimalNullableFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    actualCash?: DecimalNullableFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    expectedCash?: DecimalNullableFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeFilter<"EmployeeShift"> | Date | string
    createdAt?: DateTimeFilter<"EmployeeShift"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeShift"> | Date | string
    orders?: OrderListRelationFilter
  }, "id">

  export type EmployeeShiftOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    employeePin?: SortOrder
    employeeName?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    openingBalance?: SortOrder
    closingBalance?: SortOrderInput | SortOrder
    actualCash?: SortOrderInput | SortOrder
    expectedCash?: SortOrderInput | SortOrder
    cardSales?: SortOrder
    cashSales?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeShiftCountOrderByAggregateInput
    _avg?: EmployeeShiftAvgOrderByAggregateInput
    _max?: EmployeeShiftMaxOrderByAggregateInput
    _min?: EmployeeShiftMinOrderByAggregateInput
    _sum?: EmployeeShiftSumOrderByAggregateInput
  }

  export type EmployeeShiftScalarWhereWithAggregatesInput = {
    AND?: EmployeeShiftScalarWhereWithAggregatesInput | EmployeeShiftScalarWhereWithAggregatesInput[]
    OR?: EmployeeShiftScalarWhereWithAggregatesInput[]
    NOT?: EmployeeShiftScalarWhereWithAggregatesInput | EmployeeShiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeeShift"> | string
    branchId?: StringWithAggregatesFilter<"EmployeeShift"> | string
    terminalId?: StringWithAggregatesFilter<"EmployeeShift"> | string
    enterpriseTenantId?: StringWithAggregatesFilter<"EmployeeShift"> | string
    employeePin?: StringWithAggregatesFilter<"EmployeeShift"> | string
    employeeName?: StringWithAggregatesFilter<"EmployeeShift"> | string
    openedAt?: DateTimeWithAggregatesFilter<"EmployeeShift"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"EmployeeShift"> | Date | string | null
    openingBalance?: DecimalWithAggregatesFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    closingBalance?: DecimalNullableWithAggregatesFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    actualCash?: DecimalNullableWithAggregatesFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    expectedCash?: DecimalNullableWithAggregatesFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalWithAggregatesFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalWithAggregatesFilter<"EmployeeShift"> | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeWithAggregatesFilter<"EmployeeShift"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeShift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeShift"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    description?: string | null
    category: string
    imageUrl?: string | null
    bgColor?: string | null
    textColor?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    description?: string | null
    category: string
    imageUrl?: string | null
    bgColor?: string | null
    textColor?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    variants?: ProductVariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    variants?: ProductVariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    description?: string | null
    category: string
    imageUrl?: string | null
    bgColor?: string | null
    textColor?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantCreateInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutProductVariantInput
    orderItems?: OrderItemCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateInput = {
    id?: string
    enterpriseTenantId: string
    productId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutProductVariantInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutProductVariantNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutProductVariantNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantCreateManyInput = {
    id?: string
    enterpriseTenantId: string
    productId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModifierGroupCreateInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    minSelected?: number
    maxSelected?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    modifiers?: ModifierCreateNestedManyWithoutGroupInput
  }

  export type ModifierGroupUncheckedCreateInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    minSelected?: number
    maxSelected?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    modifiers?: ModifierUncheckedCreateNestedManyWithoutGroupInput
  }

  export type ModifierGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelected?: IntFieldUpdateOperationsInput | number
    maxSelected?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiers?: ModifierUpdateManyWithoutGroupNestedInput
  }

  export type ModifierGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelected?: IntFieldUpdateOperationsInput | number
    maxSelected?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiers?: ModifierUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type ModifierGroupCreateManyInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    minSelected?: number
    maxSelected?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModifierGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelected?: IntFieldUpdateOperationsInput | number
    maxSelected?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModifierGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelected?: IntFieldUpdateOperationsInput | number
    maxSelected?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModifierCreateInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: ModifierGroupCreateNestedOneWithoutModifiersInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutModifierInput
    itemModifiers?: OrderItemModifierCreateNestedManyWithoutModifierInput
  }

  export type ModifierUncheckedCreateInput = {
    id?: string
    enterpriseTenantId: string
    groupId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutModifierInput
    itemModifiers?: OrderItemModifierUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ModifierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ModifierGroupUpdateOneRequiredWithoutModifiersNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutModifierNestedInput
    itemModifiers?: OrderItemModifierUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutModifierNestedInput
    itemModifiers?: OrderItemModifierUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type ModifierCreateManyInput = {
    id?: string
    enterpriseTenantId: string
    groupId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModifierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModifierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryStockCreateInput = {
    id?: string
    branchId: string
    enterpriseTenantId: string
    ingredientName: string
    quantity: number
    minThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutInventoryStockInput
  }

  export type InventoryStockUncheckedCreateInput = {
    id?: string
    branchId: string
    enterpriseTenantId: string
    ingredientName: string
    quantity: number
    minThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutInventoryStockInput
  }

  export type InventoryStockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    minThreshold?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUpdateManyWithoutInventoryStockNestedInput
  }

  export type InventoryStockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    minThreshold?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutInventoryStockNestedInput
  }

  export type InventoryStockCreateManyInput = {
    id?: string
    branchId: string
    enterpriseTenantId: string
    ingredientName: string
    quantity: number
    minThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryStockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    minThreshold?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryStockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    minThreshold?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateInput = {
    id?: string
    enterpriseTenantId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariant?: ProductVariantCreateNestedOneWithoutRecipeIngredientsInput
    modifier?: ModifierCreateNestedOneWithoutRecipeIngredientsInput
    inventoryStock: InventoryStockCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateInput = {
    id?: string
    enterpriseTenantId: string
    productVariantId?: string | null
    modifierId?: string | null
    inventoryStockId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariant?: ProductVariantUpdateOneWithoutRecipeIngredientsNestedInput
    modifier?: ModifierUpdateOneWithoutRecipeIngredientsNestedInput
    inventoryStock?: InventoryStockUpdateOneRequiredWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    modifierId?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryStockId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateManyInput = {
    id?: string
    enterpriseTenantId: string
    productVariantId?: string | null
    modifierId?: string | null
    inventoryStockId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    modifierId?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryStockId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal | DecimalJsLike | number | string
    tax: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    employeeId: string
    memberId?: string | null
    tableNumber?: string | null
    waiterInfo?: string | null
    orderType?: string | null
    customerName?: string | null
    customerPhone?: string | null
    deliveryAddress?: string | null
    deliveryPlatform?: string | null
    isPrinted?: boolean
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    shift: EmployeeShiftCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal | DecimalJsLike | number | string
    tax: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    employeeId: string
    shiftId: string
    memberId?: string | null
    tableNumber?: string | null
    waiterInfo?: string | null
    orderType?: string | null
    customerName?: string | null
    customerPhone?: string | null
    deliveryAddress?: string | null
    deliveryPlatform?: string | null
    isPrinted?: boolean
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EmployeeShiftUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal | DecimalJsLike | number | string
    tax: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    employeeId: string
    shiftId: string
    memberId?: string | null
    tableNumber?: string | null
    waiterInfo?: string | null
    orderType?: string | null
    customerName?: string | null
    customerPhone?: string | null
    deliveryAddress?: string | null
    deliveryPlatform?: string | null
    isPrinted?: boolean
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
    productVariant: ProductVariantCreateNestedOneWithoutOrderItemsInput
    modifiers?: OrderItemModifierCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productVariantId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    modifiers?: OrderItemModifierUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    productVariant?: ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput
    modifiers?: OrderItemModifierUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiers?: OrderItemModifierUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productVariantId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemModifierCreateInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItem: OrderItemCreateNestedOneWithoutModifiersInput
    modifier: ModifierCreateNestedOneWithoutItemModifiersInput
  }

  export type OrderItemModifierUncheckedCreateInput = {
    id?: string
    orderItemId: string
    modifierId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemModifierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItem?: OrderItemUpdateOneRequiredWithoutModifiersNestedInput
    modifier?: ModifierUpdateOneRequiredWithoutItemModifiersNestedInput
  }

  export type OrderItemModifierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    modifierId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemModifierCreateManyInput = {
    id?: string
    orderItemId: string
    modifierId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemModifierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemModifierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    modifierId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftCreateInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    employeePin: string
    employeeName: string
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingBalance: Decimal | DecimalJsLike | number | string
    closingBalance?: Decimal | DecimalJsLike | number | string | null
    actualCash?: Decimal | DecimalJsLike | number | string | null
    expectedCash?: Decimal | DecimalJsLike | number | string | null
    cardSales?: Decimal | DecimalJsLike | number | string
    cashSales?: Decimal | DecimalJsLike | number | string
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutShiftInput
  }

  export type EmployeeShiftUncheckedCreateInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    employeePin: string
    employeeName: string
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingBalance: Decimal | DecimalJsLike | number | string
    closingBalance?: Decimal | DecimalJsLike | number | string | null
    actualCash?: Decimal | DecimalJsLike | number | string | null
    expectedCash?: Decimal | DecimalJsLike | number | string | null
    cardSales?: Decimal | DecimalJsLike | number | string
    cashSales?: Decimal | DecimalJsLike | number | string
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutShiftInput
  }

  export type EmployeeShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    employeePin?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutShiftNestedInput
  }

  export type EmployeeShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    employeePin?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type EmployeeShiftCreateManyInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    employeePin: string
    employeeName: string
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingBalance: Decimal | DecimalJsLike | number | string
    closingBalance?: Decimal | DecimalJsLike | number | string | null
    actualCash?: Decimal | DecimalJsLike | number | string | null
    expectedCash?: Decimal | DecimalJsLike | number | string | null
    cardSales?: Decimal | DecimalJsLike | number | string
    cashSales?: Decimal | DecimalJsLike | number | string
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    employeePin?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    employeePin?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductVariantListRelationFilter = {
    every?: ProductVariantWhereInput
    some?: ProductVariantWhereInput
    none?: ProductVariantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductVariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    bgColor?: SortOrder
    textColor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    bgColor?: SortOrder
    textColor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    bgColor?: SortOrder
    textColor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type RecipeIngredientListRelationFilter = {
    every?: RecipeIngredientWhereInput
    some?: RecipeIngredientWhereInput
    none?: RecipeIngredientWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type RecipeIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductVariantCountOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductVariantMaxOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantMinOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    sku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductVariantSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ModifierListRelationFilter = {
    every?: ModifierWhereInput
    some?: ModifierWhereInput
    none?: ModifierWhereInput
  }

  export type ModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModifierGroupCountOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    minSelected?: SortOrder
    maxSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModifierGroupAvgOrderByAggregateInput = {
    minSelected?: SortOrder
    maxSelected?: SortOrder
  }

  export type ModifierGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    minSelected?: SortOrder
    maxSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModifierGroupMinOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    name?: SortOrder
    minSelected?: SortOrder
    maxSelected?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModifierGroupSumOrderByAggregateInput = {
    minSelected?: SortOrder
    maxSelected?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ModifierGroupRelationFilter = {
    is?: ModifierGroupWhereInput
    isNot?: ModifierGroupWhereInput
  }

  export type OrderItemModifierListRelationFilter = {
    every?: OrderItemModifierWhereInput
    some?: OrderItemModifierWhereInput
    none?: OrderItemModifierWhereInput
  }

  export type OrderItemModifierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModifierCountOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModifierAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModifierMinOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModifierSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InventoryStockBranchIdIngredientNameCompoundUniqueInput = {
    branchId: string
    ingredientName: string
  }

  export type InventoryStockCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    enterpriseTenantId?: SortOrder
    ingredientName?: SortOrder
    quantity?: SortOrder
    minThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryStockAvgOrderByAggregateInput = {
    quantity?: SortOrder
    minThreshold?: SortOrder
  }

  export type InventoryStockMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    enterpriseTenantId?: SortOrder
    ingredientName?: SortOrder
    quantity?: SortOrder
    minThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryStockMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    enterpriseTenantId?: SortOrder
    ingredientName?: SortOrder
    quantity?: SortOrder
    minThreshold?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryStockSumOrderByAggregateInput = {
    quantity?: SortOrder
    minThreshold?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProductVariantNullableRelationFilter = {
    is?: ProductVariantWhereInput | null
    isNot?: ProductVariantWhereInput | null
  }

  export type ModifierNullableRelationFilter = {
    is?: ModifierWhereInput | null
    isNot?: ModifierWhereInput | null
  }

  export type InventoryStockRelationFilter = {
    is?: InventoryStockWhereInput
    isNot?: InventoryStockWhereInput
  }

  export type RecipeIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productVariantId?: SortOrder
    modifierId?: SortOrder
    inventoryStockId?: SortOrder
    amountRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeIngredientAvgOrderByAggregateInput = {
    amountRequired?: SortOrder
  }

  export type RecipeIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productVariantId?: SortOrder
    modifierId?: SortOrder
    inventoryStockId?: SortOrder
    amountRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    enterpriseTenantId?: SortOrder
    productVariantId?: SortOrder
    modifierId?: SortOrder
    inventoryStockId?: SortOrder
    amountRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeIngredientSumOrderByAggregateInput = {
    amountRequired?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EmployeeShiftRelationFilter = {
    is?: EmployeeShiftWhereInput
    isNot?: EmployeeShiftWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    employeeId?: SortOrder
    shiftId?: SortOrder
    memberId?: SortOrder
    tableNumber?: SortOrder
    waiterInfo?: SortOrder
    orderType?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    deliveryAddress?: SortOrder
    deliveryPlatform?: SortOrder
    isPrinted?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    employeeId?: SortOrder
    shiftId?: SortOrder
    memberId?: SortOrder
    tableNumber?: SortOrder
    waiterInfo?: SortOrder
    orderType?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    deliveryAddress?: SortOrder
    deliveryPlatform?: SortOrder
    isPrinted?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    employeeId?: SortOrder
    shiftId?: SortOrder
    memberId?: SortOrder
    tableNumber?: SortOrder
    waiterInfo?: SortOrder
    orderType?: SortOrder
    customerName?: SortOrder
    customerPhone?: SortOrder
    deliveryAddress?: SortOrder
    deliveryPlatform?: SortOrder
    isPrinted?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    subtotal?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductVariantRelationFilter = {
    is?: ProductVariantWhereInput
    isNot?: ProductVariantWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productVariantId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemRelationFilter = {
    is?: OrderItemWhereInput
    isNot?: OrderItemWhereInput
  }

  export type ModifierRelationFilter = {
    is?: ModifierWhereInput
    isNot?: ModifierWhereInput
  }

  export type OrderItemModifierCountOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    modifierId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemModifierAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type OrderItemModifierMaxOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    modifierId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemModifierMinOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    modifierId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemModifierSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeShiftCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    employeePin?: SortOrder
    employeeName?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    openingBalance?: SortOrder
    closingBalance?: SortOrder
    actualCash?: SortOrder
    expectedCash?: SortOrder
    cardSales?: SortOrder
    cashSales?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeShiftAvgOrderByAggregateInput = {
    openingBalance?: SortOrder
    closingBalance?: SortOrder
    actualCash?: SortOrder
    expectedCash?: SortOrder
    cardSales?: SortOrder
    cashSales?: SortOrder
  }

  export type EmployeeShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    employeePin?: SortOrder
    employeeName?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    openingBalance?: SortOrder
    closingBalance?: SortOrder
    actualCash?: SortOrder
    expectedCash?: SortOrder
    cardSales?: SortOrder
    cashSales?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeShiftMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    terminalId?: SortOrder
    enterpriseTenantId?: SortOrder
    employeePin?: SortOrder
    employeeName?: SortOrder
    openedAt?: SortOrder
    closedAt?: SortOrder
    openingBalance?: SortOrder
    closingBalance?: SortOrder
    actualCash?: SortOrder
    expectedCash?: SortOrder
    cardSales?: SortOrder
    cashSales?: SortOrder
    synchronizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeShiftSumOrderByAggregateInput = {
    openingBalance?: SortOrder
    closingBalance?: SortOrder
    actualCash?: SortOrder
    expectedCash?: SortOrder
    cardSales?: SortOrder
    cashSales?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput> | ProductVariantCreateWithoutProductInput[] | ProductVariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductVariantCreateOrConnectWithoutProductInput | ProductVariantCreateOrConnectWithoutProductInput[]
    upsert?: ProductVariantUpsertWithWhereUniqueWithoutProductInput | ProductVariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductVariantCreateManyProductInputEnvelope
    set?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    disconnect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    delete?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    connect?: ProductVariantWhereUniqueInput | ProductVariantWhereUniqueInput[]
    update?: ProductVariantUpdateWithWhereUniqueWithoutProductInput | ProductVariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductVariantUpdateManyWithWhereWithoutProductInput | ProductVariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type RecipeIngredientCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<RecipeIngredientCreateWithoutProductVariantInput, RecipeIngredientUncheckedCreateWithoutProductVariantInput> | RecipeIngredientCreateWithoutProductVariantInput[] | RecipeIngredientUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutProductVariantInput | RecipeIngredientCreateOrConnectWithoutProductVariantInput[]
    createMany?: RecipeIngredientCreateManyProductVariantInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<OrderItemCreateWithoutProductVariantInput, OrderItemUncheckedCreateWithoutProductVariantInput> | OrderItemCreateWithoutProductVariantInput[] | OrderItemUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductVariantInput | OrderItemCreateOrConnectWithoutProductVariantInput[]
    createMany?: OrderItemCreateManyProductVariantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<RecipeIngredientCreateWithoutProductVariantInput, RecipeIngredientUncheckedCreateWithoutProductVariantInput> | RecipeIngredientCreateWithoutProductVariantInput[] | RecipeIngredientUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutProductVariantInput | RecipeIngredientCreateOrConnectWithoutProductVariantInput[]
    createMany?: RecipeIngredientCreateManyProductVariantInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: XOR<OrderItemCreateWithoutProductVariantInput, OrderItemUncheckedCreateWithoutProductVariantInput> | OrderItemCreateWithoutProductVariantInput[] | OrderItemUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductVariantInput | OrderItemCreateOrConnectWithoutProductVariantInput[]
    createMany?: OrderItemCreateManyProductVariantInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type RecipeIngredientUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutProductVariantInput, RecipeIngredientUncheckedCreateWithoutProductVariantInput> | RecipeIngredientCreateWithoutProductVariantInput[] | RecipeIngredientUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutProductVariantInput | RecipeIngredientCreateOrConnectWithoutProductVariantInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutProductVariantInput | RecipeIngredientUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: RecipeIngredientCreateManyProductVariantInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutProductVariantInput | RecipeIngredientUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutProductVariantInput | RecipeIngredientUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductVariantInput, OrderItemUncheckedCreateWithoutProductVariantInput> | OrderItemCreateWithoutProductVariantInput[] | OrderItemUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductVariantInput | OrderItemCreateOrConnectWithoutProductVariantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductVariantInput | OrderItemUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: OrderItemCreateManyProductVariantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductVariantInput | OrderItemUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductVariantInput | OrderItemUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutProductVariantInput, RecipeIngredientUncheckedCreateWithoutProductVariantInput> | RecipeIngredientCreateWithoutProductVariantInput[] | RecipeIngredientUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutProductVariantInput | RecipeIngredientCreateOrConnectWithoutProductVariantInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutProductVariantInput | RecipeIngredientUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: RecipeIngredientCreateManyProductVariantInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutProductVariantInput | RecipeIngredientUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutProductVariantInput | RecipeIngredientUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductVariantInput, OrderItemUncheckedCreateWithoutProductVariantInput> | OrderItemCreateWithoutProductVariantInput[] | OrderItemUncheckedCreateWithoutProductVariantInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductVariantInput | OrderItemCreateOrConnectWithoutProductVariantInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductVariantInput | OrderItemUpsertWithWhereUniqueWithoutProductVariantInput[]
    createMany?: OrderItemCreateManyProductVariantInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductVariantInput | OrderItemUpdateWithWhereUniqueWithoutProductVariantInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductVariantInput | OrderItemUpdateManyWithWhereWithoutProductVariantInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ModifierCreateNestedManyWithoutGroupInput = {
    create?: XOR<ModifierCreateWithoutGroupInput, ModifierUncheckedCreateWithoutGroupInput> | ModifierCreateWithoutGroupInput[] | ModifierUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ModifierCreateOrConnectWithoutGroupInput | ModifierCreateOrConnectWithoutGroupInput[]
    createMany?: ModifierCreateManyGroupInputEnvelope
    connect?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
  }

  export type ModifierUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ModifierCreateWithoutGroupInput, ModifierUncheckedCreateWithoutGroupInput> | ModifierCreateWithoutGroupInput[] | ModifierUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ModifierCreateOrConnectWithoutGroupInput | ModifierCreateOrConnectWithoutGroupInput[]
    createMany?: ModifierCreateManyGroupInputEnvelope
    connect?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModifierUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ModifierCreateWithoutGroupInput, ModifierUncheckedCreateWithoutGroupInput> | ModifierCreateWithoutGroupInput[] | ModifierUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ModifierCreateOrConnectWithoutGroupInput | ModifierCreateOrConnectWithoutGroupInput[]
    upsert?: ModifierUpsertWithWhereUniqueWithoutGroupInput | ModifierUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ModifierCreateManyGroupInputEnvelope
    set?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
    disconnect?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
    delete?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
    connect?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
    update?: ModifierUpdateWithWhereUniqueWithoutGroupInput | ModifierUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ModifierUpdateManyWithWhereWithoutGroupInput | ModifierUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ModifierScalarWhereInput | ModifierScalarWhereInput[]
  }

  export type ModifierUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ModifierCreateWithoutGroupInput, ModifierUncheckedCreateWithoutGroupInput> | ModifierCreateWithoutGroupInput[] | ModifierUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ModifierCreateOrConnectWithoutGroupInput | ModifierCreateOrConnectWithoutGroupInput[]
    upsert?: ModifierUpsertWithWhereUniqueWithoutGroupInput | ModifierUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ModifierCreateManyGroupInputEnvelope
    set?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
    disconnect?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
    delete?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
    connect?: ModifierWhereUniqueInput | ModifierWhereUniqueInput[]
    update?: ModifierUpdateWithWhereUniqueWithoutGroupInput | ModifierUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ModifierUpdateManyWithWhereWithoutGroupInput | ModifierUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ModifierScalarWhereInput | ModifierScalarWhereInput[]
  }

  export type ModifierGroupCreateNestedOneWithoutModifiersInput = {
    create?: XOR<ModifierGroupCreateWithoutModifiersInput, ModifierGroupUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: ModifierGroupCreateOrConnectWithoutModifiersInput
    connect?: ModifierGroupWhereUniqueInput
  }

  export type RecipeIngredientCreateNestedManyWithoutModifierInput = {
    create?: XOR<RecipeIngredientCreateWithoutModifierInput, RecipeIngredientUncheckedCreateWithoutModifierInput> | RecipeIngredientCreateWithoutModifierInput[] | RecipeIngredientUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutModifierInput | RecipeIngredientCreateOrConnectWithoutModifierInput[]
    createMany?: RecipeIngredientCreateManyModifierInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type OrderItemModifierCreateNestedManyWithoutModifierInput = {
    create?: XOR<OrderItemModifierCreateWithoutModifierInput, OrderItemModifierUncheckedCreateWithoutModifierInput> | OrderItemModifierCreateWithoutModifierInput[] | OrderItemModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: OrderItemModifierCreateOrConnectWithoutModifierInput | OrderItemModifierCreateOrConnectWithoutModifierInput[]
    createMany?: OrderItemModifierCreateManyModifierInputEnvelope
    connect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutModifierInput = {
    create?: XOR<RecipeIngredientCreateWithoutModifierInput, RecipeIngredientUncheckedCreateWithoutModifierInput> | RecipeIngredientCreateWithoutModifierInput[] | RecipeIngredientUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutModifierInput | RecipeIngredientCreateOrConnectWithoutModifierInput[]
    createMany?: RecipeIngredientCreateManyModifierInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type OrderItemModifierUncheckedCreateNestedManyWithoutModifierInput = {
    create?: XOR<OrderItemModifierCreateWithoutModifierInput, OrderItemModifierUncheckedCreateWithoutModifierInput> | OrderItemModifierCreateWithoutModifierInput[] | OrderItemModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: OrderItemModifierCreateOrConnectWithoutModifierInput | OrderItemModifierCreateOrConnectWithoutModifierInput[]
    createMany?: OrderItemModifierCreateManyModifierInputEnvelope
    connect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
  }

  export type ModifierGroupUpdateOneRequiredWithoutModifiersNestedInput = {
    create?: XOR<ModifierGroupCreateWithoutModifiersInput, ModifierGroupUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: ModifierGroupCreateOrConnectWithoutModifiersInput
    upsert?: ModifierGroupUpsertWithoutModifiersInput
    connect?: ModifierGroupWhereUniqueInput
    update?: XOR<XOR<ModifierGroupUpdateToOneWithWhereWithoutModifiersInput, ModifierGroupUpdateWithoutModifiersInput>, ModifierGroupUncheckedUpdateWithoutModifiersInput>
  }

  export type RecipeIngredientUpdateManyWithoutModifierNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutModifierInput, RecipeIngredientUncheckedCreateWithoutModifierInput> | RecipeIngredientCreateWithoutModifierInput[] | RecipeIngredientUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutModifierInput | RecipeIngredientCreateOrConnectWithoutModifierInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutModifierInput | RecipeIngredientUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: RecipeIngredientCreateManyModifierInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutModifierInput | RecipeIngredientUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutModifierInput | RecipeIngredientUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type OrderItemModifierUpdateManyWithoutModifierNestedInput = {
    create?: XOR<OrderItemModifierCreateWithoutModifierInput, OrderItemModifierUncheckedCreateWithoutModifierInput> | OrderItemModifierCreateWithoutModifierInput[] | OrderItemModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: OrderItemModifierCreateOrConnectWithoutModifierInput | OrderItemModifierCreateOrConnectWithoutModifierInput[]
    upsert?: OrderItemModifierUpsertWithWhereUniqueWithoutModifierInput | OrderItemModifierUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: OrderItemModifierCreateManyModifierInputEnvelope
    set?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    disconnect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    delete?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    connect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    update?: OrderItemModifierUpdateWithWhereUniqueWithoutModifierInput | OrderItemModifierUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: OrderItemModifierUpdateManyWithWhereWithoutModifierInput | OrderItemModifierUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: OrderItemModifierScalarWhereInput | OrderItemModifierScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutModifierNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutModifierInput, RecipeIngredientUncheckedCreateWithoutModifierInput> | RecipeIngredientCreateWithoutModifierInput[] | RecipeIngredientUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutModifierInput | RecipeIngredientCreateOrConnectWithoutModifierInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutModifierInput | RecipeIngredientUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: RecipeIngredientCreateManyModifierInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutModifierInput | RecipeIngredientUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutModifierInput | RecipeIngredientUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type OrderItemModifierUncheckedUpdateManyWithoutModifierNestedInput = {
    create?: XOR<OrderItemModifierCreateWithoutModifierInput, OrderItemModifierUncheckedCreateWithoutModifierInput> | OrderItemModifierCreateWithoutModifierInput[] | OrderItemModifierUncheckedCreateWithoutModifierInput[]
    connectOrCreate?: OrderItemModifierCreateOrConnectWithoutModifierInput | OrderItemModifierCreateOrConnectWithoutModifierInput[]
    upsert?: OrderItemModifierUpsertWithWhereUniqueWithoutModifierInput | OrderItemModifierUpsertWithWhereUniqueWithoutModifierInput[]
    createMany?: OrderItemModifierCreateManyModifierInputEnvelope
    set?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    disconnect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    delete?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    connect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    update?: OrderItemModifierUpdateWithWhereUniqueWithoutModifierInput | OrderItemModifierUpdateWithWhereUniqueWithoutModifierInput[]
    updateMany?: OrderItemModifierUpdateManyWithWhereWithoutModifierInput | OrderItemModifierUpdateManyWithWhereWithoutModifierInput[]
    deleteMany?: OrderItemModifierScalarWhereInput | OrderItemModifierScalarWhereInput[]
  }

  export type RecipeIngredientCreateNestedManyWithoutInventoryStockInput = {
    create?: XOR<RecipeIngredientCreateWithoutInventoryStockInput, RecipeIngredientUncheckedCreateWithoutInventoryStockInput> | RecipeIngredientCreateWithoutInventoryStockInput[] | RecipeIngredientUncheckedCreateWithoutInventoryStockInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutInventoryStockInput | RecipeIngredientCreateOrConnectWithoutInventoryStockInput[]
    createMany?: RecipeIngredientCreateManyInventoryStockInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type RecipeIngredientUncheckedCreateNestedManyWithoutInventoryStockInput = {
    create?: XOR<RecipeIngredientCreateWithoutInventoryStockInput, RecipeIngredientUncheckedCreateWithoutInventoryStockInput> | RecipeIngredientCreateWithoutInventoryStockInput[] | RecipeIngredientUncheckedCreateWithoutInventoryStockInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutInventoryStockInput | RecipeIngredientCreateOrConnectWithoutInventoryStockInput[]
    createMany?: RecipeIngredientCreateManyInventoryStockInputEnvelope
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeIngredientUpdateManyWithoutInventoryStockNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutInventoryStockInput, RecipeIngredientUncheckedCreateWithoutInventoryStockInput> | RecipeIngredientCreateWithoutInventoryStockInput[] | RecipeIngredientUncheckedCreateWithoutInventoryStockInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutInventoryStockInput | RecipeIngredientCreateOrConnectWithoutInventoryStockInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutInventoryStockInput | RecipeIngredientUpsertWithWhereUniqueWithoutInventoryStockInput[]
    createMany?: RecipeIngredientCreateManyInventoryStockInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutInventoryStockInput | RecipeIngredientUpdateWithWhereUniqueWithoutInventoryStockInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutInventoryStockInput | RecipeIngredientUpdateManyWithWhereWithoutInventoryStockInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutInventoryStockNestedInput = {
    create?: XOR<RecipeIngredientCreateWithoutInventoryStockInput, RecipeIngredientUncheckedCreateWithoutInventoryStockInput> | RecipeIngredientCreateWithoutInventoryStockInput[] | RecipeIngredientUncheckedCreateWithoutInventoryStockInput[]
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutInventoryStockInput | RecipeIngredientCreateOrConnectWithoutInventoryStockInput[]
    upsert?: RecipeIngredientUpsertWithWhereUniqueWithoutInventoryStockInput | RecipeIngredientUpsertWithWhereUniqueWithoutInventoryStockInput[]
    createMany?: RecipeIngredientCreateManyInventoryStockInputEnvelope
    set?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    disconnect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    delete?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    connect?: RecipeIngredientWhereUniqueInput | RecipeIngredientWhereUniqueInput[]
    update?: RecipeIngredientUpdateWithWhereUniqueWithoutInventoryStockInput | RecipeIngredientUpdateWithWhereUniqueWithoutInventoryStockInput[]
    updateMany?: RecipeIngredientUpdateManyWithWhereWithoutInventoryStockInput | RecipeIngredientUpdateManyWithWhereWithoutInventoryStockInput[]
    deleteMany?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
  }

  export type ProductVariantCreateNestedOneWithoutRecipeIngredientsInput = {
    create?: XOR<ProductVariantCreateWithoutRecipeIngredientsInput, ProductVariantUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutRecipeIngredientsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type ModifierCreateNestedOneWithoutRecipeIngredientsInput = {
    create?: XOR<ModifierCreateWithoutRecipeIngredientsInput, ModifierUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutRecipeIngredientsInput
    connect?: ModifierWhereUniqueInput
  }

  export type InventoryStockCreateNestedOneWithoutRecipeIngredientsInput = {
    create?: XOR<InventoryStockCreateWithoutRecipeIngredientsInput, InventoryStockUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: InventoryStockCreateOrConnectWithoutRecipeIngredientsInput
    connect?: InventoryStockWhereUniqueInput
  }

  export type ProductVariantUpdateOneWithoutRecipeIngredientsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutRecipeIngredientsInput, ProductVariantUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutRecipeIngredientsInput
    upsert?: ProductVariantUpsertWithoutRecipeIngredientsInput
    disconnect?: ProductVariantWhereInput | boolean
    delete?: ProductVariantWhereInput | boolean
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutRecipeIngredientsInput, ProductVariantUpdateWithoutRecipeIngredientsInput>, ProductVariantUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type ModifierUpdateOneWithoutRecipeIngredientsNestedInput = {
    create?: XOR<ModifierCreateWithoutRecipeIngredientsInput, ModifierUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutRecipeIngredientsInput
    upsert?: ModifierUpsertWithoutRecipeIngredientsInput
    disconnect?: ModifierWhereInput | boolean
    delete?: ModifierWhereInput | boolean
    connect?: ModifierWhereUniqueInput
    update?: XOR<XOR<ModifierUpdateToOneWithWhereWithoutRecipeIngredientsInput, ModifierUpdateWithoutRecipeIngredientsInput>, ModifierUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type InventoryStockUpdateOneRequiredWithoutRecipeIngredientsNestedInput = {
    create?: XOR<InventoryStockCreateWithoutRecipeIngredientsInput, InventoryStockUncheckedCreateWithoutRecipeIngredientsInput>
    connectOrCreate?: InventoryStockCreateOrConnectWithoutRecipeIngredientsInput
    upsert?: InventoryStockUpsertWithoutRecipeIngredientsInput
    connect?: InventoryStockWhereUniqueInput
    update?: XOR<XOR<InventoryStockUpdateToOneWithWhereWithoutRecipeIngredientsInput, InventoryStockUpdateWithoutRecipeIngredientsInput>, InventoryStockUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type EmployeeShiftCreateNestedOneWithoutOrdersInput = {
    create?: XOR<EmployeeShiftCreateWithoutOrdersInput, EmployeeShiftUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: EmployeeShiftCreateOrConnectWithoutOrdersInput
    connect?: EmployeeShiftWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EmployeeShiftUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<EmployeeShiftCreateWithoutOrdersInput, EmployeeShiftUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: EmployeeShiftCreateOrConnectWithoutOrdersInput
    upsert?: EmployeeShiftUpsertWithoutOrdersInput
    connect?: EmployeeShiftWhereUniqueInput
    update?: XOR<XOR<EmployeeShiftUpdateToOneWithWhereWithoutOrdersInput, EmployeeShiftUpdateWithoutOrdersInput>, EmployeeShiftUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductVariantCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductVariantCreateWithoutOrderItemsInput, ProductVariantUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutOrderItemsInput
    connect?: ProductVariantWhereUniqueInput
  }

  export type OrderItemModifierCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemModifierCreateWithoutOrderItemInput, OrderItemModifierUncheckedCreateWithoutOrderItemInput> | OrderItemModifierCreateWithoutOrderItemInput[] | OrderItemModifierUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemModifierCreateOrConnectWithoutOrderItemInput | OrderItemModifierCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemModifierCreateManyOrderItemInputEnvelope
    connect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
  }

  export type OrderItemModifierUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemModifierCreateWithoutOrderItemInput, OrderItemModifierUncheckedCreateWithoutOrderItemInput> | OrderItemModifierCreateWithoutOrderItemInput[] | OrderItemModifierUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemModifierCreateOrConnectWithoutOrderItemInput | OrderItemModifierCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemModifierCreateManyOrderItemInputEnvelope
    connect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductVariantCreateWithoutOrderItemsInput, ProductVariantUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductVariantCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductVariantUpsertWithoutOrderItemsInput
    connect?: ProductVariantWhereUniqueInput
    update?: XOR<XOR<ProductVariantUpdateToOneWithWhereWithoutOrderItemsInput, ProductVariantUpdateWithoutOrderItemsInput>, ProductVariantUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderItemModifierUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemModifierCreateWithoutOrderItemInput, OrderItemModifierUncheckedCreateWithoutOrderItemInput> | OrderItemModifierCreateWithoutOrderItemInput[] | OrderItemModifierUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemModifierCreateOrConnectWithoutOrderItemInput | OrderItemModifierCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemModifierUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemModifierUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemModifierCreateManyOrderItemInputEnvelope
    set?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    disconnect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    delete?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    connect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    update?: OrderItemModifierUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemModifierUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemModifierUpdateManyWithWhereWithoutOrderItemInput | OrderItemModifierUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemModifierScalarWhereInput | OrderItemModifierScalarWhereInput[]
  }

  export type OrderItemModifierUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemModifierCreateWithoutOrderItemInput, OrderItemModifierUncheckedCreateWithoutOrderItemInput> | OrderItemModifierCreateWithoutOrderItemInput[] | OrderItemModifierUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemModifierCreateOrConnectWithoutOrderItemInput | OrderItemModifierCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemModifierUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemModifierUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemModifierCreateManyOrderItemInputEnvelope
    set?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    disconnect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    delete?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    connect?: OrderItemModifierWhereUniqueInput | OrderItemModifierWhereUniqueInput[]
    update?: OrderItemModifierUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemModifierUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemModifierUpdateManyWithWhereWithoutOrderItemInput | OrderItemModifierUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemModifierScalarWhereInput | OrderItemModifierScalarWhereInput[]
  }

  export type OrderItemCreateNestedOneWithoutModifiersInput = {
    create?: XOR<OrderItemCreateWithoutModifiersInput, OrderItemUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutModifiersInput
    connect?: OrderItemWhereUniqueInput
  }

  export type ModifierCreateNestedOneWithoutItemModifiersInput = {
    create?: XOR<ModifierCreateWithoutItemModifiersInput, ModifierUncheckedCreateWithoutItemModifiersInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutItemModifiersInput
    connect?: ModifierWhereUniqueInput
  }

  export type OrderItemUpdateOneRequiredWithoutModifiersNestedInput = {
    create?: XOR<OrderItemCreateWithoutModifiersInput, OrderItemUncheckedCreateWithoutModifiersInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutModifiersInput
    upsert?: OrderItemUpsertWithoutModifiersInput
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutModifiersInput, OrderItemUpdateWithoutModifiersInput>, OrderItemUncheckedUpdateWithoutModifiersInput>
  }

  export type ModifierUpdateOneRequiredWithoutItemModifiersNestedInput = {
    create?: XOR<ModifierCreateWithoutItemModifiersInput, ModifierUncheckedCreateWithoutItemModifiersInput>
    connectOrCreate?: ModifierCreateOrConnectWithoutItemModifiersInput
    upsert?: ModifierUpsertWithoutItemModifiersInput
    connect?: ModifierWhereUniqueInput
    update?: XOR<XOR<ModifierUpdateToOneWithWhereWithoutItemModifiersInput, ModifierUpdateWithoutItemModifiersInput>, ModifierUncheckedUpdateWithoutItemModifiersInput>
  }

  export type OrderCreateNestedManyWithoutShiftInput = {
    create?: XOR<OrderCreateWithoutShiftInput, OrderUncheckedCreateWithoutShiftInput> | OrderCreateWithoutShiftInput[] | OrderUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShiftInput | OrderCreateOrConnectWithoutShiftInput[]
    createMany?: OrderCreateManyShiftInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<OrderCreateWithoutShiftInput, OrderUncheckedCreateWithoutShiftInput> | OrderCreateWithoutShiftInput[] | OrderUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShiftInput | OrderCreateOrConnectWithoutShiftInput[]
    createMany?: OrderCreateManyShiftInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type OrderUpdateManyWithoutShiftNestedInput = {
    create?: XOR<OrderCreateWithoutShiftInput, OrderUncheckedCreateWithoutShiftInput> | OrderCreateWithoutShiftInput[] | OrderUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShiftInput | OrderCreateOrConnectWithoutShiftInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShiftInput | OrderUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: OrderCreateManyShiftInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShiftInput | OrderUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShiftInput | OrderUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<OrderCreateWithoutShiftInput, OrderUncheckedCreateWithoutShiftInput> | OrderCreateWithoutShiftInput[] | OrderUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShiftInput | OrderCreateOrConnectWithoutShiftInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShiftInput | OrderUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: OrderCreateManyShiftInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShiftInput | OrderUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShiftInput | OrderUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ProductVariantCreateWithoutProductInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutProductVariantInput
    orderItems?: OrderItemCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutProductVariantInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantCreateManyProductInputEnvelope = {
    data: ProductVariantCreateManyProductInput | ProductVariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    update: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
    create: XOR<ProductVariantCreateWithoutProductInput, ProductVariantUncheckedCreateWithoutProductInput>
  }

  export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductVariantWhereUniqueInput
    data: XOR<ProductVariantUpdateWithoutProductInput, ProductVariantUncheckedUpdateWithoutProductInput>
  }

  export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: ProductVariantScalarWhereInput
    data: XOR<ProductVariantUpdateManyMutationInput, ProductVariantUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductVariantScalarWhereInput = {
    AND?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    OR?: ProductVariantScalarWhereInput[]
    NOT?: ProductVariantScalarWhereInput | ProductVariantScalarWhereInput[]
    id?: StringFilter<"ProductVariant"> | string
    enterpriseTenantId?: StringFilter<"ProductVariant"> | string
    productId?: StringFilter<"ProductVariant"> | string
    name?: StringFilter<"ProductVariant"> | string
    price?: DecimalFilter<"ProductVariant"> | Decimal | DecimalJsLike | number | string
    sku?: StringFilter<"ProductVariant"> | string
    createdAt?: DateTimeFilter<"ProductVariant"> | Date | string
    updatedAt?: DateTimeFilter<"ProductVariant"> | Date | string
  }

  export type ProductCreateWithoutVariantsInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    description?: string | null
    category: string
    imageUrl?: string | null
    bgColor?: string | null
    textColor?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    description?: string | null
    category: string
    imageUrl?: string | null
    bgColor?: string | null
    textColor?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type RecipeIngredientCreateWithoutProductVariantInput = {
    id?: string
    enterpriseTenantId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
    modifier?: ModifierCreateNestedOneWithoutRecipeIngredientsInput
    inventoryStock: InventoryStockCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutProductVariantInput = {
    id?: string
    enterpriseTenantId: string
    modifierId?: string | null
    inventoryStockId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientCreateOrConnectWithoutProductVariantInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutProductVariantInput, RecipeIngredientUncheckedCreateWithoutProductVariantInput>
  }

  export type RecipeIngredientCreateManyProductVariantInputEnvelope = {
    data: RecipeIngredientCreateManyProductVariantInput | RecipeIngredientCreateManyProductVariantInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductVariantInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
    modifiers?: OrderItemModifierCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProductVariantInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    modifiers?: OrderItemModifierUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutProductVariantInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductVariantInput, OrderItemUncheckedCreateWithoutProductVariantInput>
  }

  export type OrderItemCreateManyProductVariantInputEnvelope = {
    data: OrderItemCreateManyProductVariantInput | OrderItemCreateManyProductVariantInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutProductVariantInput, RecipeIngredientUncheckedUpdateWithoutProductVariantInput>
    create: XOR<RecipeIngredientCreateWithoutProductVariantInput, RecipeIngredientUncheckedCreateWithoutProductVariantInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutProductVariantInput, RecipeIngredientUncheckedUpdateWithoutProductVariantInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutProductVariantInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutProductVariantInput>
  }

  export type RecipeIngredientScalarWhereInput = {
    AND?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    OR?: RecipeIngredientScalarWhereInput[]
    NOT?: RecipeIngredientScalarWhereInput | RecipeIngredientScalarWhereInput[]
    id?: StringFilter<"RecipeIngredient"> | string
    enterpriseTenantId?: StringFilter<"RecipeIngredient"> | string
    productVariantId?: StringNullableFilter<"RecipeIngredient"> | string | null
    modifierId?: StringNullableFilter<"RecipeIngredient"> | string | null
    inventoryStockId?: StringFilter<"RecipeIngredient"> | string
    amountRequired?: FloatFilter<"RecipeIngredient"> | number
    createdAt?: DateTimeFilter<"RecipeIngredient"> | Date | string
    updatedAt?: DateTimeFilter<"RecipeIngredient"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductVariantInput, OrderItemUncheckedUpdateWithoutProductVariantInput>
    create: XOR<OrderItemCreateWithoutProductVariantInput, OrderItemUncheckedCreateWithoutProductVariantInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductVariantInput, OrderItemUncheckedUpdateWithoutProductVariantInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductVariantInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductVariantInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productVariantId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type ModifierCreateWithoutGroupInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutModifierInput
    itemModifiers?: OrderItemModifierCreateNestedManyWithoutModifierInput
  }

  export type ModifierUncheckedCreateWithoutGroupInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutModifierInput
    itemModifiers?: OrderItemModifierUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ModifierCreateOrConnectWithoutGroupInput = {
    where: ModifierWhereUniqueInput
    create: XOR<ModifierCreateWithoutGroupInput, ModifierUncheckedCreateWithoutGroupInput>
  }

  export type ModifierCreateManyGroupInputEnvelope = {
    data: ModifierCreateManyGroupInput | ModifierCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ModifierUpsertWithWhereUniqueWithoutGroupInput = {
    where: ModifierWhereUniqueInput
    update: XOR<ModifierUpdateWithoutGroupInput, ModifierUncheckedUpdateWithoutGroupInput>
    create: XOR<ModifierCreateWithoutGroupInput, ModifierUncheckedCreateWithoutGroupInput>
  }

  export type ModifierUpdateWithWhereUniqueWithoutGroupInput = {
    where: ModifierWhereUniqueInput
    data: XOR<ModifierUpdateWithoutGroupInput, ModifierUncheckedUpdateWithoutGroupInput>
  }

  export type ModifierUpdateManyWithWhereWithoutGroupInput = {
    where: ModifierScalarWhereInput
    data: XOR<ModifierUpdateManyMutationInput, ModifierUncheckedUpdateManyWithoutGroupInput>
  }

  export type ModifierScalarWhereInput = {
    AND?: ModifierScalarWhereInput | ModifierScalarWhereInput[]
    OR?: ModifierScalarWhereInput[]
    NOT?: ModifierScalarWhereInput | ModifierScalarWhereInput[]
    id?: StringFilter<"Modifier"> | string
    enterpriseTenantId?: StringFilter<"Modifier"> | string
    groupId?: StringFilter<"Modifier"> | string
    name?: StringFilter<"Modifier"> | string
    price?: DecimalFilter<"Modifier"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Modifier"> | Date | string
    updatedAt?: DateTimeFilter<"Modifier"> | Date | string
  }

  export type ModifierGroupCreateWithoutModifiersInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    minSelected?: number
    maxSelected?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModifierGroupUncheckedCreateWithoutModifiersInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    minSelected?: number
    maxSelected?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModifierGroupCreateOrConnectWithoutModifiersInput = {
    where: ModifierGroupWhereUniqueInput
    create: XOR<ModifierGroupCreateWithoutModifiersInput, ModifierGroupUncheckedCreateWithoutModifiersInput>
  }

  export type RecipeIngredientCreateWithoutModifierInput = {
    id?: string
    enterpriseTenantId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariant?: ProductVariantCreateNestedOneWithoutRecipeIngredientsInput
    inventoryStock: InventoryStockCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutModifierInput = {
    id?: string
    enterpriseTenantId: string
    productVariantId?: string | null
    inventoryStockId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientCreateOrConnectWithoutModifierInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutModifierInput, RecipeIngredientUncheckedCreateWithoutModifierInput>
  }

  export type RecipeIngredientCreateManyModifierInputEnvelope = {
    data: RecipeIngredientCreateManyModifierInput | RecipeIngredientCreateManyModifierInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemModifierCreateWithoutModifierInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItem: OrderItemCreateNestedOneWithoutModifiersInput
  }

  export type OrderItemModifierUncheckedCreateWithoutModifierInput = {
    id?: string
    orderItemId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemModifierCreateOrConnectWithoutModifierInput = {
    where: OrderItemModifierWhereUniqueInput
    create: XOR<OrderItemModifierCreateWithoutModifierInput, OrderItemModifierUncheckedCreateWithoutModifierInput>
  }

  export type OrderItemModifierCreateManyModifierInputEnvelope = {
    data: OrderItemModifierCreateManyModifierInput | OrderItemModifierCreateManyModifierInput[]
    skipDuplicates?: boolean
  }

  export type ModifierGroupUpsertWithoutModifiersInput = {
    update: XOR<ModifierGroupUpdateWithoutModifiersInput, ModifierGroupUncheckedUpdateWithoutModifiersInput>
    create: XOR<ModifierGroupCreateWithoutModifiersInput, ModifierGroupUncheckedCreateWithoutModifiersInput>
    where?: ModifierGroupWhereInput
  }

  export type ModifierGroupUpdateToOneWithWhereWithoutModifiersInput = {
    where?: ModifierGroupWhereInput
    data: XOR<ModifierGroupUpdateWithoutModifiersInput, ModifierGroupUncheckedUpdateWithoutModifiersInput>
  }

  export type ModifierGroupUpdateWithoutModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelected?: IntFieldUpdateOperationsInput | number
    maxSelected?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModifierGroupUncheckedUpdateWithoutModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelected?: IntFieldUpdateOperationsInput | number
    maxSelected?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutModifierInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutModifierInput, RecipeIngredientUncheckedUpdateWithoutModifierInput>
    create: XOR<RecipeIngredientCreateWithoutModifierInput, RecipeIngredientUncheckedCreateWithoutModifierInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutModifierInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutModifierInput, RecipeIngredientUncheckedUpdateWithoutModifierInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutModifierInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutModifierInput>
  }

  export type OrderItemModifierUpsertWithWhereUniqueWithoutModifierInput = {
    where: OrderItemModifierWhereUniqueInput
    update: XOR<OrderItemModifierUpdateWithoutModifierInput, OrderItemModifierUncheckedUpdateWithoutModifierInput>
    create: XOR<OrderItemModifierCreateWithoutModifierInput, OrderItemModifierUncheckedCreateWithoutModifierInput>
  }

  export type OrderItemModifierUpdateWithWhereUniqueWithoutModifierInput = {
    where: OrderItemModifierWhereUniqueInput
    data: XOR<OrderItemModifierUpdateWithoutModifierInput, OrderItemModifierUncheckedUpdateWithoutModifierInput>
  }

  export type OrderItemModifierUpdateManyWithWhereWithoutModifierInput = {
    where: OrderItemModifierScalarWhereInput
    data: XOR<OrderItemModifierUpdateManyMutationInput, OrderItemModifierUncheckedUpdateManyWithoutModifierInput>
  }

  export type OrderItemModifierScalarWhereInput = {
    AND?: OrderItemModifierScalarWhereInput | OrderItemModifierScalarWhereInput[]
    OR?: OrderItemModifierScalarWhereInput[]
    NOT?: OrderItemModifierScalarWhereInput | OrderItemModifierScalarWhereInput[]
    id?: StringFilter<"OrderItemModifier"> | string
    orderItemId?: StringFilter<"OrderItemModifier"> | string
    modifierId?: StringFilter<"OrderItemModifier"> | string
    price?: DecimalFilter<"OrderItemModifier"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItemModifier"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItemModifier"> | Date | string
  }

  export type RecipeIngredientCreateWithoutInventoryStockInput = {
    id?: string
    enterpriseTenantId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariant?: ProductVariantCreateNestedOneWithoutRecipeIngredientsInput
    modifier?: ModifierCreateNestedOneWithoutRecipeIngredientsInput
  }

  export type RecipeIngredientUncheckedCreateWithoutInventoryStockInput = {
    id?: string
    enterpriseTenantId: string
    productVariantId?: string | null
    modifierId?: string | null
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientCreateOrConnectWithoutInventoryStockInput = {
    where: RecipeIngredientWhereUniqueInput
    create: XOR<RecipeIngredientCreateWithoutInventoryStockInput, RecipeIngredientUncheckedCreateWithoutInventoryStockInput>
  }

  export type RecipeIngredientCreateManyInventoryStockInputEnvelope = {
    data: RecipeIngredientCreateManyInventoryStockInput | RecipeIngredientCreateManyInventoryStockInput[]
    skipDuplicates?: boolean
  }

  export type RecipeIngredientUpsertWithWhereUniqueWithoutInventoryStockInput = {
    where: RecipeIngredientWhereUniqueInput
    update: XOR<RecipeIngredientUpdateWithoutInventoryStockInput, RecipeIngredientUncheckedUpdateWithoutInventoryStockInput>
    create: XOR<RecipeIngredientCreateWithoutInventoryStockInput, RecipeIngredientUncheckedCreateWithoutInventoryStockInput>
  }

  export type RecipeIngredientUpdateWithWhereUniqueWithoutInventoryStockInput = {
    where: RecipeIngredientWhereUniqueInput
    data: XOR<RecipeIngredientUpdateWithoutInventoryStockInput, RecipeIngredientUncheckedUpdateWithoutInventoryStockInput>
  }

  export type RecipeIngredientUpdateManyWithWhereWithoutInventoryStockInput = {
    where: RecipeIngredientScalarWhereInput
    data: XOR<RecipeIngredientUpdateManyMutationInput, RecipeIngredientUncheckedUpdateManyWithoutInventoryStockInput>
  }

  export type ProductVariantCreateWithoutRecipeIngredientsInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    orderItems?: OrderItemCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutRecipeIngredientsInput = {
    id?: string
    enterpriseTenantId: string
    productId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutRecipeIngredientsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutRecipeIngredientsInput, ProductVariantUncheckedCreateWithoutRecipeIngredientsInput>
  }

  export type ModifierCreateWithoutRecipeIngredientsInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: ModifierGroupCreateNestedOneWithoutModifiersInput
    itemModifiers?: OrderItemModifierCreateNestedManyWithoutModifierInput
  }

  export type ModifierUncheckedCreateWithoutRecipeIngredientsInput = {
    id?: string
    enterpriseTenantId: string
    groupId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    itemModifiers?: OrderItemModifierUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ModifierCreateOrConnectWithoutRecipeIngredientsInput = {
    where: ModifierWhereUniqueInput
    create: XOR<ModifierCreateWithoutRecipeIngredientsInput, ModifierUncheckedCreateWithoutRecipeIngredientsInput>
  }

  export type InventoryStockCreateWithoutRecipeIngredientsInput = {
    id?: string
    branchId: string
    enterpriseTenantId: string
    ingredientName: string
    quantity: number
    minThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryStockUncheckedCreateWithoutRecipeIngredientsInput = {
    id?: string
    branchId: string
    enterpriseTenantId: string
    ingredientName: string
    quantity: number
    minThreshold: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryStockCreateOrConnectWithoutRecipeIngredientsInput = {
    where: InventoryStockWhereUniqueInput
    create: XOR<InventoryStockCreateWithoutRecipeIngredientsInput, InventoryStockUncheckedCreateWithoutRecipeIngredientsInput>
  }

  export type ProductVariantUpsertWithoutRecipeIngredientsInput = {
    update: XOR<ProductVariantUpdateWithoutRecipeIngredientsInput, ProductVariantUncheckedUpdateWithoutRecipeIngredientsInput>
    create: XOR<ProductVariantCreateWithoutRecipeIngredientsInput, ProductVariantUncheckedCreateWithoutRecipeIngredientsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutRecipeIngredientsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutRecipeIngredientsInput, ProductVariantUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type ProductVariantUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ModifierUpsertWithoutRecipeIngredientsInput = {
    update: XOR<ModifierUpdateWithoutRecipeIngredientsInput, ModifierUncheckedUpdateWithoutRecipeIngredientsInput>
    create: XOR<ModifierCreateWithoutRecipeIngredientsInput, ModifierUncheckedCreateWithoutRecipeIngredientsInput>
    where?: ModifierWhereInput
  }

  export type ModifierUpdateToOneWithWhereWithoutRecipeIngredientsInput = {
    where?: ModifierWhereInput
    data: XOR<ModifierUpdateWithoutRecipeIngredientsInput, ModifierUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type ModifierUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ModifierGroupUpdateOneRequiredWithoutModifiersNestedInput
    itemModifiers?: OrderItemModifierUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemModifiers?: OrderItemModifierUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type InventoryStockUpsertWithoutRecipeIngredientsInput = {
    update: XOR<InventoryStockUpdateWithoutRecipeIngredientsInput, InventoryStockUncheckedUpdateWithoutRecipeIngredientsInput>
    create: XOR<InventoryStockCreateWithoutRecipeIngredientsInput, InventoryStockUncheckedCreateWithoutRecipeIngredientsInput>
    where?: InventoryStockWhereInput
  }

  export type InventoryStockUpdateToOneWithWhereWithoutRecipeIngredientsInput = {
    where?: InventoryStockWhereInput
    data: XOR<InventoryStockUpdateWithoutRecipeIngredientsInput, InventoryStockUncheckedUpdateWithoutRecipeIngredientsInput>
  }

  export type InventoryStockUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    minThreshold?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryStockUncheckedUpdateWithoutRecipeIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    ingredientName?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    minThreshold?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftCreateWithoutOrdersInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    employeePin: string
    employeeName: string
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingBalance: Decimal | DecimalJsLike | number | string
    closingBalance?: Decimal | DecimalJsLike | number | string | null
    actualCash?: Decimal | DecimalJsLike | number | string | null
    expectedCash?: Decimal | DecimalJsLike | number | string | null
    cardSales?: Decimal | DecimalJsLike | number | string
    cashSales?: Decimal | DecimalJsLike | number | string
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeShiftUncheckedCreateWithoutOrdersInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    employeePin: string
    employeeName: string
    openedAt?: Date | string
    closedAt?: Date | string | null
    openingBalance: Decimal | DecimalJsLike | number | string
    closingBalance?: Decimal | DecimalJsLike | number | string | null
    actualCash?: Decimal | DecimalJsLike | number | string | null
    expectedCash?: Decimal | DecimalJsLike | number | string | null
    cardSales?: Decimal | DecimalJsLike | number | string
    cashSales?: Decimal | DecimalJsLike | number | string
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeShiftCreateOrConnectWithoutOrdersInput = {
    where: EmployeeShiftWhereUniqueInput
    create: XOR<EmployeeShiftCreateWithoutOrdersInput, EmployeeShiftUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    productVariant: ProductVariantCreateNestedOneWithoutOrderItemsInput
    modifiers?: OrderItemModifierCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productVariantId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    modifiers?: OrderItemModifierUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeShiftUpsertWithoutOrdersInput = {
    update: XOR<EmployeeShiftUpdateWithoutOrdersInput, EmployeeShiftUncheckedUpdateWithoutOrdersInput>
    create: XOR<EmployeeShiftCreateWithoutOrdersInput, EmployeeShiftUncheckedCreateWithoutOrdersInput>
    where?: EmployeeShiftWhereInput
  }

  export type EmployeeShiftUpdateToOneWithWhereWithoutOrdersInput = {
    where?: EmployeeShiftWhereInput
    data: XOR<EmployeeShiftUpdateWithoutOrdersInput, EmployeeShiftUncheckedUpdateWithoutOrdersInput>
  }

  export type EmployeeShiftUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    employeePin?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    employeePin?: StringFieldUpdateOperationsInput | string
    employeeName?: StringFieldUpdateOperationsInput | string
    openedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openingBalance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    closingBalance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expectedCash?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cardSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cashSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal | DecimalJsLike | number | string
    tax: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    employeeId: string
    memberId?: string | null
    tableNumber?: string | null
    waiterInfo?: string | null
    orderType?: string | null
    customerName?: string | null
    customerPhone?: string | null
    deliveryAddress?: string | null
    deliveryPlatform?: string | null
    isPrinted?: boolean
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    shift: EmployeeShiftCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal | DecimalJsLike | number | string
    tax: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    employeeId: string
    shiftId: string
    memberId?: string | null
    tableNumber?: string | null
    waiterInfo?: string | null
    orderType?: string | null
    customerName?: string | null
    customerPhone?: string | null
    deliveryAddress?: string | null
    deliveryPlatform?: string | null
    isPrinted?: boolean
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductVariantCreateWithoutOrderItemsInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutVariantsInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    enterpriseTenantId: string
    productId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutProductVariantInput
  }

  export type ProductVariantCreateOrConnectWithoutOrderItemsInput = {
    where: ProductVariantWhereUniqueInput
    create: XOR<ProductVariantCreateWithoutOrderItemsInput, ProductVariantUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderItemModifierCreateWithoutOrderItemInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    modifier: ModifierCreateNestedOneWithoutItemModifiersInput
  }

  export type OrderItemModifierUncheckedCreateWithoutOrderItemInput = {
    id?: string
    modifierId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemModifierCreateOrConnectWithoutOrderItemInput = {
    where: OrderItemModifierWhereUniqueInput
    create: XOR<OrderItemModifierCreateWithoutOrderItemInput, OrderItemModifierUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemModifierCreateManyOrderItemInputEnvelope = {
    data: OrderItemModifierCreateManyOrderItemInput | OrderItemModifierCreateManyOrderItemInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: EmployeeShiftUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductVariantUpsertWithoutOrderItemsInput = {
    update: XOR<ProductVariantUpdateWithoutOrderItemsInput, ProductVariantUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductVariantCreateWithoutOrderItemsInput, ProductVariantUncheckedCreateWithoutOrderItemsInput>
    where?: ProductVariantWhereInput
  }

  export type ProductVariantUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductVariantWhereInput
    data: XOR<ProductVariantUpdateWithoutOrderItemsInput, ProductVariantUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductVariantUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type OrderItemModifierUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemModifierWhereUniqueInput
    update: XOR<OrderItemModifierUpdateWithoutOrderItemInput, OrderItemModifierUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderItemModifierCreateWithoutOrderItemInput, OrderItemModifierUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemModifierUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemModifierWhereUniqueInput
    data: XOR<OrderItemModifierUpdateWithoutOrderItemInput, OrderItemModifierUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderItemModifierUpdateManyWithWhereWithoutOrderItemInput = {
    where: OrderItemModifierScalarWhereInput
    data: XOR<OrderItemModifierUpdateManyMutationInput, OrderItemModifierUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type OrderItemCreateWithoutModifiersInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
    productVariant: ProductVariantCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutModifiersInput = {
    id?: string
    orderId: string
    productVariantId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutModifiersInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutModifiersInput, OrderItemUncheckedCreateWithoutModifiersInput>
  }

  export type ModifierCreateWithoutItemModifiersInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    group: ModifierGroupCreateNestedOneWithoutModifiersInput
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutModifierInput
  }

  export type ModifierUncheckedCreateWithoutItemModifiersInput = {
    id?: string
    enterpriseTenantId: string
    groupId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    recipeIngredients?: RecipeIngredientUncheckedCreateNestedManyWithoutModifierInput
  }

  export type ModifierCreateOrConnectWithoutItemModifiersInput = {
    where: ModifierWhereUniqueInput
    create: XOR<ModifierCreateWithoutItemModifiersInput, ModifierUncheckedCreateWithoutItemModifiersInput>
  }

  export type OrderItemUpsertWithoutModifiersInput = {
    update: XOR<OrderItemUpdateWithoutModifiersInput, OrderItemUncheckedUpdateWithoutModifiersInput>
    create: XOR<OrderItemCreateWithoutModifiersInput, OrderItemUncheckedCreateWithoutModifiersInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutModifiersInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutModifiersInput, OrderItemUncheckedUpdateWithoutModifiersInput>
  }

  export type OrderItemUpdateWithoutModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    productVariant?: ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModifierUpsertWithoutItemModifiersInput = {
    update: XOR<ModifierUpdateWithoutItemModifiersInput, ModifierUncheckedUpdateWithoutItemModifiersInput>
    create: XOR<ModifierCreateWithoutItemModifiersInput, ModifierUncheckedCreateWithoutItemModifiersInput>
    where?: ModifierWhereInput
  }

  export type ModifierUpdateToOneWithWhereWithoutItemModifiersInput = {
    where?: ModifierWhereInput
    data: XOR<ModifierUpdateWithoutItemModifiersInput, ModifierUncheckedUpdateWithoutItemModifiersInput>
  }

  export type ModifierUpdateWithoutItemModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: ModifierGroupUpdateOneRequiredWithoutModifiersNestedInput
    recipeIngredients?: RecipeIngredientUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateWithoutItemModifiersInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type OrderCreateWithoutShiftInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal | DecimalJsLike | number | string
    tax: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    employeeId: string
    memberId?: string | null
    tableNumber?: string | null
    waiterInfo?: string | null
    orderType?: string | null
    customerName?: string | null
    customerPhone?: string | null
    deliveryAddress?: string | null
    deliveryPlatform?: string | null
    isPrinted?: boolean
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShiftInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal | DecimalJsLike | number | string
    tax: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    employeeId: string
    memberId?: string | null
    tableNumber?: string | null
    waiterInfo?: string | null
    orderType?: string | null
    customerName?: string | null
    customerPhone?: string | null
    deliveryAddress?: string | null
    deliveryPlatform?: string | null
    isPrinted?: boolean
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutShiftInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShiftInput, OrderUncheckedCreateWithoutShiftInput>
  }

  export type OrderCreateManyShiftInputEnvelope = {
    data: OrderCreateManyShiftInput | OrderCreateManyShiftInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutShiftInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShiftInput, OrderUncheckedUpdateWithoutShiftInput>
    create: XOR<OrderCreateWithoutShiftInput, OrderUncheckedCreateWithoutShiftInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShiftInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShiftInput, OrderUncheckedUpdateWithoutShiftInput>
  }

  export type OrderUpdateManyWithWhereWithoutShiftInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutShiftInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    branchId?: StringFilter<"Order"> | string
    terminalId?: StringFilter<"Order"> | string
    enterpriseTenantId?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    subtotal?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    tax?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    employeeId?: StringFilter<"Order"> | string
    shiftId?: StringFilter<"Order"> | string
    memberId?: StringNullableFilter<"Order"> | string | null
    tableNumber?: StringNullableFilter<"Order"> | string | null
    waiterInfo?: StringNullableFilter<"Order"> | string | null
    orderType?: StringNullableFilter<"Order"> | string | null
    customerName?: StringNullableFilter<"Order"> | string | null
    customerPhone?: StringNullableFilter<"Order"> | string | null
    deliveryAddress?: StringNullableFilter<"Order"> | string | null
    deliveryPlatform?: StringNullableFilter<"Order"> | string | null
    isPrinted?: BoolFilter<"Order"> | boolean
    synchronizedAt?: DateTimeFilter<"Order"> | Date | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type ProductVariantCreateManyProductInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    sku: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductVariantUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUpdateManyWithoutProductVariantNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutProductVariantNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductVariantNestedInput
  }

  export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sku?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateManyProductVariantInput = {
    id?: string
    enterpriseTenantId: string
    modifierId?: string | null
    inventoryStockId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyProductVariantInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifier?: ModifierUpdateOneWithoutRecipeIngredientsNestedInput
    inventoryStock?: InventoryStockUpdateOneRequiredWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    modifierId?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryStockId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    modifierId?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryStockId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    modifiers?: OrderItemModifierUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiers?: OrderItemModifierUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutProductVariantInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModifierCreateManyGroupInput = {
    id?: string
    enterpriseTenantId: string
    name: string
    price?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModifierUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUpdateManyWithoutModifierNestedInput
    itemModifiers?: OrderItemModifierUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutModifierNestedInput
    itemModifiers?: OrderItemModifierUncheckedUpdateManyWithoutModifierNestedInput
  }

  export type ModifierUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateManyModifierInput = {
    id?: string
    enterpriseTenantId: string
    productVariantId?: string | null
    inventoryStockId: string
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemModifierCreateManyModifierInput = {
    id?: string
    orderItemId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientUpdateWithoutModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariant?: ProductVariantUpdateOneWithoutRecipeIngredientsNestedInput
    inventoryStock?: InventoryStockUpdateOneRequiredWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryStockId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    inventoryStockId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemModifierUpdateWithoutModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItem?: OrderItemUpdateOneRequiredWithoutModifiersNestedInput
  }

  export type OrderItemModifierUncheckedUpdateWithoutModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemModifierUncheckedUpdateManyWithoutModifierInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientCreateManyInventoryStockInput = {
    id?: string
    enterpriseTenantId: string
    productVariantId?: string | null
    modifierId?: string | null
    amountRequired: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeIngredientUpdateWithoutInventoryStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariant?: ProductVariantUpdateOneWithoutRecipeIngredientsNestedInput
    modifier?: ModifierUpdateOneWithoutRecipeIngredientsNestedInput
  }

  export type RecipeIngredientUncheckedUpdateWithoutInventoryStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    modifierId?: NullableStringFieldUpdateOperationsInput | string | null
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeIngredientUncheckedUpdateManyWithoutInventoryStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    productVariantId?: NullableStringFieldUpdateOperationsInput | string | null
    modifierId?: NullableStringFieldUpdateOperationsInput | string | null
    amountRequired?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productVariantId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productVariant?: ProductVariantUpdateOneRequiredWithoutOrderItemsNestedInput
    modifiers?: OrderItemModifierUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifiers?: OrderItemModifierUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productVariantId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemModifierCreateManyOrderItemInput = {
    id?: string
    modifierId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemModifierUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modifier?: ModifierUpdateOneRequiredWithoutItemModifiersNestedInput
  }

  export type OrderItemModifierUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    modifierId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemModifierUncheckedUpdateManyWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    modifierId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyShiftInput = {
    id?: string
    branchId: string
    terminalId: string
    enterpriseTenantId: string
    orderNumber: string
    status: string
    paymentStatus: string
    paymentMethod: string
    subtotal: Decimal | DecimalJsLike | number | string
    tax: Decimal | DecimalJsLike | number | string
    total: Decimal | DecimalJsLike | number | string
    employeeId: string
    memberId?: string | null
    tableNumber?: string | null
    waiterInfo?: string | null
    orderType?: string | null
    customerName?: string | null
    customerPhone?: string | null
    deliveryAddress?: string | null
    deliveryPlatform?: string | null
    isPrinted?: boolean
    synchronizedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    branchId?: StringFieldUpdateOperationsInput | string
    terminalId?: StringFieldUpdateOperationsInput | string
    enterpriseTenantId?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tax?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employeeId?: StringFieldUpdateOperationsInput | string
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    tableNumber?: NullableStringFieldUpdateOperationsInput | string | null
    waiterInfo?: NullableStringFieldUpdateOperationsInput | string | null
    orderType?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryPlatform?: NullableStringFieldUpdateOperationsInput | string | null
    isPrinted?: BoolFieldUpdateOperationsInput | boolean
    synchronizedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantCountOutputTypeDefaultArgs instead
     */
    export type ProductVariantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModifierGroupCountOutputTypeDefaultArgs instead
     */
    export type ModifierGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModifierGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModifierCountOutputTypeDefaultArgs instead
     */
    export type ModifierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModifierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryStockCountOutputTypeDefaultArgs instead
     */
    export type InventoryStockCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryStockCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemCountOutputTypeDefaultArgs instead
     */
    export type OrderItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeShiftCountOutputTypeDefaultArgs instead
     */
    export type EmployeeShiftCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeShiftCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductVariantDefaultArgs instead
     */
    export type ProductVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductVariantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModifierGroupDefaultArgs instead
     */
    export type ModifierGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModifierGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModifierDefaultArgs instead
     */
    export type ModifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModifierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryStockDefaultArgs instead
     */
    export type InventoryStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryStockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipeIngredientDefaultArgs instead
     */
    export type RecipeIngredientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipeIngredientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemModifierDefaultArgs instead
     */
    export type OrderItemModifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemModifierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeeShiftDefaultArgs instead
     */
    export type EmployeeShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeeShiftDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}