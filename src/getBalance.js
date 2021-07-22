const ethers = require("ethers");
const wallet = require("./wallet");
const provider = require("./provider");

// Programmatically get balance
async function main() {
  const account = wallet.connect(provider);
  const balance = await account.getBalance();
  console.log(`ETH Balance: ${ethers.utils.formatUnits(balance, 18)}`);
}

main();
