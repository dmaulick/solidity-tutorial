const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten", {
  // Infura API Key (Project ID)
  infura: "78523468fd0048d4a308a6b3f658cdd7",
});

module.exports = provider;
