const wallet = require('./wallet.js')
const ui = require('./ui.js')

// Generate key pair if none in local storage
if (!localStorage.getItem('privateKey')) {
  wallet.generate()
  ui.hide('#div-generating')
}

// Refresh UI every 5 s
ui.update()
setInterval(() => {ui.update()}, 5000)
