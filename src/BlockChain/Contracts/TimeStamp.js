module.exports ={
  "contractName": "TimeStamp",
  "abi": [
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
          "name": "_file",
          "type": "address"
        }
      ],
      "name": "addTimeStampToFile",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060f7806100a36000396000f300608060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360a81ddb146044575b600080fd5b348015604f57600080fd5b506082600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506084565b005b42600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505600a165627a7a723058200d4a05010d1338437f60df1c96e4e8aa62f6ac303630a52ee8ab999a2129c4850029",
  "deployedBytecode": "0x608060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360a81ddb146044575b600080fd5b348015604f57600080fd5b506082600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506084565b005b42600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505600a165627a7a723058200d4a05010d1338437f60df1c96e4e8aa62f6ac303630a52ee8ab999a2129c4850029",
  "sourceMap": "209:274:3:-;;;284:88;8:9:-1;5:2;;;30:1;27;20:12;5:2;284:88:3;107:10;99:5;;:18;;;;;;;;;;;;;;;;;;350:15;322:10;:25;341:4;322:25;;;;;;;;;;;;;;;:43;;;;209:274;;;;;;",
  "deployedSourceMap": "209:274:3:-;;;;;;;;;;;;;;;;;;;;;;;;378:102;;8:9:-1;5:2;;;30:1;27;20:12;5:2;378:102:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;458:15;438:10;:17;449:5;438:17;;;;;;;;;;;;;;;:35;;;;378:102;:::o",
  "source": "pragma solidity ^0.4.17;\n\ncontract owned {\n    address owner;\n    function owned() public { \n      owner = msg.sender; \n    }\n    modifier onlyOwner {\n        require(msg.sender == owner);\n        _;\n    }\n}\n\ncontract TimeStamp is owned{\n\n    mapping (address=>uint) timeStamps;\n\n    function TimeStamp() public {\n        timeStamps[address(this)] = block.timestamp;\n    }\n\n    function addTimeStampToFile(address _file) public {\n        timeStamps[_file] = block.timestamp;\n    }\n\n}",
  "sourcePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/TimeStamp.sol",
  "ast": {
    "absolutePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/TimeStamp.sol",
    "exportedSymbols": {
      "TimeStamp": [
        605
      ],
      "owned": [
        572
      ]
    },
    "id": 606,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 549,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 572,
        "linearizedBaseContracts": [
          572
        ],
        "name": "owned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 551,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 572,
            "src": "47:13:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 550,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "47:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 559,
              "nodeType": "Block",
              "src": "90:35:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 554,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 551,
                      "src": "99:5:3",
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
                        "id": 555,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "107:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "107:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "99:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 558,
                  "nodeType": "ExpressionStatement",
                  "src": "99:18:3"
                }
              ]
            },
            "documentation": null,
            "id": 560,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "owned",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 552,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "80:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 553,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "90:0:3"
            },
            "scope": 572,
            "src": "66:59:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 570,
              "nodeType": "Block",
              "src": "149:56:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 566,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 563,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "167:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "167:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 565,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 551,
                          "src": "181:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "167:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 562,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        623,
                        624
                      ],
                      "referencedDeclaration": 623,
                      "src": "159:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "159:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 568,
                  "nodeType": "ExpressionStatement",
                  "src": "159:28:3"
                },
                {
                  "id": 569,
                  "nodeType": "PlaceholderStatement",
                  "src": "197:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 571,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 561,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "149:0:3"
            },
            "src": "130:75:3",
            "visibility": "internal"
          }
        ],
        "scope": 606,
        "src": "26:181:3"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 573,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 572,
              "src": "231:5:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$572",
                "typeString": "contract owned"
              }
            },
            "id": 574,
            "nodeType": "InheritanceSpecifier",
            "src": "231:5:3"
          }
        ],
        "contractDependencies": [
          572
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 605,
        "linearizedBaseContracts": [
          605,
          572
        ],
        "name": "TimeStamp",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 578,
            "name": "timeStamps",
            "nodeType": "VariableDeclaration",
            "scope": 605,
            "src": "243:34:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 577,
              "keyType": {
                "id": 575,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "252:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "243:23:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 576,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "261:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 590,
              "nodeType": "Block",
              "src": "312:60:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 581,
                        "name": "timeStamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 578,
                        "src": "322:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 585,
                      "indexExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 583,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 657,
                            "src": "341:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TimeStamp_$605",
                              "typeString": "contract TimeStamp"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_TimeStamp_$605",
                              "typeString": "contract TimeStamp"
                            }
                          ],
                          "id": 582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "333:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "333:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "322:25:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 586,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 610,
                        "src": "350:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "350:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "322:43:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 589,
                  "nodeType": "ExpressionStatement",
                  "src": "322:43:3"
                }
              ]
            },
            "documentation": null,
            "id": 591,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "TimeStamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 579,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "302:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 580,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "312:0:3"
            },
            "scope": 605,
            "src": "284:88:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 603,
              "nodeType": "Block",
              "src": "428:52:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 596,
                        "name": "timeStamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 578,
                        "src": "438:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 598,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 597,
                        "name": "_file",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 593,
                        "src": "449:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "438:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 599,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 610,
                        "src": "458:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 600,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "458:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "438:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 602,
                  "nodeType": "ExpressionStatement",
                  "src": "438:35:3"
                }
              ]
            },
            "documentation": null,
            "id": 604,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTimeStampToFile",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 593,
                  "name": "_file",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "406:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "406:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "405:15:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 595,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "428:0:3"
            },
            "scope": 605,
            "src": "378:102:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 606,
        "src": "209:274:3"
      }
    ],
    "src": "0:483:3"
  },
  "legacyAST": {
    "absolutePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/TimeStamp.sol",
    "exportedSymbols": {
      "TimeStamp": [
        605
      ],
      "owned": [
        572
      ]
    },
    "id": 606,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 549,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 572,
        "linearizedBaseContracts": [
          572
        ],
        "name": "owned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 551,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 572,
            "src": "47:13:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 550,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "47:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 559,
              "nodeType": "Block",
              "src": "90:35:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 554,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 551,
                      "src": "99:5:3",
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
                        "id": 555,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "107:3:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "107:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "99:18:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 558,
                  "nodeType": "ExpressionStatement",
                  "src": "99:18:3"
                }
              ]
            },
            "documentation": null,
            "id": 560,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "owned",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 552,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "80:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 553,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "90:0:3"
            },
            "scope": 572,
            "src": "66:59:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 570,
              "nodeType": "Block",
              "src": "149:56:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 566,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 563,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "167:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 564,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "167:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 565,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 551,
                          "src": "181:5:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "167:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 562,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        623,
                        624
                      ],
                      "referencedDeclaration": 623,
                      "src": "159:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "159:28:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 568,
                  "nodeType": "ExpressionStatement",
                  "src": "159:28:3"
                },
                {
                  "id": 569,
                  "nodeType": "PlaceholderStatement",
                  "src": "197:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 571,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 561,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "149:0:3"
            },
            "src": "130:75:3",
            "visibility": "internal"
          }
        ],
        "scope": 606,
        "src": "26:181:3"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 573,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 572,
              "src": "231:5:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$572",
                "typeString": "contract owned"
              }
            },
            "id": 574,
            "nodeType": "InheritanceSpecifier",
            "src": "231:5:3"
          }
        ],
        "contractDependencies": [
          572
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 605,
        "linearizedBaseContracts": [
          605,
          572
        ],
        "name": "TimeStamp",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 578,
            "name": "timeStamps",
            "nodeType": "VariableDeclaration",
            "scope": 605,
            "src": "243:34:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 577,
              "keyType": {
                "id": 575,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "252:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "243:23:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 576,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "261:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 590,
              "nodeType": "Block",
              "src": "312:60:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 588,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 581,
                        "name": "timeStamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 578,
                        "src": "322:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 585,
                      "indexExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 583,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 657,
                            "src": "341:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TimeStamp_$605",
                              "typeString": "contract TimeStamp"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_TimeStamp_$605",
                              "typeString": "contract TimeStamp"
                            }
                          ],
                          "id": 582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "333:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 584,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "333:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "322:25:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 586,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 610,
                        "src": "350:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 587,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "350:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "322:43:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 589,
                  "nodeType": "ExpressionStatement",
                  "src": "322:43:3"
                }
              ]
            },
            "documentation": null,
            "id": 591,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "TimeStamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 579,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "302:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 580,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "312:0:3"
            },
            "scope": 605,
            "src": "284:88:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 603,
              "nodeType": "Block",
              "src": "428:52:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 596,
                        "name": "timeStamps",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 578,
                        "src": "438:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 598,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 597,
                        "name": "_file",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 593,
                        "src": "449:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "438:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 599,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 610,
                        "src": "458:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 600,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "458:15:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "438:35:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 602,
                  "nodeType": "ExpressionStatement",
                  "src": "438:35:3"
                }
              ]
            },
            "documentation": null,
            "id": 604,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTimeStampToFile",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 594,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 593,
                  "name": "_file",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "406:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "406:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "405:15:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 595,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "428:0:3"
            },
            "scope": 605,
            "src": "378:102:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 606,
        "src": "209:274:3"
      }
    ],
    "src": "0:483:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-07-26T22:14:51.008Z"
}