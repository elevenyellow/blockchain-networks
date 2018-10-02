const test = require('ava')
const { getNetwork, getNetworks } = require('../')

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

test('wrong symbol', async t => {
    const params = { symbol: 'btc' }
    const network = getNetwork(params)
    const networks = getNetworks(params)
    t.is(network, networks[0])
})
