# Install

```
npm i @elevenyellow.com/blockchain-networks
```

# API

### getCoin({ symbol }) : object

### getNetwork({ symbol, [name=mainnet] }) : network

```js
import { getNetwork } from '@elevenyellow.com/blockchain-networks'
const mainnet = getNetwork({symbol:'BTC'}) // Bitcoin.networks.bitcoin
const testnet =  = getNetwork({symbol:'BTC', name:'testnet'}) // Bitcoin.networks.testnet
```
