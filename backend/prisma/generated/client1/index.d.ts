
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
 * Model book_sec
 * 
 */
export type book_sec = $Result.DefaultSelection<Prisma.$book_secPayload>
/**
 * Model images
 * 
 */
export type images = $Result.DefaultSelection<Prisma.$imagesPayload>
/**
 * Model projects
 * 
 */
export type projects = $Result.DefaultSelection<Prisma.$projectsPayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>
/**
 * Model verse_sec
 * 
 */
export type verse_sec = $Result.DefaultSelection<Prisma.$verse_secPayload>
/**
 * Model versions
 * 
 */
export type versions = $Result.DefaultSelection<Prisma.$versionsPayload>
/**
 * Model videos
 * 
 */
export type videos = $Result.DefaultSelection<Prisma.$videosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Book_secs
 * const book_secs = await prisma.book_sec.findMany()
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
   * // Fetch zero or more Book_secs
   * const book_secs = await prisma.book_sec.findMany()
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
   * `prisma.book_sec`: Exposes CRUD operations for the **book_sec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Book_secs
    * const book_secs = await prisma.book_sec.findMany()
    * ```
    */
  get book_sec(): Prisma.book_secDelegate<ExtArgs>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.imagesDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.projectsDelegate<ExtArgs>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs>;

  /**
   * `prisma.verse_sec`: Exposes CRUD operations for the **verse_sec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verse_secs
    * const verse_secs = await prisma.verse_sec.findMany()
    * ```
    */
  get verse_sec(): Prisma.verse_secDelegate<ExtArgs>;

  /**
   * `prisma.versions`: Exposes CRUD operations for the **versions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Versions
    * const versions = await prisma.versions.findMany()
    * ```
    */
  get versions(): Prisma.versionsDelegate<ExtArgs>;

  /**
   * `prisma.videos`: Exposes CRUD operations for the **videos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.videos.findMany()
    * ```
    */
  get videos(): Prisma.videosDelegate<ExtArgs>;
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
    book_sec: 'book_sec',
    images: 'images',
    projects: 'projects',
    settings: 'settings',
    verse_sec: 'verse_sec',
    versions: 'versions',
    videos: 'videos'
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
      modelProps: "book_sec" | "images" | "projects" | "settings" | "verse_sec" | "versions" | "videos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      book_sec: {
        payload: Prisma.$book_secPayload<ExtArgs>
        fields: Prisma.book_secFieldRefs
        operations: {
          findUnique: {
            args: Prisma.book_secFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.book_secFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload>
          }
          findFirst: {
            args: Prisma.book_secFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.book_secFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload>
          }
          findMany: {
            args: Prisma.book_secFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload>[]
          }
          create: {
            args: Prisma.book_secCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload>
          }
          createMany: {
            args: Prisma.book_secCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.book_secDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload>
          }
          update: {
            args: Prisma.book_secUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload>
          }
          deleteMany: {
            args: Prisma.book_secDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.book_secUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.book_secUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$book_secPayload>
          }
          aggregate: {
            args: Prisma.Book_secAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook_sec>
          }
          groupBy: {
            args: Prisma.book_secGroupByArgs<ExtArgs>
            result: $Utils.Optional<Book_secGroupByOutputType>[]
          }
          count: {
            args: Prisma.book_secCountArgs<ExtArgs>
            result: $Utils.Optional<Book_secCountAggregateOutputType> | number
          }
        }
      }
      images: {
        payload: Prisma.$imagesPayload<ExtArgs>
        fields: Prisma.imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findFirst: {
            args: Prisma.imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          findMany: {
            args: Prisma.imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>[]
          }
          create: {
            args: Prisma.imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          createMany: {
            args: Prisma.imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          update: {
            args: Prisma.imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          deleteMany: {
            args: Prisma.imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.imagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
      projects: {
        payload: Prisma.$projectsPayload<ExtArgs>
        fields: Prisma.projectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findFirst: {
            args: Prisma.projectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          findMany: {
            args: Prisma.projectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>[]
          }
          create: {
            args: Prisma.projectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          createMany: {
            args: Prisma.projectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          update: {
            args: Prisma.projectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          deleteMany: {
            args: Prisma.projectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.projectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      verse_sec: {
        payload: Prisma.$verse_secPayload<ExtArgs>
        fields: Prisma.verse_secFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verse_secFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verse_secFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload>
          }
          findFirst: {
            args: Prisma.verse_secFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verse_secFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload>
          }
          findMany: {
            args: Prisma.verse_secFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload>[]
          }
          create: {
            args: Prisma.verse_secCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload>
          }
          createMany: {
            args: Prisma.verse_secCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.verse_secDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload>
          }
          update: {
            args: Prisma.verse_secUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload>
          }
          deleteMany: {
            args: Prisma.verse_secDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verse_secUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.verse_secUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verse_secPayload>
          }
          aggregate: {
            args: Prisma.Verse_secAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerse_sec>
          }
          groupBy: {
            args: Prisma.verse_secGroupByArgs<ExtArgs>
            result: $Utils.Optional<Verse_secGroupByOutputType>[]
          }
          count: {
            args: Prisma.verse_secCountArgs<ExtArgs>
            result: $Utils.Optional<Verse_secCountAggregateOutputType> | number
          }
        }
      }
      versions: {
        payload: Prisma.$versionsPayload<ExtArgs>
        fields: Prisma.versionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.versionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.versionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload>
          }
          findFirst: {
            args: Prisma.versionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.versionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload>
          }
          findMany: {
            args: Prisma.versionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload>[]
          }
          create: {
            args: Prisma.versionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload>
          }
          createMany: {
            args: Prisma.versionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.versionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload>
          }
          update: {
            args: Prisma.versionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload>
          }
          deleteMany: {
            args: Prisma.versionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.versionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.versionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versionsPayload>
          }
          aggregate: {
            args: Prisma.VersionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVersions>
          }
          groupBy: {
            args: Prisma.versionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VersionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.versionsCountArgs<ExtArgs>
            result: $Utils.Optional<VersionsCountAggregateOutputType> | number
          }
        }
      }
      videos: {
        payload: Prisma.$videosPayload<ExtArgs>
        fields: Prisma.videosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.videosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.videosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findFirst: {
            args: Prisma.videosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.videosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          findMany: {
            args: Prisma.videosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>[]
          }
          create: {
            args: Prisma.videosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          createMany: {
            args: Prisma.videosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.videosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          update: {
            args: Prisma.videosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          deleteMany: {
            args: Prisma.videosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.videosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.videosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$videosPayload>
          }
          aggregate: {
            args: Prisma.VideosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideos>
          }
          groupBy: {
            args: Prisma.videosGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideosGroupByOutputType>[]
          }
          count: {
            args: Prisma.videosCountArgs<ExtArgs>
            result: $Utils.Optional<VideosCountAggregateOutputType> | number
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
   * Count Type ProjectsCountOutputType
   */

  export type ProjectsCountOutputType = {
    images: number
    videos: number
  }

  export type ProjectsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ProjectsCountOutputTypeCountImagesArgs
    videos?: boolean | ProjectsCountOutputTypeCountVideosArgs
  }

  // Custom InputTypes
  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectsCountOutputType
     */
    select?: ProjectsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
  }

  /**
   * ProjectsCountOutputType without action
   */
  export type ProjectsCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model book_sec
   */

  export type AggregateBook_sec = {
    _count: Book_secCountAggregateOutputType | null
    _avg: Book_secAvgAggregateOutputType | null
    _sum: Book_secSumAggregateOutputType | null
    _min: Book_secMinAggregateOutputType | null
    _max: Book_secMaxAggregateOutputType | null
  }

  export type Book_secAvgAggregateOutputType = {
    book_num: number | null
    chapter_count: number | null
  }

  export type Book_secSumAggregateOutputType = {
    book_num: number | null
    chapter_count: number | null
  }

  export type Book_secMinAggregateOutputType = {
    book_num: number | null
    title: string | null
    short_title: string | null
    chapter_count: number | null
  }

  export type Book_secMaxAggregateOutputType = {
    book_num: number | null
    title: string | null
    short_title: string | null
    chapter_count: number | null
  }

  export type Book_secCountAggregateOutputType = {
    book_num: number
    title: number
    short_title: number
    chapter_count: number
    _all: number
  }


  export type Book_secAvgAggregateInputType = {
    book_num?: true
    chapter_count?: true
  }

  export type Book_secSumAggregateInputType = {
    book_num?: true
    chapter_count?: true
  }

  export type Book_secMinAggregateInputType = {
    book_num?: true
    title?: true
    short_title?: true
    chapter_count?: true
  }

  export type Book_secMaxAggregateInputType = {
    book_num?: true
    title?: true
    short_title?: true
    chapter_count?: true
  }

  export type Book_secCountAggregateInputType = {
    book_num?: true
    title?: true
    short_title?: true
    chapter_count?: true
    _all?: true
  }

  export type Book_secAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_sec to aggregate.
     */
    where?: book_secWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_secs to fetch.
     */
    orderBy?: book_secOrderByWithRelationInput | book_secOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: book_secWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_secs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_secs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned book_secs
    **/
    _count?: true | Book_secCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Book_secAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Book_secSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Book_secMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Book_secMaxAggregateInputType
  }

  export type GetBook_secAggregateType<T extends Book_secAggregateArgs> = {
        [P in keyof T & keyof AggregateBook_sec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_sec[P]>
      : GetScalarType<T[P], AggregateBook_sec[P]>
  }




  export type book_secGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_secWhereInput
    orderBy?: book_secOrderByWithAggregationInput | book_secOrderByWithAggregationInput[]
    by: Book_secScalarFieldEnum[] | Book_secScalarFieldEnum
    having?: book_secScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Book_secCountAggregateInputType | true
    _avg?: Book_secAvgAggregateInputType
    _sum?: Book_secSumAggregateInputType
    _min?: Book_secMinAggregateInputType
    _max?: Book_secMaxAggregateInputType
  }

  export type Book_secGroupByOutputType = {
    book_num: number
    title: string
    short_title: string
    chapter_count: number
    _count: Book_secCountAggregateOutputType | null
    _avg: Book_secAvgAggregateOutputType | null
    _sum: Book_secSumAggregateOutputType | null
    _min: Book_secMinAggregateOutputType | null
    _max: Book_secMaxAggregateOutputType | null
  }

  type GetBook_secGroupByPayload<T extends book_secGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_secGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Book_secGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Book_secGroupByOutputType[P]>
            : GetScalarType<T[P], Book_secGroupByOutputType[P]>
        }
      >
    >


  export type book_secSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_num?: boolean
    title?: boolean
    short_title?: boolean
    chapter_count?: boolean
  }, ExtArgs["result"]["book_sec"]>


  export type book_secSelectScalar = {
    book_num?: boolean
    title?: boolean
    short_title?: boolean
    chapter_count?: boolean
  }


  export type $book_secPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book_sec"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      book_num: number
      title: string
      short_title: string
      chapter_count: number
    }, ExtArgs["result"]["book_sec"]>
    composites: {}
  }

  type book_secGetPayload<S extends boolean | null | undefined | book_secDefaultArgs> = $Result.GetResult<Prisma.$book_secPayload, S>

  type book_secCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<book_secFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Book_secCountAggregateInputType | true
    }

  export interface book_secDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book_sec'], meta: { name: 'book_sec' } }
    /**
     * Find zero or one Book_sec that matches the filter.
     * @param {book_secFindUniqueArgs} args - Arguments to find a Book_sec
     * @example
     * // Get one Book_sec
     * const book_sec = await prisma.book_sec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends book_secFindUniqueArgs>(args: SelectSubset<T, book_secFindUniqueArgs<ExtArgs>>): Prisma__book_secClient<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Book_sec that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {book_secFindUniqueOrThrowArgs} args - Arguments to find a Book_sec
     * @example
     * // Get one Book_sec
     * const book_sec = await prisma.book_sec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends book_secFindUniqueOrThrowArgs>(args: SelectSubset<T, book_secFindUniqueOrThrowArgs<ExtArgs>>): Prisma__book_secClient<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Book_sec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_secFindFirstArgs} args - Arguments to find a Book_sec
     * @example
     * // Get one Book_sec
     * const book_sec = await prisma.book_sec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends book_secFindFirstArgs>(args?: SelectSubset<T, book_secFindFirstArgs<ExtArgs>>): Prisma__book_secClient<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Book_sec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_secFindFirstOrThrowArgs} args - Arguments to find a Book_sec
     * @example
     * // Get one Book_sec
     * const book_sec = await prisma.book_sec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends book_secFindFirstOrThrowArgs>(args?: SelectSubset<T, book_secFindFirstOrThrowArgs<ExtArgs>>): Prisma__book_secClient<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Book_secs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_secFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_secs
     * const book_secs = await prisma.book_sec.findMany()
     * 
     * // Get first 10 Book_secs
     * const book_secs = await prisma.book_sec.findMany({ take: 10 })
     * 
     * // Only select the `book_num`
     * const book_secWithBook_numOnly = await prisma.book_sec.findMany({ select: { book_num: true } })
     * 
     */
    findMany<T extends book_secFindManyArgs>(args?: SelectSubset<T, book_secFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Book_sec.
     * @param {book_secCreateArgs} args - Arguments to create a Book_sec.
     * @example
     * // Create one Book_sec
     * const Book_sec = await prisma.book_sec.create({
     *   data: {
     *     // ... data to create a Book_sec
     *   }
     * })
     * 
     */
    create<T extends book_secCreateArgs>(args: SelectSubset<T, book_secCreateArgs<ExtArgs>>): Prisma__book_secClient<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Book_secs.
     * @param {book_secCreateManyArgs} args - Arguments to create many Book_secs.
     * @example
     * // Create many Book_secs
     * const book_sec = await prisma.book_sec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends book_secCreateManyArgs>(args?: SelectSubset<T, book_secCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book_sec.
     * @param {book_secDeleteArgs} args - Arguments to delete one Book_sec.
     * @example
     * // Delete one Book_sec
     * const Book_sec = await prisma.book_sec.delete({
     *   where: {
     *     // ... filter to delete one Book_sec
     *   }
     * })
     * 
     */
    delete<T extends book_secDeleteArgs>(args: SelectSubset<T, book_secDeleteArgs<ExtArgs>>): Prisma__book_secClient<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Book_sec.
     * @param {book_secUpdateArgs} args - Arguments to update one Book_sec.
     * @example
     * // Update one Book_sec
     * const book_sec = await prisma.book_sec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends book_secUpdateArgs>(args: SelectSubset<T, book_secUpdateArgs<ExtArgs>>): Prisma__book_secClient<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Book_secs.
     * @param {book_secDeleteManyArgs} args - Arguments to filter Book_secs to delete.
     * @example
     * // Delete a few Book_secs
     * const { count } = await prisma.book_sec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends book_secDeleteManyArgs>(args?: SelectSubset<T, book_secDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Book_secs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_secUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_secs
     * const book_sec = await prisma.book_sec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends book_secUpdateManyArgs>(args: SelectSubset<T, book_secUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book_sec.
     * @param {book_secUpsertArgs} args - Arguments to update or create a Book_sec.
     * @example
     * // Update or create a Book_sec
     * const book_sec = await prisma.book_sec.upsert({
     *   create: {
     *     // ... data to create a Book_sec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_sec we want to update
     *   }
     * })
     */
    upsert<T extends book_secUpsertArgs>(args: SelectSubset<T, book_secUpsertArgs<ExtArgs>>): Prisma__book_secClient<$Result.GetResult<Prisma.$book_secPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Book_secs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_secCountArgs} args - Arguments to filter Book_secs to count.
     * @example
     * // Count the number of Book_secs
     * const count = await prisma.book_sec.count({
     *   where: {
     *     // ... the filter for the Book_secs we want to count
     *   }
     * })
    **/
    count<T extends book_secCountArgs>(
      args?: Subset<T, book_secCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_secCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book_sec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_secAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Book_secAggregateArgs>(args: Subset<T, Book_secAggregateArgs>): Prisma.PrismaPromise<GetBook_secAggregateType<T>>

    /**
     * Group by Book_sec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_secGroupByArgs} args - Group by arguments.
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
      T extends book_secGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: book_secGroupByArgs['orderBy'] }
        : { orderBy?: book_secGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, book_secGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBook_secGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book_sec model
   */
  readonly fields: book_secFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book_sec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__book_secClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the book_sec model
   */ 
  interface book_secFieldRefs {
    readonly book_num: FieldRef<"book_sec", 'Int'>
    readonly title: FieldRef<"book_sec", 'String'>
    readonly short_title: FieldRef<"book_sec", 'String'>
    readonly chapter_count: FieldRef<"book_sec", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * book_sec findUnique
   */
  export type book_secFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * Filter, which book_sec to fetch.
     */
    where: book_secWhereUniqueInput
  }

  /**
   * book_sec findUniqueOrThrow
   */
  export type book_secFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * Filter, which book_sec to fetch.
     */
    where: book_secWhereUniqueInput
  }

  /**
   * book_sec findFirst
   */
  export type book_secFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * Filter, which book_sec to fetch.
     */
    where?: book_secWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_secs to fetch.
     */
    orderBy?: book_secOrderByWithRelationInput | book_secOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_secs.
     */
    cursor?: book_secWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_secs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_secs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_secs.
     */
    distinct?: Book_secScalarFieldEnum | Book_secScalarFieldEnum[]
  }

  /**
   * book_sec findFirstOrThrow
   */
  export type book_secFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * Filter, which book_sec to fetch.
     */
    where?: book_secWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_secs to fetch.
     */
    orderBy?: book_secOrderByWithRelationInput | book_secOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for book_secs.
     */
    cursor?: book_secWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_secs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_secs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of book_secs.
     */
    distinct?: Book_secScalarFieldEnum | Book_secScalarFieldEnum[]
  }

  /**
   * book_sec findMany
   */
  export type book_secFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * Filter, which book_secs to fetch.
     */
    where?: book_secWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of book_secs to fetch.
     */
    orderBy?: book_secOrderByWithRelationInput | book_secOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing book_secs.
     */
    cursor?: book_secWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` book_secs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` book_secs.
     */
    skip?: number
    distinct?: Book_secScalarFieldEnum | Book_secScalarFieldEnum[]
  }

  /**
   * book_sec create
   */
  export type book_secCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * The data needed to create a book_sec.
     */
    data: XOR<book_secCreateInput, book_secUncheckedCreateInput>
  }

  /**
   * book_sec createMany
   */
  export type book_secCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many book_secs.
     */
    data: book_secCreateManyInput | book_secCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book_sec update
   */
  export type book_secUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * The data needed to update a book_sec.
     */
    data: XOR<book_secUpdateInput, book_secUncheckedUpdateInput>
    /**
     * Choose, which book_sec to update.
     */
    where: book_secWhereUniqueInput
  }

  /**
   * book_sec updateMany
   */
  export type book_secUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update book_secs.
     */
    data: XOR<book_secUpdateManyMutationInput, book_secUncheckedUpdateManyInput>
    /**
     * Filter which book_secs to update
     */
    where?: book_secWhereInput
  }

  /**
   * book_sec upsert
   */
  export type book_secUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * The filter to search for the book_sec to update in case it exists.
     */
    where: book_secWhereUniqueInput
    /**
     * In case the book_sec found by the `where` argument doesn't exist, create a new book_sec with this data.
     */
    create: XOR<book_secCreateInput, book_secUncheckedCreateInput>
    /**
     * In case the book_sec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<book_secUpdateInput, book_secUncheckedUpdateInput>
  }

  /**
   * book_sec delete
   */
  export type book_secDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
    /**
     * Filter which book_sec to delete.
     */
    where: book_secWhereUniqueInput
  }

  /**
   * book_sec deleteMany
   */
  export type book_secDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_secs to delete
     */
    where?: book_secWhereInput
  }

  /**
   * book_sec without action
   */
  export type book_secDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_sec
     */
    select?: book_secSelect<ExtArgs> | null
  }


  /**
   * Model images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    id: number | null
    title_id: number | null
    is_deleted: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
    title_id: number | null
    is_deleted: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    title_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    title_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    title_id: number
    name: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
    title_id?: true
    is_deleted?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
    title_id?: true
    is_deleted?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    title_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    title_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    title_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to aggregate.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithAggregationInput | imagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: number
    title_id: number
    name: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>


  export type imagesSelectScalar = {
    id?: boolean
    title_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }

  export type $imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "images"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title_id: number
      name: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      is_deleted: number | null
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type imagesGetPayload<S extends boolean | null | undefined | imagesDefaultArgs> = $Result.GetResult<Prisma.$imagesPayload, S>

  type imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<imagesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['images'], meta: { name: 'images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {imagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imagesFindUniqueArgs>(args: SelectSubset<T, imagesFindUniqueArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {imagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imagesFindFirstArgs>(args?: SelectSubset<T, imagesFindFirstArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imagesFindManyArgs>(args?: SelectSubset<T, imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Images.
     * @param {imagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends imagesCreateArgs>(args: SelectSubset<T, imagesCreateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Images.
     * @param {imagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imagesCreateManyArgs>(args?: SelectSubset<T, imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {imagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends imagesDeleteArgs>(args: SelectSubset<T, imagesDeleteArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Images.
     * @param {imagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imagesUpdateArgs>(args: SelectSubset<T, imagesUpdateArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {imagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imagesDeleteManyArgs>(args?: SelectSubset<T, imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imagesUpdateManyArgs>(args: SelectSubset<T, imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {imagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends imagesUpsertArgs>(args: SelectSubset<T, imagesUpsertArgs<ExtArgs>>): Prisma__imagesClient<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imagesCountArgs>(
      args?: Subset<T, imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imagesGroupByArgs} args - Group by arguments.
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
      T extends imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imagesGroupByArgs['orderBy'] }
        : { orderBy?: imagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the images model
   */
  readonly fields: imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the images model
   */ 
  interface imagesFieldRefs {
    readonly id: FieldRef<"images", 'Int'>
    readonly title_id: FieldRef<"images", 'Int'>
    readonly name: FieldRef<"images", 'String'>
    readonly created_at: FieldRef<"images", 'DateTime'>
    readonly updated_at: FieldRef<"images", 'DateTime'>
    readonly deleted_at: FieldRef<"images", 'DateTime'>
    readonly is_deleted: FieldRef<"images", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * images findUnique
   */
  export type imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findUniqueOrThrow
   */
  export type imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images findFirst
   */
  export type imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findFirstOrThrow
   */
  export type imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images findMany
   */
  export type imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * images create
   */
  export type imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a images.
     */
    data: XOR<imagesCreateInput, imagesUncheckedCreateInput>
  }

  /**
   * images createMany
   */
  export type imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imagesCreateManyInput | imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * images update
   */
  export type imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a images.
     */
    data: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
    /**
     * Choose, which images to update.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images updateMany
   */
  export type imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imagesWhereInput
  }

  /**
   * images upsert
   */
  export type imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the images to update in case it exists.
     */
    where: imagesWhereUniqueInput
    /**
     * In case the images found by the `where` argument doesn't exist, create a new images with this data.
     */
    create: XOR<imagesCreateInput, imagesUncheckedCreateInput>
    /**
     * In case the images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imagesUpdateInput, imagesUncheckedUpdateInput>
  }

  /**
   * images delete
   */
  export type imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    /**
     * Filter which images to delete.
     */
    where: imagesWhereUniqueInput
  }

  /**
   * images deleteMany
   */
  export type imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imagesWhereInput
  }

  /**
   * images without action
   */
  export type imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
  }


  /**
   * Model projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    is_deleted: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: number | null
    is_deleted: number | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: number | null
    name: string | null
    title: string | null
    author: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    title: string | null
    author: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    name: number
    title: number
    author: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    is_deleted?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    is_deleted?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    author?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    author?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    author?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to aggregate.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type projectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectsWhereInput
    orderBy?: projectsOrderByWithAggregationInput | projectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: projectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: number
    name: string
    title: string | null
    author: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends projectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type projectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    author?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    images?: boolean | projects$imagesArgs<ExtArgs>
    videos?: boolean | projects$videosArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>


  export type projectsSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    author?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type projectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | projects$imagesArgs<ExtArgs>
    videos?: boolean | projects$videosArgs<ExtArgs>
    _count?: boolean | ProjectsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $projectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projects"
    objects: {
      images: Prisma.$imagesPayload<ExtArgs>[]
      videos: Prisma.$videosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      title: string | null
      author: string | null
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      is_deleted: number | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type projectsGetPayload<S extends boolean | null | undefined | projectsDefaultArgs> = $Result.GetResult<Prisma.$projectsPayload, S>

  type projectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<projectsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface projectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projects'], meta: { name: 'projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {projectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectsFindUniqueArgs>(args: SelectSubset<T, projectsFindUniqueArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {projectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectsFindUniqueOrThrowArgs>(args: SelectSubset<T, projectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectsFindFirstArgs>(args?: SelectSubset<T, projectsFindFirstArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectsFindFirstOrThrowArgs>(args?: SelectSubset<T, projectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectsFindManyArgs>(args?: SelectSubset<T, projectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Projects.
     * @param {projectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends projectsCreateArgs>(args: SelectSubset<T, projectsCreateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {projectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectsCreateManyArgs>(args?: SelectSubset<T, projectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {projectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends projectsDeleteArgs>(args: SelectSubset<T, projectsDeleteArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {projectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectsUpdateArgs>(args: SelectSubset<T, projectsUpdateArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {projectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectsDeleteManyArgs>(args?: SelectSubset<T, projectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectsUpdateManyArgs>(args: SelectSubset<T, projectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {projectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends projectsUpsertArgs>(args: SelectSubset<T, projectsUpsertArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectsCountArgs>(
      args?: Subset<T, projectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectsGroupByArgs} args - Group by arguments.
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
      T extends projectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectsGroupByArgs['orderBy'] }
        : { orderBy?: projectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projects model
   */
  readonly fields: projectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends projects$imagesArgs<ExtArgs> = {}>(args?: Subset<T, projects$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagesPayload<ExtArgs>, T, "findMany"> | Null>
    videos<T extends projects$videosArgs<ExtArgs> = {}>(args?: Subset<T, projects$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the projects model
   */ 
  interface projectsFieldRefs {
    readonly id: FieldRef<"projects", 'Int'>
    readonly name: FieldRef<"projects", 'String'>
    readonly title: FieldRef<"projects", 'String'>
    readonly author: FieldRef<"projects", 'String'>
    readonly created_at: FieldRef<"projects", 'DateTime'>
    readonly updated_at: FieldRef<"projects", 'DateTime'>
    readonly deleted_at: FieldRef<"projects", 'DateTime'>
    readonly is_deleted: FieldRef<"projects", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * projects findUnique
   */
  export type projectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findUniqueOrThrow
   */
  export type projectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects findFirst
   */
  export type projectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findFirstOrThrow
   */
  export type projectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects findMany
   */
  export type projectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectsOrderByWithRelationInput | projectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * projects create
   */
  export type projectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to create a projects.
     */
    data: XOR<projectsCreateInput, projectsUncheckedCreateInput>
  }

  /**
   * projects createMany
   */
  export type projectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectsCreateManyInput | projectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projects update
   */
  export type projectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The data needed to update a projects.
     */
    data: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
    /**
     * Choose, which projects to update.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects updateMany
   */
  export type projectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectsUpdateManyMutationInput, projectsUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectsWhereInput
  }

  /**
   * projects upsert
   */
  export type projectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * The filter to search for the projects to update in case it exists.
     */
    where: projectsWhereUniqueInput
    /**
     * In case the projects found by the `where` argument doesn't exist, create a new projects with this data.
     */
    create: XOR<projectsCreateInput, projectsUncheckedCreateInput>
    /**
     * In case the projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectsUpdateInput, projectsUncheckedUpdateInput>
  }

  /**
   * projects delete
   */
  export type projectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
    /**
     * Filter which projects to delete.
     */
    where: projectsWhereUniqueInput
  }

  /**
   * projects deleteMany
   */
  export type projectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectsWhereInput
  }

  /**
   * projects.images
   */
  export type projects$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the images
     */
    select?: imagesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imagesInclude<ExtArgs> | null
    where?: imagesWhereInput
    orderBy?: imagesOrderByWithRelationInput | imagesOrderByWithRelationInput[]
    cursor?: imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * projects.videos
   */
  export type projects$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    where?: videosWhereInput
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    cursor?: videosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * projects without action
   */
  export type projectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projects
     */
    select?: projectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectsInclude<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
    title_size: number | null
    content_size: number | null
    credit_size: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
    title_size: number | null
    content_size: number | null
    credit_size: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    font_style: string | null
    title_size: number | null
    title_color: string | null
    title_style: string | null
    content_size: number | null
    content_color: string | null
    content_style: string | null
    credit_size: number | null
    credit_color: string | null
    credit_style: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    font_style: string | null
    title_size: number | null
    title_color: string | null
    title_style: string | null
    content_size: number | null
    content_color: string | null
    content_style: string | null
    credit_size: number | null
    credit_color: string | null
    credit_style: string | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    font_style: number
    title_size: number
    title_color: number
    title_style: number
    content_size: number
    content_color: number
    content_style: number
    credit_size: number
    credit_color: number
    credit_style: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
    title_size?: true
    content_size?: true
    credit_size?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
    title_size?: true
    content_size?: true
    credit_size?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    font_style?: true
    title_size?: true
    title_color?: true
    title_style?: true
    content_size?: true
    content_color?: true
    content_style?: true
    credit_size?: true
    credit_color?: true
    credit_style?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    font_style?: true
    title_size?: true
    title_color?: true
    title_style?: true
    content_size?: true
    content_color?: true
    content_style?: true
    credit_size?: true
    credit_color?: true
    credit_style?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    font_style?: true
    title_size?: true
    title_color?: true
    title_style?: true
    content_size?: true
    content_color?: true
    content_style?: true
    credit_size?: true
    credit_color?: true
    credit_style?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    font_style: string | null
    title_size: number | null
    title_color: string | null
    title_style: string | null
    content_size: number | null
    content_color: string | null
    content_style: string | null
    credit_size: number | null
    credit_color: string | null
    credit_style: string | null
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    font_style?: boolean
    title_size?: boolean
    title_color?: boolean
    title_style?: boolean
    content_size?: boolean
    content_color?: boolean
    content_style?: boolean
    credit_size?: boolean
    credit_color?: boolean
    credit_style?: boolean
  }, ExtArgs["result"]["settings"]>


  export type settingsSelectScalar = {
    id?: boolean
    font_style?: boolean
    title_size?: boolean
    title_color?: boolean
    title_style?: boolean
    content_size?: boolean
    content_color?: boolean
    content_style?: boolean
    credit_size?: boolean
    credit_color?: boolean
    credit_style?: boolean
  }


  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      font_style: string | null
      title_size: number | null
      title_color: string | null
      title_style: string | null
      content_size: number | null
      content_color: string | null
      content_style: string | null
      credit_size: number | null
      credit_color: string | null
      credit_style: string | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
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
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the settings model
   */ 
  interface settingsFieldRefs {
    readonly id: FieldRef<"settings", 'Int'>
    readonly font_style: FieldRef<"settings", 'String'>
    readonly title_size: FieldRef<"settings", 'Int'>
    readonly title_color: FieldRef<"settings", 'String'>
    readonly title_style: FieldRef<"settings", 'String'>
    readonly content_size: FieldRef<"settings", 'Int'>
    readonly content_color: FieldRef<"settings", 'String'>
    readonly content_style: FieldRef<"settings", 'String'>
    readonly credit_size: FieldRef<"settings", 'Int'>
    readonly credit_color: FieldRef<"settings", 'String'>
    readonly credit_style: FieldRef<"settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data?: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
  }


  /**
   * Model verse_sec
   */

  export type AggregateVerse_sec = {
    _count: Verse_secCountAggregateOutputType | null
    _avg: Verse_secAvgAggregateOutputType | null
    _sum: Verse_secSumAggregateOutputType | null
    _min: Verse_secMinAggregateOutputType | null
    _max: Verse_secMaxAggregateOutputType | null
  }

  export type Verse_secAvgAggregateOutputType = {
    book_num: number | null
    chapter_num: number | null
    verse_num: number | null
    id: number | null
  }

  export type Verse_secSumAggregateOutputType = {
    book_num: number | null
    chapter_num: number | null
    verse_num: number | null
    id: number | null
  }

  export type Verse_secMinAggregateOutputType = {
    book_num: number | null
    chapter_num: number | null
    verse_num: number | null
    content: string | null
    id: number | null
  }

  export type Verse_secMaxAggregateOutputType = {
    book_num: number | null
    chapter_num: number | null
    verse_num: number | null
    content: string | null
    id: number | null
  }

  export type Verse_secCountAggregateOutputType = {
    book_num: number
    chapter_num: number
    verse_num: number
    content: number
    id: number
    _all: number
  }


  export type Verse_secAvgAggregateInputType = {
    book_num?: true
    chapter_num?: true
    verse_num?: true
    id?: true
  }

  export type Verse_secSumAggregateInputType = {
    book_num?: true
    chapter_num?: true
    verse_num?: true
    id?: true
  }

  export type Verse_secMinAggregateInputType = {
    book_num?: true
    chapter_num?: true
    verse_num?: true
    content?: true
    id?: true
  }

  export type Verse_secMaxAggregateInputType = {
    book_num?: true
    chapter_num?: true
    verse_num?: true
    content?: true
    id?: true
  }

  export type Verse_secCountAggregateInputType = {
    book_num?: true
    chapter_num?: true
    verse_num?: true
    content?: true
    id?: true
    _all?: true
  }

  export type Verse_secAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verse_sec to aggregate.
     */
    where?: verse_secWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verse_secs to fetch.
     */
    orderBy?: verse_secOrderByWithRelationInput | verse_secOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verse_secWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verse_secs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verse_secs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verse_secs
    **/
    _count?: true | Verse_secCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Verse_secAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Verse_secSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Verse_secMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Verse_secMaxAggregateInputType
  }

  export type GetVerse_secAggregateType<T extends Verse_secAggregateArgs> = {
        [P in keyof T & keyof AggregateVerse_sec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerse_sec[P]>
      : GetScalarType<T[P], AggregateVerse_sec[P]>
  }




  export type verse_secGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verse_secWhereInput
    orderBy?: verse_secOrderByWithAggregationInput | verse_secOrderByWithAggregationInput[]
    by: Verse_secScalarFieldEnum[] | Verse_secScalarFieldEnum
    having?: verse_secScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Verse_secCountAggregateInputType | true
    _avg?: Verse_secAvgAggregateInputType
    _sum?: Verse_secSumAggregateInputType
    _min?: Verse_secMinAggregateInputType
    _max?: Verse_secMaxAggregateInputType
  }

  export type Verse_secGroupByOutputType = {
    book_num: number
    chapter_num: number
    verse_num: number
    content: string
    id: number
    _count: Verse_secCountAggregateOutputType | null
    _avg: Verse_secAvgAggregateOutputType | null
    _sum: Verse_secSumAggregateOutputType | null
    _min: Verse_secMinAggregateOutputType | null
    _max: Verse_secMaxAggregateOutputType | null
  }

  type GetVerse_secGroupByPayload<T extends verse_secGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Verse_secGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Verse_secGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Verse_secGroupByOutputType[P]>
            : GetScalarType<T[P], Verse_secGroupByOutputType[P]>
        }
      >
    >


  export type verse_secSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    book_num?: boolean
    chapter_num?: boolean
    verse_num?: boolean
    content?: boolean
    id?: boolean
  }, ExtArgs["result"]["verse_sec"]>


  export type verse_secSelectScalar = {
    book_num?: boolean
    chapter_num?: boolean
    verse_num?: boolean
    content?: boolean
    id?: boolean
  }


  export type $verse_secPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verse_sec"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      book_num: number
      chapter_num: number
      verse_num: number
      content: string
      id: number
    }, ExtArgs["result"]["verse_sec"]>
    composites: {}
  }

  type verse_secGetPayload<S extends boolean | null | undefined | verse_secDefaultArgs> = $Result.GetResult<Prisma.$verse_secPayload, S>

  type verse_secCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<verse_secFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Verse_secCountAggregateInputType | true
    }

  export interface verse_secDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verse_sec'], meta: { name: 'verse_sec' } }
    /**
     * Find zero or one Verse_sec that matches the filter.
     * @param {verse_secFindUniqueArgs} args - Arguments to find a Verse_sec
     * @example
     * // Get one Verse_sec
     * const verse_sec = await prisma.verse_sec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verse_secFindUniqueArgs>(args: SelectSubset<T, verse_secFindUniqueArgs<ExtArgs>>): Prisma__verse_secClient<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Verse_sec that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {verse_secFindUniqueOrThrowArgs} args - Arguments to find a Verse_sec
     * @example
     * // Get one Verse_sec
     * const verse_sec = await prisma.verse_sec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verse_secFindUniqueOrThrowArgs>(args: SelectSubset<T, verse_secFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verse_secClient<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Verse_sec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verse_secFindFirstArgs} args - Arguments to find a Verse_sec
     * @example
     * // Get one Verse_sec
     * const verse_sec = await prisma.verse_sec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verse_secFindFirstArgs>(args?: SelectSubset<T, verse_secFindFirstArgs<ExtArgs>>): Prisma__verse_secClient<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Verse_sec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verse_secFindFirstOrThrowArgs} args - Arguments to find a Verse_sec
     * @example
     * // Get one Verse_sec
     * const verse_sec = await prisma.verse_sec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verse_secFindFirstOrThrowArgs>(args?: SelectSubset<T, verse_secFindFirstOrThrowArgs<ExtArgs>>): Prisma__verse_secClient<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Verse_secs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verse_secFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verse_secs
     * const verse_secs = await prisma.verse_sec.findMany()
     * 
     * // Get first 10 Verse_secs
     * const verse_secs = await prisma.verse_sec.findMany({ take: 10 })
     * 
     * // Only select the `book_num`
     * const verse_secWithBook_numOnly = await prisma.verse_sec.findMany({ select: { book_num: true } })
     * 
     */
    findMany<T extends verse_secFindManyArgs>(args?: SelectSubset<T, verse_secFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Verse_sec.
     * @param {verse_secCreateArgs} args - Arguments to create a Verse_sec.
     * @example
     * // Create one Verse_sec
     * const Verse_sec = await prisma.verse_sec.create({
     *   data: {
     *     // ... data to create a Verse_sec
     *   }
     * })
     * 
     */
    create<T extends verse_secCreateArgs>(args: SelectSubset<T, verse_secCreateArgs<ExtArgs>>): Prisma__verse_secClient<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Verse_secs.
     * @param {verse_secCreateManyArgs} args - Arguments to create many Verse_secs.
     * @example
     * // Create many Verse_secs
     * const verse_sec = await prisma.verse_sec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verse_secCreateManyArgs>(args?: SelectSubset<T, verse_secCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verse_sec.
     * @param {verse_secDeleteArgs} args - Arguments to delete one Verse_sec.
     * @example
     * // Delete one Verse_sec
     * const Verse_sec = await prisma.verse_sec.delete({
     *   where: {
     *     // ... filter to delete one Verse_sec
     *   }
     * })
     * 
     */
    delete<T extends verse_secDeleteArgs>(args: SelectSubset<T, verse_secDeleteArgs<ExtArgs>>): Prisma__verse_secClient<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Verse_sec.
     * @param {verse_secUpdateArgs} args - Arguments to update one Verse_sec.
     * @example
     * // Update one Verse_sec
     * const verse_sec = await prisma.verse_sec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verse_secUpdateArgs>(args: SelectSubset<T, verse_secUpdateArgs<ExtArgs>>): Prisma__verse_secClient<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Verse_secs.
     * @param {verse_secDeleteManyArgs} args - Arguments to filter Verse_secs to delete.
     * @example
     * // Delete a few Verse_secs
     * const { count } = await prisma.verse_sec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verse_secDeleteManyArgs>(args?: SelectSubset<T, verse_secDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verse_secs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verse_secUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verse_secs
     * const verse_sec = await prisma.verse_sec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verse_secUpdateManyArgs>(args: SelectSubset<T, verse_secUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verse_sec.
     * @param {verse_secUpsertArgs} args - Arguments to update or create a Verse_sec.
     * @example
     * // Update or create a Verse_sec
     * const verse_sec = await prisma.verse_sec.upsert({
     *   create: {
     *     // ... data to create a Verse_sec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verse_sec we want to update
     *   }
     * })
     */
    upsert<T extends verse_secUpsertArgs>(args: SelectSubset<T, verse_secUpsertArgs<ExtArgs>>): Prisma__verse_secClient<$Result.GetResult<Prisma.$verse_secPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Verse_secs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verse_secCountArgs} args - Arguments to filter Verse_secs to count.
     * @example
     * // Count the number of Verse_secs
     * const count = await prisma.verse_sec.count({
     *   where: {
     *     // ... the filter for the Verse_secs we want to count
     *   }
     * })
    **/
    count<T extends verse_secCountArgs>(
      args?: Subset<T, verse_secCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Verse_secCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verse_sec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verse_secAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Verse_secAggregateArgs>(args: Subset<T, Verse_secAggregateArgs>): Prisma.PrismaPromise<GetVerse_secAggregateType<T>>

    /**
     * Group by Verse_sec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verse_secGroupByArgs} args - Group by arguments.
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
      T extends verse_secGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verse_secGroupByArgs['orderBy'] }
        : { orderBy?: verse_secGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, verse_secGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerse_secGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verse_sec model
   */
  readonly fields: verse_secFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verse_sec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verse_secClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the verse_sec model
   */ 
  interface verse_secFieldRefs {
    readonly book_num: FieldRef<"verse_sec", 'Int'>
    readonly chapter_num: FieldRef<"verse_sec", 'Int'>
    readonly verse_num: FieldRef<"verse_sec", 'Int'>
    readonly content: FieldRef<"verse_sec", 'String'>
    readonly id: FieldRef<"verse_sec", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * verse_sec findUnique
   */
  export type verse_secFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * Filter, which verse_sec to fetch.
     */
    where: verse_secWhereUniqueInput
  }

  /**
   * verse_sec findUniqueOrThrow
   */
  export type verse_secFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * Filter, which verse_sec to fetch.
     */
    where: verse_secWhereUniqueInput
  }

  /**
   * verse_sec findFirst
   */
  export type verse_secFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * Filter, which verse_sec to fetch.
     */
    where?: verse_secWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verse_secs to fetch.
     */
    orderBy?: verse_secOrderByWithRelationInput | verse_secOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verse_secs.
     */
    cursor?: verse_secWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verse_secs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verse_secs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verse_secs.
     */
    distinct?: Verse_secScalarFieldEnum | Verse_secScalarFieldEnum[]
  }

  /**
   * verse_sec findFirstOrThrow
   */
  export type verse_secFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * Filter, which verse_sec to fetch.
     */
    where?: verse_secWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verse_secs to fetch.
     */
    orderBy?: verse_secOrderByWithRelationInput | verse_secOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verse_secs.
     */
    cursor?: verse_secWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verse_secs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verse_secs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verse_secs.
     */
    distinct?: Verse_secScalarFieldEnum | Verse_secScalarFieldEnum[]
  }

  /**
   * verse_sec findMany
   */
  export type verse_secFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * Filter, which verse_secs to fetch.
     */
    where?: verse_secWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verse_secs to fetch.
     */
    orderBy?: verse_secOrderByWithRelationInput | verse_secOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verse_secs.
     */
    cursor?: verse_secWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verse_secs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verse_secs.
     */
    skip?: number
    distinct?: Verse_secScalarFieldEnum | Verse_secScalarFieldEnum[]
  }

  /**
   * verse_sec create
   */
  export type verse_secCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * The data needed to create a verse_sec.
     */
    data: XOR<verse_secCreateInput, verse_secUncheckedCreateInput>
  }

  /**
   * verse_sec createMany
   */
  export type verse_secCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verse_secs.
     */
    data: verse_secCreateManyInput | verse_secCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verse_sec update
   */
  export type verse_secUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * The data needed to update a verse_sec.
     */
    data: XOR<verse_secUpdateInput, verse_secUncheckedUpdateInput>
    /**
     * Choose, which verse_sec to update.
     */
    where: verse_secWhereUniqueInput
  }

  /**
   * verse_sec updateMany
   */
  export type verse_secUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verse_secs.
     */
    data: XOR<verse_secUpdateManyMutationInput, verse_secUncheckedUpdateManyInput>
    /**
     * Filter which verse_secs to update
     */
    where?: verse_secWhereInput
  }

  /**
   * verse_sec upsert
   */
  export type verse_secUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * The filter to search for the verse_sec to update in case it exists.
     */
    where: verse_secWhereUniqueInput
    /**
     * In case the verse_sec found by the `where` argument doesn't exist, create a new verse_sec with this data.
     */
    create: XOR<verse_secCreateInput, verse_secUncheckedCreateInput>
    /**
     * In case the verse_sec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verse_secUpdateInput, verse_secUncheckedUpdateInput>
  }

  /**
   * verse_sec delete
   */
  export type verse_secDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
    /**
     * Filter which verse_sec to delete.
     */
    where: verse_secWhereUniqueInput
  }

  /**
   * verse_sec deleteMany
   */
  export type verse_secDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verse_secs to delete
     */
    where?: verse_secWhereInput
  }

  /**
   * verse_sec without action
   */
  export type verse_secDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verse_sec
     */
    select?: verse_secSelect<ExtArgs> | null
  }


  /**
   * Model versions
   */

  export type AggregateVersions = {
    _count: VersionsCountAggregateOutputType | null
    _avg: VersionsAvgAggregateOutputType | null
    _sum: VersionsSumAggregateOutputType | null
    _min: VersionsMinAggregateOutputType | null
    _max: VersionsMaxAggregateOutputType | null
  }

  export type VersionsAvgAggregateOutputType = {
    id: number | null
    createdid: number | null
    updatedid: number | null
    status: number | null
    uploadnotprocess: number | null
    uploadedid: number | null
    nooftimesupdated: number | null
    version_num: number | null
    lang_id: number | null
    audiotype: number | null
    alignment: number | null
  }

  export type VersionsSumAggregateOutputType = {
    id: number | null
    createdid: number | null
    updatedid: number | null
    status: number | null
    uploadnotprocess: number | null
    uploadedid: number | null
    nooftimesupdated: number | null
    version_num: number | null
    lang_id: number | null
    audiotype: number | null
    alignment: number | null
  }

  export type VersionsMinAggregateOutputType = {
    id: number | null
    version_name: string | null
    metakeywords: string | null
    metadescription: string | null
    createdby: string | null
    updatedby: string | null
    createdid: number | null
    updatedid: number | null
    status: number | null
    updated_at: Date | null
    created_at: Date | null
    uploadnotprocess: number | null
    uploadedid: number | null
    nooftimesupdated: number | null
    version_num: number | null
    lang: string | null
    lang_id: number | null
    audiotype: number | null
    alignment: number | null
  }

  export type VersionsMaxAggregateOutputType = {
    id: number | null
    version_name: string | null
    metakeywords: string | null
    metadescription: string | null
    createdby: string | null
    updatedby: string | null
    createdid: number | null
    updatedid: number | null
    status: number | null
    updated_at: Date | null
    created_at: Date | null
    uploadnotprocess: number | null
    uploadedid: number | null
    nooftimesupdated: number | null
    version_num: number | null
    lang: string | null
    lang_id: number | null
    audiotype: number | null
    alignment: number | null
  }

  export type VersionsCountAggregateOutputType = {
    id: number
    version_name: number
    metakeywords: number
    metadescription: number
    createdby: number
    updatedby: number
    createdid: number
    updatedid: number
    status: number
    updated_at: number
    created_at: number
    uploadnotprocess: number
    uploadedid: number
    nooftimesupdated: number
    version_num: number
    lang: number
    lang_id: number
    audiotype: number
    alignment: number
    _all: number
  }


  export type VersionsAvgAggregateInputType = {
    id?: true
    createdid?: true
    updatedid?: true
    status?: true
    uploadnotprocess?: true
    uploadedid?: true
    nooftimesupdated?: true
    version_num?: true
    lang_id?: true
    audiotype?: true
    alignment?: true
  }

  export type VersionsSumAggregateInputType = {
    id?: true
    createdid?: true
    updatedid?: true
    status?: true
    uploadnotprocess?: true
    uploadedid?: true
    nooftimesupdated?: true
    version_num?: true
    lang_id?: true
    audiotype?: true
    alignment?: true
  }

  export type VersionsMinAggregateInputType = {
    id?: true
    version_name?: true
    metakeywords?: true
    metadescription?: true
    createdby?: true
    updatedby?: true
    createdid?: true
    updatedid?: true
    status?: true
    updated_at?: true
    created_at?: true
    uploadnotprocess?: true
    uploadedid?: true
    nooftimesupdated?: true
    version_num?: true
    lang?: true
    lang_id?: true
    audiotype?: true
    alignment?: true
  }

  export type VersionsMaxAggregateInputType = {
    id?: true
    version_name?: true
    metakeywords?: true
    metadescription?: true
    createdby?: true
    updatedby?: true
    createdid?: true
    updatedid?: true
    status?: true
    updated_at?: true
    created_at?: true
    uploadnotprocess?: true
    uploadedid?: true
    nooftimesupdated?: true
    version_num?: true
    lang?: true
    lang_id?: true
    audiotype?: true
    alignment?: true
  }

  export type VersionsCountAggregateInputType = {
    id?: true
    version_name?: true
    metakeywords?: true
    metadescription?: true
    createdby?: true
    updatedby?: true
    createdid?: true
    updatedid?: true
    status?: true
    updated_at?: true
    created_at?: true
    uploadnotprocess?: true
    uploadedid?: true
    nooftimesupdated?: true
    version_num?: true
    lang?: true
    lang_id?: true
    audiotype?: true
    alignment?: true
    _all?: true
  }

  export type VersionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which versions to aggregate.
     */
    where?: versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of versions to fetch.
     */
    orderBy?: versionsOrderByWithRelationInput | versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned versions
    **/
    _count?: true | VersionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VersionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VersionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VersionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VersionsMaxAggregateInputType
  }

  export type GetVersionsAggregateType<T extends VersionsAggregateArgs> = {
        [P in keyof T & keyof AggregateVersions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVersions[P]>
      : GetScalarType<T[P], AggregateVersions[P]>
  }




  export type versionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: versionsWhereInput
    orderBy?: versionsOrderByWithAggregationInput | versionsOrderByWithAggregationInput[]
    by: VersionsScalarFieldEnum[] | VersionsScalarFieldEnum
    having?: versionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VersionsCountAggregateInputType | true
    _avg?: VersionsAvgAggregateInputType
    _sum?: VersionsSumAggregateInputType
    _min?: VersionsMinAggregateInputType
    _max?: VersionsMaxAggregateInputType
  }

  export type VersionsGroupByOutputType = {
    id: number
    version_name: string
    metakeywords: string | null
    metadescription: string | null
    createdby: string
    updatedby: string
    createdid: number | null
    updatedid: number | null
    status: number | null
    updated_at: Date | null
    created_at: Date | null
    uploadnotprocess: number | null
    uploadedid: number | null
    nooftimesupdated: number
    version_num: number | null
    lang: string | null
    lang_id: number
    audiotype: number
    alignment: number
    _count: VersionsCountAggregateOutputType | null
    _avg: VersionsAvgAggregateOutputType | null
    _sum: VersionsSumAggregateOutputType | null
    _min: VersionsMinAggregateOutputType | null
    _max: VersionsMaxAggregateOutputType | null
  }

  type GetVersionsGroupByPayload<T extends versionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VersionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VersionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VersionsGroupByOutputType[P]>
            : GetScalarType<T[P], VersionsGroupByOutputType[P]>
        }
      >
    >


  export type versionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version_name?: boolean
    metakeywords?: boolean
    metadescription?: boolean
    createdby?: boolean
    updatedby?: boolean
    createdid?: boolean
    updatedid?: boolean
    status?: boolean
    updated_at?: boolean
    created_at?: boolean
    uploadnotprocess?: boolean
    uploadedid?: boolean
    nooftimesupdated?: boolean
    version_num?: boolean
    lang?: boolean
    lang_id?: boolean
    audiotype?: boolean
    alignment?: boolean
  }, ExtArgs["result"]["versions"]>


  export type versionsSelectScalar = {
    id?: boolean
    version_name?: boolean
    metakeywords?: boolean
    metadescription?: boolean
    createdby?: boolean
    updatedby?: boolean
    createdid?: boolean
    updatedid?: boolean
    status?: boolean
    updated_at?: boolean
    created_at?: boolean
    uploadnotprocess?: boolean
    uploadedid?: boolean
    nooftimesupdated?: boolean
    version_num?: boolean
    lang?: boolean
    lang_id?: boolean
    audiotype?: boolean
    alignment?: boolean
  }


  export type $versionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "versions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version_name: string
      metakeywords: string | null
      metadescription: string | null
      createdby: string
      updatedby: string
      createdid: number | null
      updatedid: number | null
      status: number | null
      updated_at: Date | null
      created_at: Date | null
      uploadnotprocess: number | null
      uploadedid: number | null
      nooftimesupdated: number
      version_num: number | null
      lang: string | null
      lang_id: number
      audiotype: number
      alignment: number
    }, ExtArgs["result"]["versions"]>
    composites: {}
  }

  type versionsGetPayload<S extends boolean | null | undefined | versionsDefaultArgs> = $Result.GetResult<Prisma.$versionsPayload, S>

  type versionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<versionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VersionsCountAggregateInputType | true
    }

  export interface versionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['versions'], meta: { name: 'versions' } }
    /**
     * Find zero or one Versions that matches the filter.
     * @param {versionsFindUniqueArgs} args - Arguments to find a Versions
     * @example
     * // Get one Versions
     * const versions = await prisma.versions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends versionsFindUniqueArgs>(args: SelectSubset<T, versionsFindUniqueArgs<ExtArgs>>): Prisma__versionsClient<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Versions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {versionsFindUniqueOrThrowArgs} args - Arguments to find a Versions
     * @example
     * // Get one Versions
     * const versions = await prisma.versions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends versionsFindUniqueOrThrowArgs>(args: SelectSubset<T, versionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__versionsClient<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versionsFindFirstArgs} args - Arguments to find a Versions
     * @example
     * // Get one Versions
     * const versions = await prisma.versions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends versionsFindFirstArgs>(args?: SelectSubset<T, versionsFindFirstArgs<ExtArgs>>): Prisma__versionsClient<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Versions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versionsFindFirstOrThrowArgs} args - Arguments to find a Versions
     * @example
     * // Get one Versions
     * const versions = await prisma.versions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends versionsFindFirstOrThrowArgs>(args?: SelectSubset<T, versionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__versionsClient<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Versions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Versions
     * const versions = await prisma.versions.findMany()
     * 
     * // Get first 10 Versions
     * const versions = await prisma.versions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const versionsWithIdOnly = await prisma.versions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends versionsFindManyArgs>(args?: SelectSubset<T, versionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Versions.
     * @param {versionsCreateArgs} args - Arguments to create a Versions.
     * @example
     * // Create one Versions
     * const Versions = await prisma.versions.create({
     *   data: {
     *     // ... data to create a Versions
     *   }
     * })
     * 
     */
    create<T extends versionsCreateArgs>(args: SelectSubset<T, versionsCreateArgs<ExtArgs>>): Prisma__versionsClient<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Versions.
     * @param {versionsCreateManyArgs} args - Arguments to create many Versions.
     * @example
     * // Create many Versions
     * const versions = await prisma.versions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends versionsCreateManyArgs>(args?: SelectSubset<T, versionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Versions.
     * @param {versionsDeleteArgs} args - Arguments to delete one Versions.
     * @example
     * // Delete one Versions
     * const Versions = await prisma.versions.delete({
     *   where: {
     *     // ... filter to delete one Versions
     *   }
     * })
     * 
     */
    delete<T extends versionsDeleteArgs>(args: SelectSubset<T, versionsDeleteArgs<ExtArgs>>): Prisma__versionsClient<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Versions.
     * @param {versionsUpdateArgs} args - Arguments to update one Versions.
     * @example
     * // Update one Versions
     * const versions = await prisma.versions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends versionsUpdateArgs>(args: SelectSubset<T, versionsUpdateArgs<ExtArgs>>): Prisma__versionsClient<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Versions.
     * @param {versionsDeleteManyArgs} args - Arguments to filter Versions to delete.
     * @example
     * // Delete a few Versions
     * const { count } = await prisma.versions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends versionsDeleteManyArgs>(args?: SelectSubset<T, versionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Versions
     * const versions = await prisma.versions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends versionsUpdateManyArgs>(args: SelectSubset<T, versionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Versions.
     * @param {versionsUpsertArgs} args - Arguments to update or create a Versions.
     * @example
     * // Update or create a Versions
     * const versions = await prisma.versions.upsert({
     *   create: {
     *     // ... data to create a Versions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Versions we want to update
     *   }
     * })
     */
    upsert<T extends versionsUpsertArgs>(args: SelectSubset<T, versionsUpsertArgs<ExtArgs>>): Prisma__versionsClient<$Result.GetResult<Prisma.$versionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versionsCountArgs} args - Arguments to filter Versions to count.
     * @example
     * // Count the number of Versions
     * const count = await prisma.versions.count({
     *   where: {
     *     // ... the filter for the Versions we want to count
     *   }
     * })
    **/
    count<T extends versionsCountArgs>(
      args?: Subset<T, versionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VersionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VersionsAggregateArgs>(args: Subset<T, VersionsAggregateArgs>): Prisma.PrismaPromise<GetVersionsAggregateType<T>>

    /**
     * Group by Versions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versionsGroupByArgs} args - Group by arguments.
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
      T extends versionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: versionsGroupByArgs['orderBy'] }
        : { orderBy?: versionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, versionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVersionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the versions model
   */
  readonly fields: versionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for versions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__versionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the versions model
   */ 
  interface versionsFieldRefs {
    readonly id: FieldRef<"versions", 'Int'>
    readonly version_name: FieldRef<"versions", 'String'>
    readonly metakeywords: FieldRef<"versions", 'String'>
    readonly metadescription: FieldRef<"versions", 'String'>
    readonly createdby: FieldRef<"versions", 'String'>
    readonly updatedby: FieldRef<"versions", 'String'>
    readonly createdid: FieldRef<"versions", 'Int'>
    readonly updatedid: FieldRef<"versions", 'Int'>
    readonly status: FieldRef<"versions", 'Int'>
    readonly updated_at: FieldRef<"versions", 'DateTime'>
    readonly created_at: FieldRef<"versions", 'DateTime'>
    readonly uploadnotprocess: FieldRef<"versions", 'Int'>
    readonly uploadedid: FieldRef<"versions", 'Int'>
    readonly nooftimesupdated: FieldRef<"versions", 'Int'>
    readonly version_num: FieldRef<"versions", 'Int'>
    readonly lang: FieldRef<"versions", 'String'>
    readonly lang_id: FieldRef<"versions", 'Int'>
    readonly audiotype: FieldRef<"versions", 'Int'>
    readonly alignment: FieldRef<"versions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * versions findUnique
   */
  export type versionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * Filter, which versions to fetch.
     */
    where: versionsWhereUniqueInput
  }

  /**
   * versions findUniqueOrThrow
   */
  export type versionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * Filter, which versions to fetch.
     */
    where: versionsWhereUniqueInput
  }

  /**
   * versions findFirst
   */
  export type versionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * Filter, which versions to fetch.
     */
    where?: versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of versions to fetch.
     */
    orderBy?: versionsOrderByWithRelationInput | versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for versions.
     */
    cursor?: versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of versions.
     */
    distinct?: VersionsScalarFieldEnum | VersionsScalarFieldEnum[]
  }

  /**
   * versions findFirstOrThrow
   */
  export type versionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * Filter, which versions to fetch.
     */
    where?: versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of versions to fetch.
     */
    orderBy?: versionsOrderByWithRelationInput | versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for versions.
     */
    cursor?: versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` versions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of versions.
     */
    distinct?: VersionsScalarFieldEnum | VersionsScalarFieldEnum[]
  }

  /**
   * versions findMany
   */
  export type versionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * Filter, which versions to fetch.
     */
    where?: versionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of versions to fetch.
     */
    orderBy?: versionsOrderByWithRelationInput | versionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing versions.
     */
    cursor?: versionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` versions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` versions.
     */
    skip?: number
    distinct?: VersionsScalarFieldEnum | VersionsScalarFieldEnum[]
  }

  /**
   * versions create
   */
  export type versionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * The data needed to create a versions.
     */
    data: XOR<versionsCreateInput, versionsUncheckedCreateInput>
  }

  /**
   * versions createMany
   */
  export type versionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many versions.
     */
    data: versionsCreateManyInput | versionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * versions update
   */
  export type versionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * The data needed to update a versions.
     */
    data: XOR<versionsUpdateInput, versionsUncheckedUpdateInput>
    /**
     * Choose, which versions to update.
     */
    where: versionsWhereUniqueInput
  }

  /**
   * versions updateMany
   */
  export type versionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update versions.
     */
    data: XOR<versionsUpdateManyMutationInput, versionsUncheckedUpdateManyInput>
    /**
     * Filter which versions to update
     */
    where?: versionsWhereInput
  }

  /**
   * versions upsert
   */
  export type versionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * The filter to search for the versions to update in case it exists.
     */
    where: versionsWhereUniqueInput
    /**
     * In case the versions found by the `where` argument doesn't exist, create a new versions with this data.
     */
    create: XOR<versionsCreateInput, versionsUncheckedCreateInput>
    /**
     * In case the versions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<versionsUpdateInput, versionsUncheckedUpdateInput>
  }

  /**
   * versions delete
   */
  export type versionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
    /**
     * Filter which versions to delete.
     */
    where: versionsWhereUniqueInput
  }

  /**
   * versions deleteMany
   */
  export type versionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which versions to delete
     */
    where?: versionsWhereInput
  }

  /**
   * versions without action
   */
  export type versionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the versions
     */
    select?: versionsSelect<ExtArgs> | null
  }


  /**
   * Model videos
   */

  export type AggregateVideos = {
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  export type VideosAvgAggregateOutputType = {
    id: number | null
    title_id: number | null
    is_deleted: number | null
  }

  export type VideosSumAggregateOutputType = {
    id: number | null
    title_id: number | null
    is_deleted: number | null
  }

  export type VideosMinAggregateOutputType = {
    id: number | null
    title_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
  }

  export type VideosMaxAggregateOutputType = {
    id: number | null
    title_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
  }

  export type VideosCountAggregateOutputType = {
    id: number
    title_id: number
    name: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_deleted: number
    _all: number
  }


  export type VideosAvgAggregateInputType = {
    id?: true
    title_id?: true
    is_deleted?: true
  }

  export type VideosSumAggregateInputType = {
    id?: true
    title_id?: true
    is_deleted?: true
  }

  export type VideosMinAggregateInputType = {
    id?: true
    title_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type VideosMaxAggregateInputType = {
    id?: true
    title_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
  }

  export type VideosCountAggregateInputType = {
    id?: true
    title_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_deleted?: true
    _all?: true
  }

  export type VideosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to aggregate.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned videos
    **/
    _count?: true | VideosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideosMaxAggregateInputType
  }

  export type GetVideosAggregateType<T extends VideosAggregateArgs> = {
        [P in keyof T & keyof AggregateVideos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideos[P]>
      : GetScalarType<T[P], AggregateVideos[P]>
  }




  export type videosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: videosWhereInput
    orderBy?: videosOrderByWithAggregationInput | videosOrderByWithAggregationInput[]
    by: VideosScalarFieldEnum[] | VideosScalarFieldEnum
    having?: videosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideosCountAggregateInputType | true
    _avg?: VideosAvgAggregateInputType
    _sum?: VideosSumAggregateInputType
    _min?: VideosMinAggregateInputType
    _max?: VideosMaxAggregateInputType
  }

  export type VideosGroupByOutputType = {
    id: number
    title_id: number
    name: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_deleted: number | null
    _count: VideosCountAggregateOutputType | null
    _avg: VideosAvgAggregateOutputType | null
    _sum: VideosSumAggregateOutputType | null
    _min: VideosMinAggregateOutputType | null
    _max: VideosMaxAggregateOutputType | null
  }

  type GetVideosGroupByPayload<T extends videosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideosGroupByOutputType[P]>
            : GetScalarType<T[P], VideosGroupByOutputType[P]>
        }
      >
    >


  export type videosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videos"]>


  export type videosSelectScalar = {
    id?: boolean
    title_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_deleted?: boolean
  }

  export type videosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | projectsDefaultArgs<ExtArgs>
  }

  export type $videosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "videos"
    objects: {
      projects: Prisma.$projectsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title_id: number
      name: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      is_deleted: number | null
    }, ExtArgs["result"]["videos"]>
    composites: {}
  }

  type videosGetPayload<S extends boolean | null | undefined | videosDefaultArgs> = $Result.GetResult<Prisma.$videosPayload, S>

  type videosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<videosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VideosCountAggregateInputType | true
    }

  export interface videosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['videos'], meta: { name: 'videos' } }
    /**
     * Find zero or one Videos that matches the filter.
     * @param {videosFindUniqueArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends videosFindUniqueArgs>(args: SelectSubset<T, videosFindUniqueArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Videos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {videosFindUniqueOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends videosFindUniqueOrThrowArgs>(args: SelectSubset<T, videosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends videosFindFirstArgs>(args?: SelectSubset<T, videosFindFirstArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Videos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindFirstOrThrowArgs} args - Arguments to find a Videos
     * @example
     * // Get one Videos
     * const videos = await prisma.videos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends videosFindFirstOrThrowArgs>(args?: SelectSubset<T, videosFindFirstOrThrowArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.videos.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.videos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videosWithIdOnly = await prisma.videos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends videosFindManyArgs>(args?: SelectSubset<T, videosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Videos.
     * @param {videosCreateArgs} args - Arguments to create a Videos.
     * @example
     * // Create one Videos
     * const Videos = await prisma.videos.create({
     *   data: {
     *     // ... data to create a Videos
     *   }
     * })
     * 
     */
    create<T extends videosCreateArgs>(args: SelectSubset<T, videosCreateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Videos.
     * @param {videosCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const videos = await prisma.videos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends videosCreateManyArgs>(args?: SelectSubset<T, videosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Videos.
     * @param {videosDeleteArgs} args - Arguments to delete one Videos.
     * @example
     * // Delete one Videos
     * const Videos = await prisma.videos.delete({
     *   where: {
     *     // ... filter to delete one Videos
     *   }
     * })
     * 
     */
    delete<T extends videosDeleteArgs>(args: SelectSubset<T, videosDeleteArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Videos.
     * @param {videosUpdateArgs} args - Arguments to update one Videos.
     * @example
     * // Update one Videos
     * const videos = await prisma.videos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends videosUpdateArgs>(args: SelectSubset<T, videosUpdateArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Videos.
     * @param {videosDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.videos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends videosDeleteManyArgs>(args?: SelectSubset<T, videosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const videos = await prisma.videos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends videosUpdateManyArgs>(args: SelectSubset<T, videosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Videos.
     * @param {videosUpsertArgs} args - Arguments to update or create a Videos.
     * @example
     * // Update or create a Videos
     * const videos = await prisma.videos.upsert({
     *   create: {
     *     // ... data to create a Videos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Videos we want to update
     *   }
     * })
     */
    upsert<T extends videosUpsertArgs>(args: SelectSubset<T, videosUpsertArgs<ExtArgs>>): Prisma__videosClient<$Result.GetResult<Prisma.$videosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.videos.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends videosCountArgs>(
      args?: Subset<T, videosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideosAggregateArgs>(args: Subset<T, VideosAggregateArgs>): Prisma.PrismaPromise<GetVideosAggregateType<T>>

    /**
     * Group by Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {videosGroupByArgs} args - Group by arguments.
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
      T extends videosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: videosGroupByArgs['orderBy'] }
        : { orderBy?: videosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, videosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the videos model
   */
  readonly fields: videosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for videos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__videosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends projectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectsDefaultArgs<ExtArgs>>): Prisma__projectsClient<$Result.GetResult<Prisma.$projectsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the videos model
   */ 
  interface videosFieldRefs {
    readonly id: FieldRef<"videos", 'Int'>
    readonly title_id: FieldRef<"videos", 'Int'>
    readonly name: FieldRef<"videos", 'String'>
    readonly created_at: FieldRef<"videos", 'DateTime'>
    readonly updated_at: FieldRef<"videos", 'DateTime'>
    readonly deleted_at: FieldRef<"videos", 'DateTime'>
    readonly is_deleted: FieldRef<"videos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * videos findUnique
   */
  export type videosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findUniqueOrThrow
   */
  export type videosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos findFirst
   */
  export type videosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findFirstOrThrow
   */
  export type videosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of videos.
     */
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos findMany
   */
  export type videosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter, which videos to fetch.
     */
    where?: videosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of videos to fetch.
     */
    orderBy?: videosOrderByWithRelationInput | videosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing videos.
     */
    cursor?: videosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` videos.
     */
    skip?: number
    distinct?: VideosScalarFieldEnum | VideosScalarFieldEnum[]
  }

  /**
   * videos create
   */
  export type videosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The data needed to create a videos.
     */
    data: XOR<videosCreateInput, videosUncheckedCreateInput>
  }

  /**
   * videos createMany
   */
  export type videosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many videos.
     */
    data: videosCreateManyInput | videosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * videos update
   */
  export type videosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The data needed to update a videos.
     */
    data: XOR<videosUpdateInput, videosUncheckedUpdateInput>
    /**
     * Choose, which videos to update.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos updateMany
   */
  export type videosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update videos.
     */
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyInput>
    /**
     * Filter which videos to update
     */
    where?: videosWhereInput
  }

  /**
   * videos upsert
   */
  export type videosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * The filter to search for the videos to update in case it exists.
     */
    where: videosWhereUniqueInput
    /**
     * In case the videos found by the `where` argument doesn't exist, create a new videos with this data.
     */
    create: XOR<videosCreateInput, videosUncheckedCreateInput>
    /**
     * In case the videos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<videosUpdateInput, videosUncheckedUpdateInput>
  }

  /**
   * videos delete
   */
  export type videosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
    /**
     * Filter which videos to delete.
     */
    where: videosWhereUniqueInput
  }

  /**
   * videos deleteMany
   */
  export type videosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which videos to delete
     */
    where?: videosWhereInput
  }

  /**
   * videos without action
   */
  export type videosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the videos
     */
    select?: videosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: videosInclude<ExtArgs> | null
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


  export const Book_secScalarFieldEnum: {
    book_num: 'book_num',
    title: 'title',
    short_title: 'short_title',
    chapter_count: 'chapter_count'
  };

  export type Book_secScalarFieldEnum = (typeof Book_secScalarFieldEnum)[keyof typeof Book_secScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    title_id: 'title_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    author: 'author',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    font_style: 'font_style',
    title_size: 'title_size',
    title_color: 'title_color',
    title_style: 'title_style',
    content_size: 'content_size',
    content_color: 'content_color',
    content_style: 'content_style',
    credit_size: 'credit_size',
    credit_color: 'credit_color',
    credit_style: 'credit_style'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const Verse_secScalarFieldEnum: {
    book_num: 'book_num',
    chapter_num: 'chapter_num',
    verse_num: 'verse_num',
    content: 'content',
    id: 'id'
  };

  export type Verse_secScalarFieldEnum = (typeof Verse_secScalarFieldEnum)[keyof typeof Verse_secScalarFieldEnum]


  export const VersionsScalarFieldEnum: {
    id: 'id',
    version_name: 'version_name',
    metakeywords: 'metakeywords',
    metadescription: 'metadescription',
    createdby: 'createdby',
    updatedby: 'updatedby',
    createdid: 'createdid',
    updatedid: 'updatedid',
    status: 'status',
    updated_at: 'updated_at',
    created_at: 'created_at',
    uploadnotprocess: 'uploadnotprocess',
    uploadedid: 'uploadedid',
    nooftimesupdated: 'nooftimesupdated',
    version_num: 'version_num',
    lang: 'lang',
    lang_id: 'lang_id',
    audiotype: 'audiotype',
    alignment: 'alignment'
  };

  export type VersionsScalarFieldEnum = (typeof VersionsScalarFieldEnum)[keyof typeof VersionsScalarFieldEnum]


  export const VideosScalarFieldEnum: {
    id: 'id',
    title_id: 'title_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_deleted: 'is_deleted'
  };

  export type VideosScalarFieldEnum = (typeof VideosScalarFieldEnum)[keyof typeof VideosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type book_secWhereInput = {
    AND?: book_secWhereInput | book_secWhereInput[]
    OR?: book_secWhereInput[]
    NOT?: book_secWhereInput | book_secWhereInput[]
    book_num?: IntFilter<"book_sec"> | number
    title?: StringFilter<"book_sec"> | string
    short_title?: StringFilter<"book_sec"> | string
    chapter_count?: IntFilter<"book_sec"> | number
  }

  export type book_secOrderByWithRelationInput = {
    book_num?: SortOrder
    title?: SortOrder
    short_title?: SortOrder
    chapter_count?: SortOrder
  }

  export type book_secWhereUniqueInput = Prisma.AtLeast<{
    book_num?: number
    AND?: book_secWhereInput | book_secWhereInput[]
    OR?: book_secWhereInput[]
    NOT?: book_secWhereInput | book_secWhereInput[]
    title?: StringFilter<"book_sec"> | string
    short_title?: StringFilter<"book_sec"> | string
    chapter_count?: IntFilter<"book_sec"> | number
  }, "book_num">

  export type book_secOrderByWithAggregationInput = {
    book_num?: SortOrder
    title?: SortOrder
    short_title?: SortOrder
    chapter_count?: SortOrder
    _count?: book_secCountOrderByAggregateInput
    _avg?: book_secAvgOrderByAggregateInput
    _max?: book_secMaxOrderByAggregateInput
    _min?: book_secMinOrderByAggregateInput
    _sum?: book_secSumOrderByAggregateInput
  }

  export type book_secScalarWhereWithAggregatesInput = {
    AND?: book_secScalarWhereWithAggregatesInput | book_secScalarWhereWithAggregatesInput[]
    OR?: book_secScalarWhereWithAggregatesInput[]
    NOT?: book_secScalarWhereWithAggregatesInput | book_secScalarWhereWithAggregatesInput[]
    book_num?: IntWithAggregatesFilter<"book_sec"> | number
    title?: StringWithAggregatesFilter<"book_sec"> | string
    short_title?: StringWithAggregatesFilter<"book_sec"> | string
    chapter_count?: IntWithAggregatesFilter<"book_sec"> | number
  }

  export type imagesWhereInput = {
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    id?: IntFilter<"images"> | number
    title_id?: IntFilter<"images"> | number
    name?: StringFilter<"images"> | string
    created_at?: DateTimeNullableFilter<"images"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"images"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"images"> | Date | string | null
    is_deleted?: IntNullableFilter<"images"> | number | null
    projects?: XOR<ProjectsRelationFilter, projectsWhereInput>
  }

  export type imagesOrderByWithRelationInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: imagesWhereInput | imagesWhereInput[]
    OR?: imagesWhereInput[]
    NOT?: imagesWhereInput | imagesWhereInput[]
    title_id?: IntFilter<"images"> | number
    name?: StringFilter<"images"> | string
    created_at?: DateTimeNullableFilter<"images"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"images"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"images"> | Date | string | null
    is_deleted?: IntNullableFilter<"images"> | number | null
    projects?: XOR<ProjectsRelationFilter, projectsWhereInput>
  }, "id">

  export type imagesOrderByWithAggregationInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    _count?: imagesCountOrderByAggregateInput
    _avg?: imagesAvgOrderByAggregateInput
    _max?: imagesMaxOrderByAggregateInput
    _min?: imagesMinOrderByAggregateInput
    _sum?: imagesSumOrderByAggregateInput
  }

  export type imagesScalarWhereWithAggregatesInput = {
    AND?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    OR?: imagesScalarWhereWithAggregatesInput[]
    NOT?: imagesScalarWhereWithAggregatesInput | imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"images"> | number
    title_id?: IntWithAggregatesFilter<"images"> | number
    name?: StringWithAggregatesFilter<"images"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"images"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"images"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"images"> | Date | string | null
    is_deleted?: IntNullableWithAggregatesFilter<"images"> | number | null
  }

  export type projectsWhereInput = {
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    id?: IntFilter<"projects"> | number
    name?: StringFilter<"projects"> | string
    title?: StringNullableFilter<"projects"> | string | null
    author?: StringNullableFilter<"projects"> | string | null
    created_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    is_deleted?: IntNullableFilter<"projects"> | number | null
    images?: ImagesListRelationFilter
    videos?: VideosListRelationFilter
  }

  export type projectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    images?: imagesOrderByRelationAggregateInput
    videos?: videosOrderByRelationAggregateInput
  }

  export type projectsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectsWhereInput | projectsWhereInput[]
    OR?: projectsWhereInput[]
    NOT?: projectsWhereInput | projectsWhereInput[]
    name?: StringFilter<"projects"> | string
    title?: StringNullableFilter<"projects"> | string | null
    author?: StringNullableFilter<"projects"> | string | null
    created_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"projects"> | Date | string | null
    is_deleted?: IntNullableFilter<"projects"> | number | null
    images?: ImagesListRelationFilter
    videos?: VideosListRelationFilter
  }, "id">

  export type projectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    _count?: projectsCountOrderByAggregateInput
    _avg?: projectsAvgOrderByAggregateInput
    _max?: projectsMaxOrderByAggregateInput
    _min?: projectsMinOrderByAggregateInput
    _sum?: projectsSumOrderByAggregateInput
  }

  export type projectsScalarWhereWithAggregatesInput = {
    AND?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    OR?: projectsScalarWhereWithAggregatesInput[]
    NOT?: projectsScalarWhereWithAggregatesInput | projectsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"projects"> | number
    name?: StringWithAggregatesFilter<"projects"> | string
    title?: StringNullableWithAggregatesFilter<"projects"> | string | null
    author?: StringNullableWithAggregatesFilter<"projects"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"projects"> | Date | string | null
    is_deleted?: IntNullableWithAggregatesFilter<"projects"> | number | null
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    id?: IntFilter<"settings"> | number
    font_style?: StringNullableFilter<"settings"> | string | null
    title_size?: IntNullableFilter<"settings"> | number | null
    title_color?: StringNullableFilter<"settings"> | string | null
    title_style?: StringNullableFilter<"settings"> | string | null
    content_size?: IntNullableFilter<"settings"> | number | null
    content_color?: StringNullableFilter<"settings"> | string | null
    content_style?: StringNullableFilter<"settings"> | string | null
    credit_size?: IntNullableFilter<"settings"> | number | null
    credit_color?: StringNullableFilter<"settings"> | string | null
    credit_style?: StringNullableFilter<"settings"> | string | null
  }

  export type settingsOrderByWithRelationInput = {
    id?: SortOrder
    font_style?: SortOrderInput | SortOrder
    title_size?: SortOrderInput | SortOrder
    title_color?: SortOrderInput | SortOrder
    title_style?: SortOrderInput | SortOrder
    content_size?: SortOrderInput | SortOrder
    content_color?: SortOrderInput | SortOrder
    content_style?: SortOrderInput | SortOrder
    credit_size?: SortOrderInput | SortOrder
    credit_color?: SortOrderInput | SortOrder
    credit_style?: SortOrderInput | SortOrder
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    font_style?: StringNullableFilter<"settings"> | string | null
    title_size?: IntNullableFilter<"settings"> | number | null
    title_color?: StringNullableFilter<"settings"> | string | null
    title_style?: StringNullableFilter<"settings"> | string | null
    content_size?: IntNullableFilter<"settings"> | number | null
    content_color?: StringNullableFilter<"settings"> | string | null
    content_style?: StringNullableFilter<"settings"> | string | null
    credit_size?: IntNullableFilter<"settings"> | number | null
    credit_color?: StringNullableFilter<"settings"> | string | null
    credit_style?: StringNullableFilter<"settings"> | string | null
  }, "id">

  export type settingsOrderByWithAggregationInput = {
    id?: SortOrder
    font_style?: SortOrderInput | SortOrder
    title_size?: SortOrderInput | SortOrder
    title_color?: SortOrderInput | SortOrder
    title_style?: SortOrderInput | SortOrder
    content_size?: SortOrderInput | SortOrder
    content_color?: SortOrderInput | SortOrder
    content_style?: SortOrderInput | SortOrder
    credit_size?: SortOrderInput | SortOrder
    credit_color?: SortOrderInput | SortOrder
    credit_style?: SortOrderInput | SortOrder
    _count?: settingsCountOrderByAggregateInput
    _avg?: settingsAvgOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
    _sum?: settingsSumOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"settings"> | number
    font_style?: StringNullableWithAggregatesFilter<"settings"> | string | null
    title_size?: IntNullableWithAggregatesFilter<"settings"> | number | null
    title_color?: StringNullableWithAggregatesFilter<"settings"> | string | null
    title_style?: StringNullableWithAggregatesFilter<"settings"> | string | null
    content_size?: IntNullableWithAggregatesFilter<"settings"> | number | null
    content_color?: StringNullableWithAggregatesFilter<"settings"> | string | null
    content_style?: StringNullableWithAggregatesFilter<"settings"> | string | null
    credit_size?: IntNullableWithAggregatesFilter<"settings"> | number | null
    credit_color?: StringNullableWithAggregatesFilter<"settings"> | string | null
    credit_style?: StringNullableWithAggregatesFilter<"settings"> | string | null
  }

  export type verse_secWhereInput = {
    AND?: verse_secWhereInput | verse_secWhereInput[]
    OR?: verse_secWhereInput[]
    NOT?: verse_secWhereInput | verse_secWhereInput[]
    book_num?: IntFilter<"verse_sec"> | number
    chapter_num?: IntFilter<"verse_sec"> | number
    verse_num?: IntFilter<"verse_sec"> | number
    content?: StringFilter<"verse_sec"> | string
    id?: IntFilter<"verse_sec"> | number
  }

  export type verse_secOrderByWithRelationInput = {
    book_num?: SortOrder
    chapter_num?: SortOrder
    verse_num?: SortOrder
    content?: SortOrder
    id?: SortOrder
  }

  export type verse_secWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: verse_secWhereInput | verse_secWhereInput[]
    OR?: verse_secWhereInput[]
    NOT?: verse_secWhereInput | verse_secWhereInput[]
    book_num?: IntFilter<"verse_sec"> | number
    chapter_num?: IntFilter<"verse_sec"> | number
    verse_num?: IntFilter<"verse_sec"> | number
    content?: StringFilter<"verse_sec"> | string
  }, "id">

  export type verse_secOrderByWithAggregationInput = {
    book_num?: SortOrder
    chapter_num?: SortOrder
    verse_num?: SortOrder
    content?: SortOrder
    id?: SortOrder
    _count?: verse_secCountOrderByAggregateInput
    _avg?: verse_secAvgOrderByAggregateInput
    _max?: verse_secMaxOrderByAggregateInput
    _min?: verse_secMinOrderByAggregateInput
    _sum?: verse_secSumOrderByAggregateInput
  }

  export type verse_secScalarWhereWithAggregatesInput = {
    AND?: verse_secScalarWhereWithAggregatesInput | verse_secScalarWhereWithAggregatesInput[]
    OR?: verse_secScalarWhereWithAggregatesInput[]
    NOT?: verse_secScalarWhereWithAggregatesInput | verse_secScalarWhereWithAggregatesInput[]
    book_num?: IntWithAggregatesFilter<"verse_sec"> | number
    chapter_num?: IntWithAggregatesFilter<"verse_sec"> | number
    verse_num?: IntWithAggregatesFilter<"verse_sec"> | number
    content?: StringWithAggregatesFilter<"verse_sec"> | string
    id?: IntWithAggregatesFilter<"verse_sec"> | number
  }

  export type versionsWhereInput = {
    AND?: versionsWhereInput | versionsWhereInput[]
    OR?: versionsWhereInput[]
    NOT?: versionsWhereInput | versionsWhereInput[]
    id?: IntFilter<"versions"> | number
    version_name?: StringFilter<"versions"> | string
    metakeywords?: StringNullableFilter<"versions"> | string | null
    metadescription?: StringNullableFilter<"versions"> | string | null
    createdby?: StringFilter<"versions"> | string
    updatedby?: StringFilter<"versions"> | string
    createdid?: IntNullableFilter<"versions"> | number | null
    updatedid?: IntNullableFilter<"versions"> | number | null
    status?: IntNullableFilter<"versions"> | number | null
    updated_at?: DateTimeNullableFilter<"versions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"versions"> | Date | string | null
    uploadnotprocess?: IntNullableFilter<"versions"> | number | null
    uploadedid?: IntNullableFilter<"versions"> | number | null
    nooftimesupdated?: IntFilter<"versions"> | number
    version_num?: IntNullableFilter<"versions"> | number | null
    lang?: StringNullableFilter<"versions"> | string | null
    lang_id?: IntFilter<"versions"> | number
    audiotype?: IntFilter<"versions"> | number
    alignment?: IntFilter<"versions"> | number
  }

  export type versionsOrderByWithRelationInput = {
    id?: SortOrder
    version_name?: SortOrder
    metakeywords?: SortOrderInput | SortOrder
    metadescription?: SortOrderInput | SortOrder
    createdby?: SortOrder
    updatedby?: SortOrder
    createdid?: SortOrderInput | SortOrder
    updatedid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    uploadnotprocess?: SortOrderInput | SortOrder
    uploadedid?: SortOrderInput | SortOrder
    nooftimesupdated?: SortOrder
    version_num?: SortOrderInput | SortOrder
    lang?: SortOrderInput | SortOrder
    lang_id?: SortOrder
    audiotype?: SortOrder
    alignment?: SortOrder
  }

  export type versionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: versionsWhereInput | versionsWhereInput[]
    OR?: versionsWhereInput[]
    NOT?: versionsWhereInput | versionsWhereInput[]
    version_name?: StringFilter<"versions"> | string
    metakeywords?: StringNullableFilter<"versions"> | string | null
    metadescription?: StringNullableFilter<"versions"> | string | null
    createdby?: StringFilter<"versions"> | string
    updatedby?: StringFilter<"versions"> | string
    createdid?: IntNullableFilter<"versions"> | number | null
    updatedid?: IntNullableFilter<"versions"> | number | null
    status?: IntNullableFilter<"versions"> | number | null
    updated_at?: DateTimeNullableFilter<"versions"> | Date | string | null
    created_at?: DateTimeNullableFilter<"versions"> | Date | string | null
    uploadnotprocess?: IntNullableFilter<"versions"> | number | null
    uploadedid?: IntNullableFilter<"versions"> | number | null
    nooftimesupdated?: IntFilter<"versions"> | number
    version_num?: IntNullableFilter<"versions"> | number | null
    lang?: StringNullableFilter<"versions"> | string | null
    lang_id?: IntFilter<"versions"> | number
    audiotype?: IntFilter<"versions"> | number
    alignment?: IntFilter<"versions"> | number
  }, "id">

  export type versionsOrderByWithAggregationInput = {
    id?: SortOrder
    version_name?: SortOrder
    metakeywords?: SortOrderInput | SortOrder
    metadescription?: SortOrderInput | SortOrder
    createdby?: SortOrder
    updatedby?: SortOrder
    createdid?: SortOrderInput | SortOrder
    updatedid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    uploadnotprocess?: SortOrderInput | SortOrder
    uploadedid?: SortOrderInput | SortOrder
    nooftimesupdated?: SortOrder
    version_num?: SortOrderInput | SortOrder
    lang?: SortOrderInput | SortOrder
    lang_id?: SortOrder
    audiotype?: SortOrder
    alignment?: SortOrder
    _count?: versionsCountOrderByAggregateInput
    _avg?: versionsAvgOrderByAggregateInput
    _max?: versionsMaxOrderByAggregateInput
    _min?: versionsMinOrderByAggregateInput
    _sum?: versionsSumOrderByAggregateInput
  }

  export type versionsScalarWhereWithAggregatesInput = {
    AND?: versionsScalarWhereWithAggregatesInput | versionsScalarWhereWithAggregatesInput[]
    OR?: versionsScalarWhereWithAggregatesInput[]
    NOT?: versionsScalarWhereWithAggregatesInput | versionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"versions"> | number
    version_name?: StringWithAggregatesFilter<"versions"> | string
    metakeywords?: StringNullableWithAggregatesFilter<"versions"> | string | null
    metadescription?: StringNullableWithAggregatesFilter<"versions"> | string | null
    createdby?: StringWithAggregatesFilter<"versions"> | string
    updatedby?: StringWithAggregatesFilter<"versions"> | string
    createdid?: IntNullableWithAggregatesFilter<"versions"> | number | null
    updatedid?: IntNullableWithAggregatesFilter<"versions"> | number | null
    status?: IntNullableWithAggregatesFilter<"versions"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"versions"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"versions"> | Date | string | null
    uploadnotprocess?: IntNullableWithAggregatesFilter<"versions"> | number | null
    uploadedid?: IntNullableWithAggregatesFilter<"versions"> | number | null
    nooftimesupdated?: IntWithAggregatesFilter<"versions"> | number
    version_num?: IntNullableWithAggregatesFilter<"versions"> | number | null
    lang?: StringNullableWithAggregatesFilter<"versions"> | string | null
    lang_id?: IntWithAggregatesFilter<"versions"> | number
    audiotype?: IntWithAggregatesFilter<"versions"> | number
    alignment?: IntWithAggregatesFilter<"versions"> | number
  }

  export type videosWhereInput = {
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    id?: IntFilter<"videos"> | number
    title_id?: IntFilter<"videos"> | number
    name?: StringFilter<"videos"> | string
    created_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    is_deleted?: IntNullableFilter<"videos"> | number | null
    projects?: XOR<ProjectsRelationFilter, projectsWhereInput>
  }

  export type videosOrderByWithRelationInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    projects?: projectsOrderByWithRelationInput
  }

  export type videosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: videosWhereInput | videosWhereInput[]
    OR?: videosWhereInput[]
    NOT?: videosWhereInput | videosWhereInput[]
    title_id?: IntFilter<"videos"> | number
    name?: StringFilter<"videos"> | string
    created_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    is_deleted?: IntNullableFilter<"videos"> | number | null
    projects?: XOR<ProjectsRelationFilter, projectsWhereInput>
  }, "id">

  export type videosOrderByWithAggregationInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    _count?: videosCountOrderByAggregateInput
    _avg?: videosAvgOrderByAggregateInput
    _max?: videosMaxOrderByAggregateInput
    _min?: videosMinOrderByAggregateInput
    _sum?: videosSumOrderByAggregateInput
  }

  export type videosScalarWhereWithAggregatesInput = {
    AND?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    OR?: videosScalarWhereWithAggregatesInput[]
    NOT?: videosScalarWhereWithAggregatesInput | videosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"videos"> | number
    title_id?: IntWithAggregatesFilter<"videos"> | number
    name?: StringWithAggregatesFilter<"videos"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"videos"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"videos"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"videos"> | Date | string | null
    is_deleted?: IntNullableWithAggregatesFilter<"videos"> | number | null
  }

  export type book_secCreateInput = {
    book_num: number
    title: string
    short_title: string
    chapter_count: number
  }

  export type book_secUncheckedCreateInput = {
    book_num: number
    title: string
    short_title: string
    chapter_count: number
  }

  export type book_secUpdateInput = {
    book_num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_title?: StringFieldUpdateOperationsInput | string
    chapter_count?: IntFieldUpdateOperationsInput | number
  }

  export type book_secUncheckedUpdateInput = {
    book_num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_title?: StringFieldUpdateOperationsInput | string
    chapter_count?: IntFieldUpdateOperationsInput | number
  }

  export type book_secCreateManyInput = {
    book_num: number
    title: string
    short_title: string
    chapter_count: number
  }

  export type book_secUpdateManyMutationInput = {
    book_num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_title?: StringFieldUpdateOperationsInput | string
    chapter_count?: IntFieldUpdateOperationsInput | number
  }

  export type book_secUncheckedUpdateManyInput = {
    book_num?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    short_title?: StringFieldUpdateOperationsInput | string
    chapter_count?: IntFieldUpdateOperationsInput | number
  }

  export type imagesCreateInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
    projects: projectsCreateNestedOneWithoutImagesInput
  }

  export type imagesUncheckedCreateInput = {
    id?: number
    title_id: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type imagesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
    projects?: projectsUpdateOneRequiredWithoutImagesNestedInput
  }

  export type imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type imagesCreateManyInput = {
    id?: number
    title_id: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type imagesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectsCreateInput = {
    name: string
    title?: string | null
    author?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
    images?: imagesCreateNestedManyWithoutProjectsInput
    videos?: videosCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateInput = {
    id?: number
    name: string
    title?: string | null
    author?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
    images?: imagesUncheckedCreateNestedManyWithoutProjectsInput
    videos?: videosUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
    images?: imagesUpdateManyWithoutProjectsNestedInput
    videos?: videosUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
    images?: imagesUncheckedUpdateManyWithoutProjectsNestedInput
    videos?: videosUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type projectsCreateManyInput = {
    id?: number
    name: string
    title?: string | null
    author?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type projectsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type settingsCreateInput = {
    font_style?: string | null
    title_size?: number | null
    title_color?: string | null
    title_style?: string | null
    content_size?: number | null
    content_color?: string | null
    content_style?: string | null
    credit_size?: number | null
    credit_color?: string | null
    credit_style?: string | null
  }

  export type settingsUncheckedCreateInput = {
    id?: number
    font_style?: string | null
    title_size?: number | null
    title_color?: string | null
    title_style?: string | null
    content_size?: number | null
    content_color?: string | null
    content_style?: string | null
    credit_size?: number | null
    credit_color?: string | null
    credit_style?: string | null
  }

  export type settingsUpdateInput = {
    font_style?: NullableStringFieldUpdateOperationsInput | string | null
    title_size?: NullableIntFieldUpdateOperationsInput | number | null
    title_color?: NullableStringFieldUpdateOperationsInput | string | null
    title_style?: NullableStringFieldUpdateOperationsInput | string | null
    content_size?: NullableIntFieldUpdateOperationsInput | number | null
    content_color?: NullableStringFieldUpdateOperationsInput | string | null
    content_style?: NullableStringFieldUpdateOperationsInput | string | null
    credit_size?: NullableIntFieldUpdateOperationsInput | number | null
    credit_color?: NullableStringFieldUpdateOperationsInput | string | null
    credit_style?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type settingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    font_style?: NullableStringFieldUpdateOperationsInput | string | null
    title_size?: NullableIntFieldUpdateOperationsInput | number | null
    title_color?: NullableStringFieldUpdateOperationsInput | string | null
    title_style?: NullableStringFieldUpdateOperationsInput | string | null
    content_size?: NullableIntFieldUpdateOperationsInput | number | null
    content_color?: NullableStringFieldUpdateOperationsInput | string | null
    content_style?: NullableStringFieldUpdateOperationsInput | string | null
    credit_size?: NullableIntFieldUpdateOperationsInput | number | null
    credit_color?: NullableStringFieldUpdateOperationsInput | string | null
    credit_style?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type settingsCreateManyInput = {
    id?: number
    font_style?: string | null
    title_size?: number | null
    title_color?: string | null
    title_style?: string | null
    content_size?: number | null
    content_color?: string | null
    content_style?: string | null
    credit_size?: number | null
    credit_color?: string | null
    credit_style?: string | null
  }

  export type settingsUpdateManyMutationInput = {
    font_style?: NullableStringFieldUpdateOperationsInput | string | null
    title_size?: NullableIntFieldUpdateOperationsInput | number | null
    title_color?: NullableStringFieldUpdateOperationsInput | string | null
    title_style?: NullableStringFieldUpdateOperationsInput | string | null
    content_size?: NullableIntFieldUpdateOperationsInput | number | null
    content_color?: NullableStringFieldUpdateOperationsInput | string | null
    content_style?: NullableStringFieldUpdateOperationsInput | string | null
    credit_size?: NullableIntFieldUpdateOperationsInput | number | null
    credit_color?: NullableStringFieldUpdateOperationsInput | string | null
    credit_style?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type settingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    font_style?: NullableStringFieldUpdateOperationsInput | string | null
    title_size?: NullableIntFieldUpdateOperationsInput | number | null
    title_color?: NullableStringFieldUpdateOperationsInput | string | null
    title_style?: NullableStringFieldUpdateOperationsInput | string | null
    content_size?: NullableIntFieldUpdateOperationsInput | number | null
    content_color?: NullableStringFieldUpdateOperationsInput | string | null
    content_style?: NullableStringFieldUpdateOperationsInput | string | null
    credit_size?: NullableIntFieldUpdateOperationsInput | number | null
    credit_color?: NullableStringFieldUpdateOperationsInput | string | null
    credit_style?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type verse_secCreateInput = {
    book_num: number
    chapter_num: number
    verse_num: number
    content: string
  }

  export type verse_secUncheckedCreateInput = {
    book_num: number
    chapter_num: number
    verse_num: number
    content: string
    id?: number
  }

  export type verse_secUpdateInput = {
    book_num?: IntFieldUpdateOperationsInput | number
    chapter_num?: IntFieldUpdateOperationsInput | number
    verse_num?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type verse_secUncheckedUpdateInput = {
    book_num?: IntFieldUpdateOperationsInput | number
    chapter_num?: IntFieldUpdateOperationsInput | number
    verse_num?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type verse_secCreateManyInput = {
    book_num: number
    chapter_num: number
    verse_num: number
    content: string
    id?: number
  }

  export type verse_secUpdateManyMutationInput = {
    book_num?: IntFieldUpdateOperationsInput | number
    chapter_num?: IntFieldUpdateOperationsInput | number
    verse_num?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type verse_secUncheckedUpdateManyInput = {
    book_num?: IntFieldUpdateOperationsInput | number
    chapter_num?: IntFieldUpdateOperationsInput | number
    verse_num?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
  }

  export type versionsCreateInput = {
    version_name: string
    metakeywords?: string | null
    metadescription?: string | null
    createdby: string
    updatedby: string
    createdid?: number | null
    updatedid?: number | null
    status?: number | null
    updated_at?: Date | string | null
    created_at?: Date | string | null
    uploadnotprocess?: number | null
    uploadedid?: number | null
    nooftimesupdated?: number
    version_num?: number | null
    lang?: string | null
    lang_id?: number
    audiotype?: number
    alignment?: number
  }

  export type versionsUncheckedCreateInput = {
    id?: number
    version_name: string
    metakeywords?: string | null
    metadescription?: string | null
    createdby: string
    updatedby: string
    createdid?: number | null
    updatedid?: number | null
    status?: number | null
    updated_at?: Date | string | null
    created_at?: Date | string | null
    uploadnotprocess?: number | null
    uploadedid?: number | null
    nooftimesupdated?: number
    version_num?: number | null
    lang?: string | null
    lang_id?: number
    audiotype?: number
    alignment?: number
  }

  export type versionsUpdateInput = {
    version_name?: StringFieldUpdateOperationsInput | string
    metakeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metadescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdby?: StringFieldUpdateOperationsInput | string
    updatedby?: StringFieldUpdateOperationsInput | string
    createdid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploadnotprocess?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedid?: NullableIntFieldUpdateOperationsInput | number | null
    nooftimesupdated?: IntFieldUpdateOperationsInput | number
    version_num?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    lang_id?: IntFieldUpdateOperationsInput | number
    audiotype?: IntFieldUpdateOperationsInput | number
    alignment?: IntFieldUpdateOperationsInput | number
  }

  export type versionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version_name?: StringFieldUpdateOperationsInput | string
    metakeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metadescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdby?: StringFieldUpdateOperationsInput | string
    updatedby?: StringFieldUpdateOperationsInput | string
    createdid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploadnotprocess?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedid?: NullableIntFieldUpdateOperationsInput | number | null
    nooftimesupdated?: IntFieldUpdateOperationsInput | number
    version_num?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    lang_id?: IntFieldUpdateOperationsInput | number
    audiotype?: IntFieldUpdateOperationsInput | number
    alignment?: IntFieldUpdateOperationsInput | number
  }

  export type versionsCreateManyInput = {
    id?: number
    version_name: string
    metakeywords?: string | null
    metadescription?: string | null
    createdby: string
    updatedby: string
    createdid?: number | null
    updatedid?: number | null
    status?: number | null
    updated_at?: Date | string | null
    created_at?: Date | string | null
    uploadnotprocess?: number | null
    uploadedid?: number | null
    nooftimesupdated?: number
    version_num?: number | null
    lang?: string | null
    lang_id?: number
    audiotype?: number
    alignment?: number
  }

  export type versionsUpdateManyMutationInput = {
    version_name?: StringFieldUpdateOperationsInput | string
    metakeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metadescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdby?: StringFieldUpdateOperationsInput | string
    updatedby?: StringFieldUpdateOperationsInput | string
    createdid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploadnotprocess?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedid?: NullableIntFieldUpdateOperationsInput | number | null
    nooftimesupdated?: IntFieldUpdateOperationsInput | number
    version_num?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    lang_id?: IntFieldUpdateOperationsInput | number
    audiotype?: IntFieldUpdateOperationsInput | number
    alignment?: IntFieldUpdateOperationsInput | number
  }

  export type versionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version_name?: StringFieldUpdateOperationsInput | string
    metakeywords?: NullableStringFieldUpdateOperationsInput | string | null
    metadescription?: NullableStringFieldUpdateOperationsInput | string | null
    createdby?: StringFieldUpdateOperationsInput | string
    updatedby?: StringFieldUpdateOperationsInput | string
    createdid?: NullableIntFieldUpdateOperationsInput | number | null
    updatedid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    uploadnotprocess?: NullableIntFieldUpdateOperationsInput | number | null
    uploadedid?: NullableIntFieldUpdateOperationsInput | number | null
    nooftimesupdated?: IntFieldUpdateOperationsInput | number
    version_num?: NullableIntFieldUpdateOperationsInput | number | null
    lang?: NullableStringFieldUpdateOperationsInput | string | null
    lang_id?: IntFieldUpdateOperationsInput | number
    audiotype?: IntFieldUpdateOperationsInput | number
    alignment?: IntFieldUpdateOperationsInput | number
  }

  export type videosCreateInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
    projects: projectsCreateNestedOneWithoutVideosInput
  }

  export type videosUncheckedCreateInput = {
    id?: number
    title_id: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type videosUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
    projects?: projectsUpdateOneRequiredWithoutVideosNestedInput
  }

  export type videosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosCreateManyInput = {
    id?: number
    title_id: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type videosUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type book_secCountOrderByAggregateInput = {
    book_num?: SortOrder
    title?: SortOrder
    short_title?: SortOrder
    chapter_count?: SortOrder
  }

  export type book_secAvgOrderByAggregateInput = {
    book_num?: SortOrder
    chapter_count?: SortOrder
  }

  export type book_secMaxOrderByAggregateInput = {
    book_num?: SortOrder
    title?: SortOrder
    short_title?: SortOrder
    chapter_count?: SortOrder
  }

  export type book_secMinOrderByAggregateInput = {
    book_num?: SortOrder
    title?: SortOrder
    short_title?: SortOrder
    chapter_count?: SortOrder
  }

  export type book_secSumOrderByAggregateInput = {
    book_num?: SortOrder
    chapter_count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProjectsRelationFilter = {
    is?: projectsWhereInput
    isNot?: projectsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type imagesCountOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    is_deleted?: SortOrder
  }

  export type imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type imagesMinOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type imagesSumOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    is_deleted?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ImagesListRelationFilter = {
    every?: imagesWhereInput
    some?: imagesWhereInput
    none?: imagesWhereInput
  }

  export type VideosListRelationFilter = {
    every?: videosWhereInput
    some?: videosWhereInput
    none?: videosWhereInput
  }

  export type imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type videosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    author?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type projectsAvgOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
  }

  export type projectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    author?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type projectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    author?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type projectsSumOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type settingsCountOrderByAggregateInput = {
    id?: SortOrder
    font_style?: SortOrder
    title_size?: SortOrder
    title_color?: SortOrder
    title_style?: SortOrder
    content_size?: SortOrder
    content_color?: SortOrder
    content_style?: SortOrder
    credit_size?: SortOrder
    credit_color?: SortOrder
    credit_style?: SortOrder
  }

  export type settingsAvgOrderByAggregateInput = {
    id?: SortOrder
    title_size?: SortOrder
    content_size?: SortOrder
    credit_size?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    font_style?: SortOrder
    title_size?: SortOrder
    title_color?: SortOrder
    title_style?: SortOrder
    content_size?: SortOrder
    content_color?: SortOrder
    content_style?: SortOrder
    credit_size?: SortOrder
    credit_color?: SortOrder
    credit_style?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    id?: SortOrder
    font_style?: SortOrder
    title_size?: SortOrder
    title_color?: SortOrder
    title_style?: SortOrder
    content_size?: SortOrder
    content_color?: SortOrder
    content_style?: SortOrder
    credit_size?: SortOrder
    credit_color?: SortOrder
    credit_style?: SortOrder
  }

  export type settingsSumOrderByAggregateInput = {
    id?: SortOrder
    title_size?: SortOrder
    content_size?: SortOrder
    credit_size?: SortOrder
  }

  export type verse_secCountOrderByAggregateInput = {
    book_num?: SortOrder
    chapter_num?: SortOrder
    verse_num?: SortOrder
    content?: SortOrder
    id?: SortOrder
  }

  export type verse_secAvgOrderByAggregateInput = {
    book_num?: SortOrder
    chapter_num?: SortOrder
    verse_num?: SortOrder
    id?: SortOrder
  }

  export type verse_secMaxOrderByAggregateInput = {
    book_num?: SortOrder
    chapter_num?: SortOrder
    verse_num?: SortOrder
    content?: SortOrder
    id?: SortOrder
  }

  export type verse_secMinOrderByAggregateInput = {
    book_num?: SortOrder
    chapter_num?: SortOrder
    verse_num?: SortOrder
    content?: SortOrder
    id?: SortOrder
  }

  export type verse_secSumOrderByAggregateInput = {
    book_num?: SortOrder
    chapter_num?: SortOrder
    verse_num?: SortOrder
    id?: SortOrder
  }

  export type versionsCountOrderByAggregateInput = {
    id?: SortOrder
    version_name?: SortOrder
    metakeywords?: SortOrder
    metadescription?: SortOrder
    createdby?: SortOrder
    updatedby?: SortOrder
    createdid?: SortOrder
    updatedid?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    uploadnotprocess?: SortOrder
    uploadedid?: SortOrder
    nooftimesupdated?: SortOrder
    version_num?: SortOrder
    lang?: SortOrder
    lang_id?: SortOrder
    audiotype?: SortOrder
    alignment?: SortOrder
  }

  export type versionsAvgOrderByAggregateInput = {
    id?: SortOrder
    createdid?: SortOrder
    updatedid?: SortOrder
    status?: SortOrder
    uploadnotprocess?: SortOrder
    uploadedid?: SortOrder
    nooftimesupdated?: SortOrder
    version_num?: SortOrder
    lang_id?: SortOrder
    audiotype?: SortOrder
    alignment?: SortOrder
  }

  export type versionsMaxOrderByAggregateInput = {
    id?: SortOrder
    version_name?: SortOrder
    metakeywords?: SortOrder
    metadescription?: SortOrder
    createdby?: SortOrder
    updatedby?: SortOrder
    createdid?: SortOrder
    updatedid?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    uploadnotprocess?: SortOrder
    uploadedid?: SortOrder
    nooftimesupdated?: SortOrder
    version_num?: SortOrder
    lang?: SortOrder
    lang_id?: SortOrder
    audiotype?: SortOrder
    alignment?: SortOrder
  }

  export type versionsMinOrderByAggregateInput = {
    id?: SortOrder
    version_name?: SortOrder
    metakeywords?: SortOrder
    metadescription?: SortOrder
    createdby?: SortOrder
    updatedby?: SortOrder
    createdid?: SortOrder
    updatedid?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    uploadnotprocess?: SortOrder
    uploadedid?: SortOrder
    nooftimesupdated?: SortOrder
    version_num?: SortOrder
    lang?: SortOrder
    lang_id?: SortOrder
    audiotype?: SortOrder
    alignment?: SortOrder
  }

  export type versionsSumOrderByAggregateInput = {
    id?: SortOrder
    createdid?: SortOrder
    updatedid?: SortOrder
    status?: SortOrder
    uploadnotprocess?: SortOrder
    uploadedid?: SortOrder
    nooftimesupdated?: SortOrder
    version_num?: SortOrder
    lang_id?: SortOrder
    audiotype?: SortOrder
    alignment?: SortOrder
  }

  export type videosCountOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type videosAvgOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    is_deleted?: SortOrder
  }

  export type videosMaxOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type videosMinOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_deleted?: SortOrder
  }

  export type videosSumOrderByAggregateInput = {
    id?: SortOrder
    title_id?: SortOrder
    is_deleted?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type projectsCreateNestedOneWithoutImagesInput = {
    create?: XOR<projectsCreateWithoutImagesInput, projectsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: projectsCreateOrConnectWithoutImagesInput
    connect?: projectsWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectsUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<projectsCreateWithoutImagesInput, projectsUncheckedCreateWithoutImagesInput>
    connectOrCreate?: projectsCreateOrConnectWithoutImagesInput
    upsert?: projectsUpsertWithoutImagesInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutImagesInput, projectsUpdateWithoutImagesInput>, projectsUncheckedUpdateWithoutImagesInput>
  }

  export type imagesCreateNestedManyWithoutProjectsInput = {
    create?: XOR<imagesCreateWithoutProjectsInput, imagesUncheckedCreateWithoutProjectsInput> | imagesCreateWithoutProjectsInput[] | imagesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutProjectsInput | imagesCreateOrConnectWithoutProjectsInput[]
    createMany?: imagesCreateManyProjectsInputEnvelope
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
  }

  export type videosCreateNestedManyWithoutProjectsInput = {
    create?: XOR<videosCreateWithoutProjectsInput, videosUncheckedCreateWithoutProjectsInput> | videosCreateWithoutProjectsInput[] | videosUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: videosCreateOrConnectWithoutProjectsInput | videosCreateOrConnectWithoutProjectsInput[]
    createMany?: videosCreateManyProjectsInputEnvelope
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
  }

  export type imagesUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<imagesCreateWithoutProjectsInput, imagesUncheckedCreateWithoutProjectsInput> | imagesCreateWithoutProjectsInput[] | imagesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutProjectsInput | imagesCreateOrConnectWithoutProjectsInput[]
    createMany?: imagesCreateManyProjectsInputEnvelope
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
  }

  export type videosUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<videosCreateWithoutProjectsInput, videosUncheckedCreateWithoutProjectsInput> | videosCreateWithoutProjectsInput[] | videosUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: videosCreateOrConnectWithoutProjectsInput | videosCreateOrConnectWithoutProjectsInput[]
    createMany?: videosCreateManyProjectsInputEnvelope
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type imagesUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<imagesCreateWithoutProjectsInput, imagesUncheckedCreateWithoutProjectsInput> | imagesCreateWithoutProjectsInput[] | imagesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutProjectsInput | imagesCreateOrConnectWithoutProjectsInput[]
    upsert?: imagesUpsertWithWhereUniqueWithoutProjectsInput | imagesUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: imagesCreateManyProjectsInputEnvelope
    set?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    disconnect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    delete?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    update?: imagesUpdateWithWhereUniqueWithoutProjectsInput | imagesUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: imagesUpdateManyWithWhereWithoutProjectsInput | imagesUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: imagesScalarWhereInput | imagesScalarWhereInput[]
  }

  export type videosUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<videosCreateWithoutProjectsInput, videosUncheckedCreateWithoutProjectsInput> | videosCreateWithoutProjectsInput[] | videosUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: videosCreateOrConnectWithoutProjectsInput | videosCreateOrConnectWithoutProjectsInput[]
    upsert?: videosUpsertWithWhereUniqueWithoutProjectsInput | videosUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: videosCreateManyProjectsInputEnvelope
    set?: videosWhereUniqueInput | videosWhereUniqueInput[]
    disconnect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    delete?: videosWhereUniqueInput | videosWhereUniqueInput[]
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    update?: videosUpdateWithWhereUniqueWithoutProjectsInput | videosUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: videosUpdateManyWithWhereWithoutProjectsInput | videosUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: videosScalarWhereInput | videosScalarWhereInput[]
  }

  export type imagesUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<imagesCreateWithoutProjectsInput, imagesUncheckedCreateWithoutProjectsInput> | imagesCreateWithoutProjectsInput[] | imagesUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: imagesCreateOrConnectWithoutProjectsInput | imagesCreateOrConnectWithoutProjectsInput[]
    upsert?: imagesUpsertWithWhereUniqueWithoutProjectsInput | imagesUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: imagesCreateManyProjectsInputEnvelope
    set?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    disconnect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    delete?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    connect?: imagesWhereUniqueInput | imagesWhereUniqueInput[]
    update?: imagesUpdateWithWhereUniqueWithoutProjectsInput | imagesUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: imagesUpdateManyWithWhereWithoutProjectsInput | imagesUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: imagesScalarWhereInput | imagesScalarWhereInput[]
  }

  export type videosUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<videosCreateWithoutProjectsInput, videosUncheckedCreateWithoutProjectsInput> | videosCreateWithoutProjectsInput[] | videosUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: videosCreateOrConnectWithoutProjectsInput | videosCreateOrConnectWithoutProjectsInput[]
    upsert?: videosUpsertWithWhereUniqueWithoutProjectsInput | videosUpsertWithWhereUniqueWithoutProjectsInput[]
    createMany?: videosCreateManyProjectsInputEnvelope
    set?: videosWhereUniqueInput | videosWhereUniqueInput[]
    disconnect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    delete?: videosWhereUniqueInput | videosWhereUniqueInput[]
    connect?: videosWhereUniqueInput | videosWhereUniqueInput[]
    update?: videosUpdateWithWhereUniqueWithoutProjectsInput | videosUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: videosUpdateManyWithWhereWithoutProjectsInput | videosUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: videosScalarWhereInput | videosScalarWhereInput[]
  }

  export type projectsCreateNestedOneWithoutVideosInput = {
    create?: XOR<projectsCreateWithoutVideosInput, projectsUncheckedCreateWithoutVideosInput>
    connectOrCreate?: projectsCreateOrConnectWithoutVideosInput
    connect?: projectsWhereUniqueInput
  }

  export type projectsUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<projectsCreateWithoutVideosInput, projectsUncheckedCreateWithoutVideosInput>
    connectOrCreate?: projectsCreateOrConnectWithoutVideosInput
    upsert?: projectsUpsertWithoutVideosInput
    connect?: projectsWhereUniqueInput
    update?: XOR<XOR<projectsUpdateToOneWithWhereWithoutVideosInput, projectsUpdateWithoutVideosInput>, projectsUncheckedUpdateWithoutVideosInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type projectsCreateWithoutImagesInput = {
    name: string
    title?: string | null
    author?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
    videos?: videosCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    title?: string | null
    author?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
    videos?: videosUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutImagesInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutImagesInput, projectsUncheckedCreateWithoutImagesInput>
  }

  export type projectsUpsertWithoutImagesInput = {
    update: XOR<projectsUpdateWithoutImagesInput, projectsUncheckedUpdateWithoutImagesInput>
    create: XOR<projectsCreateWithoutImagesInput, projectsUncheckedCreateWithoutImagesInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutImagesInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutImagesInput, projectsUncheckedUpdateWithoutImagesInput>
  }

  export type projectsUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
    videos?: videosUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
    videos?: videosUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type imagesCreateWithoutProjectsInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type imagesUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type imagesCreateOrConnectWithoutProjectsInput = {
    where: imagesWhereUniqueInput
    create: XOR<imagesCreateWithoutProjectsInput, imagesUncheckedCreateWithoutProjectsInput>
  }

  export type imagesCreateManyProjectsInputEnvelope = {
    data: imagesCreateManyProjectsInput | imagesCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type videosCreateWithoutProjectsInput = {
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type videosUncheckedCreateWithoutProjectsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type videosCreateOrConnectWithoutProjectsInput = {
    where: videosWhereUniqueInput
    create: XOR<videosCreateWithoutProjectsInput, videosUncheckedCreateWithoutProjectsInput>
  }

  export type videosCreateManyProjectsInputEnvelope = {
    data: videosCreateManyProjectsInput | videosCreateManyProjectsInput[]
    skipDuplicates?: boolean
  }

  export type imagesUpsertWithWhereUniqueWithoutProjectsInput = {
    where: imagesWhereUniqueInput
    update: XOR<imagesUpdateWithoutProjectsInput, imagesUncheckedUpdateWithoutProjectsInput>
    create: XOR<imagesCreateWithoutProjectsInput, imagesUncheckedCreateWithoutProjectsInput>
  }

  export type imagesUpdateWithWhereUniqueWithoutProjectsInput = {
    where: imagesWhereUniqueInput
    data: XOR<imagesUpdateWithoutProjectsInput, imagesUncheckedUpdateWithoutProjectsInput>
  }

  export type imagesUpdateManyWithWhereWithoutProjectsInput = {
    where: imagesScalarWhereInput
    data: XOR<imagesUpdateManyMutationInput, imagesUncheckedUpdateManyWithoutProjectsInput>
  }

  export type imagesScalarWhereInput = {
    AND?: imagesScalarWhereInput | imagesScalarWhereInput[]
    OR?: imagesScalarWhereInput[]
    NOT?: imagesScalarWhereInput | imagesScalarWhereInput[]
    id?: IntFilter<"images"> | number
    title_id?: IntFilter<"images"> | number
    name?: StringFilter<"images"> | string
    created_at?: DateTimeNullableFilter<"images"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"images"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"images"> | Date | string | null
    is_deleted?: IntNullableFilter<"images"> | number | null
  }

  export type videosUpsertWithWhereUniqueWithoutProjectsInput = {
    where: videosWhereUniqueInput
    update: XOR<videosUpdateWithoutProjectsInput, videosUncheckedUpdateWithoutProjectsInput>
    create: XOR<videosCreateWithoutProjectsInput, videosUncheckedCreateWithoutProjectsInput>
  }

  export type videosUpdateWithWhereUniqueWithoutProjectsInput = {
    where: videosWhereUniqueInput
    data: XOR<videosUpdateWithoutProjectsInput, videosUncheckedUpdateWithoutProjectsInput>
  }

  export type videosUpdateManyWithWhereWithoutProjectsInput = {
    where: videosScalarWhereInput
    data: XOR<videosUpdateManyMutationInput, videosUncheckedUpdateManyWithoutProjectsInput>
  }

  export type videosScalarWhereInput = {
    AND?: videosScalarWhereInput | videosScalarWhereInput[]
    OR?: videosScalarWhereInput[]
    NOT?: videosScalarWhereInput | videosScalarWhereInput[]
    id?: IntFilter<"videos"> | number
    title_id?: IntFilter<"videos"> | number
    name?: StringFilter<"videos"> | string
    created_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"videos"> | Date | string | null
    is_deleted?: IntNullableFilter<"videos"> | number | null
  }

  export type projectsCreateWithoutVideosInput = {
    name: string
    title?: string | null
    author?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
    images?: imagesCreateNestedManyWithoutProjectsInput
  }

  export type projectsUncheckedCreateWithoutVideosInput = {
    id?: number
    name: string
    title?: string | null
    author?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
    images?: imagesUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type projectsCreateOrConnectWithoutVideosInput = {
    where: projectsWhereUniqueInput
    create: XOR<projectsCreateWithoutVideosInput, projectsUncheckedCreateWithoutVideosInput>
  }

  export type projectsUpsertWithoutVideosInput = {
    update: XOR<projectsUpdateWithoutVideosInput, projectsUncheckedUpdateWithoutVideosInput>
    create: XOR<projectsCreateWithoutVideosInput, projectsUncheckedCreateWithoutVideosInput>
    where?: projectsWhereInput
  }

  export type projectsUpdateToOneWithWhereWithoutVideosInput = {
    where?: projectsWhereInput
    data: XOR<projectsUpdateWithoutVideosInput, projectsUncheckedUpdateWithoutVideosInput>
  }

  export type projectsUpdateWithoutVideosInput = {
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
    images?: imagesUpdateManyWithoutProjectsNestedInput
  }

  export type projectsUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
    images?: imagesUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type imagesCreateManyProjectsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type videosCreateManyProjectsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    is_deleted?: number | null
  }

  export type imagesUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type imagesUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type imagesUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosUpdateWithoutProjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type videosUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProjectsCountOutputTypeDefaultArgs instead
     */
    export type ProjectsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use book_secDefaultArgs instead
     */
    export type book_secArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = book_secDefaultArgs<ExtArgs>
    /**
     * @deprecated Use imagesDefaultArgs instead
     */
    export type imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = imagesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use projectsDefaultArgs instead
     */
    export type projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = projectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use settingsDefaultArgs instead
     */
    export type settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = settingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use verse_secDefaultArgs instead
     */
    export type verse_secArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = verse_secDefaultArgs<ExtArgs>
    /**
     * @deprecated Use versionsDefaultArgs instead
     */
    export type versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = versionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use videosDefaultArgs instead
     */
    export type videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = videosDefaultArgs<ExtArgs>

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