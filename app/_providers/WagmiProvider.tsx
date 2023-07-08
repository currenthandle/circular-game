import React from 'react'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'

type WagmiProviderType = {
  children: React.ReactNode
}

const chains = [polygonMumbai]
const projectId = process.env.NEXT_PUBLIC_W3C_PID

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  //   connectors: w3mConnectors({ projectId, version: 2, chains }),
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
})

function Something() {
  return (
    <div>
      <h1>Something</h1>
    </div>
  )
}

const ethereumClient = new EthereumClient(wagmiConfig, chains)
const WagmiProvider = ({ children }: WagmiProviderType) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <Something />
    </>
  )
}

export default WagmiProvider
