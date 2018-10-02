const networks = []
    .concat(require('./symbols/btc').networks)
    .concat(require('./symbols/eth').networks)

console.log(networks)

// function pickNetwork({ symbol, name }) {
//     const coin = getCoin({ symbol })
//     const { networks } = coin
//     if (name === undefined) {
//         return networks[0]
//     }
//     name = String(name).toLowerCase()
//     if (networks.hasOwnProperty(name)) {
//         return networks[name]
//     }
//     return networks.find(n => n.name === name)
// }

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
