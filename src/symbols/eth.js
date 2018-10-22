const { ETH } = require('../const/symbol')
const { ETHERSCAN } = require('../const/provider')
const {
    MAINNET,
    TESTNET,
    TESTNET1,
    TESTNET2,
    ROPSTEN,
    KOVAN
} = require('../const/network_name')
const { network_mainnet } = require('./btc')

const providers_mainnet = [
    {
        provider: ETHERSCAN,
        url: 'https://api.etherscan.io/api'
    }
]

const providers_ropsten = [
    {
        provider: ETHERSCAN,
        url: 'https://api-ropsten.etherscan.io/api'
    }
]

const providers_kovan = [
    {
        provider: ETHERSCAN,
        url: 'https://api-kovan.etherscan.io/api'
    }
]

const purpose = 44
const coin = 60
const networks = [
    {
        symbol: ETH,
        names: [MAINNET],
        network: network_mainnet,
        providers: providers_mainnet,
        paths: {
            false: { purpose, coin },
            true: { purpose, coin }
        }
    },
    {
        symbol: ETH,
        names: [ROPSTEN, TESTNET, TESTNET1],
        network: network_mainnet,
        providers: providers_ropsten,
        paths: {
            false: { purpose, coin },
            true: { purpose, coin }
        }
    },
    {
        symbol: ETH,
        names: [KOVAN, TESTNET, TESTNET2],
        network: network_mainnet,
        providers: providers_kovan,
        paths: {
            false: { purpose, coin },
            true: { purpose, coin }
        }
    }
]

module.exports = { networks }
