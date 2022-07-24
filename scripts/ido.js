// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat")
const { ethers, upgrades, artifacts } = require("hardhat")
const IDO = artifacts.require("IDO")
const USDT = artifacts.require("USDT")

async function main() {
    await hre.run("compile")

    this.deployer = (await ethers.getSigners())[0].address
    console.log("deployer address", this.deployer)
    this.USDT = await USDT.new()
    console.log("USDT address", this.USDT.address)
    console.log("Before", (await this.USDT.balanceOf(this.deployer)).toString())
    await this.USDT.addMinter(this.deployer)
    await this.USDT.mint(this.deployer, hre.ethers.utils.parseEther("1000000","ether"))
    console.log("After", (await this.USDT.balanceOf(this.deployer)).toString())
    this.IDO = await IDO.new(this.USDT.address, [1658508950, 1658908950, 1658928950, 1659508950, 1659528950, 1659908950])
    console.log("IDO", this.IDO.address)
    await this.USDT.approve(this.IDO.address, hre.ethers.utils.parseEther("999999999999", "ether"))
    await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // console.log("getLockInvestment", (await this.IDO.getLockInvestment("0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281")).toString())
    // console.log("getWeighting", (await this.IDO.getWeighting(this.deployer)).toString())
    // console.log("IDO address", (await this.USDT.balanceOf(this.IDO.address)).toString())


    // this.IDO = await hre.ethers.getContractAt("IDO", "0x1a313D0048edbe873d6d8AD3a99DECE755c29C0e")
    // await this.IDO.setStarttime(['1658508950', '1658908950', '1658928950', '1659508950', '1659528950', '1659908950'])

    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
