# Install

```
npm i @elevenyellow.com/blockchain-networks
```

# API

<!--

### find({ symbol, name }) : array

```js
import { find } from '@elevenyellow.com/blockchain-networks'
const network = find({ symbol: 'BTC', name: 'testnet' })
```

Output

```json
{
    "symbol": "BTC",
    "names": ["testnet"],
    "config": [Object], // equivalent to: require('bitcoinjs-lib').networks.testnet
    "apiUrls": {
        "bitpay": [Array],
        "blockcypher": [Array]
    },
    "path": {
        "false": "m/44'/1'",
        "true": "m/49'/1'" // segwit
    }
}
```
-->
