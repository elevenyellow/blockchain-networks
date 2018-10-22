const test = require('ava')
const Bitcoin = require('bitcoinjs-lib')
const { getProviders, find } = require('../')
const { BTC } = require('../src/const/symbol')

test('nothing', async t => {
    const providers1 = getProviders()
    const providers2 = getProviders({})
    const providers3 = getProviders({ symbal: BTC })
    t.is(providers1.length, providers2.length)
    t.is(providers2.length, providers3.length)
})

test('nothing', async t => {
    const providers = getProviders({ symbol: '' })
    t.is(providers.length, 0)
})

test('symbol', async t => {
    const providers = getProviders({ symbol: 'btc' })
    t.is(providers.every(p => p.symbol === 'BTC'), true)
})
