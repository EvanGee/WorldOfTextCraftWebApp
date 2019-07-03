import Contract from "./Contracts/PlayerRegistry.js";


const contractAddr = '0x3f325aBb1da2f6328ae9Fe1bd66e5B190D2d9103'
const cont = web3.eth.contract(Contract.abi, contractAddr)
const instance = cont.at(contractAddr);

export function newPlayer(statArray) {
    return new Promise((resolve, reject) => {
        instance.newPlayer(statArray, {
            from: web3.eth.defaultAccount,
            gas: 900000
        }, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })

    })
}

export function getPlayerByAddress(address) {
    return new Promise((resolve, reject)=>{
        console.log(instance)
        instance.getPlayerByAddress(web3.eth.defaultAccount, {from: web3.eth.defaultAccount}, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })   
}

export default {
    newPlayer,
    getPlayerByAddress
}