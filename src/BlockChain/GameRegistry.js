import Contract from "./Contracts/Game";
import {getPlayerByAddress} from "./PlayerRegistry"
const contract = Contract

const contractAddr = '0x5b9A887D2e3da1CD5Ac5086cD45aBF004F297660'
const cont = web3.eth.contract(contract.abi, contractAddr)
const instance = cont.at(contractAddr);


export function getItemRegistry(Name) {
    return new Promise((resolve, reject) => {
        instance.getItemRegistry(Name, {
            from: web3.eth.defaultAccount,
        }, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

export const getPlayerRegistry = (address) => {
    return new Promise((resolve, reject) => {
        instance.getPlayerRegistry(address, {
            from: web3.eth.defaultAccount,
        }, (err, res) => {

            console.log(res)
            if (err) reject(err)
            resolve(res)
        })
    })
}
