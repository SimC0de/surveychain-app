import { http, cookieStorage, createConfig, createStorage } from 'wagmi';
import { base, baseSepolia } from 'viem/chains';
import { coinbaseWallet, metaMask } from 'wagmi/connectors';

export function getConfig() {
  return createConfig({
    chains: [baseSepolia],
    connectors: [
      coinbaseWallet({
        appName: 'Survey Chain',
        preference: 'smartWalletOnly',
        version: '4',
      }),
      metaMask(), // Add additional connectors
    ],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: { 
      [baseSepolia.id]: http(),
    },
  });
}
