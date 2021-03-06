import React, { useState, useEffect } from "react"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.scss"
import classNames from "classnames/bind"
import Timer from "react-compound-timer"
import Web3 from "web3"
import Wallet from "../components/wallet"
import useWallet from "use-wallet"
import {
    getInvite,
    getInviteRank,
    createInvite
} from "../api/api"
import tokenConfig from "../contract.config"
import { confirmAlert } from "react-confirm-alert"
import HeaderFooter from "../layout/HeaderFooter"
import Clipboard from 'react-clipboard.js'
import {
    QRCodeSVG,
    QRCodeCanvas
} from 'qrcode.react'
import {
    ToastContainer,
    toast
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
    withRouter
} from "next/router"
import {
    useTranslation,
    Trans
} from 'next-i18next'
import {
    serverSideTranslations
} from 'next-i18next/serverSideTranslations'
import Cookies from 'js-cookie'

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

    const {
        t
    } = useTranslation('common')

    const wallet = useWallet()
    const {
        account,
        ethereum
    } = wallet

    const web3 = new Web3(ethereum)
    const [inviteNum, setInviteNum] = useState(0)
    const [inviteRank, setInviteRank] = useState([])
    const [inviteList, setInviteList] = useState([])
    const [showInviteList, setShowInviteList] = useState(true)

    const formatAddress = (address) => {
        return address.substr(0, 8) + '...' + address.substr(address.length - 8, 8)
    }

    useEffect(async () => {
        const data = await getInviteRank()
        let inviter = router.query.address
        if (inviter) {
            Cookies.set('inviter', inviter)
        }
        setInviteRank(data)
        const timer = setInterval(async () => {
            if (account) {
                const {count,rows} = await getInvite(account)
                setInviteNum(count.total)
                console.log(rows)
                setInviteList(rows)
                console.log("router", router)
                const inviter = router.query.address
                if (inviter) {
                    const inviteData = await createInvite(account, inviter)
                    console.log(inviteData)
                    if (inviteData.msg == "Success"){
                        toast.dark('???? Invited success!', toastConfig)
                    }
                }
            }
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    }, [account])

    const copyLink = ()=>{
        if(!checkWallet()){
            toast.dark('???? Copy success!', toastConfig)
        }
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

    const downloadQR = () => {
        const canvas = document.querySelector('canvas')
        console.log(canvas)
        const href = canvas.toDataURL("image/png")
        const link = document.createElement("a")
        link.href = href
        link.download = 'MyInviteQR.png'
        const event = new MouseEvent("click")
        link.dispatchEvent(event)
    }

    return (
        <HeaderFooter activeIndex={1}>
        <ToastContainer />
        <main>
            <div className={cx(styles.invite_mask , { hide: showInviteList})} onClick={()=>setShowInviteList(true)}>
                <div className={styles.invite_inviter}  onClick={(e)=>{
                    e.stopPropagation()
                    }}>
                    <h1>{t('invite_text10')}</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Address</th>
                            <th>Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            inviteList.map((el, index) => (
                                <tr key={index}>
                                    <td>{formatAddress(el.account)}</td>
                                    <td>{el.count}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
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
                            <img
                                src="/img/effects_left/effects_7.png"
                                className={styles.effects_7}></img><img
                                    src="/img/effects_left/effects_8.png"
                                    className={styles.effects_8}></img><img
                                        src="/img/effects_left/effects_9.png"
                                        className={styles.effects_9}></img>
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.invite}>
                        <div className={styles.invite_titles}></div>
                        <div className={styles.invite_rule}>
                            <p>{t('invite_rule1')}</p>
                            <p>{t('invite_rule2')}</p>
                            <div className={styles.invite_rule_table}>
                                <div className={styles.invite_weight}>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>{t('invite_table1')}</td>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>5</td>
                                                <td>6</td>
                                                <td>7</td>
                                                <td>8</td>
                                                <td>9</td>
                                                <td><span>10</span><span className={styles.red}>cap</span></td>
                                            </tr>
                                            <tr>
                                                <td>{t('invite_table2')}</td>
                                                <td className={styles.red}>10%</td>
                                                <td className={styles.red}>20%</td>
                                                <td className={styles.red}>30%</td>
                                                <td className={styles.red}>40%</td>
                                                <td className={styles.red}>50%</td>
                                                <td className={styles.red}>60%</td>
                                                <td className={styles.red}>70%</td>
                                                <td className={styles.red}>80%</td>
                                                <td className={styles.red}>90%</td>
                                                <td className={styles.red}>100%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={styles.invite_tip}>
                                    <b>{t('invite_table3')}:</b> {t('invite_table4')}
                                </div>
                            </div>
                        </div>
                        <div className={styles.invite_content}>
                            <div className={styles.invite_left}>
                                <div className={styles.invite_link}>
                                    <span className={styles.invite_text}>
                                        <p>{t('invite_text1')}</p>
                                        <p>{t('invite_text2')}</p>
                                    </span>
                                    <span className={styles.invite_number}>
                                        <b>{inviteNum}</b>
                                        <i>{t('invite_text3')}</i>
                                    </span>
                                </div>
                                <div className={styles.invite_qrcode}>
                                    <div className={styles.invite_title}>{t('invite_text4')}</div>
                                    <div className={styles.invite_title2}>
                                        {t('invite_text11')}: <b>{router.query.address? formatAddress(router?.query?.address):""}</b>
                                    </div>
                                    {account ? <>
                                        <div className={styles.invite_address}>https://tordao.io/ido?address={account}</div>
                                            <div className={styles.invite_qr}>
                                                <QRCodeCanvas value={`https://tordao.io/ido?address=${account}`} bgColor="#ffffff" />
                                                <ul className={styles.invite_btns}>
                                                    <li>
                                                        <Clipboard onSuccess={()=>{
                                                            copyLink()
                                                        }} className={styles.copy_link} data-clipboard-text={`https://tordao.io/ido?address=${account}`}>
                                                            <i></i>
                                                            <span>{t('invite_text5')}</span>
                                                        </Clipboard>
                                                    </li>
                                                    <li>
                                                        <button onClick={()=>downloadQR()} className={styles.download_qr}>
                                                            <i></i>
                                                            <span>{t('invite_text6')}</span>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button  onClick={()=>setShowInviteList(false)} className={styles.invite_lists}>
                                                            <i></i>
                                                            <span>{t('invite_text7')}</span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                    </> : <button onClick={()=>checkWallet()} className={styles.create_link}>{t('invite_text8')}</button>}
                                    
                                </div>
                            </div>
                            <div className={styles.invite_right}>
                                <div className={styles.invite_rank}>
                                    <div className={styles.invite_title}>{t('invite_text9')}</div>
                                    <div className={styles.invite_table}>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Address</th>
                                            <th>Number</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            inviteRank.map((el,index)=>(
                                                <tr key={index}>
                                                    <td>{formatAddress(el.account)}</td>
                                                    <td>{el.total}</td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>    
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
