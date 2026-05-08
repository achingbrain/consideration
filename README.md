# consideration

[![codecov](https://img.shields.io/codecov/c/github/achingbrain/consideration.svg?style=flat-square)](https://codecov.io/gh/achingbrain/consideration)
[![CI](https://img.shields.io/github/actions/workflow/status/achingbrain/consideration/js-test-and-release.yml?branch=main\&style=flat-square)](https://github.com/achingbrain/consideration/actions/workflows/js-test-and-release.yml?query=branch%3Amain)

> Consideration is a promise of something of value given by a promissor

# About

<!--

!IMPORTANT!

Everything in this README between "# About" and "# Install" is automatically
generated and will be overwritten the next time the doc generator is run.

To make changes to this section, please update the @packageDocumentation section
of src/index.js or src/index.ts

To experiment with formatting, please run "npm run docs" from the root of this
repo and examine the changes made.

-->

Utility types for representing a value or a promise of a value.

## Example - Detecting a promise

```ts
import { isPromise } from 'consideration'
import type { Promised } from 'consideration'

function fn (): Promised<string> {
  return 'hello'
}

let str = fn()

if (isPromise(str)) {
  str = await fn()
}

console.info(str) // 'hello'
```

## Example - Sync/async iterables

```ts
import type { PromisedIterable } from 'consideration'

function fn (): PromisedIterable<string> {
  return ['hello']
}

for await (const str of fn()) {
  console.info(str) // 'hello'
}
```

## Example - Sync/async generators

```ts
import type { PromisedGenerator } from 'consideration'

function * fn (): PromisedGenerator<string> {
  yield 'hello'
}

for await (const str of fn()) {
  console.info(str) // 'hello'
}
```

# Install

```console
$ npm i consideration
```

## Browser `<script>` tag

Loading this module through a script tag will make its exports available as `Consideration` in the global namespace.

```html
<script src="https://unpkg.com/consideration/dist/index.min.js"></script>
```

# License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](https://github.com/achingbrain/consideration/LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](https://github.com/achingbrain/consideration/LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

# Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
