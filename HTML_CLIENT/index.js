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

const fund = async (ethAmouut) => {
  console.log(`Funding with ${ethAmouut}`)
}

const withdraw = async () => {}
