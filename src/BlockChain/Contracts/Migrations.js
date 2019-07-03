module.exports ={
  "contractName": "Migrations",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "last_completed_migration",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "completed",
          "type": "uint256"
        }
      ],
      "name": "setCompleted",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "new_address",
          "type": "address"
        }
      ],
      "name": "upgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102f8806100606000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a72305820717f33274f80d27c45bb6f85ebf488eb8843b742ccc95f7ccc01f6b788cc46500029",
  "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630900f01014610067578063445df0ac146100aa5780638da5cb5b146100d5578063fdacd5761461012c575b600080fd5b34801561007357600080fd5b506100a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610159565b005b3480156100b657600080fd5b506100bf610241565b6040518082815260200191505060405180910390f35b3480156100e157600080fd5b506100ea610247565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013857600080fd5b506101576004803603810190808035906020019092919050505061026c565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023d578190508073ffffffffffffffffffffffffffffffffffffffff1663fdacd5766001546040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505b5050565b60015481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102c957806001819055505b505600a165627a7a72305820717f33274f80d27c45bb6f85ebf488eb8843b742ccc95f7ccc01f6b788cc46500029",
  "sourceMap": "26:488:2:-;;;178:58;8:9:-1;5:2;;;30:1;27;20:12;5:2;178:58:2;221:10;213:5;;:18;;;;;;;;;;;;;;;;;;26:488;;;;;;",
  "deployedSourceMap": "26:488:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;347:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;347:165:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;74:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;74:36:2;;;;;;;;;;;;;;;;;;;;;;;50:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;50:20:2;;;;;;;;;;;;;;;;;;;;;;;;;;;240:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;240:103:2;;;;;;;;;;;;;;;;;;;;;;;;;;347:165;409:19;161:5;;;;;;;;;;;147:19;;:10;:19;;;143:26;;;442:11;409:45;;460:8;:21;;;482:24;;460:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;460:47:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;460:47:2;;;;143:26;347:165;;:::o;74:36::-;;;;:::o;50:20::-;;;;;;;;;;;;;:::o;240:103::-;161:5;;;;;;;;;;;147:19;;:10;:19;;;143:26;;;329:9;302:24;:36;;;;143:26;240:103;:::o",
  "source": "pragma solidity ^0.4.17;\n\ncontract Migrations {\n  address public owner;\n  uint public last_completed_migration;\n\n  modifier restricted() {\n    if (msg.sender == owner) _;\n  }\n\n  function Migrations() public {\n    owner = msg.sender;\n  }\n\n  function setCompleted(uint completed) public restricted {\n    last_completed_migration = completed;\n  }\n\n  function upgrade(address new_address) public restricted {\n    Migrations upgraded = Migrations(new_address);\n    upgraded.setCompleted(last_completed_migration);\n  }\n}\n",
  "sourcePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/Migrations.sol",
  "ast": {
    "absolutePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/Migrations.sol",
    "exportedSymbols": {
      "Migrations": [
        547
      ]
    },
    "id": 548,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 492,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 547,
        "linearizedBaseContracts": [
          547
        ],
        "name": "Migrations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 494,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 547,
            "src": "50:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 493,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "50:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 496,
            "name": "last_completed_migration",
            "nodeType": "VariableDeclaration",
            "scope": 547,
            "src": "74:36:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 495,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "74:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 504,
              "nodeType": "Block",
              "src": "137:37:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 498,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "147:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "147:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 500,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 494,
                      "src": "161:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "147:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 503,
                  "nodeType": "IfStatement",
                  "src": "143:26:2",
                  "trueBody": {
                    "id": 502,
                    "nodeType": "PlaceholderStatement",
                    "src": "168:1:2"
                  }
                }
              ]
            },
            "documentation": null,
            "id": 505,
            "name": "restricted",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 497,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "134:2:2"
            },
            "src": "115:59:2",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 513,
              "nodeType": "Block",
              "src": "207:29:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 508,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 494,
                      "src": "213:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 509,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "221:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "221:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "213:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 512,
                  "nodeType": "ExpressionStatement",
                  "src": "213:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 514,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Migrations",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 506,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "197:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 507,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "207:0:2"
            },
            "scope": 547,
            "src": "178:58:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 525,
              "nodeType": "Block",
              "src": "296:47:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 521,
                      "name": "last_completed_migration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 496,
                      "src": "302:24:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 522,
                      "name": "completed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 516,
                      "src": "329:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "302:36:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 524,
                  "nodeType": "ExpressionStatement",
                  "src": "302:36:2"
                }
              ]
            },
            "documentation": null,
            "id": 526,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 519,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 518,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 505,
                  "src": "285:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "285:10:2"
              }
            ],
            "name": "setCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 517,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 516,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 526,
                  "src": "262:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 515,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "262:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "261:16:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 520,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "296:0:2"
            },
            "scope": 547,
            "src": "240:103:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 545,
              "nodeType": "Block",
              "src": "403:109:2",
              "statements": [
                {
                  "assignments": [
                    534
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 534,
                      "name": "upgraded",
                      "nodeType": "VariableDeclaration",
                      "scope": 546,
                      "src": "409:19:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Migrations_$547",
                        "typeString": "contract Migrations"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 533,
                        "name": "Migrations",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 547,
                        "src": "409:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$547",
                          "typeString": "contract Migrations"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 538,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 536,
                        "name": "new_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 528,
                        "src": "442:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 535,
                      "name": "Migrations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 547,
                      "src": "431:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Migrations_$547_$",
                        "typeString": "type(contract Migrations)"
                      }
                    },
                    "id": 537,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "431:23:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Migrations_$547",
                      "typeString": "contract Migrations"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "409:45:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 542,
                        "name": "last_completed_migration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 496,
                        "src": "482:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 539,
                        "name": "upgraded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 534,
                        "src": "460:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$547",
                          "typeString": "contract Migrations"
                        }
                      },
                      "id": 541,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setCompleted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 526,
                      "src": "460:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "460:47:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 544,
                  "nodeType": "ExpressionStatement",
                  "src": "460:47:2"
                }
              ]
            },
            "documentation": null,
            "id": 546,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 531,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 530,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 505,
                  "src": "392:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "392:10:2"
              }
            ],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 528,
                  "name": "new_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 546,
                  "src": "364:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 527,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "364:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "363:21:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "403:0:2"
            },
            "scope": 547,
            "src": "347:165:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 548,
        "src": "26:488:2"
      }
    ],
    "src": "0:515:2"
  },
  "legacyAST": {
    "absolutePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/Migrations.sol",
    "exportedSymbols": {
      "Migrations": [
        547
      ]
    },
    "id": 548,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 492,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 547,
        "linearizedBaseContracts": [
          547
        ],
        "name": "Migrations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 494,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 547,
            "src": "50:20:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 493,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "50:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 496,
            "name": "last_completed_migration",
            "nodeType": "VariableDeclaration",
            "scope": 547,
            "src": "74:36:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 495,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "74:4:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 504,
              "nodeType": "Block",
              "src": "137:37:2",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 501,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 498,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "147:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "147:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 500,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 494,
                      "src": "161:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "147:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 503,
                  "nodeType": "IfStatement",
                  "src": "143:26:2",
                  "trueBody": {
                    "id": 502,
                    "nodeType": "PlaceholderStatement",
                    "src": "168:1:2"
                  }
                }
              ]
            },
            "documentation": null,
            "id": 505,
            "name": "restricted",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 497,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "134:2:2"
            },
            "src": "115:59:2",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 513,
              "nodeType": "Block",
              "src": "207:29:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 511,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 508,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 494,
                      "src": "213:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 509,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "221:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 510,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "221:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "213:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 512,
                  "nodeType": "ExpressionStatement",
                  "src": "213:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 514,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Migrations",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 506,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "197:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 507,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "207:0:2"
            },
            "scope": 547,
            "src": "178:58:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 525,
              "nodeType": "Block",
              "src": "296:47:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 521,
                      "name": "last_completed_migration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 496,
                      "src": "302:24:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 522,
                      "name": "completed",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 516,
                      "src": "329:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "302:36:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 524,
                  "nodeType": "ExpressionStatement",
                  "src": "302:36:2"
                }
              ]
            },
            "documentation": null,
            "id": 526,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 519,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 518,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 505,
                  "src": "285:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "285:10:2"
              }
            ],
            "name": "setCompleted",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 517,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 516,
                  "name": "completed",
                  "nodeType": "VariableDeclaration",
                  "scope": 526,
                  "src": "262:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 515,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "262:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "261:16:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 520,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "296:0:2"
            },
            "scope": 547,
            "src": "240:103:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 545,
              "nodeType": "Block",
              "src": "403:109:2",
              "statements": [
                {
                  "assignments": [
                    534
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 534,
                      "name": "upgraded",
                      "nodeType": "VariableDeclaration",
                      "scope": 546,
                      "src": "409:19:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Migrations_$547",
                        "typeString": "contract Migrations"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 533,
                        "name": "Migrations",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 547,
                        "src": "409:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$547",
                          "typeString": "contract Migrations"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 538,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 536,
                        "name": "new_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 528,
                        "src": "442:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 535,
                      "name": "Migrations",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 547,
                      "src": "431:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Migrations_$547_$",
                        "typeString": "type(contract Migrations)"
                      }
                    },
                    "id": 537,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "431:23:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Migrations_$547",
                      "typeString": "contract Migrations"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "409:45:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 542,
                        "name": "last_completed_migration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 496,
                        "src": "482:24:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 539,
                        "name": "upgraded",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 534,
                        "src": "460:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Migrations_$547",
                          "typeString": "contract Migrations"
                        }
                      },
                      "id": 541,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setCompleted",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 526,
                      "src": "460:21:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 543,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "460:47:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 544,
                  "nodeType": "ExpressionStatement",
                  "src": "460:47:2"
                }
              ]
            },
            "documentation": null,
            "id": 546,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 531,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 530,
                  "name": "restricted",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 505,
                  "src": "392:10:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "392:10:2"
              }
            ],
            "name": "upgrade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 528,
                  "name": "new_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 546,
                  "src": "364:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 527,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "364:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "363:21:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 532,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "403:0:2"
            },
            "scope": 547,
            "src": "347:165:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 548,
        "src": "26:488:2"
      }
    ],
    "src": "0:515:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-07-26T22:14:51.008Z"
}