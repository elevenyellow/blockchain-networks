const test = require('ava')
const { getDerivationPath } = require('../')

test('nothing', async t => {
    try {
        getDerivationPath()
    } catch (e) {
        t.is(typeof e, 'object')
    }
})

test('object', async t => {
    try {
        getDerivationPath({})
    } catch (e) {
        t.is(typeof e, 'object')
    }
})

test('only symbol', async t => {
    t.is(getDerivationPath({ symbol: 'btc' }), "m/49'/0'")
})

test('symbol and name', async t => {
    t.is(getDerivationPath({ symbol: 'btc', name: 'testnet' }), "m/49'/1'")
})

test('symbol and index', async t => {
    t.is(getDerivationPath({ symbol: 'btc', account: 0 }), "m/49'/0'/0'")
})

test('symbol and index', async t => {
    t.is(getDerivationPath({ symbol: 'btc', external: 0 }), "m/49'/0'/0'/0")
})

test('symbol and index', async t => {
    t.is(getDerivationPath({ symbol: 'btc', index: 0 }), "m/49'/0'/0'/0/0")
})

test('all the params', async t => {
    t.is(
        getDerivationPath({ symbol: 'btc', account: 3, external: 2, index: 1 }),
        "m/49'/0'/3'/2/1"
    )
})
