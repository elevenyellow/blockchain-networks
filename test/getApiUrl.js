const test = require('ava')
const { getApiUrl } = require('../')

test('only symbol', async t => {
    try {
        getApiUrl({ symbol: 'btc' })
    } catch (e) {
        t.is(typeof e, 'object')
    }
})

test('invalid type', async t => {
    try {
        getApiUrl({ symbol: 'btc', type: '' })
    } catch (e) {
        t.is(typeof e, 'object')
    }
})

test('valid type', async t => {
    const url = getApiUrl({ symbol: 'btc', type: 'bitpay' })
    t.is(typeof url, 'string')
})

test('invalid index', async t => {
    try {
        getApiUrl({ symbol: 'btc', type: 'bitpay', index: 2152131 })
    } catch (e) {
        t.is(typeof e, 'object')
    }
})

test('using default index and default name', async t => {
    const url = getApiUrl({ symbol: 'btc', type: 'bitpay' })
    const url2 = getApiUrl({
        symbol: 'btc',
        type: 'bitpay',
        index: 0,
        name: 'mainnet'
    })
    t.is(url, url2)
})

test('passing user', async t => {
    const url = getApiUrl({ symbol: 'btc', type: 'bitpay' })
    const url2 = getApiUrl({ symbol: 'btc', type: 'bitpay', user: '' })
    t.is(url, url2)
})

test('passing user and pass empty', async t => {
    const url = getApiUrl({ symbol: 'btc', type: 'bitpay' })
    const url2 = getApiUrl({
        symbol: 'btc',
        type: 'bitpay',
        user: '',
        password: ''
    })
    t.is(url, url2)
})

test('passing user and pass empty', async t => {
    const user = 'hello'
    const password = 'world'
    const url = getApiUrl({ symbol: 'btc', type: 'bitpay' })
    const url2 = getApiUrl({
        symbol: 'btc',
        type: 'bitpay',
        user,
        password
    })
    t.is(url.replace('//', `//${user}:${password}@`), url2)
})
