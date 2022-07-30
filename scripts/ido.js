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
    // this.USDT = await USDT.new()
    // console.log("USDT address", this.USDT.address)
    // console.log("Before", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.deployer)).toString()).toString())
    // await this.USDT.addMinter(this.deployer)
    // await this.USDT.mint(this.deployer, hre.ethers.utils.parseEther("1000","ether"))
    // console.log("After", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.deployer)).toString()).toString())
    this.IDO = await IDO.new("0x55d398326f99059fF775485246999027B3197955", [1659182400, 1659268800, 1659441600, 1659528000])
    console.log("IDO", this.IDO.address)

    // await this.USDT.approve(this.IDO.address, hre.ethers.utils.parseEther("1000", "ether"))
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // console.log("IDO address USDT", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.IDO.address)).toString()))
    // console.log("getLockInvestment", (await this.IDO.getLockInvestment(this.deployer)).toString())
    // console.log("getWeighting", (await this.IDO.getWeighting(this.deployer, 1659268800)).toString())
    // console.log("getMyInvestment", hre.ethers.utils.formatEther((await this.IDO.getMyInvestment(this.deployer, 0)).toString()))
    // console.log("getWhichPeriod", (await this.IDO.getWhichPeriod()).toString())
    // console.log("getRemainingInvestment", hre.ethers.utils.formatEther((await this.IDO.getRemainingInvestment(this.deployer)).toString()))
    // console.log("User USDT address", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.deployer)).toString()).toString())
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("300", "ether"))
    // await ethers.provider.send("evm_increaseTime", [237650])
    // await ethers.provider.send("evm_mine")
    // console.log("totalInvestment", hre.ethers.utils.formatEther((await this.IDO.totalInvestment(0)).toString()).toString())
    // console.log("totalBonusInvestment", hre.ethers.utils.formatEther((await this.IDO.totalBonusInvestment(0)).toString()).toString())

    // console.log("getMyInvestment", hre.ethers.utils.formatEther((await this.IDO.getMyInvestment(this.deployer, 0)).toString()))
    // console.log("getLockInvestment", hre.ethers.utils.formatEther((await this.IDO.getLockInvestment(this.deployer)).toString()))
    // console.log("getRemainingInvestment", hre.ethers.utils.formatEther((await this.IDO.getRemainingInvestment(this.deployer)).toString()).toString())
    // console.log("getWeighting", (await this.IDO.getWeighting(this.deployer, 1659268800)).toString())

    // console.log("getMyInvestment", hre.ethers.utils.formatEther((await this.IDO.getMyInvestment("0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9", 0)).toString()))
    // console.log("getLockInvestment", hre.ethers.utils.formatEther((await this.IDO.getLockInvestment("0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9")).toString()))
    // console.log("getRemainingInvestment", hre.ethers.utils.formatEther((await this.IDO.getRemainingInvestment("0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9")).toString()).toString())
    // console.log("getWeighting", (await this.IDO.getWeighting("0xb6bCcFC89AfD3ed07A0C9D6eAf170Ef3Fc3C94b9", 1659268800)).toString())


    // console.log("getMyInvestment", hre.ethers.utils.formatEther((await this.IDO.getMyInvestment("0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281", 0)).toString()))
    // console.log("getLockInvestment", hre.ethers.utils.formatEther((await this.IDO.getLockInvestment("0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281")).toString()))
    // console.log("getRemainingInvestment", hre.ethers.utils.formatEther((await this.IDO.getRemainingInvestment("0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281")).toString()).toString())
    // console.log("getWeighting", (await this.IDO.getWeighting("0x44D7F2F272Ba8cDb84a748B89F326fA5cAcb8281", 1659268800)).toString())

    // console.log("getMyInvestment", hre.ethers.utils.formatEther((await this.IDO.getMyInvestment("0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF", 0)).toString()))
    // console.log("getLockInvestment", hre.ethers.utils.formatEther((await this.IDO.getLockInvestment("0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF")).toString()))
    // console.log("getRemainingInvestment", hre.ethers.utils.formatEther((await this.IDO.getRemainingInvestment("0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF")).toString()).toString())
    // console.log("getWeighting", (await this.IDO.getWeighting("0xF284c7E0e43b4e5b4A94120c811b1B281f0700FF", 1659268800)).toString())

    // await ethers.provider.send("evm_increaseTime", [237650])
    // await ethers.provider.send("evm_mine")
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // console.log("getMyInvestment1", hre.ethers.utils.formatEther((await this.IDO.getMyInvestment(this.deployer, 0)).toString()))
    // console.log("getMyInvestment2", hre.ethers.utils.formatEther((await this.IDO.getMyInvestment(this.deployer, 1)).toString()))

    // console.log("getWhichPeriod", (await this.IDO.getWhichPeriod()).toString())
    // console.log("getRemainingInvestment", hre.ethers.utils.formatEther((await this.IDO.getRemainingInvestment(this.deployer)).toString()))
    // console.log("User withdraw", hre.ethers.utils.formatEther((await this.IDO.users(this.deployer))['withdrawn'].toString()))
    // console.log("USDT", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.deployer)).toString()))
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // console.log("USDT", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.deployer)).toString()))
    // // await this.IDO.withdrawRemainingInvestment()
    // console.log("USDT", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.deployer)).toString()))
    // console.log("getLockInvestment", hre.ethers.utils.formatEther((await this.IDO.getLockInvestment(this.deployer)).toString()))
    // await ethers.provider.send("evm_increaseTime", [537650])
    // await ethers.provider.send("evm_mine")
    // console.log("getWhichPeriod", (await this.IDO.getWhichPeriod()).toString())
    // console.log("getLockInvestment", hre.ethers.utils.formatEther((await this.IDO.getLockInvestment(this.deployer)).toString()))
    // console.log("getRemainingInvestment", hre.ethers.utils.formatEther((await this.IDO.getRemainingInvestment(this.deployer)).toString()))
    // await this.IDO.withdrawRemainingInvestment()
    // console.log("USDT", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.deployer)).toString()))


    

    // const account = ["0x0bDF511aB157cf3a86d573Dc426D546BC8606F9E"
    // ]

    // const inviter = ["0x591b0af7a233c5c349aF9930532d25a72F27B59E"
    // ]

    // let temparr1 = [];
    // let temparr2 = [];
    // let js = 0
    // console.log("js",js)
    // for (var i = js; i < js+1; i++) {
    //     temparr1.push(inviter[i])
    //     temparr2.push(account[i])
    // }

    // this.IDO = await hre.ethers.getContractAt("IDO", "0xef3f738eC8a8BE64695954fc1f736eBF8A4920E3")
    // await this.IDO.setInvite(temparr1, temparr2)

    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
