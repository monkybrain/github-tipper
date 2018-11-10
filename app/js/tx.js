const EthereumTx = require('ethereumjs-tx')

exports.send = async function(to, value) {

  console.log(to, value)

  const privateKey = Buffer.from(localStorage.getItem('privateKey'), 'hex')
  console.log(privateKey)

  // const txParams = {
  //   nonce: '0x00',
  //   gasPrice: '0x09184e72a000',
  //   gasLimit: '0x2710',
  //   to: '0x0000000000000000000000000000000000000000',
  //   value: '0x00',
  //   data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
  //   // EIP 155 chainId - mainnet: 1, ropsten: 3
  //   chainId: 3
  // }
}
