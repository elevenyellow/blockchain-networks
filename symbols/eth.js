const { network_mainnet } = require('./btc')

const networks = [
    {
        symbol: 'ETH',
        names: ['mainnet'],
        config: network_mainnet,
        apiUrls: { etherscan: ['https://api.etherscan.io/api'] },
        path: {
            false: `m/44'/60'`,
            true: `m/44'/60'`
        }
    },
    {
        symbol: 'ETH',
        names: ['ropsten', 'testnet', 'testnet1'],
        config: network_mainnet,
        apiUrls: { etherscan: ['https://api-ropsten.etherscan.io/api'] },
        path: {
            false: `m/44'/60'`,
            true: `m/44'/60'`
        }
    },
    {
        symbol: 'ETH',
        names: ['kovan', 'testnet', 'testnet2'],
        config: network_mainnet,
        apiUrls: { etherscan: ['https://api-kovan.etherscan.io/api'] },
        path: {
            false: `m/44'/60'`,
            true: `m/44'/60'`
        }
    }
]

module.exports = { networks }
