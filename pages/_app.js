import '../styles/globals.scss'
import { UseWalletProvider } from 'use-wallet'

function MyApp({ Component, pageProps }) {
  return <UseWalletProvider
        chainId={0x1}
        connectors={{
            walletconnect: {
                rpcUrl: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
            },
        }}
    >
      <Component {...pageProps} />
  </UseWalletProvider>
}

export default MyApp
