const querystring = require('querystring')
const wallet = require('./wallet.js')
const ui = require('./ui.js')
const tx = require('./tx.js')

// Generate key pair if none in local storage
if (!localStorage.getItem('privateKey')) {
  wallet.generate()
  ui.hide('#div-generating')
}

// Refresh UI every 5 s
ui.update()
setInterval(() => {ui.update()}, 5000)

// Get params
let qs = location.search.slice(1)
let params = querystring.parse(qs)

if (params.action == 'tip') {

  // TODO: ADD PARAM VALIDATION
  console.log(params)
  //tx.send(params.to, params.value);

}
