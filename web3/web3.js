//web3 를 통해서 solidity access 하기 

//web3.providers.HttpProvider

//web3.eth.accounts

//web3.eth.account[0]

var contractAddress='contract Address'

var abi = 'abi'

var conContract = web3.eth.contract(abi)
var conStorageContract = web3.eth.contact(abi);
var conStorage = conStorageContract.at(contractAddress);

// web3 를 통해서 solidity access 하기 at remix 

web3.providers.HttpProvider // or 



/*web3.eth.accounts
web3.eth.accounts[0] not necessary */

var contractAddress = 'put contract address in it'
var abi = 'put abi in it '

var conContract = web3.eth.contract(abi);
var con = conContract.at(contractAddress);

con.set(12345);

con.set(12345, function(e,r){console.log(r);});
con.set.sendTransaction(12345,function(e,r){console.log(r);});

con.get(function(e,r){console.log(r.toNumber());});
con.get.call(function(e,r){console.log(r.toNumber());});
