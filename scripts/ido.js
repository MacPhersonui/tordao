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
    // console.log("Before", (await this.USDT.balanceOf(this.deployer)).toString())
    // await this.USDT.addMinter(this.deployer)
    // await this.USDT.mint(this.deployer, hre.ethers.utils.parseEther("1000","ether"))
    // console.log("After", (await this.USDT.balanceOf(this.deployer)).toString())
    // this.IDO = await IDO.new(this.USDT.address, [1618750400, 1659009600, 1659182400, 1659268800, 1659441600, 1659528000])
    // console.log("IDO", this.IDO.address)
    // await this.USDT.approve(this.IDO.address, hre.ethers.utils.parseEther("999999999999", "ether"))
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // console.log("IDO address USDT", hre.ethers.utils.formatEther((await this.USDT.balanceOf(this.IDO.address)).toString()))
    // console.log("getLockInvestment", (await this.IDO.getLockInvestment(this.deployer)).toString())
    // console.log("getWeighting", (await this.IDO.getWeighting(this.deployer)).toString())
    // console.log("getMyInvestment", (await this.IDO.getMyInvestment(this.deployer, 0)).toString())
    // console.log("getWhichPeriod", (await this.IDO.getWhichPeriod()).toString())
    // console.log("getLockInvestment", hre.ethers.utils.formatEther((await this.IDO.getLockInvestment(this.deployer)).toString()))
    // console.log("getRemainingInvestment", hre.ethers.utils.formatEther((await this.IDO.getRemainingInvestment(this.deployer)).toString()))
    // console.log("IDO", (await this.USDT.balanceOf(this.deployer)).toString())
    // // await this.IDO.withdrawRemainingInvestment()
    // console.log("Withdraw", (await this.USDT.balanceOf(this.deployer)).toString())
    // console.log("User withdraw", hre.ethers.utils.formatEther((await this.IDO.users(this.deployer))['withdrawn'].toString()))
    // await this.IDO.setInvite([
    //     "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    //     "0x6741d7132EBb4EB8aD91C71A4Ec25FF02293d5c0"
    // ], [
    //     "0x6741d7132EBb4EB8aD91C71A4Ec25FF02293d5c0",
    //     "0x995206FF8eC549820e93B230f7bcb562B98e0F15"
    // ])
    // await this.IDO.investment("0xaf4944eBFEc95497f1A1D3B1a955ABbe828f842b", hre.ethers.utils.parseEther("100", "ether"))
    // await this.IDO.withdrawCoin()
    // console.log("Withdraw", (await this.USDT.balanceOf(this.deployer)).toString())
    // await this.IDO.withdrawRemainingInvestment()
    // console.log("Withdraw", (await this.USDT.balanceOf(this.deployer)).toString())
    // console.log("User withdraw", hre.ethers.utils.formatEther((await this.IDO.users(this.deployer))['withdrawn'].toString()))
    // await this.IDO.withdrawRemainingInvestment()
    // this.IDO = await hre.ethers.getContractAt("IDO", "0x1a313D0048edbe873d6d8AD3a99DECE755c29C0e")
    // await ethers.provider.send("evm_increaseTime", [237650])
    // await ethers.provider.send("evm_mine")
    // console.log("getLockInvestment", hre.ethers.utils.formatEther((await this.IDO.getLockInvestment(this.deployer)).toString()))
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


    

    const account = ["0x0bDF511aB157cf3a86d573Dc426D546BC8606F9E"
    ]

    const inviter = ["0x591b0af7a233c5c349aF9930532d25a72F27B59E"
    ]

    let temparr1 = [];
    let temparr2 = [];
    let js = 0
    console.log("js",js)
    for (var i = js; i < js+1; i++) {
        temparr1.push(inviter[i])
        temparr2.push(account[i])
    }

    this.IDO = await hre.ethers.getContractAt("IDO", "0xef3f738eC8a8BE64695954fc1f736eBF8A4920E3")
    await this.IDO.setInvite(temparr1, temparr2)

  


    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
