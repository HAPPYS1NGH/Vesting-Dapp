const contractAddress = "0x828e4ED5a77aDED293E77C9D3e9CFb815B49a006";
// const contractAddress = "0x5f17b59FCDb08Bc562368031E4414F66769e6152";
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensMinted",
        type: "uint256",
      },
    ],
    name: "Minted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "OrganisationListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Vesting.UserRole",
        name: "userRole",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "organisationAddress",
        type: "address",
      },
    ],
    name: "Whitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "organisationAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum Vesting.UserRole",
        name: "userRole",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "stakeHolderAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timeLock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "addedStakeHolder",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum Vesting.UserRole",
        name: "_userRole",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_stakeHolderAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timeLock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_organisationAddress",
        type: "address",
      },
    ],
    name: "addStakeHolders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_organisationAddress",
        type: "address",
      },
      {
        internalType: "enum Vesting.UserRole",
        name: "_userRole",
        type: "uint8",
      },
    ],
    name: "getHolders",
    outputs: [
      {
        components: [
          {
            internalType: "enum Vesting.UserRole",
            name: "userType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "stakeHolderAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timeLock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isWhiteListed",
            type: "bool",
          },
        ],
        internalType: "struct Vesting.stakeHolder[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOrganisations",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "tokenName",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenSymbol",
            type: "string",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "admin",
            type: "address",
          },
        ],
        internalType: "struct Vesting.Organisation[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_organisationAddress",
        type: "address",
      },
    ],
    name: "getWhiteList",
    outputs: [
      {
        components: [
          {
            internalType: "enum Vesting.UserRole",
            name: "userType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "stakeHolderAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timeLock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tokens",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isWhiteListed",
            type: "bool",
          },
        ],
        internalType: "struct Vesting.stakeHolder[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_organisationAddress",
        type: "address",
      },
      {
        internalType: "enum Vesting.UserRole",
        name: "_userRole",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_stakeHolderAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
    ],
    name: "registerOrganisation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum Vesting.UserRole",
        name: "_userRole",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_organisationAddress",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export { abi, contractAddress };
