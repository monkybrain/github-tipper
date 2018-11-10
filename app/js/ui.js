const ethereum = require('./ethereum.js')

exports.hide = async function(id) {
  document.querySelector(id).stylee.display = none;
}

exports.update = async function() {

  // Update network
  let network = await ethereum.getNetwork()
  document.querySelector("#text-network").innerHTML = network

  // Update address
  let address = localStorage.getItem('address')
  document.querySelector("#text-address").innerHTML = address

  // Update balance
  let balance = await ethereum.getBalance()
  document.querySelector("#text-balance").innerHTML = balance
  document.querySelector("#text-funds").innerHTML = balance

}

document.querySelector('#button-addFunds').addEventListener('click', () => {
  ethereum.addFunds()
})
