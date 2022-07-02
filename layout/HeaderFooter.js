import styles from "../styles/Home.module.scss"
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import React, { useState, useEffect } from 'react'
import { findDOMNode } from 'react-dom'

const HeaderFooter = (props) => {

  const { activeIndex } = props
  const [progress, setProgress] = useState(0)

  return (
      <div className={styles.wrapper}>
        <Head>
          <title>TorDao</title>
          <meta itemProp="image" content="/logo.png" />
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta name="author" content="TorDao" />
          <meta name="generator" content="TorDao" />
          <meta name="copyright" content="TorDao" />
          {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Cache-Control" content="no-transform" />
          <meta httpEquiv="Cache-Control" content="no-siteapp" /> */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="bookmark" href="/favicon.ico" />
          <meta name="description" content="TorDao" />
          <meta name="keywords" content="TorDao" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-24E5BG0T8G"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-24E5BG0T8G');`,
            }}
          />
        </Head>
        <Header activeIndex={activeIndex} />
        <main className={styles.container}>{props.children}</main>
        <Footer />
      </div>
  );
};

export default HeaderFooter;
