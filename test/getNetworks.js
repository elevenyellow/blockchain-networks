const test = require('ava')
const { getNetworks } = require('../')

test('all', async t => {
    const networks = getNetworks()
    t.is(networks.length > 0, true)
    const networks2 = getNetworks({})
    t.is(networks2.length > 0, true)
})

test('wrong symbol', async t => {
    const networks = getNetworks({ symbol: 'no' })
    t.is(networks.length, 0)
})

test('symbol lowercase', async t => {
    const networks = getNetworks({ symbol: 'bTc' })
    t.is(networks.length > 1, true)
})

test('btc mainnet', async t => {
    const networks = getNetworks({ symbol: 'bTc', name: 'mainnet' })
    t.is(networks.length, 1)
})

test('mainnets', async t => {
    const networks = getNetworks({ name: 'maiNnet' })
    t.is(networks.length > 1, true)
})

test('testnets', async t => {
    const networks = getNetworks({ name: 'testnet' })
    t.is(networks.length > 1, true)
})

test('wrong name', async t => {
    const networks = getNetworks({ name: 'testnete' })
    t.is(networks.length, 0)
})

test('eth ropsten', async t => {
    const networks = getNetworks({ name: 'ropsten' })
    t.is(networks.length, 1)
})

test('checking object', async t => {
    const networks = getNetworks()
    const network = networks[0]
    t.is(typeof network, 'object')
    t.is(Object.keys(network).length, 5)
    t.is(network.hasOwnProperty('symbol'), true)
    t.is(network.hasOwnProperty('names'), true)
    t.is(network.hasOwnProperty('config'), true)
    t.is(network.hasOwnProperty('apiUrls'), true)
    t.is(network.hasOwnProperty('path'), true)
})
