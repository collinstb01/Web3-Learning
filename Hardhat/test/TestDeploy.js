const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("Simple Storage", () => {
  let SimpleStorageFactory
  let simpleStorage
  beforeEach(async () => {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await SimpleStorageFactory.deploy()
  })

  it("Should Start With a Favorite Number of 0", async () => {
    const currentValue = await simpleStorage.retrieve()
    const expectKeyword = "0"

    assert.equal(currentValue.toString(), expectKeyword)
  })

  it("Should Update when Store is called", async () => {
    const expectedValue = "7"
    const ChangeValue = await simpleStorage.store(expectedValue)
    await ChangeValue.wait(1)

    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })
})
