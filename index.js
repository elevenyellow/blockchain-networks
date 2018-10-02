const NETWORKS = []
    .concat(require('./symbols/btc').networks)
    .concat(require('./symbols/eth').networks)

function find({ symbol, name } = {}) {
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

function getObject(params) {
    const object = find(params)
    if (
        object[0] === undefined ||
        (params.symbol === undefined && params.name === undefined)
    ) {
        throw Error('We could not find any network')
    } else return object[0]
}

function getNetwork({ symbol, name }) {
    return getObject({ symbol, name }).network
}

function getDerivationPath({
    symbol,
    name,
    segwit = true,
    account,
    external,
    index
} = {}) {
    const paths = getObject({ symbol, name }).paths
    const path = paths[segwit] || paths.true || paths.false
    const { purpose, coin } = path
    return generatePath({ path, purpose, coin, account, external, index })
}

function generatePath({ purpose, coin, account, external, index }) {
    let path = `m/${purpose}'`
    const toadd = []
    if (coin !== undefined) toadd[0] = coin
    if (account !== undefined) toadd[1] = account
    if (external !== undefined) toadd[2] = external
    if (index !== undefined) toadd[3] = index
    for (let i = 0; i < toadd.length; i++) {
        path += `/${toadd[i] || 0}`
        if (i < 2) path += `'`
    }
    return path
}

module.exports = { find, getNetwork, getDerivationPath }
