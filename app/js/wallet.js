const Wallet = require('ethereumjs-wallet')

exports.generate = () => {
  let wallet = Wallet.generate();
  let address = '0x' + wallet.getAddress().toString('hex');
  let privateKey = wallet.getPrivateKey().toString('hex');
  localStorage.setItem('address', address);
  localStorage.setItem('privateKey', privateKey);
}
