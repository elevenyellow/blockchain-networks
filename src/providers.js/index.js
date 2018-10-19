const { symbol, provider } = require('../src/')

module.exports = [
    // ENZO
    {
        testnet: true,
        isValid: true,
        symbol: symbol.BTC,
        provider: provider.INSIGHT,
        url: 'https://test-insight.bitpay.com/api/'
    },
    {
        testnet: false,
        isValid: true,
        symbol: symbol.BTC,
        provider: provider.BLOCKCYPHER,
        url: 'https://api.blockcypher.com/v1/btc/main/'
    },
    {
        testnet: false,
        isValid: true,
        symbol: symbol.ETH,
        provider: provider.ETHERSCAN,
        apiKey: 'K894UWKIXMQKWZ5PYPBVUSBBBM58UXZIJC',
        url: 'https://api.etherscan.io/api'
    },

    // CHEMUTO
    {
        //https://github.com/ruimarinho/bitcoin-core
        testnet: true,
        isValid: false,
        symbol: symbol.BTC,
        provider: provider.BTC_NODE,
        host: 'btc-testnet.switchain.com',
        port: 443,
        username: 'swbtctestnet',
        password: '5qc9xalwGNYjb',
        version: '0.16.3',
        network: 'testnet'
    },
    {
        //https://github.com/ruimarinho/bitcoin-core
        testnet: false,
        isValid: false,
        symbol: symbol.BTC,
        provider: provider.BTC_NODE,
        host: 'btc.switchain.com',
        port: 443,
        username: 'swbtc',
        password: '5kQuB8YjuWEy',
        version: '0.16.3',
        network: 'testnet'
    },
    {
        testnet: true,
        isValid: true,
        symbol: symbol.ETH,
        provider: provider.ETH_NODE,
        url: 'https://ropsten.infura.io/ETIepKMf9yGlbwrotbzn'
    },
    {
        testnet: true,
        isValid: false,
        symbol: symbol.ETH,
        provider: provider.ETH_NODE,
        url: 'https://xxx'
    },
    {
        testnet: true,
        isValid: true,
        symbol: symbol.ETH_ERC20,
        provider: provider.ERC20_NODE,
        url: 'https://kovan.infura.io/ETIepKMf9yGlbwrotbzn',
        network: 'kovan'
    },
    {
        testnet: true,
        isValid: true,
        symbol: symbol.ETH,
        provider: provider.INFURA,
        url: 'https://ropsten.infura.io/ETIepKMf9yGlbwrotbzn'
    }
]

const { symbol, provider } = require('../../src/')

module.exports = [
    // ENZO
    {
        testnet: true,
        isValid: true,
        symbol: symbol.BTC,
        provider: provider.INSIGHT,
        url: 'https://test-insight.bitpay.com/api/'
    },
    {
        testnet: false,
        isValid: true,
        symbol: symbol.BTC,
        provider: provider.BLOCKCYPHER,
        url: 'https://api.blockcypher.com/v1/btc/main/'
    },
    {
        testnet: false,
        isValid: true,
        symbol: symbol.ETH,
        provider: provider.ETHERSCAN,
        apiKey: 'K894UWKIXMQKWZ5PYPBVUSBBBM58UXZIJC',
        url: 'https://api.etherscan.io/api'
    },
    {
        testnet: false,
        isValid: true,
        symbol: symbol.ETH_ERC20,
        provider: provider.ETHERSCAN_ERC20,
        apiKey: 'K894UWKIXMQKWZ5PYPBVUSBBBM58UXZIJC',
        url: 'https://api.etherscan.io/api'
    },

    // CHEMUTO
    {
        //https://github.com/ruimarinho/bitcoin-core
        testnet: true,
        isValid: false,
        symbol: symbol.BTC,
        provider: provider.BTC_NODE,
        host: 'btc-testnet.switchain.com',
        port: 443,
        username: 'swbtctestnet',
        password: '5qc9xalwGNYjb',
        version: '0.16.3',
        network: 'testnet'
    },
    {
        //https://github.com/ruimarinho/bitcoin-core
        testnet: false,
        isValid: false,
        symbol: symbol.BTC,
        provider: provider.BTC_NODE,
        host: 'btc.switchain.com',
        port: 443,
        username: 'swbtc',
        password: '5kQuB8YjuWEy',
        version: '0.16.3',
        network: 'testnet'
    },
    {
        testnet: true,
        isValid: true,
        symbol: symbol.ETH,
        provider: provider.ETH_NODE,
        url: 'https://ropsten.infura.io/ETIepKMf9yGlbwrotbzn'
    },
    {
        testnet: true,
        isValid: false,
        symbol: symbol.ETH,
        provider: provider.ETH_NODE,
        url: 'https://xxx'
    },
    {
        testnet: true,
        isValid: true,
        symbol: symbol.ETH_ERC20,
        provider: provider.ERC20_NODE,
        url: 'https://kovan.infura.io/ETIepKMf9yGlbwrotbzn',
        network: 'kovan'
    },
    {
        testnet: true,
        isValid: true,
        symbol: symbol.ETH,
        provider: provider.INFURA,
        url: 'https://ropsten.infura.io/ETIepKMf9yGlbwrotbzn'
    }
]

// {
//     "apiKeys": {
//         "blockcypher": "d5fccc89c17a4a25984fae0135d6181c",
//         "etherscan": "K894UWKIXMQKWZ5PYPBVUSBBBM58UXZIJC",
//         "infura": "ETIepKMf9yGlbwrotbzn"
//     }
// }

// const apiUrl = {
//     BTC: {
//         testnet:
//             'https://swbtctestnet:5qc9xalwGNYjb@btc-testnet.switchain.com/api/',
//         mainnet: 'https://swbtc:5kQuB8YjuWEy@btc.switchain.com/api/'
//     },
//     LTC: {
//         testnet: 'https://testnet-bitcore1.trezor.io/api/',
//         mainnet: 'https://ltc-bitcore1.trezor.io/api/'
//     },
//     GRLC: {
//         testnet: 'https://garlicinsight.com/insight-grlc-api/',
//         mainnet: 'https://garlicinsight.com/insight-grlc-api/'
//     }
// }

// const apiUrl = {
//     BTC: {
//         testnet: 'https://api.blockcypher.com/v1/btc/test3/',
//         mainnet: 'https://api.blockcypher.com/v1/btc/main/'
//     },
//     LTC: {
//         testnet: 'https://api.blockcypher.com/v1/btc/test3/',
//         mainnet: 'https://api.blockcypher.com/v1/ltc/main/'
//     },
//     DOGE: {
//         testnet: 'https://api.blockcypher.com/v1/btc/test3/',
//         mainnet: 'https://api.blockcypher.com/v1/doge/main/'
//     }
// }
