const ethers = require("ethers");

const wallet = ethers.Wallet.createRandom();

console.log(`Mnemonic: ${wallet.mnemonic.phrase}`);
console.log(`Address: ${wallet.address}`);

/*
  Test Wallet on Ropsten:
  Mnemonic: decrease gentle derive place negative author crawl enemy unlock blouse twin genius
  Address: 0x017A0b0e99F3b5cEAD1C3C37c48bD2F16547baCF
  MetaMask pw: TestRopsten
*/
