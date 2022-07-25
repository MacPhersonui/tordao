import React, { useState, useEffect } from "react"
import Wallet from '../components/wallet'
import Link from 'next/link'
import classNames from "classnames/bind"
import styles from "../styles/Home.module.scss"
import {
    useRouter
} from 'next/router'
import {
    useTranslation,
    Trans
} from 'next-i18next'
const cx = classNames.bind(styles)

const Header = (props) => {
    const { activeIndex } = props
    const [showMobileNav, setShowMobileNav] = useState(false)

    const router = useRouter()
    const {
        t
    } = useTranslation('common')
    useEffect(async () => {
        initNetWork()
    }, [])

    const initNetWork = async () => {
        let ethereum = window.ethereum
        const data = [
            {
                // chainId: "0x61",
                chainId: "0x38",
                chainName: "Binance Smart Chain Mainnet",
                nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18,
                },
                rpcUrls: ["https://bsc-dataseed.binance.org"],
                blockExplorerUrls: ["https://bscscan.com/"],
            },
        ]

        /* eslint-disable */
        const tx = await ethereum.request({ method: "wallet_addEthereumChain", params: data }).catch()
        if (tx) {
            console.log(tx)
        }
    }

    return (
        <header className={styles.header}>
            <i className={styles.toggle} onClick={() => setShowMobileNav(true)}>≡</i>
            <nav className={styles.navbar}>
                <div className={styles.menu_text_box}>
                    <div className={styles.left_text}>
                        <Link href="/">{t('home')}</Link>
                        <Link href="/invite">{t('invite')}</Link>
                    </div>
                    <div className={styles.right_text}>
                        <Link href="/ido">IDO</Link>
                        <a>{t('buytor')}</a>
                    </div>
                </div>
            </nav>
            <nav className={cx(styles.mobile_nav, { hide: showMobileNav })} onClick={() => setShowMobileNav(false)}>
                <ul onClick={(e) => { e.stopPropagation() }}>
                    <li><Link href="/">{t('home')}</Link></li>
                    <li><Link href="/invite">{t('invite')}</Link></li>
                    <li><Link href="/ido">IDO</Link></li>
                    <li>{t('buytor')}</li>
                </ul>
            </nav>
            
            <div className={styles.wallet}>
                <Wallet />
            </div>
            <div className={styles.locale}>
                <Link
                href='#'
                locale={router.locale === 'en' ? 'zh' : 'en'}
                >
                {router.locale === 'en' ?"English": "中文"}
                </Link>
            </div>
            {props.children}
        </header>
    )
}

export default Header
