
import item from "./Contracts/purchasable.js"

export function buyItem(address, amount) {
    return new Promise((resolve, reject) => {
        const cont = web3.eth.contract(item.abi, address)
        const instance = cont.at(address);
        instance.buy({
            from: web3.eth.defaultAccount,
            gas: 50000,
            value: amount
        }, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })

    })

    
}
