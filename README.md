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

### generatePath({ purpose, [coin=0], [account=0], [external=0], [index=0] }) : string

### find({ symbol, name }) : array

Returns all the info of each network that is used internally

```js
import { find } from '@elevenyellow.com/blockchain-networks'
const network = find({ name: 'testnet' })
```

Output

```json
[
    {
        "symbol": "BTC",
        "names": ["testnet"],
        "network": [Object], // equivalent to: getNetwork({symbol:'btc', name:'testnet'})
        "apiUrls": {
            "bitpay": [Array],
            "blockcypher": [Array]
        },
        "paths": {
            "false": "m/44'/1'",
            "true": "m/49'/1'" // segwit
        }
    },
    ...
]
```
