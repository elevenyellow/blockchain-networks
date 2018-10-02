const NETWORKS = []
    .concat(require('./symbols/btc').networks)
    .concat(require('./symbols/eth').networks)

function getNetworks({ symbol, name } = {}) {
    let networks = NETWORKS
    // filtering symbol
    if (symbol !== undefined) {
        symbol = String(symbol).toUpperCase()
        networks = networks.filter(network => symbol === network.symbol)
    }
    // filtering name
    if (name !== undefined) {
        name = String(name).toLowerCase()
        networks = networks.filter(network =>
            network.names
                .map(namenetwork => namenetwork.toLowerCase())
                .includes(name)
        )
    }
    return networks
}

function getNetwork(params = {}) {
    const networks = getNetworks(params)
    if (
        networks[0] === undefined ||
        (params.symbol === undefined && params.name === undefined)
    ) {
        throw Error('We could not find any network')
    } else return networks[0]
}

module.exports = { getNetworks, getNetwork }

// function getDerivationPath({
//     symbol,
//     name,
//     segwit = true,
//     account,
//     external,
//     index
// }) {
//     const network = pickNetwork({ symbol, name })
//     const path = network.path[segwit] || network.path.true || network.path.false
//     return makePath({ path, account, external, index })
// }

// function makePath({ path, account, external, index }) {
//     const toadd = []
//     if (account !== undefined) toadd[0] = account
//     if (external !== undefined) toadd[1] = external
//     if (index !== undefined) toadd[2] = index
//     for (let i = 0; i < toadd.length; i++) {
//         path += `/${toadd[i] || 0}`
//         if (i === 0) path += `'`
//     }
//     return path
// }
