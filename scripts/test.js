// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat")
const { ethers, upgrades } = require("hardhat")
const IDO = artifacts.require("IDO")
const USDT = artifacts.require("USDT")

async function main() {
    await hre.run("compile")

    this.deployer = (await ethers.getSigners())[0].address
    console.log("deployer address", this.deployer)

    // 0x591b0af7a233c5c349aF9930532d25a72F27B59E
    // 0x0bDF511aB157cf3a86d573Dc426D546BC8606F9E
    // this.IDO1 = await hre.ethers.getContractAt("IDO", "0xef3f738eC8a8BE64695954fc1f736eBF8A4920E3")
    // const remainingInvestment = await this.IDO1.getRemainingInvestment(this.deployer)
    // console.log("remainingInvestment", remainingInvestment)
    // await this.IDO1.withdrawRemainingInvestment()
    // console.log("withdrawRemainingInvestment")

    // this.USDT = await hre.ethers.getContractAt("USDT", "0x55d398326f99059fF775485246999027B3197955")
    // await this.USDT.approve("0x88BBEa47D49936cF703016316fE388c4f1C0C73a", hre.ethers.utils.parseEther("1000", "ether"))
    // console.log("approve")
    // this.IDO2 = await hre.ethers.getContractAt("IDO2", "0x88BBEa47D49936cF703016316fE388c4f1C0C73a")
    // await this.IDO2.investment("0x343e53D0d06FBF692336CcF871d4c89aD8B706Be", remainingInvestment)
    // console.log("investment")
    // console.log((await this.IDO.getMyInviteAmount("0x22C67D6AF140266938200955fcDAD3Fb67CCf026")).toString())
    // await this.IDO.setStarttime([1618750400, 1659009600, 9659182400, 9659182401, 9659182402, 9659182403])
    // console.log((await this.IDO.users("0x1e20A61D37f7508343e695C979B0b7cb45419B63")))

    // this.USDT = await hre.ethers.getContractAt("USDT", "0x55d398326f99059fF775485246999027B3197955")
    // console.log("USDT", hre.ethers.utils.formatEther((await this.USDT.balanceOf("0xef3f738eC8a8BE64695954fc1f736eBF8A4920E3")).toString()))


    this.IDO2 = await hre.ethers.getContractAt("IDO2", "0x88BBEa47D49936cF703016316fE388c4f1C0C73a")
    console.log((await this.IDO2.getMyInvestment("0x80c14edC8aD81c91ED5aa053eB2d99d1b97de37F", 0)).toString())
    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
