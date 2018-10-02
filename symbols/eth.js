const { network_mainnet } = require('./btc')
const purpose = 44
const coin = 60
const networks = [
    {
        symbol: 'ETH',
        names: ['mainnet'],
        network: network_mainnet,
        apiUrls: { etherscan: ['https://api.etherscan.io/api'] },
        paths: {
            false: { purpose, coin },
            true: { purpose, coin }
        }
    },
    {
        symbol: 'ETH',
        names: ['ropsten', 'testnet', 'testnet1'],
        network: network_mainnet,
        apiUrls: { etherscan: ['https://api-ropsten.etherscan.io/api'] },
        paths: {
            false: { purpose, coin },
            true: { purpose, coin }
        }
    },
    {
        symbol: 'ETH',
        names: ['kovan', 'testnet', 'testnet2'],
        network: network_mainnet,
        apiUrls: { etherscan: ['https://api-kovan.etherscan.io/api'] },
        paths: {
            false: { purpose, coin },
            true: { purpose, coin }
        }
    }
]

module.exports = { networks }
