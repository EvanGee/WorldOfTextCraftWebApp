export default
{
  "contractName": "DNS",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getDomainNameFromAddress",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_proposedDNSName",
          "type": "string"
        },
        {
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "createNewDomainName",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_proposedDNSName",
          "type": "string"
        }
      ],
      "name": "getPrice",
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
      "constant": true,
      "inputs": [
        {
          "name": "_domainName",
          "type": "string"
        }
      ],
      "name": "getAddressFromDomainName",
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
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107b58061009f6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630da1252a146100725780634fd2f22714610124578063524f3889146101a05780638da5cb5b14610211578063e796bf7c14610266575b600080fd5b341561007d57600080fd5b6100a9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610303565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e95780820151818401526020810190506100ce565b50505050905090810190601f1680156101165780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561012f57600080fd5b61019e600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103ea565b005b34156101ab57600080fd5b6101fb600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061059d565b6040518082815260200191505060405180910390f35b341561021c57600080fd5b610224610615565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561027157600080fd5b6102c1600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061063b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61030b6106d0565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103de5780601f106103b3576101008083540402835291602001916103de565b820191906000526020600020905b8154815290600101906020018083116103c157829003601f168201915b50505050509050919050565b60006003836040518082805190602001908083835b60208310151561042457805182526020820191506020810190506020830392506103ff565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561049a57610599565b81600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906104ed9291906106e4565b50806003836040518082805190602001908083835b6020831015156105275780518252602082019150602081019050602083039250610502565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b60006004826040518082805190602001908083835b6020831015156105d757805182526020820191506020810190506020830392506105b2565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600101549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006003826040518082805190602001908083835b6020831015156106755780518252602082019150602081019050602083039250610650565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061072557805160ff1916838001178555610753565b82800160010185558215610753579182015b82811115610752578251825591602001919060010190610737565b5b5090506107609190610764565b5090565b61078691905b8082111561078257600081600090555060010161076a565b5090565b905600a165627a7a72305820123542e160910c0b2abdf6ecba1afeecfb6aac5b4dada5b024247cb951948e9c0029",
  "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630da1252a146100725780634fd2f22714610124578063524f3889146101a05780638da5cb5b14610211578063e796bf7c14610266575b600080fd5b341561007d57600080fd5b6100a9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610303565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100e95780820151818401526020810190506100ce565b50505050905090810190601f1680156101165780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561012f57600080fd5b61019e600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506103ea565b005b34156101ab57600080fd5b6101fb600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061059d565b6040518082815260200191505060405180910390f35b341561021c57600080fd5b610224610615565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561027157600080fd5b6102c1600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061063b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61030b6106d0565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103de5780601f106103b3576101008083540402835291602001916103de565b820191906000526020600020905b8154815290600101906020018083116103c157829003601f168201915b50505050509050919050565b60006003836040518082805190602001908083835b60208310151561042457805182526020820191506020810190506020830392506103ff565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561049a57610599565b81600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906104ed9291906106e4565b50806003836040518082805190602001908083835b6020831015156105275780518252602082019150602081019050602083039250610502565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5050565b60006004826040518082805190602001908083835b6020831015156105d757805182526020820191506020810190506020830392506105b2565b6001836020036101000a0380198251168184511680821785525050505050509050019150509081526020016040518091039020600101549050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006003826040518082805190602001908083835b6020831015156106755780518252602082019150602081019050602083039250610650565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061072557805160ff1916838001178555610753565b82800160010185558215610753579182015b82811115610752578251825591602001919060010190610737565b5b5090506107609190610764565b5090565b61078691905b8082111561078257600081600090555060010161076a565b5090565b905600a165627a7a72305820123542e160910c0b2abdf6ecba1afeecfb6aac5b4dada5b024247cb951948e9c0029",
  "sourceMap": "210:954:1:-;;;457:51;;;;;;;;107:10;99:5;;:18;;;;;;;;;;;;;;;;;;493:10;485:5;;:18;;;;;;;;;;;;;;;;;;210:954;;;;;;",
  "deployedSourceMap": "210:954:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;915:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;512:264:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1040:122;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;307:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:131;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;915:121;984:6;;:::i;:::-;1009:16;:22;1026:4;1009:22;;;;;;;;;;;;;;;1002:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;915:121;;;:::o;512:264::-;637:1;602:13;616:16;602:31;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;602:36:1;;;;598:57;;;648:7;;598:57;694:16;668;:23;685:5;668:23;;;;;;;;;;;;;;;:42;;;;;;;;;;;;:::i;:::-;;752:5;718:13;732:16;718:31;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;;;;;;;718:39:1;;;;;;;;;;;;;;;;;;512:264;;;:::o;1040:122::-;1103:7;1127:6;1134:16;1127:24;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;;;;;;1127:30:1;;;1120:37;;1040:122;;;:::o;307:20::-;;;;;;;;;;;;;:::o;780:131::-;855:7;880:13;894:11;880:26;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;873:33:1;;780:131;;;:::o;210:954::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\n\ncontract owned {\n    address owner;\n    function owned() public { \n      owner = msg.sender; \n    }\n\n    modifier onlyOwner {\n        require(msg.sender == owner);\n        _;\n    }\n}\n\ncontract DNS is owned{\n\n    struct payment {\n      address payer;\n      uint256 price;\n    }\n\n\n  address public owner;\n  mapping (address=>string) domainNamelookup;\n  mapping (string=>address) addresslookup;\n  mapping (string=>payment) prices;\n\n  function DNS() public {\n    owner = msg.sender;\n  }\n\n  function createNewDomainName(string _proposedDNSName, address _addr) public  {\n\n      if (addresslookup[_proposedDNSName] != 0)\n        return;      \n      domainNamelookup[_addr] = _proposedDNSName;\n      addresslookup[_proposedDNSName] = _addr;\n      return;\n  }\n\n  function getAddressFromDomainName(string _domainName) public view returns (address) \n  {\n    return addresslookup[_domainName];\n  }\n\n  function getDomainNameFromAddress(address addr) public view returns (string)\n  {\n      return domainNamelookup[addr];\n  }\n\n  function getPrice(string _proposedDNSName) public view returns(uint256)\n  {\n    return prices[_proposedDNSName].price;\n  }\n}\n",
  "sourcePath": "/home/evan/BlockChain/businessContracts/contracts/DNS.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/home/evan/BlockChain/businessContracts/contracts/DNS.sol",
      "exportedSymbols": {
        "DNS": [
          161
        ],
        "owned": [
          65
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ]
        },
        "id": 42,
        "name": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            65
          ],
          "name": "owned",
          "scope": 162
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 65,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 43,
                "name": "ElementaryTypeName",
                "src": "47:7:1"
              }
            ],
            "id": 44,
            "name": "VariableDeclaration",
            "src": "47:13:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "owned",
              "payable": false,
              "scope": 65,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 45,
                "name": "ParameterList",
                "src": "80:2:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 46,
                "name": "ParameterList",
                "src": "90:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 44,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 47,
                            "name": "Identifier",
                            "src": "99:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 263,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 48,
                                "name": "Identifier",
                                "src": "107:3:1"
                              }
                            ],
                            "id": 49,
                            "name": "MemberAccess",
                            "src": "107:10:1"
                          }
                        ],
                        "id": 50,
                        "name": "Assignment",
                        "src": "99:18:1"
                      }
                    ],
                    "id": 51,
                    "name": "ExpressionStatement",
                    "src": "99:18:1"
                  }
                ],
                "id": 52,
                "name": "Block",
                "src": "90:35:1"
              }
            ],
            "id": 53,
            "name": "FunctionDefinition",
            "src": "66:59:1"
          },
          {
            "attributes": {
              "name": "onlyOwner",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 54,
                "name": "ParameterList",
                "src": "150:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 266,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 55,
                            "name": "Identifier",
                            "src": "160:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 263,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 56,
                                    "name": "Identifier",
                                    "src": "168:3:1"
                                  }
                                ],
                                "id": 57,
                                "name": "MemberAccess",
                                "src": "168:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 44,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 58,
                                "name": "Identifier",
                                "src": "182:5:1"
                              }
                            ],
                            "id": 59,
                            "name": "BinaryOperation",
                            "src": "168:19:1"
                          }
                        ],
                        "id": 60,
                        "name": "FunctionCall",
                        "src": "160:28:1"
                      }
                    ],
                    "id": 61,
                    "name": "ExpressionStatement",
                    "src": "160:28:1"
                  },
                  {
                    "id": 62,
                    "name": "PlaceholderStatement",
                    "src": "198:1:1"
                  }
                ],
                "id": 63,
                "name": "Block",
                "src": "150:56:1"
              }
            ],
            "id": 64,
            "name": "ModifierDefinition",
            "src": "131:75:1"
          }
        ],
        "id": 65,
        "name": "ContractDefinition",
        "src": "26:182:1"
      },
      {
        "attributes": {
          "contractDependencies": [
            65
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            161,
            65
          ],
          "name": "DNS",
          "scope": 162
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "owned",
                  "referencedDeclaration": 65,
                  "type": "contract owned"
                },
                "id": 66,
                "name": "UserDefinedTypeName",
                "src": "226:5:1"
              }
            ],
            "id": 67,
            "name": "InheritanceSpecifier",
            "src": "226:5:1"
          },
          {
            "attributes": {
              "canonicalName": "DNS.payment",
              "name": "payment",
              "scope": 161,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "payer",
                  "scope": 72,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "address",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 68,
                    "name": "ElementaryTypeName",
                    "src": "261:7:1"
                  }
                ],
                "id": 69,
                "name": "VariableDeclaration",
                "src": "261:13:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "price",
                  "scope": 72,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 70,
                    "name": "ElementaryTypeName",
                    "src": "282:7:1"
                  }
                ],
                "id": 71,
                "name": "VariableDeclaration",
                "src": "282:13:1"
              }
            ],
            "id": 72,
            "name": "StructDefinition",
            "src": "238:64:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 161,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 73,
                "name": "ElementaryTypeName",
                "src": "307:7:1"
              }
            ],
            "id": 74,
            "name": "VariableDeclaration",
            "src": "307:20:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "domainNamelookup",
              "scope": 161,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => string storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => string storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 75,
                    "name": "ElementaryTypeName",
                    "src": "340:7:1"
                  },
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 76,
                    "name": "ElementaryTypeName",
                    "src": "349:6:1"
                  }
                ],
                "id": 77,
                "name": "Mapping",
                "src": "331:25:1"
              }
            ],
            "id": 78,
            "name": "VariableDeclaration",
            "src": "331:42:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "addresslookup",
              "scope": 161,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 79,
                    "name": "ElementaryTypeName",
                    "src": "386:6:1"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 80,
                    "name": "ElementaryTypeName",
                    "src": "394:7:1"
                  }
                ],
                "id": 81,
                "name": "Mapping",
                "src": "377:25:1"
              }
            ],
            "id": 82,
            "name": "VariableDeclaration",
            "src": "377:39:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "prices",
              "scope": 161,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => struct DNS.payment storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => struct DNS.payment storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 83,
                    "name": "ElementaryTypeName",
                    "src": "429:6:1"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "payment",
                      "referencedDeclaration": 72,
                      "type": "struct DNS.payment storage pointer"
                    },
                    "id": 84,
                    "name": "UserDefinedTypeName",
                    "src": "437:7:1"
                  }
                ],
                "id": 85,
                "name": "Mapping",
                "src": "420:25:1"
              }
            ],
            "id": 86,
            "name": "VariableDeclaration",
            "src": "420:32:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "DNS",
              "payable": false,
              "scope": 161,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 87,
                "name": "ParameterList",
                "src": "469:2:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 88,
                "name": "ParameterList",
                "src": "479:0:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 74,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 89,
                            "name": "Identifier",
                            "src": "485:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 263,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 90,
                                "name": "Identifier",
                                "src": "493:3:1"
                              }
                            ],
                            "id": 91,
                            "name": "MemberAccess",
                            "src": "493:10:1"
                          }
                        ],
                        "id": 92,
                        "name": "Assignment",
                        "src": "485:18:1"
                      }
                    ],
                    "id": 93,
                    "name": "ExpressionStatement",
                    "src": "485:18:1"
                  }
                ],
                "id": 94,
                "name": "Block",
                "src": "479:29:1"
              }
            ],
            "id": 95,
            "name": "FunctionDefinition",
            "src": "457:51:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "createNewDomainName",
              "payable": false,
              "scope": 161,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_proposedDNSName",
                      "scope": 123,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 96,
                        "name": "ElementaryTypeName",
                        "src": "541:6:1"
                      }
                    ],
                    "id": 97,
                    "name": "VariableDeclaration",
                    "src": "541:23:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_addr",
                      "scope": 123,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 98,
                        "name": "ElementaryTypeName",
                        "src": "566:7:1"
                      }
                    ],
                    "id": 99,
                    "name": "VariableDeclaration",
                    "src": "566:13:1"
                  }
                ],
                "id": 100,
                "name": "ParameterList",
                "src": "540:40:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 101,
                "name": "ParameterList",
                "src": "589:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 82,
                                  "type": "mapping(string memory => address)",
                                  "value": "addresslookup"
                                },
                                "id": 102,
                                "name": "Identifier",
                                "src": "602:13:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 97,
                                  "type": "string memory",
                                  "value": "_proposedDNSName"
                                },
                                "id": 103,
                                "name": "Identifier",
                                "src": "616:16:1"
                              }
                            ],
                            "id": 104,
                            "name": "IndexAccess",
                            "src": "602:31:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 105,
                            "name": "Literal",
                            "src": "637:1:1"
                          }
                        ],
                        "id": 106,
                        "name": "BinaryOperation",
                        "src": "602:36:1"
                      },
                      {
                        "attributes": {
                          "expression": null,
                          "functionReturnParameters": 101
                        },
                        "id": 107,
                        "name": "Return",
                        "src": "648:7:1"
                      }
                    ],
                    "id": 108,
                    "name": "IfStatement",
                    "src": "598:57:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 78,
                                  "type": "mapping(address => string storage ref)",
                                  "value": "domainNamelookup"
                                },
                                "id": 109,
                                "name": "Identifier",
                                "src": "668:16:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 99,
                                  "type": "address",
                                  "value": "_addr"
                                },
                                "id": 110,
                                "name": "Identifier",
                                "src": "685:5:1"
                              }
                            ],
                            "id": 111,
                            "name": "IndexAccess",
                            "src": "668:23:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 97,
                              "type": "string memory",
                              "value": "_proposedDNSName"
                            },
                            "id": 112,
                            "name": "Identifier",
                            "src": "694:16:1"
                          }
                        ],
                        "id": 113,
                        "name": "Assignment",
                        "src": "668:42:1"
                      }
                    ],
                    "id": 114,
                    "name": "ExpressionStatement",
                    "src": "668:42:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 82,
                                  "type": "mapping(string memory => address)",
                                  "value": "addresslookup"
                                },
                                "id": 115,
                                "name": "Identifier",
                                "src": "718:13:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 97,
                                  "type": "string memory",
                                  "value": "_proposedDNSName"
                                },
                                "id": 116,
                                "name": "Identifier",
                                "src": "732:16:1"
                              }
                            ],
                            "id": 117,
                            "name": "IndexAccess",
                            "src": "718:31:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 99,
                              "type": "address",
                              "value": "_addr"
                            },
                            "id": 118,
                            "name": "Identifier",
                            "src": "752:5:1"
                          }
                        ],
                        "id": 119,
                        "name": "Assignment",
                        "src": "718:39:1"
                      }
                    ],
                    "id": 120,
                    "name": "ExpressionStatement",
                    "src": "718:39:1"
                  },
                  {
                    "attributes": {
                      "expression": null,
                      "functionReturnParameters": 101
                    },
                    "id": 121,
                    "name": "Return",
                    "src": "765:7:1"
                  }
                ],
                "id": 122,
                "name": "Block",
                "src": "589:187:1"
              }
            ],
            "id": 123,
            "name": "FunctionDefinition",
            "src": "512:264:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAddressFromDomainName",
              "payable": false,
              "scope": 161,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_domainName",
                      "scope": 135,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 124,
                        "name": "ElementaryTypeName",
                        "src": "814:6:1"
                      }
                    ],
                    "id": 125,
                    "name": "VariableDeclaration",
                    "src": "814:18:1"
                  }
                ],
                "id": 126,
                "name": "ParameterList",
                "src": "813:20:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 135,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 127,
                        "name": "ElementaryTypeName",
                        "src": "855:7:1"
                      }
                    ],
                    "id": 128,
                    "name": "VariableDeclaration",
                    "src": "855:7:1"
                  }
                ],
                "id": 129,
                "name": "ParameterList",
                "src": "854:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 129
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 82,
                              "type": "mapping(string memory => address)",
                              "value": "addresslookup"
                            },
                            "id": 130,
                            "name": "Identifier",
                            "src": "880:13:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 125,
                              "type": "string memory",
                              "value": "_domainName"
                            },
                            "id": 131,
                            "name": "Identifier",
                            "src": "894:11:1"
                          }
                        ],
                        "id": 132,
                        "name": "IndexAccess",
                        "src": "880:26:1"
                      }
                    ],
                    "id": 133,
                    "name": "Return",
                    "src": "873:33:1"
                  }
                ],
                "id": 134,
                "name": "Block",
                "src": "867:44:1"
              }
            ],
            "id": 135,
            "name": "FunctionDefinition",
            "src": "780:131:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getDomainNameFromAddress",
              "payable": false,
              "scope": 161,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "addr",
                      "scope": 147,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 136,
                        "name": "ElementaryTypeName",
                        "src": "949:7:1"
                      }
                    ],
                    "id": 137,
                    "name": "VariableDeclaration",
                    "src": "949:12:1"
                  }
                ],
                "id": 138,
                "name": "ParameterList",
                "src": "948:14:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 147,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 139,
                        "name": "ElementaryTypeName",
                        "src": "984:6:1"
                      }
                    ],
                    "id": 140,
                    "name": "VariableDeclaration",
                    "src": "984:6:1"
                  }
                ],
                "id": 141,
                "name": "ParameterList",
                "src": "983:8:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 141
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 78,
                              "type": "mapping(address => string storage ref)",
                              "value": "domainNamelookup"
                            },
                            "id": 142,
                            "name": "Identifier",
                            "src": "1009:16:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 137,
                              "type": "address",
                              "value": "addr"
                            },
                            "id": 143,
                            "name": "Identifier",
                            "src": "1026:4:1"
                          }
                        ],
                        "id": 144,
                        "name": "IndexAccess",
                        "src": "1009:22:1"
                      }
                    ],
                    "id": 145,
                    "name": "Return",
                    "src": "1002:29:1"
                  }
                ],
                "id": 146,
                "name": "Block",
                "src": "994:42:1"
              }
            ],
            "id": 147,
            "name": "FunctionDefinition",
            "src": "915:121:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getPrice",
              "payable": false,
              "scope": 161,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_proposedDNSName",
                      "scope": 160,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 148,
                        "name": "ElementaryTypeName",
                        "src": "1058:6:1"
                      }
                    ],
                    "id": 149,
                    "name": "VariableDeclaration",
                    "src": "1058:23:1"
                  }
                ],
                "id": 150,
                "name": "ParameterList",
                "src": "1057:25:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 160,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 151,
                        "name": "ElementaryTypeName",
                        "src": "1103:7:1"
                      }
                    ],
                    "id": 152,
                    "name": "VariableDeclaration",
                    "src": "1103:7:1"
                  }
                ],
                "id": 153,
                "name": "ParameterList",
                "src": "1102:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 153
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "price",
                          "referencedDeclaration": 71,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct DNS.payment storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 86,
                                  "type": "mapping(string memory => struct DNS.payment storage ref)",
                                  "value": "prices"
                                },
                                "id": 154,
                                "name": "Identifier",
                                "src": "1127:6:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 149,
                                  "type": "string memory",
                                  "value": "_proposedDNSName"
                                },
                                "id": 155,
                                "name": "Identifier",
                                "src": "1134:16:1"
                              }
                            ],
                            "id": 156,
                            "name": "IndexAccess",
                            "src": "1127:24:1"
                          }
                        ],
                        "id": 157,
                        "name": "MemberAccess",
                        "src": "1127:30:1"
                      }
                    ],
                    "id": 158,
                    "name": "Return",
                    "src": "1120:37:1"
                  }
                ],
                "id": 159,
                "name": "Block",
                "src": "1114:48:1"
              }
            ],
            "id": 160,
            "name": "FunctionDefinition",
            "src": "1040:122:1"
          }
        ],
        "id": 161,
        "name": "ContractDefinition",
        "src": "210:954:1"
      }
    ],
    "id": 162,
    "name": "SourceUnit",
    "src": "0:1165:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1111": {
      "events": {},
      "links": {},
      "address": "0x3d49d1ef2ade060a33c6e6aa213513a7ee9a6241"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-28T14:46:16.443Z"
}