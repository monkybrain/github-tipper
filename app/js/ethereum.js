const Web3 = require('web3')

const PROVIDER = window.ethereum
const networks = {
  1: "Mainet",
  3: "Ropsten"
}

// Instantiate web3 object
const web3 = new Web3(window.ethereum)

exports.getNetwork = async function() {
  let networkId = await web3.eth.net.getId()
  return networks[networkId]
}

exports.getBalance = async function() {
  let address = localStorage.getItem('address')
  let wei = await web3.eth.getBalance(address)
  return await web3.utils.fromWei(wei, 'ether')
}

exports.topUp = async function() {
  let receiver = await localStorage.getItem('address')
}
