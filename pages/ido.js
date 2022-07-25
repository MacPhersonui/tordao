import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.scss"
import classNames from "classnames/bind"
import Timer from "react-compound-timer"
import Web3 from "web3"
import Wallet from "../components/wallet"
import useWallet from "use-wallet"
import { getRiseFund } from "../api/api"
import tokenConfig from "../contract.config"
import { confirmAlert } from "react-confirm-alert"
import HeaderFooter from "../layout/HeaderFooter"
import moment from 'moment'
import { utils } from "ethers"
import {
    withRouter
} from "next/router"
import {
    ToastContainer,
    toast
} from 'react-toastify'
import Clipboard from 'react-clipboard.js'
import BigNumber from "bignumber.js"
import {
    useTranslation,
    Trans
} from 'next-i18next'
import {
    serverSideTranslations
} from 'next-i18next/serverSideTranslations'
import 'react-toastify/dist/ReactToastify.css'

const cx = classNames.bind(styles)

const toastConfig = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: null,
    pauseOnHover: false,
}

const Home = ({
        router
    }) => {

    const wallet = useWallet()
    const {
        account,
        ethereum
    } = wallet

    const {
        t
    } = useTranslation('common')

    const web3 = new Web3(ethereum)
    const [balance, setBalance] = useState(0)
    const [mintedNumber, setMintedNumber] = useState(0)
    const [period, setPeriod] = useState(3)
    const [starttime, setStarttime] = useState({
        starttime1: 0,
        starttime2: 0,
        starttime3: 0,
        starttime4: 0,
        starttime5: 0,
        starttime6: 0
    })
    const [totalInvestment, setTotalInvestment] = useState({
        totalInvestment1: 0,
        totalInvestment2: 0,
        totalInvestment3: 0
    })
    const [IDO, setIDO] = useState({
        IDO1: 0,
        IDO2: 0,
        IDO3: 0
    })
    const [maxDeposit, setMaxDeposit] = useState(0)
    const [myInvestment, setMyInvestment] = useState([0, 0, 0])
    const [obtainable, setObtainable] = useState(0)
    const [state, setState] = useState(["Unstart", "Unstart", "Unstart"])
    const [weighting, setWeighting] = useState(0)
    const [investmentValue, setInvestmentValue] = useState(0)
    const [remainingInvestment, setRemainingInvestment] = useState(0)
    const [usdtBalance, setUsdtBalance] = useState(0)
    const [progress, setProgress] = useState(0)
    const [showCountdown, setShowCountdown] = useState(false)
    const torPrice = [0.8, 1, 1.4, 0]

    const { ido,usdt } = tokenConfig
    const idoContract = new web3.eth.Contract(ido.abi, ido.address)
    const usdtContract = new web3.eth.Contract(usdt.abi, usdt.address)
    console.log(idoContract)

    useEffect(async () => {
        checkWallet()
        const timer = setInterval(async () => {
            if (account) {
                const starttime1 = await idoContract.methods.starttime(0).call()
                const starttime2 = await idoContract.methods.starttime(1).call()
                const starttime3 = await idoContract.methods.starttime(2).call()
                const starttime4 = await idoContract.methods.starttime(3).call()
                const starttime5 = await idoContract.methods.starttime(4).call()
                const starttime6 = await idoContract.methods.starttime(5).call()
                setStarttime({
                    starttime1: starttime1,
                    starttime2: starttime2,
                    starttime3: starttime3,
                    starttime4: starttime4,
                    starttime5: starttime5,
                    starttime6: starttime6
                })
                console.log(starttime1, starttime2, starttime3, starttime4)
                const totalInvestment1 = await idoContract.methods.totalInvestment(0).call()
                const totalInvestment2 = await idoContract.methods.totalInvestment(1).call()
                const totalInvestment3 = await idoContract.methods.totalInvestment(2).call()
                setTotalInvestment({
                    totalInvestment1: totalInvestment1,
                    totalInvestment2: totalInvestment2,
                    totalInvestment3: totalInvestment3
                })
                console.log("totalInvestment", totalInvestment1, totalInvestment2, totalInvestment3)
                const IDO1 = await idoContract.methods.IDO(0).call()
                const IDO2 = await idoContract.methods.IDO(1).call()
                const IDO3 = await idoContract.methods.IDO(2).call()
                setIDO({
                    IDO1: IDO1,
                    IDO2: IDO2,
                    IDO3: IDO3
                })
                console.log(IDO1, IDO2, IDO3)
                const period = await idoContract.methods.getWhichPeriod().call()
                setPeriod(period)
                const maxDeposit = await idoContract.methods.maxDeposit().call()
                console.log("maxDeposit", maxDeposit)
                const weighting = await idoContract.methods.getWeighting(account).call()
                setWeighting(weighting)
                console.log("weighting", weighting)
                const myInvestment1 = await idoContract.methods.getMyInvestment(account, 0).call()
                const myInvestment2 = await idoContract.methods.getMyInvestment(account, 1).call()
                const myInvestment3 = await idoContract.methods.getMyInvestment(account, 2).call()
                setMyInvestment([myInvestment1, myInvestment2, myInvestment3])
                console.log("myInvestment", myInvestment)
                setMaxDeposit(utils.formatEther(maxDeposit))
                const lockInvestment = await idoContract.methods.getLockInvestment(account).call()
                console.log("lockInvestment", lockInvestment)
                const remainingInvestment = await idoContract.methods.getRemainingInvestment(account).call()
                setRemainingInvestment(utils.formatEther(remainingInvestment))
                console.log("remainingInvestment", utils.formatEther(remainingInvestment))
                const usdtBalance = await usdtContract.methods.balanceOf(account).call()
                setUsdtBalance(utils.formatEther(usdtBalance))
            }
        }, 3000)
        return () => {
            clearInterval(timer)
        }

    }, [account])

    const remaining = () => {
        if(period == 0){
            console.log("remaining1", starttime.starttime2 * 1000 - new Date().getTime())
            return starttime.starttime2 * 1000 - new Date().getTime()
        }
        if (period == 1) {
            console.log("remaining2", starttime.starttime4 * 1000 - new Date().getTime())
            return starttime.starttime4 * 1000 - new Date().getTime()
        }
        if (period == 2) {
            console.log("remaining3", starttime.starttime6 * 1000 - new Date().getTime())
            return starttime.starttime6 * 1000 - new Date().getTime()
        }
        return 0
    }

    const investment = () => {
        let investments = 0
        if(period == 0){
            investments = myInvestment[0]
        }
        if (period == 1) {
            investments = myInvestment[0] + myInvestment[1]
        }
        if (period == 2) {
            investments = myInvestment[0] + myInvestment[1] + myInvestment[2]
        }
        return utils.formatEther(investments + "")
    }

    const tor = () => {
        let tor = 0
        if (period == 0){
            if (IDO.IDO1 * 1 >= totalInvestment.totalInvestment1 * 1){
                tor += myInvestment[0] * 1 / torPrice[0] * 1
            } else {
                tor += myInvestment[0]* 1 / torPrice[0] * (IDO.IDO1 * 1 / totalInvestment.totalInvestment1 * 1)
            }
        }
        if (period == 1) {
            if (IDO.IDO2 * 1 >= totalInvestment.totalInvestment2 * 1) {
                tor += myInvestment[1] / torPrice[1]
            } else {
                tor += myInvestment[1] / torPrice[1] * (IDO.IDO2 / totalInvestment.totalInvestment2)
            }
        }
        if (period == 2) {
            if (IDO.IDO3 * 1 >= totalInvestment.totalInvestment3 * 1) {
                tor += myInvestment[2] / torPrice[2]
            } else {
                tor += myInvestment[2] / torPrice[2] * (IDO.IDO3 / totalInvestment.totalInvestment3)
            }
        }
        return utils.formatEther(new BigNumber(tor).toFixed())
    }

    const getProgress = () => {
        console.log("getProgress", period)
        if (period == 0){
            console.log("getProgress1", totalInvestment.totalInvestment1, IDO.IDO1, IDO.IDO1 * 1 >= totalInvestment.totalInvestment1 * 1)
            if (IDO.IDO1 * 1 >= totalInvestment.totalInvestment1 * 1) {
                return (totalInvestment.totalInvestment1 / IDO.IDO1 * 100).toFixed(2)
            }else{
                return 100
            }
        }
        if (period == 1) {
            if (IDO.IDO2 * 1 >= totalInvestment.totalInvestment2 * 1) {
                return (totalInvestment.totalInvestment2 / IDO.IDO2 * 100).toFixed(2)
            } else {
                return 100
            }
        }
        if (period == 2) {
            if (IDO.IDO3 * 1 >= totalInvestment.totalInvestment3 * 1) {
                return (totalInvestment.totalInvestment3 / IDO.IDO3 * 100).toFixed(2)
            } else {
                return 100
            }
        }
        return 0
    }

    const checkWallet = () => {
        if (!account) {
            console.log(account)
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className="confirmAlert">
                            <h1>Please connect wallet</h1>
                            <p className="center">
                                <button
                                    onClick={() => {
                                        wallet.connect()
                                        onClose()
                                    }}
                                >
                                    OK
                                </button>
                                <button onClick={onClose}>Cancel</button>
                            </p>
                        </div>
                    )
                },
            })
            return true
        }
        return false
    }

    const investmentTor = async () => {
        if (checkWallet()) return
        let inviter = router.query.address
        if(!inviter) {
            inviter = "0x343e53D0d06FBF692336CcF871d4c89aD8B706Be"
        }
        const usdtAllowance = await usdtContract.methods.allowance(account, ido.address).call()
        console.log("usdtAllowance", usdtAllowance)
        if (usdtAllowance == 0){
            await usdtContract.methods.approve(ido.address, "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({
                from: account
            })
        }
        await idoContract.methods.investment(inviter, utils.parseEther(investmentValue+"") ).send({
            from: account
        })
        setInvestmentValue(0)
        toast.dark('🚀 Investment success!', toastConfig)
    }

    const withdrawUSDT = async () => {
        if (checkWallet()) return
        await idoContract.methods.withdrawRemainingInvestment().send({
            from: account
        })
        toast.dark('🚀 Withdraw success!', toastConfig)
    }

    const copyLink = () => {
        if (checkWallet()) return
        toast.dark('🚀 Copy success!', toastConfig)
    }

    const setMax = () => {
        let max = maxDeposit * (period + 1)
        console.log("max1", max, myInvestment[0])
        if(period == 3) {
            setInvestmentValue(0)
            return
        }
        console.log(maxDeposit * 1 - utils.formatEther(myInvestment[period]) * 1)
        max = maxDeposit * 1 - utils.formatEther(myInvestment[period]) * 1
        if (usdtBalance < max){
            setInvestmentValue(usdtBalance)
        }else{
            setInvestmentValue(max)
        }
        
    }

    return (
        <HeaderFooter activeIndex={1}>
            <ToastContainer />
            <main>
                {
                    showCountdown ?
                        <div className={styles.countdown}>
                        <Timer
                            ormatValue={(value) => `${(value < 10 ? `0${value}` : value)} `}
                            initialTime={
                            new Date('Mon, 25 Jul 2022 12:00:00 GMT').getTime() -
                                new Date().getTime()
                            }
                            lastUnit="h"
                            direction="backward"
                        >
                            <ul>
                            <h1>Coming soon</h1>
                            <li>
                                <h1><Timer.Hours /></h1>
                                <p>hours</p>
                            </li>
                            <li></li>
                            <li>
                                <h1><Timer.Minutes /></h1>
                                <p>minutes</p>
                            </li>
                            <li></li>
                            <li>
                                <h1><Timer.Seconds /></h1>
                                <p>seconds</p>
                            </li>
                            </ul>
                        </Timer>
                    </div> : ""
                }
                
                <div className={styles.container}>
                    <div className={styles.mask}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAACXBIWXMAABYlAAAWJQFJUiTwAAADfElEQVR4nO3d61EbMRSG4e+kAdIBdBA6gA5CB0k6oARKoASnA9MBqSCkA0qACpTZQR4cB/BtJR3pvM+MZzLDH2XflXzblSXpRlLiEevxSQiJ8EERPijCB0X4oAgfFOGDInxQhA+K8EERPijCB0X4oAgfFOGDInxQhA+K8EERPijCB0X4oAgfFOGDMkln+bHuMv/7Mv/tNPqBGo2llLb+l8xsin8u6SqfDJwIndsp/CYzm06C7/lE4CTo0EHh15nZFP9a0kXsQ9mXo8Ov5FVgOgG+hTqCnZot/IqZXeYbMVkBHJs9/IqZTa8BbiWdjHO4xlEsvF7if5a0kPQ13qH1regHOCmlp5TS9OLvh6TnAY7XMIrO+HX5xd+St38+VAuv16X/XtIX34dlfFU/q5+W/vzJ35+gx9uN6l/SrMW/83tYxld1qd9kZgs+8Gmj6deyKaXpvf7PlmOIqvn38cRvw8WFGMSvz80VOMSvy9WlV8Svx901d8Svw+XFlsQvz+1VtsQvy/Xl1cQvx/119cQvo4sbKog/v27upCH+vLq6hYr48+nu3jniz6PLmyaJf7xu75Yl/nG6vk2a+Ifr/v544h9miI0RiL+/YXbEIP5+htoKhfi7G24PHOLvZsjNj4i/3bC7XhH/Y0Nvd0b89w2/zx3x3xZig0Pi/y/MzpbE/1eoLU2J/yrcXrbEfxFyE2PiB969Onr80NuWR44ffr/6qPHDh1fQ+ITPosUn/JpI8Qm/IUp8wr8hQnzCv2P0+IT/wMjxCb/FqPEJv4MR4xN+R6PFJ/weRopP+D2NEp/wBxghPuEP1Ht8wh+h5/iEP1Kv8Qk/gx7jE34mvcUn/Ix6ik/4mfUSn/AF9BCf8IV4j0/4gjzHb/pLk1GY2dLbb+gTvgKPv6LNUl+Bx1/RZsZXlGf+g6TT1mNhxleUZ/6VpOfWYyF8ZSmlacZftx4HS30jrV/pE76R/Hz/KOmkxQhY6hvJz/fNlnxmfGNmNr2/v6g9CmZ8ezctRkD4xlJK04y/qz0KlnoHzOxc0u+aI2HGO5Df2/+qORLC+3FbcyQs9Y6Y2WOtz/GZ8b4sa42G8L4sao2Gpd6ZWss9M96f+xojIrw/VZ7nCe/PQ40R8RzvkJk9lf66lhnvU/FZT3ifir/AI3xQhPeJGY8yCB8U4YPifbxDZnYmabrFugxJfwFEfusKcp/RWAAAAABJRU5ErkJggg==" className={styles.one}></img>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAACXBIWXMAABYlAAAWJQFJUiTwAAADLElEQVR4nO2d4W3bMBCF74r+bzeoN0g2qDeoN2hGyAgewRvEGzQbNCN4g2SEbuBC6KmxHVu2JPJ4j3wf4H8GSPjDO54oytL9fi8kDaq6FJHfOX/OT3SFBYWBQWFgUBgYFAYGhaVlkXsACksLhZFjKCwty9wDUBgY3JpKiKr+EZEvOcdgwhKhql9zyxIKS8q9xyAUlo7sLb1QWFKYMDBchLFLTISquvyQTFgCVNUlXUJhyci+w9FDYWlwE8Y1LAEeOxw9TNhMbP1ykSUUloSV52AUNh9XYVzDZqCq3XbUq+eYTNg8XNMlFDabB+8BWRInUqIcChM2C/d0CRM2HVV9E5Fv3uMyYRNQ1VUJWUJhkylSDoUlcTylmo0eJmw865KDM2EjsKNsb56bvacwYeN4LClLmLDbiZAuYcJGUTxdwoTdRpR0CRN2M5sIsoQJu07p665TmLDrbCNNhsIGsD3D76HmxJJ4Hms0dqU2eS/BhF1mHU2WMGHn8fhXtslzo7BjopbCHpbEj2yiyhIm7BjrCn9FmtMpFGbYGfmXKDsal2BJfF+3ttFlCYX9p1u37oLMZZDmhalqd9vkZ4Cp3ETTa5iqdqefngJM5WaaFYbSZJzSZElElSUtJszub+0QZUlrCbP2/RlVlrQkzGS9oLTvl2hCmJVBeFkdnwPMISvIDcY5qk5YbbKkZmF2UVyVLKlVmG03PdUmS2pbw6wT3CDtDY6lGmHWCT7X0AkOUUVJtDvFu9plCbqwrgSq6tZu61e3Xp0DtiTaUbRt5AMzOYBLmKVqY+cGm5IlaAmztSr0MbTcQAizDrArf6EeTChB6JJ40FS8UtY/QibMLoAfozxXHIlQwijqOiGE2Rq1tn/4pKgBigqzrq/bVf9Rch5IuAuzND3Yp9n2fCouwkxSn6bq9/tykk2Y3e1d2YeSEpFMmAlaHnzYPGRgkjDbeF3YW+nueVHrhw68Smlx8CLO/juuL4YhH+mE8RFMIJp/PgwNCgODwsCgMDAoDAwKA4PCwKAwMCgMDAoDg8LAoDAwKAwMCgODwsCgMDAoDAwKA4PCwKAwMCgMDAoDg8KQEJG/wvx6/Yb56EoAAAAASUVORK5CYII=" className={styles.two}></img>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC/UlEQVR4nO2d4VEbMRCFlwwFpATSQUqghKQDlwAdpATowNeB6QB3gDvAHUQVbEZkmSGxzfnuZO0+6X0zGn6efN+81Z6sM1ciokJg+EJVWFAYGBQGBoWBQWFgUBgYFAYGhYFBYWBQGBgUBgaFgUFhYFAYGBQGBoWBQWFgUBgYFAYGhYFBYWBQGBgUBsZ17zcgAElEXmwaz/b31cYBFFaXrcnJ41VVn6dencIuR7LEvA1VfSlxJQory05ENnmUEvQ/FLacLGltko6uOyWhsHnsTdK6hqSPUNg0nkzSxmsCFDZOsnXpV+00HYPCTpNFPeShqr+jTIrCDgkp6h0K+5dBRO4iinqHwv6SdyBWEdaoMXrf/M3t+U9VvUWQJZ0LexSR754t+hx6LIl7K3+TN14j0FvCBksVpCzpKGHJUgVV/o7Rg7C8OfsDpakYo/WSmEsgTAd4Di0n7F5VHwLMoygtCku2W7EOMJfitCYsWQm8yLe9EWhpDWteljQkbGfPV03LkkZK4s6SFXaHvSToCetKVgb5F0mTlcFmnrHOATVhqbUH4nNBFNZFN3gKRGF3vcoSQGH3re5gnAtS0zGo6irAPFxBEdZd+34KBGFdtu+nQFjDII6f1SK6sKGFr/VLErkk7q0Udr9ufSRywlaUdUhUYY/IR9EuScSSyFL4CRETFvrtEW+iJWybX0wIMI+wRBP2jc9cnxOpJA6UNU6UhOXtpxuuXeNESVjI94kjEiFhTNcEIiSM6ZqAd8KYrol4J2xDWdPwThifuybimbAnypqOp7CuTz/Nxask7lX1xuG68HgljOmaiVfC2GzMxCNhO8qaj4cwlsMFeJRElsMF1E4Yy+FCagvjodCFUBgYNdewpKpfm7lzTtRMGA+GFoDCwKAwMKqtYap61dKN86JWwrbxPjomtYR1+zMNpaEwMGoJ43ZUIao0HWw4ylEjYanWh+mBGsK4fhWk9/9uBEcNYdzhKAgTBkYNYWzpC0JhYLAkgkFhYFAYGBQGBoUhISJ/APL2Qozqu+G0AAAAAElFTkSuQmCC" className={styles.three}></img>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAACXBIWXMAABYlAAAWJQFJUiTwAAADTUlEQVR4nO3d0XETMRRG4SsaCB2YDhIqwFQQOsAlUELogA5ICdCB6cB0YHcAFVxGgz0ESGKvvZKu9J/zksds9HnldazVJjO7s7Ldu/u28O+giWV4Lzxob919DUysXqgPgGrAiwa8aDXgl+qDHDHOeNE440WrAf9KfZAjVgN+kVICP1i13uNvuhkRkWrBv1Mf6GjVgucCL1i14PP7PNN9oGp+jl+FHw2hanw7d2jn7lzdB6nmGZ+ney7yglT7X7Yfwo6EWDWn+kOv3X2jPvCta/ElTemlXnRCLc54YzlW+1p9LctZ37hW8G9SSnyub1irqT73M39l6+4/QoyEWC1X4FzlNfeSox6g1kuvbpny29Ryqj+Up/wln+3rFgE+t8uLNXi/r1eUVbYLM1unlF4GOBaJIi2vvga/XtHW1V9zpV+niDdU5Ct98AsX9U6a9+CXLfItVOAXLPq9c+AXqoebJsEvUC93y4I/cz3dJg3+jPV2fzz4M9Xjxgjgz1CvO2KAf2E9b4UC/gX1vgcO+Gc2wuZH4J/RKLtegT+xkbY7A39Co+1zB/6JjbjBIfgnNOrOluAfaeQtTcF/ptH3sgX/iRQ2MQb/kVR2rwb/n5S2LQf/QWr71YO/T/FBBfL4JvyECnl85UeTSOOrP5NGFl8d3lTxgf+dHD7wf5LCB/7vZPCB/z8JfOAfb3h84J9uaHzgn29YfOCPNyQ+8Kc1HD7wpzcUPvDTGgYf+OkNgQ/8eXWPD/z5dY0P/GV1iw/85XWJD/w8dYcP/Hx1hQ/8vHWDD/z8dYEPfJnC4wNfrtD4wJctLD7w5QuJD3ydwuEDX69Q+MDXLQw+8PULgQ98m5rjR3matGpfzWzV4inawLfv+/75+VXxmerb1+Qp2sDHKONvUko3tY4G+Dgt9mf+qsYR8R4fs+IXfZzxMbs1s23Jsx/4uF2Z2eeUUp7+l3MfJVN9P+Xp/87dN3McMfD99c3MPrn7l0uOHPh+25lZxr8/ZxYAfozyi2C9fyFs3H177K8CfszyC2G7fzHYg5+HtsBr9pGPc6IBLxrwogEvGvCiAS8a8KIBLxrwogEvGvCiAS8a8KIBLxrwogEvGvCiAS8a8KIBLxrwogEvGvCKmdkvxi2pewQw4yQAAAAASUVORK5CYII=" className={styles.four}></img>
                    </div>
                    <div className={styles.effects}>
                        <div className={styles.left}>
                            <div id="bgItemsContainer-left">
                                <img src="/img/effects_left/effects_1.png" className={styles.effects_1}></img>
                                <img src="/img/effects_left/effects_2.png" className={styles.effects_2}></img>
                                <img src="/img/effects_left/effects_3.png" className={styles.effects_3}></img>
                                <img src="/img/effects_left/effects_3.png" className={styles.effects_4}></img>
                                <img src="/img/effects_left/effects_5.png" className={styles.effects_5}></img>
                                <img src="/img/effects_left/effects_6.png" className={styles.effects_6}></img>
                                <img src="/img/effects_left/effects_7.png" className={styles.effects_7}></img>
                                <img src="/img/effects_left/effects_8.png" className={styles.effects_8}></img>
                                <img src="/img/effects_left/effects_9.png" className={styles.effects_9}></img>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div id="bgItemsContainer-right">
                                <img src="/img/effects_left/effects_1.png" className={styles.effects_1}></img>
                                <img src="/img/effects_left/effects_2.png" className={styles.effects_2}></img>
                                <img src="/img/effects_left/effects_3.png" className={styles.effects_3}></img>
                                <img src="/img/effects_left/effects_3.png" className={styles.effects_4}></img>
                                <img src="/img/effects_left/effects_5.png" className={styles.effects_5}></img>
                                <img src="/img/effects_left/effects_6.png" className={styles.effects_6}></img>
                                <img src="/img/effects_left/effects_7.png" className={styles.effects_7}></img>
                                <img
                                    src="/img/effects_left/effects_8.png"
                                    className={styles.effects_8}></img><img
                                        src="/img/effects_left/effects_9.png"
                                        className={styles.effects_9}></img>
                            </div>
                        </div>
                    </div>

                    <div className={styles.main}>
                        <div className={styles.ido}>
                            <div className={styles.title}></div>
                            <div className={styles.content}>
                                <ul className={styles.round}>
                                    <li className={cx({ active: period == 0 })}>Round 1</li>
                                    <li className={cx({ active: period == 1 })}>Round 2</li>
                                    <li className={cx({ active: period == 2 })}>Round 3</li>
                                </ul>
                                <div className={cx(styles.line, { line1: period == 0, line2: period == 1, line3: period == 2 })}></div>
                                <div className={styles.box}>
                                    <div className={styles.box_title}>
                                        <span className={styles.fl}> {period == 3 ? "Round" :  "Round"+(period * 1 + 1)}</span>
                                        <span className={styles.fr}>
                                            {
                                                period == 0 && moment(starttime.starttime1 * 1000).format('YYYY-MM-DD hh:mm') + "-" + moment(starttime.starttime2 * 1000).format('YYYY-MM-DD hh:mm')
                                            }
                                            {
                                                period == 1 && moment(starttime.starttime3 * 1000).format('YYYY-MM-DD hh:mm') + "-" + moment(starttime.starttime4 * 1000).format('YYYY-MM-DD hh:mm')
                                            }
                                            {
                                                period == 2 && moment(starttime.starttime5 * 1000).format('YYYY-MM-DD hh:mm') + "-" + moment(starttime.starttime6 * 1000).format('YYYY-MM-DD hh:mm')
                                            }
                                        </span>
                                    </div>
                                    <div className={styles.box_content}>
                                        <ul>
                                            <li>
                                                <h1>{t('Investment')}</h1>
                                                <p>
                                                    {
                                                        utils.formatEther(
                                                            period == 0 ? totalInvestment.totalInvestment1 :
                                                            period == 1 ? totalInvestment.totalInvestment2 :
                                                            period == 2 ? totalInvestment.totalInvestment3 :
                                                            "0")
                                                    } <b>USDT</b></p>
                                            </li>
                                            <li>
                                                <h1>{t('Total')}</h1>
                                                <p>
                                                    {
                                                        utils.formatEther(
                                                            period == 0 ? IDO.IDO1 :
                                                            period == 1 ? IDO.IDO2 :
                                                            period == 2 ? IDO.IDO3 :
                                                            "0"
                                                        )
                                                    } <b>USDT</b></p>
                                            </li>
                                            <li>
                                                <h1>{t('Unit_price')}</h1>
                                                <p>
                                                    {torPrice[period]} <b>USDT/TOR</b>
                                                </p>
                                            </li>
                                            <li>
                                                <h1>{t('Time_remaining')}</h1>
                                                <p>
                                                    {
                                                        remaining() > 0 ?
                                                        <Timer
                                                            formatValue={(value) => `${(value < 10 ? `0${value}` : value)} `}
                                                            initialTime={ remaining() }
                                                            lastUnit="d"
                                                            direction="backward"
                                                        >
                                                            <Timer.Days />D <Timer.Hours />H <Timer.Minutes />M <Timer.Seconds />S
                                                        </Timer>:
                                                        "Unstar"
                                                    } 
                                                    
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.rate}>
                                    <div className={styles.rate_outer}>
                                        <div className={styles.rate_inner} style={{'width':getProgress()+"%"}}></div>
                                    </div>
                                    <span>{getProgress()}%</span>
                                </div>
                            </div>
                            <ul className={styles.info}>
                                <li>
                                    <h1>{t('My_investment')}</h1>
                                    <p>{investment()} / {
                                        period == 0 &&  maxDeposit
                                    }
                                    {
                                        period == 1 && maxDeposit * 2
                                    }
                                    {
                                        period == 2 && maxDeposit * 3
                                    } <b>USDT</b></p>
                                </li>
                                <li>
                                    <h1>{t('Obtainable_TOR')}</h1>
                                    <p>{tor()} <b>TOR</b></p>
                                </li>
                                <li>
                                    <h1>{t('Obtainable_TOR')}</h1>
                                    <p>{weighting} <b>%</b>
                                    <Clipboard onSuccess={()=>{
                                                            copyLink()
                                                        }} 
                                        className={styles.copy_link} data-clipboard-text={`https://tordao.io/ido?address=${account}`}>
                                        <i></i>
                                        <span>{t('Copy_Invite_Link')}</span>
                                    </Clipboard>
                                    </p>
                                </li>
                                <li>
                                    <h1>{t('Available_refund')}</h1>
                                    <p>{remainingInvestment}
                                    <button className={styles.copy_link} onClick={()=>withdrawUSDT()}>{t('Refund')}</button></p>
                                </li>
                            </ul>
                            <div className={styles.input}>
                                <span>{t('balance')}: {usdtBalance}</span>
                                <input type="number" value={investmentValue} onChange={(e)=>{
                                    setInvestmentValue(e.target.value)
                                }}/>
                                <button className={styles.max} onClick={()=>setMax()}>Max</button>
                                <button onClick={()=>investmentTor()}>{t('Buy')} $TOR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </HeaderFooter>
    )
}

export const getStaticProps = async ({
    locale
}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
})


export default withRouter(Home)
