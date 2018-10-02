const { network_mainnet } = require('./btc')

const networks = [
    {
        symbol: 'ETH',
        name: 'mainnet',
        config: network_mainnet,
        path: {
            false: `m/44'/60'`,
            true: `m/44'/60'`
        }
    },
    {
        symbol: 'ETH',
        name: 'testnet',
        config: network_mainnet,
        path: {
            false: `m/44'/60'`,
            true: `m/44'/60'`
        }
    }
]

module.exports = { networks }
