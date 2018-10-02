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

test('all good', async t => {
    const params = { symbol: 'btc', name: 'mainnet' }
    const network = getNetwork(params)
    const networks = find(params)
    t.is(network, networks[0].network)
    t.deepEqual(network, Bitcoin.networks.bitcoin)
})
