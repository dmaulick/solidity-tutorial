const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "decrease gentle derive place negative author crawl enemy unlock blouse twin genius",
  "https://rinkeby.infura.io/v3/78523468fd0048d4a308a6b3f658cdd7"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("accounts", accounts);

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
// Contract was deployed to: 0xDB10fA80a8301D6c3cEC854c376b99254f00eaB1
deploy();
