import DNSContract from "./Contracts/DNS.js";

import web3 from "./web3"
const DNSContractAddr = '0x345ca3e014aaf5dca488057592ee47305d9b3e10'
const DNS = web3.eth.contract(DNSContract.abi, DNSContractAddr)
const instance = DNS.at(DNSContractAddr);

export function createNewDomainName(proposedName, account) {

        //create domain name if no domainname
        console.log(proposedName, account)
        return new Promise((resolve, reject)=>{
            instance.createNewDomainName(proposedName, account,
                {
                    from: account,
                    gas: 10000000,
                }, (err, res)=>{
                    if (err) reject(err)
                    else resolve(res)
                })
        });
}


export function getDomainNameFromAddress(account)
{
    return new Promise((resolve, reject) => {
        instance.getDomainNameFromAddress(account, {
            from: web3.eth.coinbase
        }, (err, domainName)=>{
            if (err) reject(err)
            else resolve(domainName)
        })
    })
}


export function getAddressFromDomainName(domainName)
{
    return new Promise((resolve, reject) => {
        instance.getAddressFromDomainName(domainName,
        {
            from: web3.eth.coinbase
        }, (err, res)=>{
            if (err) reject(err)
            else resolve(res)
        })
    })
}
