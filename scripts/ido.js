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


    

    const account = ["0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x634a97f0b4a3fac3eed4a7338487a8d7723a2c14",
        "0xb97fc7f33e3bdd49d8e1fac74d39413d16e5599f",
        "0x138c805f860796faa261ce21d175912f1097b692",
        "0x9297f3b91ec8f24428f749df4ce9f0ca77f25b92",
        "0x516f7fb7d84b5f51aadc0aacc34d3b0ff7d6c759",
        "0x18b16241077d7dcbc22fa744b5bacf9b22a7487d",
        "0xf32ef2c96e00533cbec71270281ff6f984d9f293",
        "0xdd39727520365adb44dddf37b151e0e885e58801",
        "0x56bd12efead7a3cfc202884e83b058c2b40343da",
        "0x7bbb0896032f1f1e19c4509ad40fe612f959f195",
        "0xA341e9Cc8F5F5cFCAcE90a30d5199a5AFFA90Cc9",
        "0x75e74da5e70e844db76d3b65edac6eed82999684",
        "0x002792c4700d7c276ec3f023a77753e2a6b10d71",
        "0x68c7ba357ffcfa94a2238c06eaa5bba5f6e43a57",
        "0x6d31011291606a3788799c31325997b003f8f10b",
        "0xb656865ad856cae1658e9e2d623ab69be764fc26",
        "0x93986e5569b46b341483b9c8576c36d9db175bf6",
        "0xffdfc6fb22f7b43817b9ccb66e731b820791f641",
        "0xfd13371f2a3e06a584beb6c47010355f39c8a6e9",
        "0x6b4d7134811ee820fc0357520ccab2104adccd82",
        "0x28c00f52eb42211675190d9058ed3e2986da36e3",
        "0xb027847755b55a66e923488f5471e71ff698954b",
        "0xcd0fb0d48205fab0572e7e5df4f5567de8bd6c67",
        "0x40ad3ea77c329efbe669363aa8d67872efc86618",
        "0x54d2ff50c44c10fe6d029a76ff4c93e12cd5dd0e",
        "0xe59da7b16f314b3a9917c5d13424ed2e449ddfbf",
        "0xc518de7a1f1935bc50c430b09c65a06dc3d76093",
        "0x2be42317582f8498c99ec7149a5b28b3ffc748a5",
        "0xe2c047976d96a1e742250ce667a3b9f2b070e840",
        "0x23e9fed0206835bd0b0924808eecd1e6669b9dfd",
        "0x24cc6400efc11b1ec553ca47a25d633b2b2aae0e",
        "0x0f4ded75e7a66f1b672aaec74334f41446437650",
        "0xfda4e6efdad5f90f74a0bbe38fd572af4c4ca09d",
        "0x9ba5556a66c0afbc0dd4c4704a2b18e00d97ca61",
        "0xa6ece0ba93f016a098dd36ed612d6c17b365d127",
        "0x29c288e8df9dc5850f0bde075b38ad62988cf271",
        "0xe9bd7fd421ca01dacdf4ab24c2c71f045bc4ad43",
        "0x05d6cb2b5c724810b180e38b4f11b4d133c8d61d",
        "0x1cff338931ac88646f6a0ab175f61878823c6668",
        "0x2f20beda67f2fa925c7d8a143ffb80b869a3240e",
        "0x7485ee138d79e243dcdb39a29580c8c633ecb060",
        "0xef9bd6d92850f25e1468845503590f9dec6befc5",
        "0x2636a81505f74c03792febb31f0b404a92c49fab",
        "0x766b66eb575699bfc89b9532f864e2b49a5f2b6f",
        "0xe0be7dbef7afb4a377746506829c01a77976a7ce",
        "0xf0662b8e8ce732be9bb81c8aae2f851109029156",
        "0x46799a5a293e11f07d341dcb31b678902d1b4d29",
        "0x8e00ebf4970c4e8fadf14fccf66974fdabde2e8f",
        "0x8323a456495ad55877ec731695793faec373c5be",
        "0x2df75e7d311307490f97cf22d10472669d5e7b71",
        "0x749425973f64c6554175f502a167808f9f4593fd",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0x227fb3d14238b1477d52a8858949d3aa47f02c3c",
        "0xa523693f66b31c88d1cfe7cda3dbfe0ad65e6380",
        "0x77bd144a9341a7d7b65b1a82ef304792593c64f1",
        "0x6c9f05777c7082766c5d6cd8fe369a1fcacebfea",
        "0x6e186aec57f3e1525fa3008ea5e2b12c04da6e55",
        "0x8ce78f873c19abf5fda934c0e2cdead4e3724535",
        "0x0c809ebf637d2e7c410aa45a075b3f54dd5a93aa",
        "0xe1d2a944919cd4cf8e55869dc527a0552e781ba2",
        "0x8d9eb99ac8d911d5634b7c502bd477a0604db832",
        "0x63a5867be05ee1c50904870b505e9d9e711e4244",
        "0xf007286bdbdff960a8d36df0029635dc26acc56a",
        "0x94525612957c03abf3524084ac109b58cecd047a",
        "0xdf746d3c9a755396268db52b11eb558cf5cddfc4",
        "0x3e8c06ba807ba11dc9682e7de54f102e9de2ca07",
        "0x29395e96bdef7c6ddc168d909c64f5c57a533147",
        "0x785933b5f3373563ba42c68041c79e108c0508bc",
        "0x10666fc074adedc7f303ccd40ec8497b6a3e4fff",
        "0x5f538463f32fe9903882fd1f943ccbb123cbf227",
        "0x6c2cc3d0a746e1067cc13183c560b29ec6039ff8",
        "0xcd4eb42ef6728c511336575ff0586f262fbd8b93",
        "0x22ad3982012cbce66ce1fea57046069b237ec615",
        "0x0be00b140fffdb1233ff9bef69aae14dd7e80dd6",
        "0x9abbc8ac8bd31e4d9b99063ceb07b9a9d3b44148",
        "0xb273f5ba458120d6393f08a08ee4e781efb228a8",
        "0x91f6756ff1875be321e8132463ea835c852dc831",
        "0xda209afbe1a900fd3481a0782301e3478bb4d4a4",
        "0xde86117f2b87809a671f11927e09df4e9fdd7524",
        "0x8c7c22ad2473ca5793e2b1be1f1960d0840adb0b",
        "0x3b19b8c990f32d5ea59a282bd16f20cdf84bfb94",
        "0x9a7a73cce2b1069124ef650a925f492cfc4121d3",
        "0xcc9c09df6e0bebca944cbdec2e6a842ffc488978",
        "0x42221268ba9e130ea0e119bf4638151fa7dd9cda",
        "0xb0dc99c8a01c72927079510d252582649904f462",
        "0xe3da5994095d1c7b3a15a770f1a62005804e49cf",
        "0x220c885d57996a9ff92bba099066391cc0da0b56",
        "0x017e5d75bd0290336cb791b375197bc528632f7d",
        "0xbd314c9270a0eced2f285ac098a044b05afcc5ad",
        "0xec5d94a4973eb3280cbb83e59e840873b1d2e83b",
        "0x3171350aac0cb7af1088eb52c2ac04641b56b408",
        "0x21119afb6cffef31701842a70acff10c1da356c7",
        "0x04ded7970b8197ec5facd596f310e2492adce592",
        "0x65257d0a62c37252e88d0352e39c5c861ce5ebee",
        "0x97b64e1d6c8635852ea4750962be1a185d505739",
        "0x0795a31bf050ec7701a79c169c6d869912e2eec8",
        "0xb51ec2a630ffc432dd4c770daab8f8de2514ac3c",
        "0x0739510906a1e13f1980ae873880ff9f99baac60",
        "0x9d5b8f7d3d53ad7b0b83329242536cfebaabb8e1",
        "0xe7ac5152a2dc6e1fb4db6c4fadc4a491a276e8d3",
        "0x3bc5e7ab9f19c0ee89a92ec8d05a04cf93bbabd2",
        "0x64a23a64141b5c86991335d272be91ae66ef8e5f"
    ]

    const inviter = ["0xcd5145E7F230037504f54f335C73BEF1B015ca68",
        "0xcd5145E7F230037504f54f335C73BEF1B015ca68",
        "0xcd5145E7F230037504f54f335C73BEF1B015ca68",
        "0xcd5145E7F230037504f54f335C73BEF1B015ca68",
        "0xcd5145E7F230037504f54f335C73BEF1B015ca68",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0x5a9F82E03695085c6BB922FD232938e2b072A5cD",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xA0F6c22EBd04e2Be0c142f7b867F6fc2779CE824",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xD26b7A8f44C21fbE769352191342A1e423626537",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0xb2258abef15a39504eac92ce71a87d94507d7ca0",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0x913bc16e5550b02e1173ad84f7dc6c8b22a1f513",
        "0xe17f8Fe3FeA8d3B1661352e1F55Fb44163139475",
        "0x749425973f64c6554175f502a167808f9f4593fd",
        "0x749425973f64c6554175f502a167808f9f4593fd",
        "0x749425973f64c6554175f502a167808f9f4593fd",
        "0x749425973f64c6554175f502a167808f9f4593fd",
        "0x749425973f64c6554175f502a167808f9f4593fd",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0xdc34d857ed638665e6372a28db87232a9c332737",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x0fdee44374ac6f5adcf8bd478cc98e0195b2abaf",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x343110e16cec170f501ab75d30c27beecf1a2579",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0x70b95a4250a02321858a696accd4dbdc6efd7ec1",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163",
        "0xd607884e31375137233b9d01ae7477dcd490a163"
    ]


    let temparr1 = [];
    let temparr2 = [];
    let js = 0
    console.log("js",js)
    for (var i = js; i < js+111; i++) {
        temparr1.push(inviter[i])
        temparr2.push(account[i])
    }

    this.IDO = await hre.ethers.getContractAt("IDO", "0x88BBEa47D49936cF703016316fE388c4f1C0C73a")
    await this.IDO.setInvite(temparr1, temparr2)

    console.log("End")
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
