const assert = require("assert");
// Can ignore this warning.. interface is a reserved keyword
// Note: these are the keys of the json that gets returned by the compile script
const { interface, bytecode } = require("../compile");

// We deploy contracts to a test network using ganache in order to test contracts
const ganache = require("ganache-cli");

// This gives us the constructor for Web3
const Web3 = require("web3");

// This creates an instance of web3
// ganache.provider is what web3 uses to communicate with ganache
const web3 = new Web3(ganache.provider());

let TEST_ACCOUNT;
// Javascript representation of the smart contract that exists on Chain:
let inbox;

beforeEach(async () => {
  // Get one of the test accounts that are automatically created by ganache cli
  // There are actually many accounts available to test with.
  const accounts = await web3.eth.getAccounts();
  TEST_ACCOUNT = accounts[0];

  // Use an account to deploy the contract.
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      // Defines arguments to Inbox constructor:
      arguments: ["Hi there!"],
    })
    // Send to ganache blockchain
    .send({ from: TEST_ACCOUNT, gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });
  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, "Hi there!");
  });
  it("can change the message", async () => {
    await inbox.methods.setMessage("bye").send({ from: TEST_ACCOUNT });
    const message = await inbox.methods.message().call();
    assert.equal(message, "bye");
  });
});
