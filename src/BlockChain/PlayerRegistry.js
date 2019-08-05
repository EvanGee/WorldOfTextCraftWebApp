import Contract from "./Contracts/PlayerRegistry";
const contract = Contract

import {getPlayerRegistry} from "./GameRegistry.js"
import gasLimit from "./gasLimit"

export function newPlayer(statArray) {
    
    return new Promise((resolve, reject) => {

        getPlayerRegistry()
        .then((registry)=>{
            console.log("player registry addr:" ,registry)
            const contractAddr = registry
            const cont = web3.eth.contract(contract.abi, contractAddr)
            const instance = cont.at(contractAddr);

            instance.newPlayer(statArray, {
                from: web3.eth.defaultAccount,
                gas: gasLimit
            }, (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
            
        })
        .catch(console.error)

    })
}


export function getPlayerByAddress(address) {
    return new Promise((resolve, reject)=>{
        getPlayerRegistry()
        .then((registry)=>{
            console.log("player registry addr:" ,registry)
            const contractAddr = registry
            const cont = web3.eth.contract(contract.abi, contractAddr)
            const instance = cont.at(contractAddr);
            instance.getPlayerByAddress(web3.eth.defaultAccount, {from: web3.eth.defaultAccount}, (err, res) => {
                if (err) reject(err)
                resolve(res)
            })

        })
        .catch(console.error)

    })
}