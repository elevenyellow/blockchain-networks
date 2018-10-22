const { BTC } = require('../const/symbol')
const { INSIGHT, BLOCKCYPHER } = require('../const/provider')
const { MAINNET, TESTNET, TESTNET1 } = require('../const/network_name')

const network_mainnet = {
    messagePrefix: '\u0018Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: { public: 76067358, private: 76066276 },
    pubKeyHash: 0,
    scriptHash: 5,
    wif: 128
}
const network_testnet = {
    messagePrefix: '\u0018Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: { public: 70617039, private: 70615956 },
    pubKeyHash: 111,
    scriptHash: 196,
    wif: 239
}

const providers_mainnet = [
    {
        provider: BLOCKCYPHER,
        url: 'https://api.blockcypher.com/v1/btc/main/'
    }
]

const providers_testnet = [
    {
        provider: INSIGHT,
        url: 'https://test-insight.bitpay.com/api/'
    },
    {
        provider: BLOCKCYPHER,
        url: 'https://api.blockcypher.com/v1/btc/test3/'
    }
]

const networks = [
    {
        symbol: BTC,
        names: [MAINNET],
        network: network_mainnet,
        providers: providers_mainnet,
        paths: {
            false: { purpose: 44, coin: 0 }, // `m/44'/0'`
            true: { purpose: 49, coin: 0 } // segwit true
        }
    },
    {
        symbol: BTC,
        names: [TESTNET, TESTNET1],
        network: network_testnet,
        providers: providers_testnet,
        paths: {
            false: { purpose: 44, coin: 1 },
            true: { purpose: 49, coin: 1 } // segwit true
        }
    }
]

module.exports = {
    networks,
    network_mainnet,
    network_testnet
}

// LTC: {
//     testnet: 'https://testnet-bitcore1.trezor.io/api/',
//     mainnet: 'https://ltc-bitcore1.trezor.io/api/'
// },
// GRLC: {
//     testnet: 'https://garlicinsight.com/insight-grlc-api/',
//     mainnet: 'https://garlicinsight.com/insight-grlc-api/'
// }

// },
// LTC: {
// testnet: 'https://api.blockcypher.com/v1/btc/test3/',
// mainnet: 'https://api.blockcypher.com/v1/ltc/main/'
// },
// DOGE: {
// testnet: 'https://api.blockcypher.com/v1/btc/test3/',
// mainnet: 'https://api.blockcypher.com/v1/doge/main/'
