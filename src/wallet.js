const ethers = require("ethers");

const mnemonic =
  "decrease gentle derive place negative author crawl enemy unlock blouse twin genius";
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

module.exports = wallet;
