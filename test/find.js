const test = require('ava')
const { find } = require('../')

test('all', async t => {
    const networks = find()
    t.is(networks.length > 0, true)
    const networks2 = find({})
    t.is(networks2.length > 0, true)
})

test('wrong symbol', async t => {
    const networks = find({ symbol: 'no' })
    t.is(networks.length, 0)
})

test('symbol lowercase', async t => {
    const networks = find({ symbol: 'bTc' })
    t.is(networks.length > 1, true)
})

test('btc mainnet', async t => {
    const networks = find({ symbol: 'bTc', name: 'mainnet' })
    t.is(networks.length, 1)
})

test('mainnets', async t => {
    const networks = find({ name: 'maiNnet' })
    t.is(networks.length > 1, true)
})

test('testnets', async t => {
    const networks = find({ name: 'testnet' })
    t.is(networks.length > 1, true)
})

test('wrong name', async t => {
    const networks = find({ name: 'testnete' })
    t.is(networks.length, 0)
})

test('eth ropsten', async t => {
    const networks = find({ name: 'ropsten' })
    t.is(networks.length, 1)
})

test('checking object', async t => {
    const networks = find()
    const network = networks[0]
    t.is(typeof network, 'object')
    t.is(Object.keys(network).length, 5)
    t.is(network.hasOwnProperty('symbol'), true)
    t.is(network.hasOwnProperty('names'), true)
    t.is(network.hasOwnProperty('network'), true)
    t.is(network.hasOwnProperty('apiUrls'), true)
    t.is(network.hasOwnProperty('path'), true)
})
