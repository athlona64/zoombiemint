'strict'

const ethers = require('ethers');
let url = `https://rpc.testnet.moonbeam.network`;
var provider = new ethers.providers.JsonRpcProvider(url);
let hdPath = "m/44'/60'/0'/0/0";

let wallet = new ethers.Wallet('privatekey').connect(provider);



let sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));


provider.getTransactionCount(wallet.address, "latest").then(nonce =>{
	for(var i=0;i<100;i++){
		const tx = {
		  from: wallet.address,
		  to: '0xC26CcAE0d56832E4e581353a157c5ec5bC61aB03',
		  value: ethers.utils.parseEther('0.1'),
		  nonce: nonce+i,
		  data: '0xb7e357a6'
		}

		wallet.sendTransaction(tx).then((transaction) => {
		  console.dir(transaction)

		})			
	}
})
