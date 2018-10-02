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

const networks = [
    {
        symbol: 'BTC',
        names: ['mainnet'],
        config: network_mainnet,
        path: {
            false: `m/44'/0'`,
            true: `m/49'/0'` // segwit true
        }
    },
    {
        symbol: 'BTC',
        names: ['testnet'],
        config: network_testnet,
        path: {
            false: `m/44'/1'`,
            true: `m/49'/1'` // segwit true
        }
    }
]

module.exports = {
    networks,
    network_mainnet,
    network_testnet
}
