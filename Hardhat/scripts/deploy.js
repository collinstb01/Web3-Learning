const { run, network } = require("hardhat")
require("dotenv")

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")
  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.deployed()
  console.log(`Deployed contract to: ${simpleStorage.address}`)
  // console.log(network.config.chainId)

  if (network.config.chainId === 4) {
    console.log("Waiting for block confirmations...")
    await simpleStorage.deployTransaction.wait(6)
    await verify(simpleStorage.address, [])
  }
  const currentValue = await simpleStorage.retrieve()
  console.log(`Current Value is: ${currentValue}`)

  // Update the current value
  const transactionResponse = await simpleStorage.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await simpleStorage.retrieve()
  console.log(`Updated Value is: ${updatedValue}`)
}
// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
