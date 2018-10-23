# Install

```
npm i @elevenyellow.com/blockchain-networks
```

# API

### getNetwork({ symbol, name }) : object

```js
import {
    getNetwork,
    network,
    symbol,
    provider
} from '@elevenyellow.com/blockchain-networks'
const networkfound = getNetwork({ symbol: symbol.BTC, name: network.TESTNET })
// equivalent to
const networkfound_testnet = require('bitcoinjs-lib').networks.testnet
```

```js
const networkfound1 = getNetwork({ symbol: symbol.ETH, name: network.TESTNET })
const networkfound2 = getNetwork({ symbol: symbol.ETH, name: networl.ROPSTEN })
network1 === network2 // true
```

```js
const networkfound1 = getNetwork({ symbol: symbol.ETH, name: network.TESTNET1 })
const networkfound2 = getNetwork({ symbol: symbol.ETH, name: networl.ROPSTEN })
network1 === network2 // true
```

```js
const networkfound1 = getNetwork({ symbol: symbol.ETH, name: network.TESTNET2 })
const networkfound2 = getNetwork({ symbol: symbol.ETH, name: network.KOVAN })
network1 === network2 // true
```

### getDerivationPath({ symbol, name, [account=0], [external=0], [index=0] }) : string

```js
import {
    getDerivationPath,
    network,
    symbol,
    provider
} from '@elevenyellow.com/blockchain-networks'
getDerivationPath({ symbol: symbol.BTC, name: network.TESTNET }) // "m/49'/1'"
getDerivationPath({ symbol: symbol.BTC, name: network.TESTNET, account: 5 }) // "m/49'/1'/5'"
getDerivationPath({ symbol: symbol.BTC, name: network.TESTNET, external: 4 }) // "m/49'/1'/0'/4"
getDerivationPath({ symbol: symbol.BTC, name: network.TESTNET, index: 3 }) // "m/49'/1'/0'/0/3"
getDerivationPath({
    symbol: symbol.BTC,
    name: network.TESTNET,
    account: 3,
    external: 2,
    index: 1
}) // "m/49'/1'/3'/2/1"
```

### getProviders({ [symbol], [name], [provider] }) : array

### addProviders({ [symbol], [name] }) : string

### generatePath({ purpose, [coin=0], [account=0], [external=0], [index=0] }) : string

### find({ symbol, name }) : array

Returns all the info of each network that is used internally. Is used internally by all the functions that have the arguments `name` and `symbol`.

```js
import { find, network } from '@elevenyellow.com/blockchain-networks'
const networkfound = find({ name: network.TESTNET })
```

Output

```js
[
    {
        symbol: symbol.BTC,
        names: [network.TESTNET],
        network: [Object], // equivalent to: getNetwork({symbol:symbol.BTC, name:network.TESTNET}),
        apiUrls: { bitpay: [Array], blockcypher: [Array] },
        paths: {
            false: { purpose: 44, coin: 1 },
            true: { purpose: 49, coin: 1 } // segwit true
        }
    },
    {
        symbol: symbol.ETH,
        names: [networl.ROPSTEN, network.TESTNET, network.TESTNET1],
        network: [Object],
        apiUrls: { etherscan: [Array] },
        paths: {
            false: { purpose: 44, coin: 60 },
            true: { purpose: 44, coin: 60 }
        }
    },
    {
        symbol: symbol.ETH,
        names: [network.KOVAN, network.TESTNET, network.TESTNET2],
        network: [Object],
        apiUrls: { etherscan: [Array] },
        paths: {
            false: { purpose: 44, coin: 60 },
            true: { purpose: 44, coin: 60 }
        }
    }
    ...
]
```
