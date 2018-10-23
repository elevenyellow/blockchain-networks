const symbol = require('./const/symbol')
const provider = require('./const/provider')
const network = require('./const/network')
const NETWORKS = []
    .concat(require('./symbols/btc').networks)
    .concat(require('./symbols/eth').networks)

function find({ symbol, name } = {}) {
    let networks = NETWORKS
    // filtering symbol
    if (symbol !== undefined) {
        symbol = String(symbol)
            .trim()
            .toUpperCase()
        networks = networks.filter(network => symbol === network.symbol)
    }
    // filtering name
    if (name !== undefined) {
        name = String(name)
            .trim()
            .toLowerCase()
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

function getProviders({ symbol, name, provider } = {}) {
    let networks = find({ symbol, name })
    let providers = []

    networks.forEach(n => {
        const items = n.providers.map(p => {
            const item = Object.assign({}, p)
            item.symbol = n.symbol
            item.networks = n.names.slice(0)
            return item
        })
        providers = providers.concat(items)
    })

    if (typeof provider == 'string') {
        providers = providers.filter(
            p => p.provider.toUpperCase() === provider.trim().toUpperCase()
        )
    }

    return providers
}

function addProvider({ symbol, name, ...args }) {
    const networks = find({ symbol, name })
    networks.forEach(n => {
        n.providers.push(args)
    })
    return networks.length
}

module.exports = {
    SYMBOL: symbol,
    PROVIDER: provider,
    NETWORK: network,
    find,
    getNetwork,
    getDerivationPath,
    generatePath,
    getProviders,
    addProvider
}
