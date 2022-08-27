const { ethers } = require("ethers")

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("I see a metamask")
    await window.ethereum.request({ method: "eth_requestAccounts" })
    document.getElementById("val").innerHTML = "Connected"
  } else {
    console.log("not found")
    document.getElementById("val").innerHTML = "Please Install MetaMask"
  }
}

const ethAmouut = 1
const fund = async (ethAmouut) => {
  console.log(`Funding with ${ethAmouut}`)
  const provider = await ethers.provider.web3Provider(window.ethereum)
  const signer = await ethers.getSigners()
  const contract = await ethers.Contract(provider, abi, signer)
  // abi
  // signers address
  // RFC provider
  try {
    const transactionResponse = await contract.fund({
      value: ethAmouut
    })

    console.log("Done");
  } catch (error) {
    console.log(error)
  }

  //contract address
}

 function listener() {
    return new Promise = ((resolve, reject) => {
  provider.once(transactionResponse.hash,() => {

    })
  })
 }