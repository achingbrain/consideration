/**
 * @packageDocumentation
 *
 * Utility types for representing a value or a promise of a value.
 *
 * @example Detecting a promise
 *
 * ```ts
 * import { isPromise } from 'consideration'
 * import type { Promised } from 'consideration'
 *
 * function fn (): Promised<string> {
 *   return 'hello'
 * }
 *
 * let str = fn()
 *
 * if (isPromise(str)) {
 *   str = await fn()
 * }
 *
 * console.info(str) // 'hello'
 * ```
 *
 * @example Sync/async iterables
 *
 * ```ts
 * import type { PromisedIterable } from 'consideration'
 *
 * function fn (): PromisedIterable<string> {
 *   return ['hello']
 * }
 *
 * for await (const str of fn()) {
 *   console.info(str) // 'hello'
 * }
 * ```
 *
 * @example Sync/async generators
 *
 * ```ts
 * import type { PromisedGenerator } from 'consideration'
 *
 * function * fn (): PromisedGenerator<string> {
 *   yield 'hello'
 * }
 *
 * for await (const str of fn()) {
 *   console.info(str) // 'hello'
 * }
 * ```
 */

/**
 * A value or a promise of a value. This type allows interfaces to define
 * contracts then allow implementers to choose to be synchronous or asynchronous
 * which is sometimes necessary on hot code paths.
 */
export type Promised<T> = T | Promise<T>

/**
 * An iterable or async iterable of values
 */
export type PromisedIterable<T> = Iterable<T> | AsyncIterable<T>

/**
 * A generator or async generator of values
 */
export type PromisedGenerator<T, TReturn = any, TNext = any> = Generator<T, TReturn, TNext> | AsyncGenerator<T, TReturn, TNext>

/**
 * Detects if the passed value is a promise, that is it has `.then`, `.catch`
 * and `.finally` methods.
 */
export function isPromise <T> (o?: any): o is Promise<T> {
  return typeof o?.then === 'function' && typeof o?.catch === 'function' && typeof o?.finally === 'function'
}
