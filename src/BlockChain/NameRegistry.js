import Contract from "./Contracts/NameRegistry";
import {getItemRegistry} from "./GameRegistry"
import { promisify } from "util";
const contract = Contract

export function getAddress(Name) {
    return new Promise((resolve, reject) => {

        getItemRegistry()
        .then((registry)=>{
            console.log("name registry addr:" ,registry)
            const contractAddr = registry
            const cont = web3.eth.contract(contract.abi, contractAddr)
            const instance = cont.at(contractAddr);
            instance.getAddress(Name, {
                from: web3.eth.defaultAccount,
            }, (err, res) => {
                if (err) reject(err)
                resolve(res)
            })

        })
        .catch(console.error)
    })
}

export const getName = (address) => {
    return new Promise((resolve, reject) => {
        getItemRegistry()
        .then((registry)=>{
            const contractAddr = registry
            const cont = web3.eth.contract(contract.abi, contractAddr)
            const instance = cont.at(contractAddr);
            instance.getName(address, {
                from: web3.eth.defaultAccount,
            }, (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
        .catch(console.error)
    })
}

export const getAllAdded = () => {
    return new Promise((resolve, reject) => {
        getItemRegistry()
        .then((registry)=>{
            console.log("name registry addr:" ,registry)
            const contractAddr = registry
            const cont = web3.eth.contract(contract.abi, contractAddr)
            const instance = cont.at(contractAddr);
        
            instance.add({}, { fromBlock: 0, toBlock: 'latest' })
            .get((error, eventResult) => {

                let items = []
                let promises = []
                if (error)
                    console.error(error)
                else{
                    eventResult.map((d, i)=>{
                        let addr = d["args"][""]
                        promises.push(getName(addr)
                        .then((myName)=>{
                            items.push([myName, addr])
                        }))
                    })
                }
                Promise.all(promises)
                .then(()=>{
                    resolve(items)
                })
            })

        })
        .catch(console.error)
    })
}
