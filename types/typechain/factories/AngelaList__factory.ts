/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AngelaList, AngelaListInterface } from "../AngelaList";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "merkleRootUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
    ],
    name: "updateMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610308806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632eb4a7ab1461005c5780634783f0ef14610078578063715018a61461008d5780638da5cb5b14610095578063f2fde38b146100b0575b600080fd5b61006560655481565b6040519081526020015b60405180910390f35b61008b610086366004610254565b6100c3565b005b61008b610131565b6033546040516001600160a01b03909116815260200161006f565b61008b6100be36600461026d565b610167565b6033546001600160a01b031633146100f65760405162461bcd60e51b81526004016100ed9061029d565b60405180910390fd5b60658190556040518181527fa2bc4a36b1e221bdcc16df9d7c15559a5f4f9902519c0f92ad3198f1df005e8b9060200160405180910390a150565b6033546001600160a01b0316331461015b5760405162461bcd60e51b81526004016100ed9061029d565b6101656000610202565b565b6033546001600160a01b031633146101915760405162461bcd60e51b81526004016100ed9061029d565b6001600160a01b0381166101f65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ed565b6101ff81610202565b50565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006020828403121561026657600080fd5b5035919050565b60006020828403121561027f57600080fd5b81356001600160a01b038116811461029657600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea2646970667358221220911467bed5a19124ea5e69f93716405870b6a9cb9df1de9e4780c1780507768964736f6c63430008090033";

export class AngelaList__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AngelaList> {
    return super.deploy(overrides || {}) as Promise<AngelaList>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AngelaList {
    return super.attach(address) as AngelaList;
  }
  connect(signer: Signer): AngelaList__factory {
    return super.connect(signer) as AngelaList__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AngelaListInterface {
    return new utils.Interface(_abi) as AngelaListInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AngelaList {
    return new Contract(address, _abi, signerOrProvider) as AngelaList;
  }
}
