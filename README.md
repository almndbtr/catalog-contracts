# Catalog Custom Contracts 

EVM hardhat environment smart contract development project.


## Info

Catalog Shared Creator Contract (cNFT): [CTest.sol](./contracts/CTest.sol)


## Install


1. install dependencies

```bash
yarn install
```

2. create a ```.env``` file in your root directory. an example is located at [.env-example](.env-example), the proper file is available internally. (vault) 



## Usage

```bash
npx hardhat 
```

starting local hardhat EVM

```bash
npx hardhat node
```

compiling solidity contracts

```bash
npx hardhat compile
```


running tests

```bash
npx hardhat test
```


generating coverage reports

```bash
npx hardhat coverage
```



## Deploying

this repository is configured for use with `hardhat-deploy`.
see the deploy scripts in [./deploy](./deploy) for examples.

deployment scripts contain tag fixtures to aid in deployment sequencing and individual deployment. 

to deploy contracts locally:

```bash
npx hardhat deploy [--tags DEPLOY_SCRIPT_TAG] --network [hardhat || localhost]
```



## Tests

unit tests are located in [./test](./test)
tests are written with mocha + chai.

tests use deployment fixtures from `hardhat-deploy` 


## TODO
- linting/prettier setup



## License

[MIT](LICENSE)
