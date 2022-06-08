import db from "../database/db.js"
import fs from "fs"
import Web3 from "web3"
import tokenConfig from "../../contract.config"
const Op = db.Op
const NFT = db.NFT

export async function getRiseFund(req, res) {
    // const RPC_URL = "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    const RPC_URL = "https://eth-mainnet.alchemyapi.io/v2/LbGQ_gbJWj0-yJwk7p514xKZkfdXiEcI"
    const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
    const { nft,juice,FundingCycles } = tokenConfig
    const juiceContract = new web3.eth.Contract(juice.abi, juice.address)
    const balance = await juiceContract.methods.balanceOf(568).call()
    const fundingCyclesContract = new web3.eth.Contract(FundingCycles.abi, FundingCycles.address)
    const distributed = await fundingCyclesContract.methods.currentOf(568).call()

    const nftContract = new web3.eth.Contract(nft.abi, nft.address)
    const mintedNumber = await nftContract.methods.totalMint().call()

    console.log(balance,distributed['tapped'])

    res.send({
      balance: balance * 1 + distributed['tapped'] * 1,
      mintedNumber: mintedNumber
    })
}

export async function getNFTById(req, res) {
  console.log("params",req.params)
  const { id } = req.params;
  if (!id) {
    res.send({})
    return
  }

  // res.send({
  //   "description": "LunchDAO was born for the auction of power lunch with Warren Buffett, which is bound to bring ordinary people like you and me to the table with the global capitalist class. It is a challenge launched by DAO members to traditional finance. We start with the power lunch and then gain more crypto assets to finally become the largest DAO in the world that communicate and cooperate with traditional financial forces. LunchDAO is looking forward to your participation.",
  //   "image": "https://lunchdao.com/nft_cover.mp4",
  //   "name": "Lunch Dao",
  //   "attributes": []
  // })

  const RPC_URL = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))
  const { nft } = tokenConfig
  const nftContract = new web3.eth.Contract(nft.abi, nft.address)
  const totalSupply = await nftContract.methods.totalSupply().call()

  console.log(totalSupply)

  if (id * 1  >= totalSupply) {
    res.send({
        "description": "LunchDAO was born for the auction of power lunch with Warren Buffett, which is bound to bring ordinary people like you and me to the table with the global capitalist class. It is a challenge launched by DAO members to traditional finance. We start with the power lunch and then gain more crypto assets to finally become the largest DAO in the world that communicate and cooperate with traditional financial forces. LunchDAO is looking forward to your participation.",
        "image": "https://lunchdao.com/nft_cover.mp4",
        "name": "LunchDao NFT",
        "attributes": []
    })
    return
  }

  let sql = {
    attributes: [
      "name",
      "image",
      "external_url",
      "description",
      "attribute"
    ],
    where: {
      id: id * 1
    }
  }

  await NFT.findOne(sql).then(async card => {
    if (card) {
      let data = JSON.parse(JSON.stringify(card))
      console.log("data", data)
      data.attributes = JSON.parse(data.attribute)
      delete data.attribute
      res.send(data)
    } else {
      res.send({})
    }
  })
}

// let index = 1

// const data = async () => {
//   if (index == 501) return
//   await NFT.update({
//     image: `https://www.lunchdao.com/nft/${index}.png`
//   }, {
//     where: {
//       id: index
//     }
//   })
//   console.log(index)
//   index++
//   data()
// }

// export async function autoInsertData(ctx) {
//   data()
// }


// let index = 1

// const data = async () => {
//   if(index == 501) return
//   let insertData = {
//     name: `LunchDao NFT #${index}`,
//     description: "LunchDAO was born for the auction of power lunch with Warren Buffett, which is bound to bring ordinary people like you and me to the table with the global capitalist class. It is a challenge launched by DAO members to traditional finance. We start with the power lunch and then gain more crypto assets to finally become the largest DAO in the world that communicate and cooperate with traditional financial forces. LunchDAO is looking forward to your participation.",
//   };
//   await NFT.create(insertData)
//   index++
//   data()
// }

// export async function autoInsertData(ctx) {
//   data()
// }

let index = 1

const data2 = async () => {
  if (index == 501) return
  const data = fs.readFileSync(`/Users/aemoe/Desktop/LunchDaoNFT/${index}.json`, 'utf8')
  const json = JSON.parse(data)
  // console.log(json["attributes"])
  await NFT.update({
    attribute: JSON.stringify(json)
  }, {
    where: {
      id: index
    }
  })
  index++
  console.log(index)
  data2()
}

export async function autoInsertDescription(ctx) {
  // var readDir = fs.readdirSync("../../../json/")
  // console.log("readDir",readDir)
  data2()
}