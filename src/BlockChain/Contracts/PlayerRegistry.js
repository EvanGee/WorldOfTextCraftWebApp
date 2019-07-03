module.exports ={
  "contractName": "PlayerRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "getOwner",
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
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "statArray",
          "type": "uint8[]"
        }
      ],
      "name": "newPlayer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "player",
          "type": "address"
        }
      ],
      "name": "getPlayerByAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b02806100606000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631d0d5b6d14610059578063893d20e8146100d7578063d4d512691461012e575b005b34801561006557600080fd5b506100bd600480360381019080803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091929192905050506101b1565b604051808215151515815260200191505060405180910390f35b3480156100e357600080fd5b506100ec610359565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013a57600080fd5b5061016f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610382565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000806000806048925060009150600090505b600681101561024757601085828151811015156101dd57fe5b9060200190602002015160ff16118061021057506009858281518110151561020157fe5b9060200190602002015160ff16105b1561021e5760009350610351565b848181518110151561022c57fe5b906020019060200201518201915080806001019150506101c4565b8260ff168260ff16111561025e5760009350610351565b846102676103eb565b8080602001828103825283818151815260200191508051906020019060200280838360005b838110156102a757808201518184015260208101905061028c565b5050505090500192505050604051809103906000f0801580156102ce573d6000803e3d6000fd5b50600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600193505b505050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6040516106db806103fc833901905600608060405234801561001057600080fd5b506040516106db3803806106db83398101806040528101908080518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060019080519060200190610089929190610090565b5050610167565b82805482825590600052602060002090601f016020900481019282156101265791602002820160005b838211156100f757835183826101000a81548160ff021916908360ff16021790555092602001926001016020816000010492830192600103026100b9565b80156101245782816101000a81549060ff02191690556001016020816000010492830192600103026100f7565b505b5090506101339190610137565b5090565b61016491905b8082111561016057600081816101000a81549060ff02191690555060010161013d565b5090565b90565b610565806101766000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063410d59cc1461007d5780634ac3adb6146100e95780637cf90fcc14610129578063893d20e81461016c578063a59e8106146101c3578063c59d48471461020b575b600080fd5b34801561008957600080fd5b50610092610277565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100d55780820151818401526020810190506100ba565b505050509050019250505060405180910390f35b3480156100f557600080fd5b50610127600480360381019080803560ff169060200190929190803563ffffffff169060200190929190505050610305565b005b34801561013557600080fd5b5061016a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103a4565b005b34801561017857600080fd5b5061018161040d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101cf57600080fd5b506101f1600480360381019080803560010b9060200190929190505050610436565b604051808215151515815260200191505060405180910390f35b34801561021757600080fd5b506102206104bb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610263578082015181840152602081019050610248565b505050509050019250505060405180910390f35b606060038054806020026020016040519081016040528092919081815260200182805480156102fb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116102b1575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561036057600080fd5b8160018263ffffffff1681548110151561037657fe5b90600052602060002090602091828204019190066101000a81548160ff021916908360ff1602179055505050565b60038190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600182600260009054906101000a900460010b0360010b121561047f576000600260006101000a81548161ffff021916908360010b61ffff160217905550600090506104b6565b81600260008282829054906101000a900460010b0392506101000a81548161ffff021916908360010b61ffff160217905550600190505b919050565b6060600180548060200260200160405190810160405280929190818152602001828054801561052f57602002820191906000526020600020906000905b82829054906101000a900460ff1660ff16815260200190600101906020826000010492830192600103820291508084116104f85790505b50505050509050905600a165627a7a723058200079d70900cbff53566afb85e170f696efd501afc22696241dc760f89215a3ed0029a165627a7a723058205a38558afd8aab4e1388de96ba1d3195295fcef840d7458529aa8f9a76d7f9be0029",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631d0d5b6d14610059578063893d20e8146100d7578063d4d512691461012e575b005b34801561006557600080fd5b506100bd600480360381019080803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091929192905050506101b1565b604051808215151515815260200191505060405180910390f35b3480156100e357600080fd5b506100ec610359565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013a57600080fd5b5061016f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610382565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000806000806048925060009150600090505b600681101561024757601085828151811015156101dd57fe5b9060200190602002015160ff16118061021057506009858281518110151561020157fe5b9060200190602002015160ff16105b1561021e5760009350610351565b848181518110151561022c57fe5b906020019060200201518201915080806001019150506101c4565b8260ff168260ff16111561025e5760009350610351565b846102676103eb565b8080602001828103825283818151815260200191508051906020019060200280838360005b838110156102a757808201518184015260208101905061028c565b5050505090500192505050604051809103906000f0801580156102ce573d6000803e3d6000fd5b50600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600193505b505050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6040516106db806103fc833901905600608060405234801561001057600080fd5b506040516106db3803806106db83398101806040528101908080518201929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060019080519060200190610089929190610090565b5050610167565b82805482825590600052602060002090601f016020900481019282156101265791602002820160005b838211156100f757835183826101000a81548160ff021916908360ff16021790555092602001926001016020816000010492830192600103026100b9565b80156101245782816101000a81549060ff02191690556001016020816000010492830192600103026100f7565b505b5090506101339190610137565b5090565b61016491905b8082111561016057600081816101000a81549060ff02191690555060010161013d565b5090565b90565b610565806101766000396000f300608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063410d59cc1461007d5780634ac3adb6146100e95780637cf90fcc14610129578063893d20e81461016c578063a59e8106146101c3578063c59d48471461020b575b600080fd5b34801561008957600080fd5b50610092610277565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100d55780820151818401526020810190506100ba565b505050509050019250505060405180910390f35b3480156100f557600080fd5b50610127600480360381019080803560ff169060200190929190803563ffffffff169060200190929190505050610305565b005b34801561013557600080fd5b5061016a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103a4565b005b34801561017857600080fd5b5061018161040d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101cf57600080fd5b506101f1600480360381019080803560010b9060200190929190505050610436565b604051808215151515815260200191505060405180910390f35b34801561021757600080fd5b506102206104bb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610263578082015181840152602081019050610248565b505050509050019250505060405180910390f35b606060038054806020026020016040519081016040528092919081815260200182805480156102fb57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116102b1575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561036057600080fd5b8160018263ffffffff1681548110151561037657fe5b90600052602060002090602091828204019190066101000a81548160ff021916908360ff1602179055505050565b60038190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600182600260009054906101000a900460010b0360010b121561047f576000600260006101000a81548161ffff021916908360010b61ffff160217905550600090506104b6565b81600260008282829054906101000a900460010b0392506101000a81548161ffff021916908360010b61ffff160217905550600190505b919050565b6060600180548060200260200160405190810160405280929190818152602001828054801561052f57602002820191906000526020600020906000905b82829054906101000a900460ff1660ff16815260200190600101906020826000010492830192600103820291508084116104f85790505b50505050509050905600a165627a7a723058200079d70900cbff53566afb85e170f696efd501afc22696241dc760f89215a3ed0029a165627a7a723058205a38558afd8aab4e1388de96ba1d3195295fcef840d7458529aa8f9a76d7f9be0029",
  "sourceMap": "1821:793:1:-;;;1956:40;8:9:-1;5:2;;;30:1;27;20:12;5:2;1956:40:1;108:10;100:5;;:18;;;;;;;;;;;;;;;;;;1821:793;;;;;;",
  "deployedSourceMap": "1821:793:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2034:459;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2034:459:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;211:79;;8:9:-1;5:2;;;30:1;27;20:12;5:2;211:79:1;;;;;;;;;;;;;;;;;;;;;;;;;;;2499:112;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2499:112:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2034:459;2087:4;2132:9;2156:11;2186:9;2144:2;2132:14;;2170:1;2156:15;;2196:1;2186:11;;2181:172;2202:1;2199;:4;2181:172;;;2242:2;2227:9;2237:1;2227:12;;;;;;;;;;;;;;;;;;:17;;;:37;;;;2263:1;2248:9;2258:1;2248:12;;;;;;;;;;;;;;;;;;:16;;;2227:37;2223:71;;;2289:5;2282:12;;;;2223:71;2330:9;2340:1;2330:12;;;;;;;;;;;;;;;;;;2321:21;;;;2205:3;;;;;;;2181:172;;;2374:3;2366:11;;:5;:11;;;2362:41;;;2398:5;2391:12;;;;2362:41;2455:9;2444:21;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2444:21:1;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2444:21:1;2422:7;:19;2430:10;2422:19;;;;;;;;;;;;;;;;:43;;;;;;;;;;;;;;;;;;2482:4;2475:11;;2034:459;;;;;;;:::o;211:79::-;253:7;278:5;;;;;;;;;;;271:12;;211:79;:::o;2499:112::-;2564:6;2589:7;:15;2597:6;2589:15;;;;;;;;;;;;;;;;;;;;;;;;;2582:22;;2499:112;;;:::o;1821:793::-;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\n\n\ncontract owned {\n    address owner;\n    function owned() public { \n      owner = msg.sender; \n    }\n    modifier onlyOwner {\n        require(msg.sender == owner);\n        _;\n    }\n    function getOwner() external view returns(address){\n        return owner;\n    }\n}\n\ncontract tradeable is owned {\n    function tradeable() public {}\n\n    function trade(address to) onlyOwner public{\n        owner = to;\n    }\n}\n\ncontract purchasable is owned, tradeable {\n    uint64 price;\n    bool tradeAble = false;\n\n    function purchasable() public {}\n\n    function setPrice(uint64 _price) onlyOwner public {\n        price = _price;\n    }\n\n    function setTradeAble(bool canTrade) onlyOwner public {\n        tradeAble = canTrade;\n    }\n\n    function() public {}\n\n    function buy() payable public {\n        if (!tradeAble) {\n            return;\n        }\n\n        require(msg.value >= price);\n        setTradeAble(false);\n        trade(msg.sender);\n    }\n}\ncontract chargable is owned{\n\n    function chargable() public{        \n    }\n\n    modifier price(uint _cost) {\n        require(msg.value >= _cost);\n        _;\n        owner.transfer(msg.value);\n    }\n}\n\n\ncontract NameRegistry is owned, chargable{\n\n    mapping (address=>string) names;\n    mapping (string=>address) addresses;\n    function NameRegistry() public {\n    }\n\n    function addName(string _name, address _address) onlyOwner public returns (bool) \n    {\n        if (addresses[_name] != 0)\n            return false;\n\n        names[_address] = _name;\n        addresses[_name] = _address;\n        return true;\n    }\n\n    function getName(address _address) public view returns (string)\n    {\n        return names[_address];\n    }\n\n    function getAddress(string _name) public view returns (address)\n    {\n        return addresses[_name];\n    }\n}\n\ncontract PlayerRegistry is owned, chargable {\n\n    //map from accounts to player contracts\n    mapping (address=>Player) players;\n\n    function PlayerRegistry() public {\n    }\n    function() payable public{}\n\n    function newPlayer(uint8[] statArray) public returns(bool){\n    \n        //not sure total\n        uint8 max = 72;\n        uint8 total = 0;\n        for (uint256 i=0; i< 6; i++){\n            if (statArray[i] > 16 || statArray[i] < 9)\n                return false;\n            \n            total += statArray[i];\n        }\n        if (total > max)\n            return false;\n        \n        players[msg.sender] = new Player(statArray);\n        return true;\n    }\n\n    function getPlayerByAddress(address player) public view returns (Player) {\n        return players[player];\n    }\n\n}\n\ninterface GameComponent {\n    function getStats() external view returns (uint8[8]);\n}\n\n/*\noffset\n0        str, \n1        dex, \n2        con, \n3        int, \n4        wis, \n5        chr, \n6        prof, \n7        level, \n8        hit_dice_number\n9       hit_dice_value \n10       armor 5\n*/\n\n\ncontract Player is owned{\n    uint8[] stats;\n    int16 health_current;\n    int16 health_max;\n    GameComponent[] items;\n\n    function Player(uint8[] statArray) public {\n        stats = statArray;\n    }\n    function getItems() public view returns (GameComponent[]) {\n        return items;\n    }\n\n    function setStats(uint8 newStat, uint32 index) public onlyOwner {\n        stats[index] = newStat;\n\n    }\n    function damage(int16 _damage) public returns (bool){\n        if ((health_current - _damage) < 1){\n            health_current = 0;\n            return false;\n        }\n        health_current -= _damage;\n        return true;\n    }\n\n    function addItem(address item) public {\n        items.push(GameComponent(item));\n    }\n\n    function getStats() public view returns (uint8[]){\n        return stats;\n    }\n\n}\n\ncontract Item is GameComponent, owned, tradeable, purchasable {\n\n    uint8[8] stats;\n    function Item(uint8[8] _stats) public {\n        stats = _stats;\n    }\n\n    function getStats() external view returns (uint8[8]){\n        return stats;\n    } \n}\n\ncontract Weapon is Item{\n    uint8[8] _stats;\n\n    function Weapon(uint8[8] stats) public {\n        _stats = stats;\n    }\n    function getStats() external view returns (uint8[8]){\n        return _stats;\n    }\n}\n\n\n\n\n\n\n\n\n\n\n//Depricated, round by round blockchain stuff\n/*\ncontract RoundReferee is chargable{\n\n    address[] players;\n    uint playerLimit = 2;\n    uint turn = 0;\n    bool gameStarted;\n    NameRegistry registry;\n\n    \n    event turnEvent(address _player, uint _turn);\n    event addPlayerEvent(address _player);\n\n    function RoundReferee(address _registryAddress, uint _playerLimit) public {\n        registry = NameRegistry(_registryAddress);\n        playerLimit = _playerLimit;\n    }\n    \n    function addPlayer () public {\n        if(gameStarted || players.length >= playerLimit)\n            return;\n\n        if (!registry.playerRegistered(msg.sender))\n            return;\n        \n        players.push(msg.sender);\n        addPlayerEvent(msg.sender);\n    }\n\n    function removePlayer(address _player) public {\n        if(gameStarted || players.length == 0)\n            return;\n\n        for (uint i; i < players.length; i++)\n        {\n            uint256 p = uint256(_player);\n            if (players[p] == _player)\n            {\n                delete players[p];\n            }\n        }\n    }\n\n    function startGame() public {\n        gameStarted = true;\n    }\n\n    function takeTurn() public{\n        if (!gameStarted)\n            return;\n        turnEvent(msg.sender, turn++);\n    }\n}\n*/",
  "sourcePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/GameRegistries.sol",
  "ast": {
    "absolutePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/GameRegistries.sol",
    "exportedSymbols": {
      "GameComponent": [
        326
      ],
      "Item": [
        461
      ],
      "NameRegistry": [
        222
      ],
      "Player": [
        426
      ],
      "PlayerRegistry": [
        318
      ],
      "Weapon": [
        490
      ],
      "chargable": [
        147
      ],
      "owned": [
        34
      ],
      "purchasable": [
        120
      ],
      "tradeable": [
        53
      ]
    },
    "id": 491,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 34,
        "linearizedBaseContracts": [
          34
        ],
        "name": "owned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 34,
            "src": "48:13:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 4,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "48:7:1",
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
              "id": 13,
              "nodeType": "Block",
              "src": "91:35:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 11,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 8,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "100:5:1",
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
                        "id": 9,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "108:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "108:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "100:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 12,
                  "nodeType": "ExpressionStatement",
                  "src": "100:18:1"
                }
              ]
            },
            "documentation": null,
            "id": 14,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "owned",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "81:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "91:0:1"
            },
            "scope": 34,
            "src": "67:59:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24,
              "nodeType": "Block",
              "src": "150:56:1",
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
                        "id": 20,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "168:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 18,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "168:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 19,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "182:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "168:19:1",
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
                      "id": 16,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        623,
                        624
                      ],
                      "referencedDeclaration": 623,
                      "src": "160:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "160:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22,
                  "nodeType": "ExpressionStatement",
                  "src": "160:28:1"
                },
                {
                  "id": 23,
                  "nodeType": "PlaceholderStatement",
                  "src": "198:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 25,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "150:0:1"
            },
            "src": "131:75:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 32,
              "nodeType": "Block",
              "src": "261:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "278:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 29,
                  "id": 31,
                  "nodeType": "Return",
                  "src": "271:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 33,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 26,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "228:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "253:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:9:1"
            },
            "scope": 34,
            "src": "211:79:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 491,
        "src": "27:265:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 35,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "316:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 36,
            "nodeType": "InheritanceSpecifier",
            "src": "316:5:1"
          }
        ],
        "contractDependencies": [
          34
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 53,
        "linearizedBaseContracts": [
          53,
          34
        ],
        "name": "tradeable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 39,
              "nodeType": "Block",
              "src": "356:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 40,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "tradeable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "346:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "356:0:1"
            },
            "scope": 53,
            "src": "328:30:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 51,
              "nodeType": "Block",
              "src": "407:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 47,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "417:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 48,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42,
                      "src": "425:2:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "417:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 50,
                  "nodeType": "ExpressionStatement",
                  "src": "417:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 52,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 45,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 44,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "391:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "391:9:1"
              }
            ],
            "name": "trade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "379:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "379:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "378:12:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "407:0:1"
            },
            "scope": 53,
            "src": "364:70:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "294:142:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 54,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "462:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 55,
            "nodeType": "InheritanceSpecifier",
            "src": "462:5:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 56,
              "name": "tradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 53,
              "src": "469:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_tradeable_$53",
                "typeString": "contract tradeable"
              }
            },
            "id": 57,
            "nodeType": "InheritanceSpecifier",
            "src": "469:9:1"
          }
        ],
        "contractDependencies": [
          34,
          53
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 120,
        "linearizedBaseContracts": [
          120,
          53,
          34
        ],
        "name": "purchasable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 59,
            "name": "price",
            "nodeType": "VariableDeclaration",
            "scope": 120,
            "src": "485:12:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint64",
              "typeString": "uint64"
            },
            "typeName": {
              "id": 58,
              "name": "uint64",
              "nodeType": "ElementaryTypeName",
              "src": "485:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint64",
                "typeString": "uint64"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 62,
            "name": "tradeAble",
            "nodeType": "VariableDeclaration",
            "scope": 120,
            "src": "503:22:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 60,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "503:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 61,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "520:5:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 65,
              "nodeType": "Block",
              "src": "562:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 66,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "purchasable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "552:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "562:0:1"
            },
            "scope": 120,
            "src": "532:32:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "620:31:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 73,
                      "name": "price",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59,
                      "src": "630:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 74,
                      "name": "_price",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68,
                      "src": "638:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "630:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "630:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 71,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 70,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "603:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "603:9:1"
              }
            ],
            "name": "setPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "name": "_price",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "588:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "588:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "587:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 72,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "620:0:1"
            },
            "scope": 120,
            "src": "570:81:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 89,
              "nodeType": "Block",
              "src": "711:37:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 85,
                      "name": "tradeAble",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62,
                      "src": "721:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 86,
                      "name": "canTrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "733:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "721:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "721:20:1"
                }
              ]
            },
            "documentation": null,
            "id": 90,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 83,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 82,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "694:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "694:9:1"
              }
            ],
            "name": "setTradeAble",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "name": "canTrade",
                  "nodeType": "VariableDeclaration",
                  "scope": 90,
                  "src": "679:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "679:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "678:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:1"
            },
            "scope": 120,
            "src": "657:91:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 93,
              "nodeType": "Block",
              "src": "772:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 94,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "762:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "772:0:1"
            },
            "scope": 120,
            "src": "754:20:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 118,
              "nodeType": "Block",
              "src": "810:157:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 98,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "824:10:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 97,
                      "name": "tradeAble",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62,
                      "src": "825:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 101,
                  "nodeType": "IfStatement",
                  "src": "820:47:1",
                  "trueBody": {
                    "id": 100,
                    "nodeType": "Block",
                    "src": "836:31:1",
                    "statements": [
                      {
                        "expression": null,
                        "functionReturnParameters": 96,
                        "id": 99,
                        "nodeType": "Return",
                        "src": "850:7:1"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 103,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "885:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "885:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59,
                          "src": "898:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "885:18:1",
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
                      "id": 102,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        623,
                        624
                      ],
                      "referencedDeclaration": 623,
                      "src": "877:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "877:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 108,
                  "nodeType": "ExpressionStatement",
                  "src": "877:27:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "927:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 109,
                      "name": "setTradeAble",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "914:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "914:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 112,
                  "nodeType": "ExpressionStatement",
                  "src": "914:19:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 114,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "949:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "949:10:1",
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
                      "id": 113,
                      "name": "trade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "943:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "943:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "943:17:1"
                }
              ]
            },
            "documentation": null,
            "id": 119,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "792:2:1"
            },
            "payable": true,
            "returnParameters": {
              "id": 96,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "810:0:1"
            },
            "scope": 120,
            "src": "780:187:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "438:531:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 121,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "992:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 122,
            "nodeType": "InheritanceSpecifier",
            "src": "992:5:1"
          }
        ],
        "contractDependencies": [
          34
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 147,
        "linearizedBaseContracts": [
          147,
          34
        ],
        "name": "chargable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 125,
              "nodeType": "Block",
              "src": "1031:15:1",
              "statements": []
            },
            "documentation": null,
            "id": 126,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "chargable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1022:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 124,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1031:0:1"
            },
            "scope": 147,
            "src": "1004:42:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 145,
              "nodeType": "Block",
              "src": "1079:90:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 131,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "1097:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1097:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 133,
                          "name": "_cost",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 128,
                          "src": "1110:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1097:18:1",
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
                      "id": 130,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        623,
                        624
                      ],
                      "referencedDeclaration": 623,
                      "src": "1089:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1089:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 136,
                  "nodeType": "ExpressionStatement",
                  "src": "1089:27:1"
                },
                {
                  "id": 137,
                  "nodeType": "PlaceholderStatement",
                  "src": "1126:1:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 141,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "1152:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 142,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1152:9:1",
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
                        "id": 138,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1137:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1137:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1137:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 144,
                  "nodeType": "ExpressionStatement",
                  "src": "1137:25:1"
                }
              ]
            },
            "documentation": null,
            "id": 146,
            "name": "price",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 128,
                  "name": "_cost",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "1067:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 127,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1066:12:1"
            },
            "src": "1052:117:1",
            "visibility": "internal"
          }
        ],
        "scope": 491,
        "src": "970:201:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 148,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "1199:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 149,
            "nodeType": "InheritanceSpecifier",
            "src": "1199:5:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 150,
              "name": "chargable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 147,
              "src": "1206:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_chargable_$147",
                "typeString": "contract chargable"
              }
            },
            "id": 151,
            "nodeType": "InheritanceSpecifier",
            "src": "1206:9:1"
          }
        ],
        "contractDependencies": [
          147,
          34
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 222,
        "linearizedBaseContracts": [
          222,
          147,
          34
        ],
        "name": "NameRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 155,
            "name": "names",
            "nodeType": "VariableDeclaration",
            "scope": 222,
            "src": "1222:31:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_string_storage_$",
              "typeString": "mapping(address => string)"
            },
            "typeName": {
              "id": 154,
              "keyType": {
                "id": 152,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1231:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1222:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_string_storage_$",
                "typeString": "mapping(address => string)"
              },
              "valueType": {
                "id": 153,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1240:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 159,
            "name": "addresses",
            "nodeType": "VariableDeclaration",
            "scope": 222,
            "src": "1259:35:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
              "typeString": "mapping(string => address)"
            },
            "typeName": {
              "id": 158,
              "keyType": {
                "id": 156,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1268:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1259:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
                "typeString": "mapping(string => address)"
              },
              "valueType": {
                "id": 157,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1276:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 162,
              "nodeType": "Block",
              "src": "1331:7:1",
              "statements": []
            },
            "documentation": null,
            "id": 163,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "NameRegistry",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 160,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1321:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1331:0:1"
            },
            "scope": 222,
            "src": "1300:38:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 196,
              "nodeType": "Block",
              "src": "1430:160:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 174,
                        "name": "addresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 159,
                        "src": "1444:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
                          "typeString": "mapping(string memory => address)"
                        }
                      },
                      "id": 176,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 175,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "1454:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1444:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1464:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1444:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 181,
                  "nodeType": "IfStatement",
                  "src": "1440:51:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1486:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 173,
                    "id": 180,
                    "nodeType": "Return",
                    "src": "1479:12:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 182,
                        "name": "names",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 155,
                        "src": "1502:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_string_storage_$",
                          "typeString": "mapping(address => string storage ref)"
                        }
                      },
                      "id": 184,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 183,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 167,
                        "src": "1508:8:1",
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
                      "src": "1502:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 165,
                      "src": "1520:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1502:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "1502:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 188,
                        "name": "addresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 159,
                        "src": "1535:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
                          "typeString": "mapping(string memory => address)"
                        }
                      },
                      "id": 190,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 189,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "1545:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1535:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 191,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 167,
                      "src": "1554:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1535:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 193,
                  "nodeType": "ExpressionStatement",
                  "src": "1535:27:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1579:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 173,
                  "id": 195,
                  "nodeType": "Return",
                  "src": "1572:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 197,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 170,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 169,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "1393:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1393:9:1"
              }
            ],
            "name": "addName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 165,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "1361:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 164,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1361:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 167,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "1375:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 166,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1375:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1360:32:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 172,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "1419:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 171,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1419:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1418:6:1"
            },
            "scope": 222,
            "src": "1344:246:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 208,
              "nodeType": "Block",
              "src": "1664:39:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 204,
                      "name": "names",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 155,
                      "src": "1681:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_string_storage_$",
                        "typeString": "mapping(address => string storage ref)"
                      }
                    },
                    "id": 206,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 205,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 199,
                      "src": "1687:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1681:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 203,
                  "id": 207,
                  "nodeType": "Return",
                  "src": "1674:22:1"
                }
              ]
            },
            "documentation": null,
            "id": 209,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 199,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 209,
                  "src": "1613:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 198,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1613:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1612:18:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 202,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 209,
                  "src": "1652:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 201,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1652:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1651:8:1"
            },
            "scope": 222,
            "src": "1596:107:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 220,
              "nodeType": "Block",
              "src": "1777:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 216,
                      "name": "addresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 159,
                      "src": "1794:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
                        "typeString": "mapping(string memory => address)"
                      }
                    },
                    "id": 218,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 217,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 211,
                      "src": "1804:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1794:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 215,
                  "id": 219,
                  "nodeType": "Return",
                  "src": "1787:23:1"
                }
              ]
            },
            "documentation": null,
            "id": 221,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 211,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 221,
                  "src": "1729:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 210,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1729:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1728:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 215,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 214,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 221,
                  "src": "1764:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 213,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1764:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1763:9:1"
            },
            "scope": 222,
            "src": "1709:108:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "1174:645:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 223,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "1848:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 224,
            "nodeType": "InheritanceSpecifier",
            "src": "1848:5:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 225,
              "name": "chargable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 147,
              "src": "1855:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_chargable_$147",
                "typeString": "contract chargable"
              }
            },
            "id": 226,
            "nodeType": "InheritanceSpecifier",
            "src": "1855:9:1"
          }
        ],
        "contractDependencies": [
          147,
          34,
          426
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 318,
        "linearizedBaseContracts": [
          318,
          147,
          34
        ],
        "name": "PlayerRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 230,
            "name": "players",
            "nodeType": "VariableDeclaration",
            "scope": 318,
            "src": "1916:33:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Player_$426_$",
              "typeString": "mapping(address => contract Player)"
            },
            "typeName": {
              "id": 229,
              "keyType": {
                "id": 227,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1925:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1916:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Player_$426_$",
                "typeString": "mapping(address => contract Player)"
              },
              "valueType": {
                "contractScope": null,
                "id": 228,
                "name": "Player",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 426,
                "src": "1934:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Player_$426",
                  "typeString": "contract Player"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 233,
              "nodeType": "Block",
              "src": "1989:7:1",
              "statements": []
            },
            "documentation": null,
            "id": 234,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "PlayerRegistry",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 231,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1979:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 232,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1989:0:1"
            },
            "scope": 318,
            "src": "1956:40:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 237,
              "nodeType": "Block",
              "src": "2026:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 238,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 235,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2009:2:1"
            },
            "payable": true,
            "returnParameters": {
              "id": 236,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2026:0:1"
            },
            "scope": 318,
            "src": "2001:27:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 304,
              "nodeType": "Block",
              "src": "2092:401:1",
              "statements": [
                {
                  "assignments": [
                    247
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 247,
                      "name": "max",
                      "nodeType": "VariableDeclaration",
                      "scope": 305,
                      "src": "2132:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 246,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2132:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 249,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "3732",
                    "id": 248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2144:2:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_72_by_1",
                      "typeString": "int_const 72"
                    },
                    "value": "72"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2132:14:1"
                },
                {
                  "assignments": [
                    251
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 251,
                      "name": "total",
                      "nodeType": "VariableDeclaration",
                      "scope": 305,
                      "src": "2156:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 250,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2156:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 253,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2170:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2156:15:1"
                },
                {
                  "body": {
                    "id": 284,
                    "nodeType": "Block",
                    "src": "2209:144:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "id": 268,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 264,
                                "name": "statArray",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 241,
                                "src": "2227:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                                  "typeString": "uint8[] memory"
                                }
                              },
                              "id": 266,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 265,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 255,
                                "src": "2237:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2227:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "3136",
                              "id": 267,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2242:2:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_16_by_1",
                                "typeString": "int_const 16"
                              },
                              "value": "16"
                            },
                            "src": "2227:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "id": 273,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 269,
                                "name": "statArray",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 241,
                                "src": "2248:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                                  "typeString": "uint8[] memory"
                                }
                              },
                              "id": 271,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 270,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 255,
                                "src": "2258:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2248:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "39",
                              "id": 272,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2263:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_9_by_1",
                                "typeString": "int_const 9"
                              },
                              "value": "9"
                            },
                            "src": "2248:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2227:37:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 277,
                        "nodeType": "IfStatement",
                        "src": "2223:71:1",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "66616c7365",
                            "id": 275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2289:5:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "functionReturnParameters": 245,
                          "id": 276,
                          "nodeType": "Return",
                          "src": "2282:12:1"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 282,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 278,
                            "name": "total",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 251,
                            "src": "2321:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 279,
                              "name": "statArray",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 241,
                              "src": "2330:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                                "typeString": "uint8[] memory"
                              }
                            },
                            "id": 281,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 280,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 255,
                              "src": "2340:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2330:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "2321:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "id": 283,
                        "nodeType": "ExpressionStatement",
                        "src": "2321:21:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 258,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 255,
                      "src": "2199:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "36",
                      "id": 259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2202:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_6_by_1",
                        "typeString": "int_const 6"
                      },
                      "value": "6"
                    },
                    "src": "2199:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 285,
                  "initializationExpression": {
                    "assignments": [
                      255
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 255,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 305,
                        "src": "2186:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 254,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2186:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 257,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2196:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2186:11:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2205:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 261,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 255,
                        "src": "2205:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 263,
                    "nodeType": "ExpressionStatement",
                    "src": "2205:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2181:172:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 286,
                      "name": "total",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 251,
                      "src": "2366:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 287,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 247,
                      "src": "2374:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2366:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 291,
                  "nodeType": "IfStatement",
                  "src": "2362:41:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2398:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 245,
                    "id": 290,
                    "nodeType": "Return",
                    "src": "2391:12:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 292,
                        "name": "players",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "2422:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Player_$426_$",
                          "typeString": "mapping(address => contract Player)"
                        }
                      },
                      "id": 295,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 293,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "2430:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 294,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2430:10:1",
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
                      "src": "2422:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Player_$426",
                        "typeString": "contract Player"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 298,
                          "name": "statArray",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 241,
                          "src": "2455:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                            "typeString": "uint8[] memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                            "typeString": "uint8[] memory"
                          }
                        ],
                        "id": 297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "2444:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_creation_nonpayable$_t_array$_t_uint8_$dyn_memory_ptr_$returns$_t_contract$_Player_$426_$",
                          "typeString": "function (uint8[] memory) returns (contract Player)"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 296,
                          "name": "Player",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 426,
                          "src": "2448:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Player_$426",
                            "typeString": "contract Player"
                          }
                        }
                      },
                      "id": 299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2444:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Player_$426",
                        "typeString": "contract Player"
                      }
                    },
                    "src": "2422:43:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Player_$426",
                      "typeString": "contract Player"
                    }
                  },
                  "id": 301,
                  "nodeType": "ExpressionStatement",
                  "src": "2422:43:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2482:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 245,
                  "id": 303,
                  "nodeType": "Return",
                  "src": "2475:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 305,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "newPlayer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 241,
                  "name": "statArray",
                  "nodeType": "VariableDeclaration",
                  "scope": 305,
                  "src": "2053:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                    "typeString": "uint8[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 239,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "2053:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 240,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2053:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                      "typeString": "uint8[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2052:19:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 244,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 305,
                  "src": "2087:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 243,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2087:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2086:6:1"
            },
            "scope": 318,
            "src": "2034:459:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 316,
              "nodeType": "Block",
              "src": "2572:39:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 312,
                      "name": "players",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 230,
                      "src": "2589:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Player_$426_$",
                        "typeString": "mapping(address => contract Player)"
                      }
                    },
                    "id": 314,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 313,
                      "name": "player",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 307,
                      "src": "2597:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2589:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Player_$426",
                      "typeString": "contract Player"
                    }
                  },
                  "functionReturnParameters": 311,
                  "id": 315,
                  "nodeType": "Return",
                  "src": "2582:22:1"
                }
              ]
            },
            "documentation": null,
            "id": 317,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPlayerByAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 307,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 317,
                  "src": "2527:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 306,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2527:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2526:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 310,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 317,
                  "src": "2564:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Player_$426",
                    "typeString": "contract Player"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 309,
                    "name": "Player",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 426,
                    "src": "2564:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Player_$426",
                      "typeString": "contract Player"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2563:8:1"
            },
            "scope": 318,
            "src": "2499:112:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "1821:793:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 326,
        "linearizedBaseContracts": [
          326
        ],
        "name": "GameComponent",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 325,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 319,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2663:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 323,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 325,
                  "src": "2689:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 320,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "2689:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 322,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 321,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2695:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2689:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2688:10:1"
            },
            "scope": 326,
            "src": "2646:53:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 491,
        "src": "2616:85:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 327,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "2926:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 328,
            "nodeType": "InheritanceSpecifier",
            "src": "2926:5:1"
          }
        ],
        "contractDependencies": [
          34
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 426,
        "linearizedBaseContracts": [
          426,
          34
        ],
        "name": "Player",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 331,
            "name": "stats",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "2937:13:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
              "typeString": "uint8[]"
            },
            "typeName": {
              "baseType": {
                "id": 329,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "2937:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "id": 330,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "2937:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                "typeString": "uint8[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 333,
            "name": "health_current",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "2956:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int16",
              "typeString": "int16"
            },
            "typeName": {
              "id": 332,
              "name": "int16",
              "nodeType": "ElementaryTypeName",
              "src": "2956:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_int16",
                "typeString": "int16"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 335,
            "name": "health_max",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "2982:16:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int16",
              "typeString": "int16"
            },
            "typeName": {
              "id": 334,
              "name": "int16",
              "nodeType": "ElementaryTypeName",
              "src": "2982:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_int16",
                "typeString": "int16"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 338,
            "name": "items",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "3004:21:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage",
              "typeString": "contract GameComponent[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 336,
                "name": "GameComponent",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 326,
                "src": "3004:13:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_GameComponent_$326",
                  "typeString": "contract GameComponent"
                }
              },
              "id": 337,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "3004:15:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage_ptr",
                "typeString": "contract GameComponent[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 348,
              "nodeType": "Block",
              "src": "3074:34:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 344,
                      "name": "stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 331,
                      "src": "3084:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
                        "typeString": "uint8[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 345,
                      "name": "statArray",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 341,
                      "src": "3092:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                        "typeString": "uint8[] memory"
                      }
                    },
                    "src": "3084:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
                      "typeString": "uint8[] storage ref"
                    }
                  },
                  "id": 347,
                  "nodeType": "ExpressionStatement",
                  "src": "3084:17:1"
                }
              ]
            },
            "documentation": null,
            "id": 349,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Player",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 341,
                  "name": "statArray",
                  "nodeType": "VariableDeclaration",
                  "scope": 349,
                  "src": "3048:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                    "typeString": "uint8[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 339,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "3048:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 340,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3048:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                      "typeString": "uint8[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3047:19:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 343,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3074:0:1"
            },
            "scope": 426,
            "src": "3032:76:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 357,
              "nodeType": "Block",
              "src": "3171:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 355,
                    "name": "items",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 338,
                    "src": "3188:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage",
                      "typeString": "contract GameComponent[] storage ref"
                    }
                  },
                  "functionReturnParameters": 354,
                  "id": 356,
                  "nodeType": "Return",
                  "src": "3181:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 358,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getItems",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3130:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 353,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 358,
                  "src": "3154:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_memory_ptr",
                    "typeString": "contract GameComponent[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 351,
                      "name": "GameComponent",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 326,
                      "src": "3154:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_GameComponent_$326",
                        "typeString": "contract GameComponent"
                      }
                    },
                    "id": 352,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3154:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage_ptr",
                      "typeString": "contract GameComponent[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3153:17:1"
            },
            "scope": 426,
            "src": "3113:87:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 373,
              "nodeType": "Block",
              "src": "3270:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 367,
                        "name": "stats",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 331,
                        "src": "3280:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
                          "typeString": "uint8[] storage ref"
                        }
                      },
                      "id": 369,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 368,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 362,
                        "src": "3286:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3280:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 370,
                      "name": "newStat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 360,
                      "src": "3295:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "3280:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 372,
                  "nodeType": "ExpressionStatement",
                  "src": "3280:22:1"
                }
              ]
            },
            "documentation": null,
            "id": 374,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 365,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 364,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "3260:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3260:9:1"
              }
            ],
            "name": "setStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 360,
                  "name": "newStat",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "3224:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 359,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 362,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "3239:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 361,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3239:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3223:29:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 366,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3270:0:1"
            },
            "scope": 426,
            "src": "3206:104:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 401,
              "nodeType": "Block",
              "src": "3367:176:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    },
                    "id": 386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int16",
                            "typeString": "int16"
                          },
                          "id": 383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 381,
                            "name": "health_current",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "3382:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int16",
                              "typeString": "int16"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 382,
                            "name": "_damage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 376,
                            "src": "3399:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int16",
                              "typeString": "int16"
                            }
                          },
                          "src": "3382:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int16",
                            "typeString": "int16"
                          }
                        }
                      ],
                      "id": 384,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3381:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3410:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3381:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 394,
                  "nodeType": "IfStatement",
                  "src": "3377:104:1",
                  "trueBody": {
                    "id": 393,
                    "nodeType": "Block",
                    "src": "3412:69:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 389,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 387,
                            "name": "health_current",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "3426:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int16",
                              "typeString": "int16"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 388,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3443:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3426:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int16",
                            "typeString": "int16"
                          }
                        },
                        "id": 390,
                        "nodeType": "ExpressionStatement",
                        "src": "3426:18:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3465:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 380,
                        "id": 392,
                        "nodeType": "Return",
                        "src": "3458:12:1"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 395,
                      "name": "health_current",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 333,
                      "src": "3490:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 396,
                      "name": "_damage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 376,
                      "src": "3508:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "src": "3490:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    }
                  },
                  "id": 398,
                  "nodeType": "ExpressionStatement",
                  "src": "3490:25:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 399,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3532:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 380,
                  "id": 400,
                  "nodeType": "Return",
                  "src": "3525:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 402,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "damage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 376,
                  "name": "_damage",
                  "nodeType": "VariableDeclaration",
                  "scope": 402,
                  "src": "3331:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int16",
                    "typeString": "int16"
                  },
                  "typeName": {
                    "id": 375,
                    "name": "int16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3331:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3330:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 379,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 402,
                  "src": "3362:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 378,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3362:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3361:6:1"
            },
            "scope": 426,
            "src": "3315:228:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 415,
              "nodeType": "Block",
              "src": "3587:48:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 411,
                            "name": "item",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 404,
                            "src": "3622:4:1",
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
                          "id": 410,
                          "name": "GameComponent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 326,
                          "src": "3608:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_GameComponent_$326_$",
                            "typeString": "type(contract GameComponent)"
                          }
                        },
                        "id": 412,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3608:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_GameComponent_$326",
                          "typeString": "contract GameComponent"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_GameComponent_$326",
                          "typeString": "contract GameComponent"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 407,
                        "name": "items",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "3597:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage",
                          "typeString": "contract GameComponent[] storage ref"
                        }
                      },
                      "id": 409,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3597:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_contract$_GameComponent_$326_$returns$_t_uint256_$",
                        "typeString": "function (contract GameComponent) returns (uint256)"
                      }
                    },
                    "id": 413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3597:31:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 414,
                  "nodeType": "ExpressionStatement",
                  "src": "3597:31:1"
                }
              ]
            },
            "documentation": null,
            "id": 416,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addItem",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 404,
                  "name": "item",
                  "nodeType": "VariableDeclaration",
                  "scope": 416,
                  "src": "3566:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 403,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3566:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3565:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 406,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3587:0:1"
            },
            "scope": 426,
            "src": "3549:86:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 424,
              "nodeType": "Block",
              "src": "3690:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 422,
                    "name": "stats",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 331,
                    "src": "3707:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
                      "typeString": "uint8[] storage ref"
                    }
                  },
                  "functionReturnParameters": 421,
                  "id": 423,
                  "nodeType": "Return",
                  "src": "3700:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 425,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 417,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3658:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 420,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "3682:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                    "typeString": "uint8[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 418,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "3682:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 419,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3682:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                      "typeString": "uint8[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3681:9:1"
            },
            "scope": 426,
            "src": "3641:78:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "2907:815:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 427,
              "name": "GameComponent",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 326,
              "src": "3741:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_GameComponent_$326",
                "typeString": "contract GameComponent"
              }
            },
            "id": 428,
            "nodeType": "InheritanceSpecifier",
            "src": "3741:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 429,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "3756:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 430,
            "nodeType": "InheritanceSpecifier",
            "src": "3756:5:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 431,
              "name": "tradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 53,
              "src": "3763:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_tradeable_$53",
                "typeString": "contract tradeable"
              }
            },
            "id": 432,
            "nodeType": "InheritanceSpecifier",
            "src": "3763:9:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 433,
              "name": "purchasable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 120,
              "src": "3774:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_purchasable_$120",
                "typeString": "contract purchasable"
              }
            },
            "id": 434,
            "nodeType": "InheritanceSpecifier",
            "src": "3774:11:1"
          }
        ],
        "contractDependencies": [
          120,
          34,
          53,
          326
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 461,
        "linearizedBaseContracts": [
          461,
          120,
          53,
          34,
          326
        ],
        "name": "Item",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 438,
            "name": "stats",
            "nodeType": "VariableDeclaration",
            "scope": 461,
            "src": "3793:14:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint8_$8_storage",
              "typeString": "uint8[8]"
            },
            "typeName": {
              "baseType": {
                "id": 435,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "3793:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "id": 437,
              "length": {
                "argumentTypes": null,
                "hexValue": "38",
                "id": 436,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "3799:1:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "8"
              },
              "nodeType": "ArrayTypeName",
              "src": "3793:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                "typeString": "uint8[8]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 449,
              "nodeType": "Block",
              "src": "3851:31:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 445,
                      "name": "stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 438,
                      "src": "3861:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$8_storage",
                        "typeString": "uint8[8] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 446,
                      "name": "_stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 442,
                      "src": "3869:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                        "typeString": "uint8[8] memory"
                      }
                    },
                    "src": "3861:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage",
                      "typeString": "uint8[8] storage ref"
                    }
                  },
                  "id": 448,
                  "nodeType": "ExpressionStatement",
                  "src": "3861:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 450,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Item",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 442,
                  "name": "_stats",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "3827:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 439,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "3827:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 441,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3833:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3827:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3826:17:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 444,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3851:0:1"
            },
            "scope": 461,
            "src": "3813:69:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 459,
              "nodeType": "Block",
              "src": "3940:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 457,
                    "name": "stats",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 438,
                    "src": "3957:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage",
                      "typeString": "uint8[8] storage ref"
                    }
                  },
                  "functionReturnParameters": 456,
                  "id": 458,
                  "nodeType": "Return",
                  "src": "3950:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 460,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3905:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 455,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 460,
                  "src": "3931:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 452,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "3931:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 454,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 453,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3937:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3931:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3930:10:1"
            },
            "scope": 461,
            "src": "3888:81:1",
            "stateMutability": "view",
            "superFunction": 325,
            "visibility": "external"
          }
        ],
        "scope": 491,
        "src": "3724:248:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 462,
              "name": "Item",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 461,
              "src": "3993:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Item_$461",
                "typeString": "contract Item"
              }
            },
            "id": 463,
            "nodeType": "InheritanceSpecifier",
            "src": "3993:4:1"
          }
        ],
        "contractDependencies": [
          120,
          34,
          53,
          326,
          461
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 490,
        "linearizedBaseContracts": [
          490,
          461,
          120,
          53,
          34,
          326
        ],
        "name": "Weapon",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 467,
            "name": "_stats",
            "nodeType": "VariableDeclaration",
            "scope": 490,
            "src": "4003:15:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint8_$8_storage",
              "typeString": "uint8[8]"
            },
            "typeName": {
              "baseType": {
                "id": 464,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "4003:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "id": 466,
              "length": {
                "argumentTypes": null,
                "hexValue": "38",
                "id": 465,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "4009:1:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "8"
              },
              "nodeType": "ArrayTypeName",
              "src": "4003:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                "typeString": "uint8[8]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 478,
              "nodeType": "Block",
              "src": "4064:31:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 474,
                      "name": "_stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 467,
                      "src": "4074:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$8_storage",
                        "typeString": "uint8[8] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 475,
                      "name": "stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 471,
                      "src": "4083:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                        "typeString": "uint8[8] memory"
                      }
                    },
                    "src": "4074:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage",
                      "typeString": "uint8[8] storage ref"
                    }
                  },
                  "id": 477,
                  "nodeType": "ExpressionStatement",
                  "src": "4074:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 479,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Weapon",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 471,
                  "name": "stats",
                  "nodeType": "VariableDeclaration",
                  "scope": 479,
                  "src": "4041:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 468,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "4041:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 470,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 469,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4047:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "4041:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4040:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 473,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4064:0:1"
            },
            "scope": 490,
            "src": "4025:70:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 488,
              "nodeType": "Block",
              "src": "4152:30:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 486,
                    "name": "_stats",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 467,
                    "src": "4169:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage",
                      "typeString": "uint8[8] storage ref"
                    }
                  },
                  "functionReturnParameters": 485,
                  "id": 487,
                  "nodeType": "Return",
                  "src": "4162:13:1"
                }
              ]
            },
            "documentation": null,
            "id": 489,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 480,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4117:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 484,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 489,
                  "src": "4143:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 481,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "4143:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 483,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 482,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4149:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "4143:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4142:10:1"
            },
            "scope": 490,
            "src": "4100:82:1",
            "stateMutability": "view",
            "superFunction": 460,
            "visibility": "external"
          }
        ],
        "scope": 491,
        "src": "3974:210:1"
      }
    ],
    "src": "0:5480:1"
  },
  "legacyAST": {
    "absolutePath": "/home/evan/BlockChain/POAcoin/truffle/contracts/GameRegistries.sol",
    "exportedSymbols": {
      "GameComponent": [
        326
      ],
      "Item": [
        461
      ],
      "NameRegistry": [
        222
      ],
      "Player": [
        426
      ],
      "PlayerRegistry": [
        318
      ],
      "Weapon": [
        490
      ],
      "chargable": [
        147
      ],
      "owned": [
        34
      ],
      "purchasable": [
        120
      ],
      "tradeable": [
        53
      ]
    },
    "id": 491,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".17"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 34,
        "linearizedBaseContracts": [
          34
        ],
        "name": "owned",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 34,
            "src": "48:13:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 4,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "48:7:1",
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
              "id": 13,
              "nodeType": "Block",
              "src": "91:35:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 11,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 8,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "100:5:1",
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
                        "id": 9,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 620,
                        "src": "108:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 10,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "108:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "100:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 12,
                  "nodeType": "ExpressionStatement",
                  "src": "100:18:1"
                }
              ]
            },
            "documentation": null,
            "id": 14,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "owned",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "81:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "91:0:1"
            },
            "scope": 34,
            "src": "67:59:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 24,
              "nodeType": "Block",
              "src": "150:56:1",
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
                        "id": 20,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 17,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "168:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 18,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "168:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 19,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5,
                          "src": "182:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "168:19:1",
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
                      "id": 16,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        623,
                        624
                      ],
                      "referencedDeclaration": 623,
                      "src": "160:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "160:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22,
                  "nodeType": "ExpressionStatement",
                  "src": "160:28:1"
                },
                {
                  "id": 23,
                  "nodeType": "PlaceholderStatement",
                  "src": "198:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 25,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "150:0:1"
            },
            "src": "131:75:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 32,
              "nodeType": "Block",
              "src": "261:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 30,
                    "name": "owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "278:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 29,
                  "id": 31,
                  "nodeType": "Return",
                  "src": "271:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 33,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwner",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 26,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "228:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 33,
                  "src": "253:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "253:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "252:9:1"
            },
            "scope": 34,
            "src": "211:79:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 491,
        "src": "27:265:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 35,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "316:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 36,
            "nodeType": "InheritanceSpecifier",
            "src": "316:5:1"
          }
        ],
        "contractDependencies": [
          34
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 53,
        "linearizedBaseContracts": [
          53,
          34
        ],
        "name": "tradeable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 39,
              "nodeType": "Block",
              "src": "356:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 40,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "tradeable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 37,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "346:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "356:0:1"
            },
            "scope": 53,
            "src": "328:30:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 51,
              "nodeType": "Block",
              "src": "407:27:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 47,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "417:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 48,
                      "name": "to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 42,
                      "src": "425:2:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "417:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 50,
                  "nodeType": "ExpressionStatement",
                  "src": "417:10:1"
                }
              ]
            },
            "documentation": null,
            "id": 52,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 45,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 44,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "391:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "391:9:1"
              }
            ],
            "name": "trade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 43,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 42,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "379:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 41,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "379:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "378:12:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "407:0:1"
            },
            "scope": 53,
            "src": "364:70:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "294:142:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 54,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "462:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 55,
            "nodeType": "InheritanceSpecifier",
            "src": "462:5:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 56,
              "name": "tradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 53,
              "src": "469:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_tradeable_$53",
                "typeString": "contract tradeable"
              }
            },
            "id": 57,
            "nodeType": "InheritanceSpecifier",
            "src": "469:9:1"
          }
        ],
        "contractDependencies": [
          34,
          53
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 120,
        "linearizedBaseContracts": [
          120,
          53,
          34
        ],
        "name": "purchasable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 59,
            "name": "price",
            "nodeType": "VariableDeclaration",
            "scope": 120,
            "src": "485:12:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint64",
              "typeString": "uint64"
            },
            "typeName": {
              "id": 58,
              "name": "uint64",
              "nodeType": "ElementaryTypeName",
              "src": "485:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint64",
                "typeString": "uint64"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 62,
            "name": "tradeAble",
            "nodeType": "VariableDeclaration",
            "scope": 120,
            "src": "503:22:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 60,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "503:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "66616c7365",
              "id": 61,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "bool",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "520:5:1",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              },
              "value": "false"
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 65,
              "nodeType": "Block",
              "src": "562:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 66,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "purchasable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 63,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "552:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "562:0:1"
            },
            "scope": 120,
            "src": "532:32:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "620:31:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 73,
                      "name": "price",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59,
                      "src": "630:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 74,
                      "name": "_price",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 68,
                      "src": "638:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint64",
                        "typeString": "uint64"
                      }
                    },
                    "src": "630:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "630:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 78,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 71,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 70,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "603:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "603:9:1"
              }
            ],
            "name": "setPrice",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 69,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "name": "_price",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "588:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "588:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "587:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 72,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "620:0:1"
            },
            "scope": 120,
            "src": "570:81:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 89,
              "nodeType": "Block",
              "src": "711:37:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 85,
                      "name": "tradeAble",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62,
                      "src": "721:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 86,
                      "name": "canTrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 80,
                      "src": "733:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "721:20:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "721:20:1"
                }
              ]
            },
            "documentation": null,
            "id": 90,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 83,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 82,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "694:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "694:9:1"
              }
            ],
            "name": "setTradeAble",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "name": "canTrade",
                  "nodeType": "VariableDeclaration",
                  "scope": 90,
                  "src": "679:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "679:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "678:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "711:0:1"
            },
            "scope": 120,
            "src": "657:91:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 93,
              "nodeType": "Block",
              "src": "772:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 94,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "762:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 92,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "772:0:1"
            },
            "scope": 120,
            "src": "754:20:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 118,
              "nodeType": "Block",
              "src": "810:157:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 98,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "824:10:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 97,
                      "name": "tradeAble",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62,
                      "src": "825:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 101,
                  "nodeType": "IfStatement",
                  "src": "820:47:1",
                  "trueBody": {
                    "id": 100,
                    "nodeType": "Block",
                    "src": "836:31:1",
                    "statements": [
                      {
                        "expression": null,
                        "functionReturnParameters": 96,
                        "id": 99,
                        "nodeType": "Return",
                        "src": "850:7:1"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 103,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "885:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "885:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 105,
                          "name": "price",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59,
                          "src": "898:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        },
                        "src": "885:18:1",
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
                      "id": 102,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        623,
                        624
                      ],
                      "referencedDeclaration": 623,
                      "src": "877:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "877:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 108,
                  "nodeType": "ExpressionStatement",
                  "src": "877:27:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "927:5:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 109,
                      "name": "setTradeAble",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "914:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "914:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 112,
                  "nodeType": "ExpressionStatement",
                  "src": "914:19:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 114,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "949:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 115,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "949:10:1",
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
                      "id": 113,
                      "name": "trade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "943:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "943:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "943:17:1"
                }
              ]
            },
            "documentation": null,
            "id": 119,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "buy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "792:2:1"
            },
            "payable": true,
            "returnParameters": {
              "id": 96,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "810:0:1"
            },
            "scope": 120,
            "src": "780:187:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "438:531:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 121,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "992:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 122,
            "nodeType": "InheritanceSpecifier",
            "src": "992:5:1"
          }
        ],
        "contractDependencies": [
          34
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 147,
        "linearizedBaseContracts": [
          147,
          34
        ],
        "name": "chargable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 125,
              "nodeType": "Block",
              "src": "1031:15:1",
              "statements": []
            },
            "documentation": null,
            "id": 126,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "chargable",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1022:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 124,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1031:0:1"
            },
            "scope": 147,
            "src": "1004:42:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 145,
              "nodeType": "Block",
              "src": "1079:90:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 134,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 131,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 620,
                            "src": "1097:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1097:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 133,
                          "name": "_cost",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 128,
                          "src": "1110:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1097:18:1",
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
                      "id": 130,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        623,
                        624
                      ],
                      "referencedDeclaration": 623,
                      "src": "1089:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1089:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 136,
                  "nodeType": "ExpressionStatement",
                  "src": "1089:27:1"
                },
                {
                  "id": 137,
                  "nodeType": "PlaceholderStatement",
                  "src": "1126:1:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 141,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "1152:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 142,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1152:9:1",
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
                        "id": 138,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "1137:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1137:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 143,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1137:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 144,
                  "nodeType": "ExpressionStatement",
                  "src": "1137:25:1"
                }
              ]
            },
            "documentation": null,
            "id": 146,
            "name": "price",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 128,
                  "name": "_cost",
                  "nodeType": "VariableDeclaration",
                  "scope": 146,
                  "src": "1067:10:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 127,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1066:12:1"
            },
            "src": "1052:117:1",
            "visibility": "internal"
          }
        ],
        "scope": 491,
        "src": "970:201:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 148,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "1199:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 149,
            "nodeType": "InheritanceSpecifier",
            "src": "1199:5:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 150,
              "name": "chargable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 147,
              "src": "1206:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_chargable_$147",
                "typeString": "contract chargable"
              }
            },
            "id": 151,
            "nodeType": "InheritanceSpecifier",
            "src": "1206:9:1"
          }
        ],
        "contractDependencies": [
          147,
          34
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 222,
        "linearizedBaseContracts": [
          222,
          147,
          34
        ],
        "name": "NameRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 155,
            "name": "names",
            "nodeType": "VariableDeclaration",
            "scope": 222,
            "src": "1222:31:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_string_storage_$",
              "typeString": "mapping(address => string)"
            },
            "typeName": {
              "id": 154,
              "keyType": {
                "id": 152,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1231:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1222:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_string_storage_$",
                "typeString": "mapping(address => string)"
              },
              "valueType": {
                "id": 153,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1240:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 159,
            "name": "addresses",
            "nodeType": "VariableDeclaration",
            "scope": 222,
            "src": "1259:35:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
              "typeString": "mapping(string => address)"
            },
            "typeName": {
              "id": 158,
              "keyType": {
                "id": 156,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "1268:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "1259:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
                "typeString": "mapping(string => address)"
              },
              "valueType": {
                "id": 157,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1276:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 162,
              "nodeType": "Block",
              "src": "1331:7:1",
              "statements": []
            },
            "documentation": null,
            "id": 163,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "NameRegistry",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 160,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1321:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1331:0:1"
            },
            "scope": 222,
            "src": "1300:38:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 196,
              "nodeType": "Block",
              "src": "1430:160:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 174,
                        "name": "addresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 159,
                        "src": "1444:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
                          "typeString": "mapping(string memory => address)"
                        }
                      },
                      "id": 176,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 175,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "1454:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1444:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1464:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1444:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 181,
                  "nodeType": "IfStatement",
                  "src": "1440:51:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1486:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 173,
                    "id": 180,
                    "nodeType": "Return",
                    "src": "1479:12:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 182,
                        "name": "names",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 155,
                        "src": "1502:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_string_storage_$",
                          "typeString": "mapping(address => string storage ref)"
                        }
                      },
                      "id": 184,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 183,
                        "name": "_address",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 167,
                        "src": "1508:8:1",
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
                      "src": "1502:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 165,
                      "src": "1520:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1502:23:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "1502:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 188,
                        "name": "addresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 159,
                        "src": "1535:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
                          "typeString": "mapping(string memory => address)"
                        }
                      },
                      "id": 190,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 189,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "1545:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1535:16:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 191,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 167,
                      "src": "1554:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1535:27:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 193,
                  "nodeType": "ExpressionStatement",
                  "src": "1535:27:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1579:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 173,
                  "id": 195,
                  "nodeType": "Return",
                  "src": "1572:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 197,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 170,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 169,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "1393:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1393:9:1"
              }
            ],
            "name": "addName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 165,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "1361:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 164,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1361:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 167,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "1375:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 166,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1375:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1360:32:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 172,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "1419:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 171,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1419:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1418:6:1"
            },
            "scope": 222,
            "src": "1344:246:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 208,
              "nodeType": "Block",
              "src": "1664:39:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 204,
                      "name": "names",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 155,
                      "src": "1681:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_string_storage_$",
                        "typeString": "mapping(address => string storage ref)"
                      }
                    },
                    "id": 206,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 205,
                      "name": "_address",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 199,
                      "src": "1687:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1681:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 203,
                  "id": 207,
                  "nodeType": "Return",
                  "src": "1674:22:1"
                }
              ]
            },
            "documentation": null,
            "id": 209,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 200,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 199,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 209,
                  "src": "1613:16:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 198,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1613:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1612:18:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 203,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 202,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 209,
                  "src": "1652:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 201,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1652:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1651:8:1"
            },
            "scope": 222,
            "src": "1596:107:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 220,
              "nodeType": "Block",
              "src": "1777:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 216,
                      "name": "addresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 159,
                      "src": "1794:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_address_$",
                        "typeString": "mapping(string memory => address)"
                      }
                    },
                    "id": 218,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 217,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 211,
                      "src": "1804:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1794:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 215,
                  "id": 219,
                  "nodeType": "Return",
                  "src": "1787:23:1"
                }
              ]
            },
            "documentation": null,
            "id": 221,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 211,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 221,
                  "src": "1729:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 210,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1729:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1728:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 215,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 214,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 221,
                  "src": "1764:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 213,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1764:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1763:9:1"
            },
            "scope": 222,
            "src": "1709:108:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "1174:645:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 223,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "1848:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 224,
            "nodeType": "InheritanceSpecifier",
            "src": "1848:5:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 225,
              "name": "chargable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 147,
              "src": "1855:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_chargable_$147",
                "typeString": "contract chargable"
              }
            },
            "id": 226,
            "nodeType": "InheritanceSpecifier",
            "src": "1855:9:1"
          }
        ],
        "contractDependencies": [
          147,
          34,
          426
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 318,
        "linearizedBaseContracts": [
          318,
          147,
          34
        ],
        "name": "PlayerRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 230,
            "name": "players",
            "nodeType": "VariableDeclaration",
            "scope": 318,
            "src": "1916:33:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Player_$426_$",
              "typeString": "mapping(address => contract Player)"
            },
            "typeName": {
              "id": 229,
              "keyType": {
                "id": 227,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1925:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1916:25:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Player_$426_$",
                "typeString": "mapping(address => contract Player)"
              },
              "valueType": {
                "contractScope": null,
                "id": 228,
                "name": "Player",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 426,
                "src": "1934:6:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_Player_$426",
                  "typeString": "contract Player"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 233,
              "nodeType": "Block",
              "src": "1989:7:1",
              "statements": []
            },
            "documentation": null,
            "id": 234,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "PlayerRegistry",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 231,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1979:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 232,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1989:0:1"
            },
            "scope": 318,
            "src": "1956:40:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 237,
              "nodeType": "Block",
              "src": "2026:2:1",
              "statements": []
            },
            "documentation": null,
            "id": 238,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 235,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2009:2:1"
            },
            "payable": true,
            "returnParameters": {
              "id": 236,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2026:0:1"
            },
            "scope": 318,
            "src": "2001:27:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 304,
              "nodeType": "Block",
              "src": "2092:401:1",
              "statements": [
                {
                  "assignments": [
                    247
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 247,
                      "name": "max",
                      "nodeType": "VariableDeclaration",
                      "scope": 305,
                      "src": "2132:9:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 246,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2132:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 249,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "3732",
                    "id": 248,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2144:2:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_72_by_1",
                      "typeString": "int_const 72"
                    },
                    "value": "72"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2132:14:1"
                },
                {
                  "assignments": [
                    251
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 251,
                      "name": "total",
                      "nodeType": "VariableDeclaration",
                      "scope": 305,
                      "src": "2156:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 250,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2156:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 253,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 252,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2170:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2156:15:1"
                },
                {
                  "body": {
                    "id": 284,
                    "nodeType": "Block",
                    "src": "2209:144:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "id": 268,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 264,
                                "name": "statArray",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 241,
                                "src": "2227:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                                  "typeString": "uint8[] memory"
                                }
                              },
                              "id": 266,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 265,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 255,
                                "src": "2237:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2227:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "3136",
                              "id": 267,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2242:2:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_16_by_1",
                                "typeString": "int_const 16"
                              },
                              "value": "16"
                            },
                            "src": "2227:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "||",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            },
                            "id": 273,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 269,
                                "name": "statArray",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 241,
                                "src": "2248:9:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                                  "typeString": "uint8[] memory"
                                }
                              },
                              "id": 271,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 270,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 255,
                                "src": "2258:1:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "2248:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "39",
                              "id": 272,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2263:1:1",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_9_by_1",
                                "typeString": "int_const 9"
                              },
                              "value": "9"
                            },
                            "src": "2248:16:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "2227:37:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 277,
                        "nodeType": "IfStatement",
                        "src": "2223:71:1",
                        "trueBody": {
                          "expression": {
                            "argumentTypes": null,
                            "hexValue": "66616c7365",
                            "id": 275,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2289:5:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "false"
                          },
                          "functionReturnParameters": 245,
                          "id": 276,
                          "nodeType": "Return",
                          "src": "2282:12:1"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 282,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 278,
                            "name": "total",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 251,
                            "src": "2321:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 279,
                              "name": "statArray",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 241,
                              "src": "2330:9:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                                "typeString": "uint8[] memory"
                              }
                            },
                            "id": 281,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 280,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 255,
                              "src": "2340:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2330:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "2321:21:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "id": 283,
                        "nodeType": "ExpressionStatement",
                        "src": "2321:21:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 258,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 255,
                      "src": "2199:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "36",
                      "id": 259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2202:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_6_by_1",
                        "typeString": "int_const 6"
                      },
                      "value": "6"
                    },
                    "src": "2199:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 285,
                  "initializationExpression": {
                    "assignments": [
                      255
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 255,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 305,
                        "src": "2186:9:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 254,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2186:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 257,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2196:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2186:11:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2205:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 261,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 255,
                        "src": "2205:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 263,
                    "nodeType": "ExpressionStatement",
                    "src": "2205:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2181:172:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 288,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 286,
                      "name": "total",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 251,
                      "src": "2366:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 287,
                      "name": "max",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 247,
                      "src": "2374:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2366:11:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 291,
                  "nodeType": "IfStatement",
                  "src": "2362:41:1",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2398:5:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "functionReturnParameters": 245,
                    "id": 290,
                    "nodeType": "Return",
                    "src": "2391:12:1"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 300,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 292,
                        "name": "players",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 230,
                        "src": "2422:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Player_$426_$",
                          "typeString": "mapping(address => contract Player)"
                        }
                      },
                      "id": 295,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 293,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "2430:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 294,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2430:10:1",
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
                      "src": "2422:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Player_$426",
                        "typeString": "contract Player"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 298,
                          "name": "statArray",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 241,
                          "src": "2455:9:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                            "typeString": "uint8[] memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                            "typeString": "uint8[] memory"
                          }
                        ],
                        "id": 297,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "2444:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_creation_nonpayable$_t_array$_t_uint8_$dyn_memory_ptr_$returns$_t_contract$_Player_$426_$",
                          "typeString": "function (uint8[] memory) returns (contract Player)"
                        },
                        "typeName": {
                          "contractScope": null,
                          "id": 296,
                          "name": "Player",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 426,
                          "src": "2448:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Player_$426",
                            "typeString": "contract Player"
                          }
                        }
                      },
                      "id": 299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2444:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Player_$426",
                        "typeString": "contract Player"
                      }
                    },
                    "src": "2422:43:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Player_$426",
                      "typeString": "contract Player"
                    }
                  },
                  "id": 301,
                  "nodeType": "ExpressionStatement",
                  "src": "2422:43:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2482:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 245,
                  "id": 303,
                  "nodeType": "Return",
                  "src": "2475:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 305,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "newPlayer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 241,
                  "name": "statArray",
                  "nodeType": "VariableDeclaration",
                  "scope": 305,
                  "src": "2053:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                    "typeString": "uint8[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 239,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "2053:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 240,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2053:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                      "typeString": "uint8[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2052:19:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 244,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 305,
                  "src": "2087:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 243,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2087:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2086:6:1"
            },
            "scope": 318,
            "src": "2034:459:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 316,
              "nodeType": "Block",
              "src": "2572:39:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 312,
                      "name": "players",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 230,
                      "src": "2589:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_contract$_Player_$426_$",
                        "typeString": "mapping(address => contract Player)"
                      }
                    },
                    "id": 314,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 313,
                      "name": "player",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 307,
                      "src": "2597:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2589:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Player_$426",
                      "typeString": "contract Player"
                    }
                  },
                  "functionReturnParameters": 311,
                  "id": 315,
                  "nodeType": "Return",
                  "src": "2582:22:1"
                }
              ]
            },
            "documentation": null,
            "id": 317,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getPlayerByAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 307,
                  "name": "player",
                  "nodeType": "VariableDeclaration",
                  "scope": 317,
                  "src": "2527:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 306,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2527:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2526:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 310,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 317,
                  "src": "2564:6:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Player_$426",
                    "typeString": "contract Player"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 309,
                    "name": "Player",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 426,
                    "src": "2564:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Player_$426",
                      "typeString": "contract Player"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2563:8:1"
            },
            "scope": 318,
            "src": "2499:112:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "1821:793:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 326,
        "linearizedBaseContracts": [
          326
        ],
        "name": "GameComponent",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 325,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 319,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2663:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 323,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 325,
                  "src": "2689:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 320,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "2689:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 322,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 321,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2695:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2689:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2688:10:1"
            },
            "scope": 326,
            "src": "2646:53:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 491,
        "src": "2616:85:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 327,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "2926:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 328,
            "nodeType": "InheritanceSpecifier",
            "src": "2926:5:1"
          }
        ],
        "contractDependencies": [
          34
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 426,
        "linearizedBaseContracts": [
          426,
          34
        ],
        "name": "Player",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 331,
            "name": "stats",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "2937:13:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
              "typeString": "uint8[]"
            },
            "typeName": {
              "baseType": {
                "id": 329,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "2937:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "id": 330,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "2937:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                "typeString": "uint8[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 333,
            "name": "health_current",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "2956:20:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int16",
              "typeString": "int16"
            },
            "typeName": {
              "id": 332,
              "name": "int16",
              "nodeType": "ElementaryTypeName",
              "src": "2956:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_int16",
                "typeString": "int16"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 335,
            "name": "health_max",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "2982:16:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_int16",
              "typeString": "int16"
            },
            "typeName": {
              "id": 334,
              "name": "int16",
              "nodeType": "ElementaryTypeName",
              "src": "2982:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_int16",
                "typeString": "int16"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 338,
            "name": "items",
            "nodeType": "VariableDeclaration",
            "scope": 426,
            "src": "3004:21:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage",
              "typeString": "contract GameComponent[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 336,
                "name": "GameComponent",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 326,
                "src": "3004:13:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_GameComponent_$326",
                  "typeString": "contract GameComponent"
                }
              },
              "id": 337,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "3004:15:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage_ptr",
                "typeString": "contract GameComponent[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 348,
              "nodeType": "Block",
              "src": "3074:34:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 344,
                      "name": "stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 331,
                      "src": "3084:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
                        "typeString": "uint8[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 345,
                      "name": "statArray",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 341,
                      "src": "3092:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                        "typeString": "uint8[] memory"
                      }
                    },
                    "src": "3084:17:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
                      "typeString": "uint8[] storage ref"
                    }
                  },
                  "id": 347,
                  "nodeType": "ExpressionStatement",
                  "src": "3084:17:1"
                }
              ]
            },
            "documentation": null,
            "id": 349,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Player",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 341,
                  "name": "statArray",
                  "nodeType": "VariableDeclaration",
                  "scope": 349,
                  "src": "3048:17:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                    "typeString": "uint8[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 339,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "3048:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 340,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3048:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                      "typeString": "uint8[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3047:19:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 343,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3074:0:1"
            },
            "scope": 426,
            "src": "3032:76:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 357,
              "nodeType": "Block",
              "src": "3171:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 355,
                    "name": "items",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 338,
                    "src": "3188:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage",
                      "typeString": "contract GameComponent[] storage ref"
                    }
                  },
                  "functionReturnParameters": 354,
                  "id": 356,
                  "nodeType": "Return",
                  "src": "3181:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 358,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getItems",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 350,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3130:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 353,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 358,
                  "src": "3154:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_memory_ptr",
                    "typeString": "contract GameComponent[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 351,
                      "name": "GameComponent",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 326,
                      "src": "3154:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_GameComponent_$326",
                        "typeString": "contract GameComponent"
                      }
                    },
                    "id": 352,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3154:15:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage_ptr",
                      "typeString": "contract GameComponent[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3153:17:1"
            },
            "scope": 426,
            "src": "3113:87:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 373,
              "nodeType": "Block",
              "src": "3270:40:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 371,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 367,
                        "name": "stats",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 331,
                        "src": "3280:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
                          "typeString": "uint8[] storage ref"
                        }
                      },
                      "id": 369,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 368,
                        "name": "index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 362,
                        "src": "3286:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3280:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 370,
                      "name": "newStat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 360,
                      "src": "3295:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "3280:22:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 372,
                  "nodeType": "ExpressionStatement",
                  "src": "3280:22:1"
                }
              ]
            },
            "documentation": null,
            "id": 374,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 365,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 364,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 25,
                  "src": "3260:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3260:9:1"
              }
            ],
            "name": "setStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 360,
                  "name": "newStat",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "3224:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 359,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 362,
                  "name": "index",
                  "nodeType": "VariableDeclaration",
                  "scope": 374,
                  "src": "3239:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 361,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3239:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3223:29:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 366,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3270:0:1"
            },
            "scope": 426,
            "src": "3206:104:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 401,
              "nodeType": "Block",
              "src": "3367:176:1",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    },
                    "id": 386,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_int16",
                            "typeString": "int16"
                          },
                          "id": 383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 381,
                            "name": "health_current",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "3382:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int16",
                              "typeString": "int16"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 382,
                            "name": "_damage",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 376,
                            "src": "3399:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int16",
                              "typeString": "int16"
                            }
                          },
                          "src": "3382:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int16",
                            "typeString": "int16"
                          }
                        }
                      ],
                      "id": 384,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3381:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 385,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3410:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3381:30:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 394,
                  "nodeType": "IfStatement",
                  "src": "3377:104:1",
                  "trueBody": {
                    "id": 393,
                    "nodeType": "Block",
                    "src": "3412:69:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 389,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 387,
                            "name": "health_current",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 333,
                            "src": "3426:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int16",
                              "typeString": "int16"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 388,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3443:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "3426:18:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int16",
                            "typeString": "int16"
                          }
                        },
                        "id": 390,
                        "nodeType": "ExpressionStatement",
                        "src": "3426:18:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 391,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3465:5:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 380,
                        "id": 392,
                        "nodeType": "Return",
                        "src": "3458:12:1"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 395,
                      "name": "health_current",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 333,
                      "src": "3490:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 396,
                      "name": "_damage",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 376,
                      "src": "3508:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int16",
                        "typeString": "int16"
                      }
                    },
                    "src": "3490:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    }
                  },
                  "id": 398,
                  "nodeType": "ExpressionStatement",
                  "src": "3490:25:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 399,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3532:4:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 380,
                  "id": 400,
                  "nodeType": "Return",
                  "src": "3525:11:1"
                }
              ]
            },
            "documentation": null,
            "id": 402,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "damage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 376,
                  "name": "_damage",
                  "nodeType": "VariableDeclaration",
                  "scope": 402,
                  "src": "3331:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int16",
                    "typeString": "int16"
                  },
                  "typeName": {
                    "id": 375,
                    "name": "int16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3331:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int16",
                      "typeString": "int16"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3330:15:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 379,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 402,
                  "src": "3362:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 378,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3362:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3361:6:1"
            },
            "scope": 426,
            "src": "3315:228:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 415,
              "nodeType": "Block",
              "src": "3587:48:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 411,
                            "name": "item",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 404,
                            "src": "3622:4:1",
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
                          "id": 410,
                          "name": "GameComponent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 326,
                          "src": "3608:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_GameComponent_$326_$",
                            "typeString": "type(contract GameComponent)"
                          }
                        },
                        "id": 412,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3608:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_GameComponent_$326",
                          "typeString": "contract GameComponent"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_GameComponent_$326",
                          "typeString": "contract GameComponent"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 407,
                        "name": "items",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "3597:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_contract$_GameComponent_$326_$dyn_storage",
                          "typeString": "contract GameComponent[] storage ref"
                        }
                      },
                      "id": 409,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3597:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_contract$_GameComponent_$326_$returns$_t_uint256_$",
                        "typeString": "function (contract GameComponent) returns (uint256)"
                      }
                    },
                    "id": 413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3597:31:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 414,
                  "nodeType": "ExpressionStatement",
                  "src": "3597:31:1"
                }
              ]
            },
            "documentation": null,
            "id": 416,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addItem",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 404,
                  "name": "item",
                  "nodeType": "VariableDeclaration",
                  "scope": 416,
                  "src": "3566:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 403,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3566:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3565:14:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 406,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3587:0:1"
            },
            "scope": 426,
            "src": "3549:86:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 424,
              "nodeType": "Block",
              "src": "3690:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 422,
                    "name": "stats",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 331,
                    "src": "3707:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage",
                      "typeString": "uint8[] storage ref"
                    }
                  },
                  "functionReturnParameters": 421,
                  "id": 423,
                  "nodeType": "Return",
                  "src": "3700:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 425,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 417,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3658:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 420,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 425,
                  "src": "3682:7:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$dyn_memory_ptr",
                    "typeString": "uint8[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 418,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "3682:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 419,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3682:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$dyn_storage_ptr",
                      "typeString": "uint8[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3681:9:1"
            },
            "scope": 426,
            "src": "3641:78:1",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 491,
        "src": "2907:815:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 427,
              "name": "GameComponent",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 326,
              "src": "3741:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_GameComponent_$326",
                "typeString": "contract GameComponent"
              }
            },
            "id": 428,
            "nodeType": "InheritanceSpecifier",
            "src": "3741:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 429,
              "name": "owned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34,
              "src": "3756:5:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_owned_$34",
                "typeString": "contract owned"
              }
            },
            "id": 430,
            "nodeType": "InheritanceSpecifier",
            "src": "3756:5:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 431,
              "name": "tradeable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 53,
              "src": "3763:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_tradeable_$53",
                "typeString": "contract tradeable"
              }
            },
            "id": 432,
            "nodeType": "InheritanceSpecifier",
            "src": "3763:9:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 433,
              "name": "purchasable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 120,
              "src": "3774:11:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_purchasable_$120",
                "typeString": "contract purchasable"
              }
            },
            "id": 434,
            "nodeType": "InheritanceSpecifier",
            "src": "3774:11:1"
          }
        ],
        "contractDependencies": [
          120,
          34,
          53,
          326
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 461,
        "linearizedBaseContracts": [
          461,
          120,
          53,
          34,
          326
        ],
        "name": "Item",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 438,
            "name": "stats",
            "nodeType": "VariableDeclaration",
            "scope": 461,
            "src": "3793:14:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint8_$8_storage",
              "typeString": "uint8[8]"
            },
            "typeName": {
              "baseType": {
                "id": 435,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "3793:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "id": 437,
              "length": {
                "argumentTypes": null,
                "hexValue": "38",
                "id": 436,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "3799:1:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "8"
              },
              "nodeType": "ArrayTypeName",
              "src": "3793:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                "typeString": "uint8[8]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 449,
              "nodeType": "Block",
              "src": "3851:31:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 445,
                      "name": "stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 438,
                      "src": "3861:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$8_storage",
                        "typeString": "uint8[8] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 446,
                      "name": "_stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 442,
                      "src": "3869:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                        "typeString": "uint8[8] memory"
                      }
                    },
                    "src": "3861:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage",
                      "typeString": "uint8[8] storage ref"
                    }
                  },
                  "id": 448,
                  "nodeType": "ExpressionStatement",
                  "src": "3861:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 450,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Item",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 442,
                  "name": "_stats",
                  "nodeType": "VariableDeclaration",
                  "scope": 450,
                  "src": "3827:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 439,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "3827:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 441,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 440,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3833:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3827:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3826:17:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 444,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3851:0:1"
            },
            "scope": 461,
            "src": "3813:69:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 459,
              "nodeType": "Block",
              "src": "3940:29:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 457,
                    "name": "stats",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 438,
                    "src": "3957:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage",
                      "typeString": "uint8[8] storage ref"
                    }
                  },
                  "functionReturnParameters": 456,
                  "id": 458,
                  "nodeType": "Return",
                  "src": "3950:12:1"
                }
              ]
            },
            "documentation": null,
            "id": 460,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 451,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3905:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 455,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 460,
                  "src": "3931:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 452,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "3931:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 454,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 453,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3937:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "3931:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3930:10:1"
            },
            "scope": 461,
            "src": "3888:81:1",
            "stateMutability": "view",
            "superFunction": 325,
            "visibility": "external"
          }
        ],
        "scope": 491,
        "src": "3724:248:1"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 462,
              "name": "Item",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 461,
              "src": "3993:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Item_$461",
                "typeString": "contract Item"
              }
            },
            "id": 463,
            "nodeType": "InheritanceSpecifier",
            "src": "3993:4:1"
          }
        ],
        "contractDependencies": [
          120,
          34,
          53,
          326,
          461
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 490,
        "linearizedBaseContracts": [
          490,
          461,
          120,
          53,
          34,
          326
        ],
        "name": "Weapon",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 467,
            "name": "_stats",
            "nodeType": "VariableDeclaration",
            "scope": 490,
            "src": "4003:15:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint8_$8_storage",
              "typeString": "uint8[8]"
            },
            "typeName": {
              "baseType": {
                "id": 464,
                "name": "uint8",
                "nodeType": "ElementaryTypeName",
                "src": "4003:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint8",
                  "typeString": "uint8"
                }
              },
              "id": 466,
              "length": {
                "argumentTypes": null,
                "hexValue": "38",
                "id": 465,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "4009:1:1",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "8"
              },
              "nodeType": "ArrayTypeName",
              "src": "4003:8:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                "typeString": "uint8[8]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 478,
              "nodeType": "Block",
              "src": "4064:31:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 476,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 474,
                      "name": "_stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 467,
                      "src": "4074:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$8_storage",
                        "typeString": "uint8[8] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 475,
                      "name": "stats",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 471,
                      "src": "4083:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                        "typeString": "uint8[8] memory"
                      }
                    },
                    "src": "4074:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage",
                      "typeString": "uint8[8] storage ref"
                    }
                  },
                  "id": 477,
                  "nodeType": "ExpressionStatement",
                  "src": "4074:14:1"
                }
              ]
            },
            "documentation": null,
            "id": 479,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "Weapon",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 471,
                  "name": "stats",
                  "nodeType": "VariableDeclaration",
                  "scope": 479,
                  "src": "4041:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 468,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "4041:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 470,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 469,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4047:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "4041:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4040:16:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 473,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4064:0:1"
            },
            "scope": 490,
            "src": "4025:70:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 488,
              "nodeType": "Block",
              "src": "4152:30:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 486,
                    "name": "_stats",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 467,
                    "src": "4169:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage",
                      "typeString": "uint8[8] storage ref"
                    }
                  },
                  "functionReturnParameters": 485,
                  "id": 487,
                  "nodeType": "Return",
                  "src": "4162:13:1"
                }
              ]
            },
            "documentation": null,
            "id": 489,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getStats",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 480,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4117:2:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 484,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 489,
                  "src": "4143:8:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint8_$8_memory_ptr",
                    "typeString": "uint8[8]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 481,
                      "name": "uint8",
                      "nodeType": "ElementaryTypeName",
                      "src": "4143:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "id": 483,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "38",
                      "id": 482,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4149:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "8"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "4143:8:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint8_$8_storage_ptr",
                      "typeString": "uint8[8]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4142:10:1"
            },
            "scope": 490,
            "src": "4100:82:1",
            "stateMutability": "view",
            "superFunction": 460,
            "visibility": "external"
          }
        ],
        "scope": 491,
        "src": "3974:210:1"
      }
    ],
    "src": "0:5480:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-07-26T22:14:50.997Z"
}