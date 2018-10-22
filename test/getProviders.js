const test = require('ava')
const { getProviders, find } = require('../')
const { BTC } = require('../src/const/symbol')

test('all', async t => {
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

test('checking object', async t => {
    const providers = getProviders()
    const provider = providers[0]
    t.is(typeof provider, 'object')
    t.is(provider.hasOwnProperty('symbol'), true)
    t.is(provider.hasOwnProperty('networks'), true)
    t.is(provider.hasOwnProperty('name'), true)
})
