import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const Footer = ({ t }) => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li onClick={() => window.open("https://twitter.com/LemondFinance")}>
                    <i className={styles.twitter}></i>
                </li>
                <li onClick={() => window.open("https://lemondfinance.medium.com")}>
                    <i className={styles.medium}></i>
                </li>
                <li onClick={() => window.open("https://t.me/lemondok")}>
                    <i className={styles.telegram}></i>
                </li>
                <li onClick={() => window.open("https://github.com/Lemond-finance/lemond")}>
                    <i className={styles.github}></i>
                </li>
            </ul>
        </footer>
    )
}

export default Footer