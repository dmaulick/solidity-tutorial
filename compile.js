const path = require("path");
const fs = require("fs");
const solc = require("solc");

// Compile Inbox Contract
const inboxContractPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const inboxContractSource = fs.readFileSync(inboxContractPath, "utf8");

module.exports = solc.compile(inboxContractSource, 1).contracts[":Inbox"];

// If we wanted to do same for MyContract.
// But we don't because it will overwrite the above export.
// May revisit later -- for now we are leaving MyContract tests commented out.

// Compile MyContract Contract
// const myContractContractPath = path.resolve(
//   __dirname,
//   "contracts",
//   "MyContract.sol"
// );
// const myContractContractSource = fs.readFileSync(
//   myContractContractPath,
//   "utf8"
// );

// module.exports = solc.compile(myContractContractSource, 1).contracts[
//   ":MyContract"
// ];
