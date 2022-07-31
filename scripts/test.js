// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat")
const { ethers, upgrades } = require("hardhat")

async function main() {
    await hre.run("compile")

    this.deployer = (await ethers.getSigners())[0].address
    console.log("deployer address", this.deployer)

    // 0x591b0af7a233c5c349aF9930532d25a72F27B59E
    // 0x0bDF511aB157cf3a86d573Dc426D546BC8606F9E
    // this.IDO = await hre.ethers.getContractAt("IDO", "0x88BBEa47D49936cF703016316fE388c4f1C0C73a")
    // console.log((await this.IDO.getMyInviteAmount("0x22C67D6AF140266938200955fcDAD3Fb67CCf026")).toString())
    // await this.IDO.setStarttime([1618750400, 1659009600, 9659182400, 9659182401, 9659182402, 9659182403])
    // console.log((await this.IDO.users("0x1e20A61D37f7508343e695C979B0b7cb45419B63")))

    this.USDT = await hre.ethers.getContractAt("USDT", "0x55d398326f99059fF775485246999027B3197955")
    console.log("USDT", hre.ethers.utils.formatEther((await this.USDT.balanceOf("0xef3f738eC8a8BE64695954fc1f736eBF8A4920E3")).toString()))

    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
