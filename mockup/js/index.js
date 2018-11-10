const keythereum = require('keythereum')
const { generate } = require('./key.js')

document.querySelector('#button-generate').addEventListener('click', () => {
  generate()
})

document.querySelector('#tip').addEventListener('click', () => {
  window.open("http://www.bzzt.se", "tip")
})

let dialog = document.querySelector('dialog');

document.querySelector('#show').onclick = function() {
  dialog.show();
};

document.querySelector('#close').onclick = function() {
  dialog.close();
};
