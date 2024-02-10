## Contract Initializer Module

This module provides a simple way to initialize Ethereum smart contracts using ethers.js.

### Installation

To use this module, first install it via npm:

```bash
npm install initialize-contract-module
```

### Usage

```typescript
import { JsonRpcProvider, ethers } from "ethers";
import { ContractInitializer } from "initialize-contract-module";

// Set up provider and contract details
const providerUrl = "http://localhost:8545"; // URL of your Ethereum provider
const contractAddress = "0x123abc..."; // Address of the contract on the Ethereum network
const contractABI = [...]; // ABI (Application Binary Interface) of the contract

// Initialize ContractInitializer
const initializer = new ContractInitializer(providerUrl, contractAddress, contractABI);

// Contract is now initialized and ready to use
```

### API

#### `ContractInitializer`

##### Constructor

- `providerUrl: string`: URL of the Ethereum provider.
- `contractAddress: string`: Address of the contract on the Ethereum network.
- `contractABI: any`: ABI (Application Binary Interface) of the contract.

##### Methods

- `initialize()`: Initializes the contract by connecting to the specified provider, contract address, and ABI.

### Example

```typescript
import { JsonRpcProvider, ethers } from "ethers";
import { ContractInitializer } from "initialize-contract-module";

// Set up provider and contract details
const providerUrl = "http://localhost:8545"; // URL of your Ethereum provider
const contractAddress = "0x123abc..."; // Address of the contract on the Ethereum network
const contractABI = [...]; // ABI (Application Binary Interface) of the contract

// Initialize ContractInitializer
const initializer = new ContractInitializer(providerUrl, contractAddress, contractABI);

// Contract is now initialized and ready to use
```

### License

ISC License. See [LICENSE](LICENSE) for details.
