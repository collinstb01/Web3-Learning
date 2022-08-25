const { version } = require("chai")

require("@nomicfoundation/hardhat-toolbox")
// require("dotenv")
require("@nomiclabs/hardhat-etherscan")
// require("./tasks/bock-number.js")
require("hardhat-gas-reporter")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.8.9" }, { version: "0.6.0" }],
  },
  networks: {
    rinkbey: {
      url:
        process.env.RFC_URL ||
        "https://eth-rinkeby.alchemyapi.io/v2/FIb39U8JmE7tRvxy06AyV1Gr1s57nso4",
      accounts: [
        "3a4f97ecc0098d65c9b03368035ef10edcb13e5de4740556b6c18b726d585256",
      ],
      blockConfirmations: 6,
      gas: 6000000,
      chainId: 4,
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: "KY9495C1U5S9A9Q2HZDTH3PJIHV23F6MCS",
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY || "key",
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
  },
}

// yarn hardhat console --network "network"
// yarn hardhat node
// yarn hardhat run scripts/deploy.js --network rinkbey
// yarn hardhat test greep keyword
