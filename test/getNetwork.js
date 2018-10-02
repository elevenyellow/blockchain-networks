const test = require('ava')
const Bitcoin = require('bitcoinjs-lib')
const { getNetwork, find } = require('../')

test('no object', async t => {
    try {
        getNetwork()
    } catch (e) {
        t.is(typeof e, 'object')
    }
})

test('no arguments', async t => {
    try {
        getNetwork({})
    } catch (e) {
        t.is(typeof e, 'object')
    }
})

test('wrong symbol', async t => {
    try {
        getNetwork({ symbol: '' })
    } catch (e) {
        t.is(typeof e, 'object')
    }
})

test('without name', async t => {
    const network = getNetwork({ symbol: 'btc' })
    const network2 = getNetwork({ symbol: 'btc', name: 'mainnet' })
    t.is(network, network2)
})

test('all good', async t => {
    const params = { symbol: 'btc', name: 'testnet' }
    const network = getNetwork(params)
    const networks = find(params)
    t.is(network, networks[0].network)
    t.deepEqual(network, Bitcoin.networks.testnet)
})
