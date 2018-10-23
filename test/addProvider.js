const test = require('ava')
const { getProviders, addProvider, find } = require('../')
const { BTC } = require('../src/const/symbol')
const { MAINNET } = require('../src/const/network')

test('all networks', async t => {
    const networks = find()
    const networks_total = addProvider({
        provider: 'INVENT'
    })
    t.is(networks_total, networks.length)
})

test('Adding to BTC mainnet', async t => {
    const providers = getProviders()
    const networks_total = addProvider({
        symbol: BTC,
        name: MAINNET,
        provider: 'INVENT'
    })
    const providers2 = getProviders()
    t.is(networks_total, 1)
    t.is(providers.length + 1, providers2.length)
})
