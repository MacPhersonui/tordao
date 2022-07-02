import '../styles/globals.scss'
import { UseWalletProvider } from 'use-wallet'

function MyApp({ Component, pageProps }) {
  return <UseWalletProvider
        chainId={0x38}
        connectors={{
            walletconnect: {
                rpcUrl: "https://bsc-dataseed1.ninicoin.io/"
            },
        }}
    >
      <Component {...pageProps} />
  </UseWalletProvider>
}

export default MyApp
