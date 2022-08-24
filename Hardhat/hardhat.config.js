require("@nomicfoundation/hardhat-toolbox")
require("dotenv")
require("@nomiclabs/hardhat-etherscan")
require("./tasks/bock-number.js")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.9",
  networks: {
    rinkbey: {
      url:
        process.env.RFC_URL ||
        "https://eth-rinkeby.alchemyapi.io/v2/FIb39U8JmE7tRvxy06AyV1Gr1s57nso4",
      accounts: [
        "3a4f97ecc0098d65c9b03368035ef10edcb13e5de4740556b6c18b726d585256",
      ],
      chainId: 4,
    },
  },
  etherscan: {
    apiKey: "KY9495C1U5S9A9Q2HZDTH3PJIHV23F6MCS",
  },
}
