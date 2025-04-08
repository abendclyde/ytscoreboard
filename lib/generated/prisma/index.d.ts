
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
 * Model Fish13
 * 
 */
export type Fish13 = $Result.DefaultSelection<Prisma.$Fish13Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Fish13s
 * const fish13s = await prisma.fish13.findMany()
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
   * // Fetch zero or more Fish13s
   * const fish13s = await prisma.fish13.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fish13`: Exposes CRUD operations for the **Fish13** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fish13s
    * const fish13s = await prisma.fish13.findMany()
    * ```
    */
  get fish13(): Prisma.Fish13Delegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Fish13: 'Fish13'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fish13"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Fish13: {
        payload: Prisma.$Fish13Payload<ExtArgs>
        fields: Prisma.Fish13FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Fish13FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Fish13FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>
          }
          findFirst: {
            args: Prisma.Fish13FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Fish13FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>
          }
          findMany: {
            args: Prisma.Fish13FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>[]
          }
          create: {
            args: Prisma.Fish13CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>
          }
          createMany: {
            args: Prisma.Fish13CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Fish13CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>[]
          }
          delete: {
            args: Prisma.Fish13DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>
          }
          update: {
            args: Prisma.Fish13UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>
          }
          deleteMany: {
            args: Prisma.Fish13DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Fish13UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Fish13UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>[]
          }
          upsert: {
            args: Prisma.Fish13UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Fish13Payload>
          }
          aggregate: {
            args: Prisma.Fish13AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFish13>
          }
          groupBy: {
            args: Prisma.Fish13GroupByArgs<ExtArgs>
            result: $Utils.Optional<Fish13GroupByOutputType>[]
          }
          count: {
            args: Prisma.Fish13CountArgs<ExtArgs>
            result: $Utils.Optional<Fish13CountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    fish13?: Fish13Omit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Fish13
   */

  export type AggregateFish13 = {
    _count: Fish13CountAggregateOutputType | null
    _avg: Fish13AvgAggregateOutputType | null
    _sum: Fish13SumAggregateOutputType | null
    _min: Fish13MinAggregateOutputType | null
    _max: Fish13MaxAggregateOutputType | null
  }

  export type Fish13AvgAggregateOutputType = {
    score: number | null
  }

  export type Fish13SumAggregateOutputType = {
    score: number | null
  }

  export type Fish13MinAggregateOutputType = {
    id: string | null
    title: string | null
    score: number | null
    points: string | null
  }

  export type Fish13MaxAggregateOutputType = {
    id: string | null
    title: string | null
    score: number | null
    points: string | null
  }

  export type Fish13CountAggregateOutputType = {
    id: number
    title: number
    score: number
    points: number
    _all: number
  }


  export type Fish13AvgAggregateInputType = {
    score?: true
  }

  export type Fish13SumAggregateInputType = {
    score?: true
  }

  export type Fish13MinAggregateInputType = {
    id?: true
    title?: true
    score?: true
    points?: true
  }

  export type Fish13MaxAggregateInputType = {
    id?: true
    title?: true
    score?: true
    points?: true
  }

  export type Fish13CountAggregateInputType = {
    id?: true
    title?: true
    score?: true
    points?: true
    _all?: true
  }

  export type Fish13AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fish13 to aggregate.
     */
    where?: Fish13WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fish13s to fetch.
     */
    orderBy?: Fish13OrderByWithRelationInput | Fish13OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Fish13WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fish13s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fish13s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fish13s
    **/
    _count?: true | Fish13CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fish13AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fish13SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fish13MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fish13MaxAggregateInputType
  }

  export type GetFish13AggregateType<T extends Fish13AggregateArgs> = {
        [P in keyof T & keyof AggregateFish13]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFish13[P]>
      : GetScalarType<T[P], AggregateFish13[P]>
  }




  export type Fish13GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Fish13WhereInput
    orderBy?: Fish13OrderByWithAggregationInput | Fish13OrderByWithAggregationInput[]
    by: Fish13ScalarFieldEnum[] | Fish13ScalarFieldEnum
    having?: Fish13ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fish13CountAggregateInputType | true
    _avg?: Fish13AvgAggregateInputType
    _sum?: Fish13SumAggregateInputType
    _min?: Fish13MinAggregateInputType
    _max?: Fish13MaxAggregateInputType
  }

  export type Fish13GroupByOutputType = {
    id: string
    title: string
    score: number
    points: string
    _count: Fish13CountAggregateOutputType | null
    _avg: Fish13AvgAggregateOutputType | null
    _sum: Fish13SumAggregateOutputType | null
    _min: Fish13MinAggregateOutputType | null
    _max: Fish13MaxAggregateOutputType | null
  }

  type GetFish13GroupByPayload<T extends Fish13GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fish13GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fish13GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fish13GroupByOutputType[P]>
            : GetScalarType<T[P], Fish13GroupByOutputType[P]>
        }
      >
    >


  export type Fish13Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    score?: boolean
    points?: boolean
  }, ExtArgs["result"]["fish13"]>

  export type Fish13SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    score?: boolean
    points?: boolean
  }, ExtArgs["result"]["fish13"]>

  export type Fish13SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    score?: boolean
    points?: boolean
  }, ExtArgs["result"]["fish13"]>

  export type Fish13SelectScalar = {
    id?: boolean
    title?: boolean
    score?: boolean
    points?: boolean
  }

  export type Fish13Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "score" | "points", ExtArgs["result"]["fish13"]>

  export type $Fish13Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fish13"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      score: number
      points: string
    }, ExtArgs["result"]["fish13"]>
    composites: {}
  }

  type Fish13GetPayload<S extends boolean | null | undefined | Fish13DefaultArgs> = $Result.GetResult<Prisma.$Fish13Payload, S>

  type Fish13CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Fish13FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Fish13CountAggregateInputType | true
    }

  export interface Fish13Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fish13'], meta: { name: 'Fish13' } }
    /**
     * Find zero or one Fish13 that matches the filter.
     * @param {Fish13FindUniqueArgs} args - Arguments to find a Fish13
     * @example
     * // Get one Fish13
     * const fish13 = await prisma.fish13.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Fish13FindUniqueArgs>(args: SelectSubset<T, Fish13FindUniqueArgs<ExtArgs>>): Prisma__Fish13Client<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fish13 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Fish13FindUniqueOrThrowArgs} args - Arguments to find a Fish13
     * @example
     * // Get one Fish13
     * const fish13 = await prisma.fish13.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Fish13FindUniqueOrThrowArgs>(args: SelectSubset<T, Fish13FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Fish13Client<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fish13 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fish13FindFirstArgs} args - Arguments to find a Fish13
     * @example
     * // Get one Fish13
     * const fish13 = await prisma.fish13.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Fish13FindFirstArgs>(args?: SelectSubset<T, Fish13FindFirstArgs<ExtArgs>>): Prisma__Fish13Client<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fish13 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fish13FindFirstOrThrowArgs} args - Arguments to find a Fish13
     * @example
     * // Get one Fish13
     * const fish13 = await prisma.fish13.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Fish13FindFirstOrThrowArgs>(args?: SelectSubset<T, Fish13FindFirstOrThrowArgs<ExtArgs>>): Prisma__Fish13Client<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fish13s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fish13FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fish13s
     * const fish13s = await prisma.fish13.findMany()
     * 
     * // Get first 10 Fish13s
     * const fish13s = await prisma.fish13.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fish13WithIdOnly = await prisma.fish13.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Fish13FindManyArgs>(args?: SelectSubset<T, Fish13FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fish13.
     * @param {Fish13CreateArgs} args - Arguments to create a Fish13.
     * @example
     * // Create one Fish13
     * const Fish13 = await prisma.fish13.create({
     *   data: {
     *     // ... data to create a Fish13
     *   }
     * })
     * 
     */
    create<T extends Fish13CreateArgs>(args: SelectSubset<T, Fish13CreateArgs<ExtArgs>>): Prisma__Fish13Client<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fish13s.
     * @param {Fish13CreateManyArgs} args - Arguments to create many Fish13s.
     * @example
     * // Create many Fish13s
     * const fish13 = await prisma.fish13.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Fish13CreateManyArgs>(args?: SelectSubset<T, Fish13CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fish13s and returns the data saved in the database.
     * @param {Fish13CreateManyAndReturnArgs} args - Arguments to create many Fish13s.
     * @example
     * // Create many Fish13s
     * const fish13 = await prisma.fish13.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fish13s and only return the `id`
     * const fish13WithIdOnly = await prisma.fish13.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Fish13CreateManyAndReturnArgs>(args?: SelectSubset<T, Fish13CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fish13.
     * @param {Fish13DeleteArgs} args - Arguments to delete one Fish13.
     * @example
     * // Delete one Fish13
     * const Fish13 = await prisma.fish13.delete({
     *   where: {
     *     // ... filter to delete one Fish13
     *   }
     * })
     * 
     */
    delete<T extends Fish13DeleteArgs>(args: SelectSubset<T, Fish13DeleteArgs<ExtArgs>>): Prisma__Fish13Client<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fish13.
     * @param {Fish13UpdateArgs} args - Arguments to update one Fish13.
     * @example
     * // Update one Fish13
     * const fish13 = await prisma.fish13.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Fish13UpdateArgs>(args: SelectSubset<T, Fish13UpdateArgs<ExtArgs>>): Prisma__Fish13Client<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fish13s.
     * @param {Fish13DeleteManyArgs} args - Arguments to filter Fish13s to delete.
     * @example
     * // Delete a few Fish13s
     * const { count } = await prisma.fish13.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Fish13DeleteManyArgs>(args?: SelectSubset<T, Fish13DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fish13s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fish13UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fish13s
     * const fish13 = await prisma.fish13.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Fish13UpdateManyArgs>(args: SelectSubset<T, Fish13UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fish13s and returns the data updated in the database.
     * @param {Fish13UpdateManyAndReturnArgs} args - Arguments to update many Fish13s.
     * @example
     * // Update many Fish13s
     * const fish13 = await prisma.fish13.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fish13s and only return the `id`
     * const fish13WithIdOnly = await prisma.fish13.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Fish13UpdateManyAndReturnArgs>(args: SelectSubset<T, Fish13UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fish13.
     * @param {Fish13UpsertArgs} args - Arguments to update or create a Fish13.
     * @example
     * // Update or create a Fish13
     * const fish13 = await prisma.fish13.upsert({
     *   create: {
     *     // ... data to create a Fish13
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fish13 we want to update
     *   }
     * })
     */
    upsert<T extends Fish13UpsertArgs>(args: SelectSubset<T, Fish13UpsertArgs<ExtArgs>>): Prisma__Fish13Client<$Result.GetResult<Prisma.$Fish13Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fish13s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fish13CountArgs} args - Arguments to filter Fish13s to count.
     * @example
     * // Count the number of Fish13s
     * const count = await prisma.fish13.count({
     *   where: {
     *     // ... the filter for the Fish13s we want to count
     *   }
     * })
    **/
    count<T extends Fish13CountArgs>(
      args?: Subset<T, Fish13CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fish13CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fish13.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fish13AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Fish13AggregateArgs>(args: Subset<T, Fish13AggregateArgs>): Prisma.PrismaPromise<GetFish13AggregateType<T>>

    /**
     * Group by Fish13.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fish13GroupByArgs} args - Group by arguments.
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
      T extends Fish13GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Fish13GroupByArgs['orderBy'] }
        : { orderBy?: Fish13GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Fish13GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFish13GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fish13 model
   */
  readonly fields: Fish13FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fish13.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Fish13Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Fish13 model
   */
  interface Fish13FieldRefs {
    readonly id: FieldRef<"Fish13", 'String'>
    readonly title: FieldRef<"Fish13", 'String'>
    readonly score: FieldRef<"Fish13", 'Float'>
    readonly points: FieldRef<"Fish13", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Fish13 findUnique
   */
  export type Fish13FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * Filter, which Fish13 to fetch.
     */
    where: Fish13WhereUniqueInput
  }

  /**
   * Fish13 findUniqueOrThrow
   */
  export type Fish13FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * Filter, which Fish13 to fetch.
     */
    where: Fish13WhereUniqueInput
  }

  /**
   * Fish13 findFirst
   */
  export type Fish13FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * Filter, which Fish13 to fetch.
     */
    where?: Fish13WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fish13s to fetch.
     */
    orderBy?: Fish13OrderByWithRelationInput | Fish13OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fish13s.
     */
    cursor?: Fish13WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fish13s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fish13s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fish13s.
     */
    distinct?: Fish13ScalarFieldEnum | Fish13ScalarFieldEnum[]
  }

  /**
   * Fish13 findFirstOrThrow
   */
  export type Fish13FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * Filter, which Fish13 to fetch.
     */
    where?: Fish13WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fish13s to fetch.
     */
    orderBy?: Fish13OrderByWithRelationInput | Fish13OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fish13s.
     */
    cursor?: Fish13WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fish13s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fish13s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fish13s.
     */
    distinct?: Fish13ScalarFieldEnum | Fish13ScalarFieldEnum[]
  }

  /**
   * Fish13 findMany
   */
  export type Fish13FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * Filter, which Fish13s to fetch.
     */
    where?: Fish13WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fish13s to fetch.
     */
    orderBy?: Fish13OrderByWithRelationInput | Fish13OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fish13s.
     */
    cursor?: Fish13WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fish13s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fish13s.
     */
    skip?: number
    distinct?: Fish13ScalarFieldEnum | Fish13ScalarFieldEnum[]
  }

  /**
   * Fish13 create
   */
  export type Fish13CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * The data needed to create a Fish13.
     */
    data: XOR<Fish13CreateInput, Fish13UncheckedCreateInput>
  }

  /**
   * Fish13 createMany
   */
  export type Fish13CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fish13s.
     */
    data: Fish13CreateManyInput | Fish13CreateManyInput[]
  }

  /**
   * Fish13 createManyAndReturn
   */
  export type Fish13CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * The data used to create many Fish13s.
     */
    data: Fish13CreateManyInput | Fish13CreateManyInput[]
  }

  /**
   * Fish13 update
   */
  export type Fish13UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * The data needed to update a Fish13.
     */
    data: XOR<Fish13UpdateInput, Fish13UncheckedUpdateInput>
    /**
     * Choose, which Fish13 to update.
     */
    where: Fish13WhereUniqueInput
  }

  /**
   * Fish13 updateMany
   */
  export type Fish13UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fish13s.
     */
    data: XOR<Fish13UpdateManyMutationInput, Fish13UncheckedUpdateManyInput>
    /**
     * Filter which Fish13s to update
     */
    where?: Fish13WhereInput
    /**
     * Limit how many Fish13s to update.
     */
    limit?: number
  }

  /**
   * Fish13 updateManyAndReturn
   */
  export type Fish13UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * The data used to update Fish13s.
     */
    data: XOR<Fish13UpdateManyMutationInput, Fish13UncheckedUpdateManyInput>
    /**
     * Filter which Fish13s to update
     */
    where?: Fish13WhereInput
    /**
     * Limit how many Fish13s to update.
     */
    limit?: number
  }

  /**
   * Fish13 upsert
   */
  export type Fish13UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * The filter to search for the Fish13 to update in case it exists.
     */
    where: Fish13WhereUniqueInput
    /**
     * In case the Fish13 found by the `where` argument doesn't exist, create a new Fish13 with this data.
     */
    create: XOR<Fish13CreateInput, Fish13UncheckedCreateInput>
    /**
     * In case the Fish13 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Fish13UpdateInput, Fish13UncheckedUpdateInput>
  }

  /**
   * Fish13 delete
   */
  export type Fish13DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
    /**
     * Filter which Fish13 to delete.
     */
    where: Fish13WhereUniqueInput
  }

  /**
   * Fish13 deleteMany
   */
  export type Fish13DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fish13s to delete
     */
    where?: Fish13WhereInput
    /**
     * Limit how many Fish13s to delete.
     */
    limit?: number
  }

  /**
   * Fish13 without action
   */
  export type Fish13DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fish13
     */
    select?: Fish13Select<ExtArgs> | null
    /**
     * Omit specific fields from the Fish13
     */
    omit?: Fish13Omit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Fish13ScalarFieldEnum: {
    id: 'id',
    title: 'title',
    score: 'score',
    points: 'points'
  };

  export type Fish13ScalarFieldEnum = (typeof Fish13ScalarFieldEnum)[keyof typeof Fish13ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type Fish13WhereInput = {
    AND?: Fish13WhereInput | Fish13WhereInput[]
    OR?: Fish13WhereInput[]
    NOT?: Fish13WhereInput | Fish13WhereInput[]
    id?: StringFilter<"Fish13"> | string
    title?: StringFilter<"Fish13"> | string
    score?: FloatFilter<"Fish13"> | number
    points?: StringFilter<"Fish13"> | string
  }

  export type Fish13OrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    points?: SortOrder
  }

  export type Fish13WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Fish13WhereInput | Fish13WhereInput[]
    OR?: Fish13WhereInput[]
    NOT?: Fish13WhereInput | Fish13WhereInput[]
    title?: StringFilter<"Fish13"> | string
    score?: FloatFilter<"Fish13"> | number
    points?: StringFilter<"Fish13"> | string
  }, "id">

  export type Fish13OrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    points?: SortOrder
    _count?: Fish13CountOrderByAggregateInput
    _avg?: Fish13AvgOrderByAggregateInput
    _max?: Fish13MaxOrderByAggregateInput
    _min?: Fish13MinOrderByAggregateInput
    _sum?: Fish13SumOrderByAggregateInput
  }

  export type Fish13ScalarWhereWithAggregatesInput = {
    AND?: Fish13ScalarWhereWithAggregatesInput | Fish13ScalarWhereWithAggregatesInput[]
    OR?: Fish13ScalarWhereWithAggregatesInput[]
    NOT?: Fish13ScalarWhereWithAggregatesInput | Fish13ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fish13"> | string
    title?: StringWithAggregatesFilter<"Fish13"> | string
    score?: FloatWithAggregatesFilter<"Fish13"> | number
    points?: StringWithAggregatesFilter<"Fish13"> | string
  }

  export type Fish13CreateInput = {
    id: string
    title: string
    score: number
    points: string
  }

  export type Fish13UncheckedCreateInput = {
    id: string
    title: string
    score: number
    points: string
  }

  export type Fish13UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    points?: StringFieldUpdateOperationsInput | string
  }

  export type Fish13UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    points?: StringFieldUpdateOperationsInput | string
  }

  export type Fish13CreateManyInput = {
    id: string
    title: string
    score: number
    points: string
  }

  export type Fish13UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    points?: StringFieldUpdateOperationsInput | string
  }

  export type Fish13UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    points?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Fish13CountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    points?: SortOrder
  }

  export type Fish13AvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type Fish13MaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    points?: SortOrder
  }

  export type Fish13MinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    score?: SortOrder
    points?: SortOrder
  }

  export type Fish13SumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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