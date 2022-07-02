import db from "../database/db.js"
import fs from "fs"
import Web3 from "web3"
import Sequelize from 'sequelize';
const Op = db.Op
const INVITE = db.INVITE


export async function invite(req, res) {
  const { account } = req.params;
  if (!account) {
    res.send({})
    return
  }

  let sql = {
    attributes: [
      "account",
      "invite"
    ],
    where: {
      invite: account
    }
  }

  await INVITE.findAndCountAll(sql).then(async data => {
    if (data) {
      res.send(data)
    } else {
      res.send({})
    }
  })
}

export async function inviteRank(req, res) {
  let sql = {
    attributes: [
      [Sequelize.fn('COUNT', '*'), 'count'],
      "invite"
    ],
    group: "invite",
    where:{
      ga: {
        [Op.not]: ""
      }
    },
    order: [
      [Sequelize.col('count'), 'DESC']
    ],
  }

  await INVITE.findAll(sql).then(async data => {
    if (data) {
      res.send(data)
    } else {
      res.send([])
    }
  })
}

export async function createInvite(req, res) {
  console.log(req.body)
  let {
    account,
    invite
  } = req.body
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