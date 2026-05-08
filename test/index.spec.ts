import { expect } from 'aegir/chai'
import all from 'it-all'
import { isPromise } from '../src/index.ts'
import type { Promised, PromisedGenerator, PromisedIterable } from '../src/index.ts'

describe('consideration', () => {
  it('should detect a promise', () => {
    const p = new Promise<void>((resolve, reject) => {

    })
    expect(isPromise(p)).to.be.true()
  })

  it('should type a Promised', async () => {
    function fn (): Promised<string> {
      return 'hello'
    }

    function asyncFn (): Promised<string> {
      return Promise.resolve('hello')
    }

    expect(fn()).to.equal('hello')
    await expect(asyncFn()).to.eventually.equal('hello')
  })

  it('should type a PromisedIterable', async () => {
    function fn (): PromisedIterable<string> {
      return ['hello']
    }

    async function * asyncFn (): PromisedIterable<string> {
      yield 'hello'
    }

    expect(all(fn())).to.deep.equal(['hello'])
    expect(await all(asyncFn())).to.deep.equal(['hello'])
  })

  it('should type a PromisedGenerator', async () => {
    function * fn (): PromisedGenerator<string> {
      yield 'hello'
    }

    async function * asyncFn (): PromisedGenerator<string> {
      yield 'hello'
    }

    expect(all(fn())).to.deep.equal(['hello'])
    expect(await all(asyncFn())).to.deep.equal(['hello'])
  })
})
