import db from "../database/db.js"
import fs from "fs"
import Web3 from "web3"
import Sequelize from 'sequelize';
import e from "express";
const Op = db.Op
const INVITE = db.INVITE
const INVITETOTAL = db.INVITETOTAL

// export async function getInviteCount(account){
//   let sql = {
//     attributes: [
//       "account",
//       "invite"
//     ],
//     where: {
//       invite: account
//     }
//   }

//   let inviteCount = 0

//   const data = await INVITE.findAndCountAll(sql)
//   if (data) {
//     inviteCount = data.count
//     let inviterArr = []
//     for (var i = 0; i < data.rows.length; i++) {
//       inviterArr.push(data.rows[i].account)
//     }
//     const inviteSecond = await INVITE.count({
//       where: {
//         invite: {
//           [Op.in]: inviterArr
//         }
//       }
//     })
//     inviteCount += inviteSecond
//     return inviteCount
//   } else {
//     return inviteCount
//   }
// }

export async function invite(req, res) {
  const { account } = req.params;
  if (!account) {
    res.send({})
    return
  }

  const count = await INVITETOTAL.findOne({
    attributes: [
      "total"
    ],
    where: {
      account: account
    }
  })

  const rows = await INVITE.findAll({
    where : {
      invite: account
    }
  })


  const inviteRank = JSON.parse(JSON.stringify(rows))
  for (var i = 0; i < inviteRank.length; i++) {
    const count = await INVITE.count({
      where : {
        invite: inviteRank[i].account,
        ga: {
          [Op.not]: ""
        }
      }
    })
    inviteRank[i].count = count
  }

  res.send({
    count: !!count ? count : 0,
    rows: inviteRank
  })
  
}

// export async function inviteRank(req, res) {
//   let sql = {
//     attributes: [
//       [Sequelize.fn('COUNT', '*'), 'count'],
//       "invite"
//     ],
//     group: "invite",
//     where:{
//       ga: {
//         [Op.not]: ""
//       }
//     },
//     limit: 10,
//     order: [
//       [Sequelize.col('count'), 'DESC']
//     ],
//   }

//   const inviteRank = JSON.parse(JSON.stringify(await INVITE.findAll(sql)))
//   for (var i = 0; i < inviteRank.length; i++) {
//     const count = await getInviteCount(inviteRank[i].invite)
//     inviteRank[i].count = count
//   }
//   res.send(inviteRank)
// }

export async function inviteRank(req, res) {
  const data = await INVITETOTAL.findAll({
    limit: 10,
    order: [
            [Sequelize.col('total'), 'DESC']
          ],
  })
  res.send(data)
}

export async function createInvite(req, res) {
  let {
    account,
    invite
  } = req.body
  if (account == invite){
    res.send({
      msg: "Error"
    })
    return
  }
  if (!account || !invite){
      res.send({
        msg: "Error"
      })
      return
  }
  const ga = !!req.cookies._ga ? req.cookies._ga : ""
  const alreadyHave = await INVITE.count({
    where:{
      account: account,
      invite: invite
    }
  })

  if (alreadyHave > 0){
    res.send({
      msg: "Already invited"
    })
    return
  }

  const result = await INVITE.create({
    account: account,
    invite: invite,
    ga: ga,
    state: 1,
  })

  const alreadyHave2 = await INVITETOTAL.count({
    where: {
      account: invite
    }
  })

  if(ga != ""){
    if (alreadyHave2 == 0) {
      const result2 = await INVITETOTAL.create({
        account: invite,
        total: 1,
        state: 1,
      })
    } else {
      await INVITETOTAL.increment({
        total: 1
      }, {
        where: {
          account: invite
        }
      })
    }
      const inviterData = await INVITE.findAll({
        attributes: [
          "invite"
        ],
        where: {
          account: invite
        }
      })
      let inviterArr = []
      for (var i = 0; i < inviterData.length; i++) {
        inviterArr.push(inviterData[i].invite)
      }
      console.log("inviterArr", inviterArr)
      await INVITETOTAL.increment({
        total: 1
      }, {
        where: {
          account: {
            [Op.in]: inviterArr
          }
        }
      })
  }

  if (result) {
    res.send({
      msg: "Success"
    })
  } else {
    res.send({
      msg: "Fail"
    })
  }
}