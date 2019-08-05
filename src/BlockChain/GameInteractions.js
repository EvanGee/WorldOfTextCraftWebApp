
import Contract from "./Contracts/Item"
import Owner from "./Contracts/Owned"
import PlayerContract from "./Contracts/Player"
import gasLimit from "./gasLimit";
import {getPlayerByAddress} from "./PlayerRegistry"
import {getItemRegistry} from "./GameRegistry"
import {getName, getAllAdded} from "./NameRegistry"
const contract = Contract

export function buyItem(address, amount) {
    return new Promise((resolve, reject) => {
        const cont = web3.eth.contract(contract.abi, address)
        const instance = cont.at(address);
        instance.buy({
            from: web3.eth.defaultAccount,
            gas: 50000,
            value: amount
        }, (err, res) => {
            if (err) reject(err)
            resolve(address)
        })

    })
}

export function tradeItem(address) {
    return new Promise((resolve, reject) => {
        const cont = web3.eth.contract(contract.abi, address)
        const instance = cont.at(address);
        instance.trade({
            from: web3.eth.defaultAccount,
            gas: 50000,
        }, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })

    })
}


export const addItem = (itemaddr) => {
    return new Promise((resolve, reject) => {
        getItemRegistry()
            .then((itemRegAddr)=>{
                getPlayerByAddress(web3.eth.defaultAccount)
                .then((playerAddr)=>{
                        const cont = web3.eth.contract(PlayerContract.abi, playerAddr)
                        const instance = cont.at(playerAddr);

                        getName(itemaddr)
                        .then((name)=>{
                            
                            console.log("GETTING NAME ", name)
                            instance.addItem(itemRegAddr, name, {
                                from: web3.eth.defaultAccount,
                                gas: gasLimit,
            
                            }, (err, res) => {
                                if (err) reject(err)
                                resolve(res)
                            })
                        })
                        .catch(console.error)
                        
                    })
                .catch(console.error)
            })
        })
        .catch(console.error)
}


const web3Promise = (func, args, obj) => {
    return new Promise((resolve, reject)=>{
        func(args, obj, (err, res)=>{
            if (err) 
                reject(err)
            resolve(res)
        })
    })
}


export const listAllOwnedItems = () => {
    return new Promise((resolve, reject)=>{

        getAllAdded()
        .then((list)=>{
            console.log(list)
            const ownedItems = []
            const namePromises = []


            list.map((d, i)=>{
                let address = d[1]
                let name = d[0]
                let cont = web3.eth.contract(Contract.abi, address)
                let instance = cont.at(address);
                namePromises.push(web3Promise(
                    instance.getOwner,
                    {},{}
                ).then((res)=>{
                    if (res === web3.eth.defaultAccount){
                        ownedItems.push(d)
                    }
                }))
                
                
            })
            Promise.all(namePromises)
            .then(()=>resolve(ownedItems))
        })
        .catch(reject)
    })
}

