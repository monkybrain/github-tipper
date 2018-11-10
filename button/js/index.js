const Web3 = require('web3')
const querystring = require('querystring')
const style = require('./style.js')
const util = require('./util.js')

const PROVIDER = "https://ropsten.infura.io/0pzfHdAhsqakqtBk8Hs6"
const web3 = new Web3(PROVIDER)

const getBalance = async function(address) {
  let wei = await web3.eth.getBalance(address)
  return await web3.utils.fromWei(wei, 'ether')
}

const init = async function() {

  // Get and style box
  const box = document.querySelector('#github-tipper')
  style.applyBox(box)

  // Get address
  let address = box.getAttribute("address")

  // Update balance
  let balance = await getBalance(address)
  box.innerHTML = `tip | ${balance}`

  // Add click listener
  box.addEventListener('click', () => {
    params = {action: "tip", to: address, value: 0.01}
    let qs = querystring.stringify(params)
    window.open(`/app/index.html?${qs}`, 'github-tipper')
  })

  console.log(util.getGithubInfo())

}

init()
