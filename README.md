# Install

```
npm i @elevenyellow.com/blockchain-networks
```

# API

### getNetwork({ symbol, name }) : object

```js
import { getNetwork } from '@elevenyellow.com/blockchain-networks'
const network = getNetwork({ symbol: 'BTC', name: 'testnet' })
// equivalent to
const network_testnet = require('bitcoinjs-lib').networks.testnet
```

```js
const network1 = getNetwork({ symbol: 'ETH', name: 'testnet' })
const network2 = getNetwork({ symbol: 'ETH', name: 'ropsten' })
network1 === network2 // true
```

```js
const network1 = getNetwork({ symbol: 'ETH', name: 'testnet1' })
const network2 = getNetwork({ symbol: 'ETH', name: 'ropsten' })
network1 === network2 // true
```

```js
const network1 = getNetwork({ symbol: 'ETH', name: 'testnet2' })
const network2 = getNetwork({ symbol: 'ETH', name: 'kovan' })
network1 === network2 // true
```

### getDerivationPath({ symbol, name, [account=0], [external=0], [index=0] }) : string

```js
import { getDerivationPath } from '@elevenyellow.com/blockchain-networks'
getDerivationPath({ symbol: 'btc', name: 'testnet' }) // "m/49'/1'"
getDerivationPath({ symbol: 'btc', name: 'testnet', account: 5 }) // "m/49'/1'/5'"
getDerivationPath({ symbol: 'btc', name: 'testnet', external: 4 }) // "m/49'/1'/0'/4"
getDerivationPath({ symbol: 'btc', name: 'testnet', index: 3 }) // "m/49'/1'/0'/0/3"
getDerivationPath({
    symbol: 'btc',
    name: 'testnet',
    account: 3,
    external: 2,
    index: 1
}) // "m/49'/1'/3'/2/1"
```

### getApiUrl({ symbol, name, type, [index=0], [user], [password] }) : string

```js
import { getApiUrl } from '@elevenyellow.com/blockchain-networks'
const symbol = 'BTC'
const name = 'mainnet'
const url = getApiUrl({ symbol, name, type: 'blockcypher' }) // 'https://api.blockcypher.com/v1/btc/main/'
const url = getApiUrl({ symbol, name, type: 'bitpay' }) // 'https://btc.switchain.com/api/'
const url = getApiUrl({
    symbol,
    name,
    type: 'bitpay',
    user: 'me',
    password: 's3cr3t'
}) // 'https://me:s3cr3t@btc.switchain.com/api/'
```

### generatePath({ purpose, [coin=0], [account=0], [external=0], [index=0] }) : string

### find({ symbol, name }) : array

Returns all the info of each network that is used internally

```js
import { find } from '@elevenyellow.com/blockchain-networks'
const network = find({ name: 'testnet' })
```

Output

```js
[
    {
        symbol: 'BTC',
        names: ['testnet'],
        network: [Object], // equivalent to: getNetwork({symbol:'btc', name:'testnet'}),
        apiUrls: { bitpay: [Array], blockcypher: [Array] },
        paths: {
            false: { purpose: 44, coin: 1 },
            true: { purpose: 49, coin: 1 } // segwit true
        }
    },
    {
        symbol: 'ETH',
        names: ['ropsten', 'testnet', 'testnet1'],
        network: [Object],
        apiUrls: { etherscan: [Array] },
        paths: {
            false: { purpose: 44, coin: 60 },
            true: { purpose: 44, coin: 60 }
        }
    },
    {
        symbol: 'ETH',
        names: ['kovan', 'testnet', 'testnet2'],
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
