export const bridgeABI = [
  {
    inputs: [
      {
        name: 'domainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        name: 'initialRelayers',
        internalType: 'address[]',
        type: 'address[]'
      },
      {
        name: 'initialRelayerThreshold',
        internalType: 'uint256',
        type: 'uint256'
      },
      {
        name: 'expiry',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'destinationDomainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        indexed: false,
        name: 'resourceID',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        indexed: false,
        name: 'depositNonce',
        internalType: 'uint64',
        type: 'uint64'
      },
      {
        indexed: true,
        name: 'user',
        internalType: 'address',
        type: 'address'
      },
      {
        indexed: false,
        name: 'data',
        internalType: 'bytes',
        type: 'bytes'
      },
      {
        indexed: false,
        name: 'handlerResponse',
        internalType: 'bytes',
        type: 'bytes'
      }
    ],
    name: 'Deposit',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'lowLevelData',
        internalType: 'bytes',
        type: 'bytes'
      }
    ],
    name: 'FailedHandlerExecution',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'account',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'Paused',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'originDomainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        indexed: false,
        name: 'depositNonce',
        internalType: 'uint64',
        type: 'uint64'
      },
      {
        indexed: false,
        name: 'status',
        internalType: 'enum Bridge.ProposalStatus',
        type: 'uint8'
      },
      {
        indexed: false,
        name: 'dataHash',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    name: 'ProposalEvent',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'originDomainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        indexed: false,
        name: 'depositNonce',
        internalType: 'uint64',
        type: 'uint64'
      },
      {
        indexed: false,
        name: 'status',
        internalType: 'enum Bridge.ProposalStatus',
        type: 'uint8'
      },
      {
        indexed: false,
        name: 'dataHash',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    name: 'ProposalVote',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'relayer',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'RelayerAdded',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'relayer',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'RelayerRemoved',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'newThreshold',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    name: 'RelayerThresholdChanged',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: true,
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: 'account',
        internalType: 'address',
        type: 'address'
      },
      {
        indexed: true,
        name: 'sender',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'RoleGranted',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: true,
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        indexed: true,
        name: 'account',
        internalType: 'address',
        type: 'address'
      },
      {
        indexed: true,
        name: 'sender',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'RoleRevoked',
    anonymous: false,
    type: 'event'
  },
  {
    inputs: [
      {
        indexed: false,
        name: 'account',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'Unpaused',
    anonymous: false,
    type: 'event'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    inputs: [],
    name: 'MAX_RELAYERS',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    inputs: [],
    name: 'RELAYER_ROLE',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'uint64',
        type: 'uint64'
      }
    ],
    inputs: [
      {
        name: '',
        internalType: 'uint8',
        type: 'uint8'
      }
    ],
    name: '_depositCounts',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'uint8',
        type: 'uint8'
      }
    ],
    inputs: [],
    name: '_domainID',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'uint40',
        type: 'uint40'
      }
    ],
    inputs: [],
    name: '_expiry',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool'
      }
    ],
    inputs: [
      {
        name: 'destNonce',
        internalType: 'uint72',
        type: 'uint72'
      },
      {
        name: 'dataHash',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'relayer',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: '_hasVotedOnProposal',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'uint8',
        type: 'uint8'
      }
    ],
    inputs: [],
    name: '_relayerThreshold',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'address',
        type: 'address'
      }
    ],
    inputs: [
      {
        name: '',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    name: '_resourceIDToHandlerAddress',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    inputs: [],
    name: '_totalRelayers',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'relayerAddress',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'adminAddRelayer',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'handlerAddress',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'feeData',
        internalType: 'bytes',
        type: 'bytes'
      }
    ],
    name: 'adminChangeFee',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'newThreshold',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    name: 'adminChangeRelayerThreshold',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'handlerAddress',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'newBridgeAddress',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'adminMigrateHandler',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [],
    name: 'adminPauseTransfers',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'relayerAddress',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'adminRemoveRelayer',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'handlerAddress',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'tokenAddress',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'adminSetBurnable',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'domainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        name: 'nonce',
        internalType: 'uint64',
        type: 'uint64'
      }
    ],
    name: 'adminSetDepositNonce',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'forwarder',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'valid',
        internalType: 'bool',
        type: 'bool'
      }
    ],
    name: 'adminSetForwarder',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'handlerAddress',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'resourceID',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'contractAddress',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'depositFunctionSig',
        internalType: 'bytes4',
        type: 'bytes4'
      },
      {
        name: 'depositFunctionDepositerOffset',
        internalType: 'uint256',
        type: 'uint256'
      },
      {
        name: 'executeFunctionSig',
        internalType: 'bytes4',
        type: 'bytes4'
      }
    ],
    name: 'adminSetGenericResource',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'handlerAddress',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'resourceID',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'tokenAddress',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'adminSetResource',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [],
    name: 'adminUnpauseTransfers',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'handlerAddress',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'data',
        internalType: 'bytes',
        type: 'bytes'
      }
    ],
    name: 'adminWithdraw',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [
      {
        name: 'feeToken',
        internalType: 'address',
        type: 'address'
      },
      {
        name: 'fee',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    inputs: [
      {
        name: 'destinationDomainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        name: 'resourceID',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'data',
        internalType: 'bytes',
        type: 'bytes'
      }
    ],
    name: 'calculateFee',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'domainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        name: 'depositNonce',
        internalType: 'uint64',
        type: 'uint64'
      },
      {
        name: 'dataHash',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    name: 'cancelProposal',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'destinationDomainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        name: 'resourceID',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'data',
        internalType: 'bytes',
        type: 'bytes'
      }
    ],
    name: 'deposit',
    stateMutability: 'payable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'domainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        name: 'depositNonce',
        internalType: 'uint64',
        type: 'uint64'
      },
      {
        name: 'data',
        internalType: 'bytes',
        type: 'bytes'
      },
      {
        name: 'resourceID',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'revertOnFail',
        internalType: 'bool',
        type: 'bool'
      }
    ],
    name: 'executeProposal',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [
      {
        components: [
          {
            name: '_status',
            internalType: 'enum Bridge.ProposalStatus',
            type: 'uint8'
          },
          {
            name: '_yesVotes',
            internalType: 'uint200',
            type: 'uint200'
          },
          {
            name: '_yesVotesTotal',
            internalType: 'uint8',
            type: 'uint8'
          },
          {
            name: '_proposedBlock',
            internalType: 'uint40',
            type: 'uint40'
          }
        ],
        name: '',
        internalType: 'struct Bridge.Proposal',
        type: 'tuple'
      }
    ],
    inputs: [
      {
        name: 'originDomainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        name: 'depositNonce',
        internalType: 'uint64',
        type: 'uint64'
      },
      {
        name: 'dataHash',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    name: 'getProposal',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    inputs: [
      {
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    name: 'getRoleAdmin',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'address',
        type: 'address'
      }
    ],
    inputs: [
      {
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    name: 'getRoleMember',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    inputs: [
      {
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      }
    ],
    name: 'getRoleMemberCount',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'uint256',
        type: 'uint256'
      }
    ],
    inputs: [
      {
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'getRoleMemberIndex',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'grantRole',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool'
      }
    ],
    inputs: [
      {
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'hasRole',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool'
      }
    ],
    inputs: [
      {
        name: 'relayer',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'isRelayer',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool'
      }
    ],
    inputs: [
      {
        name: '',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'isValidForwarder',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [
      {
        name: '',
        internalType: 'bool',
        type: 'bool'
      }
    ],
    inputs: [],
    name: 'paused',
    stateMutability: 'view',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'renounceAdmin',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'renounceRole',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'role',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address'
      }
    ],
    name: 'revokeRole',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'tokens',
        internalType: 'address[]',
        type: 'address[]'
      },
      {
        name: 'receivers',
        internalType: 'address[]',
        type: 'address[]'
      },
      {
        name: 'amounts',
        internalType: 'uint256[]',
        type: 'uint256[]'
      }
    ],
    name: 'transferTokens',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    outputs: [],
    inputs: [
      {
        name: 'domainID',
        internalType: 'uint8',
        type: 'uint8'
      },
      {
        name: 'depositNonce',
        internalType: 'uint64',
        type: 'uint64'
      },
      {
        name: 'resourceID',
        internalType: 'bytes32',
        type: 'bytes32'
      },
      {
        name: 'data',
        internalType: 'bytes',
        type: 'bytes'
      }
    ],
    name: 'voteProposal',
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'receive'
  }
] as const