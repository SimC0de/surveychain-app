'use client';
import { ReactNode, useState } from 'react';
import { base } from 'viem/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import '@coinbase/onchainkit/styles.css';
import { getConfig } from './Wagmi';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function RootProvider({ children }) {
    const [config] = useState(() => getConfig());
    const [queryClient] = useState(() => new QueryClient());

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <OnchainKitProvider
                    apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
                    chain={base}
                    config={{
                        appearance: {
                            mode: 'auto',
                        },
                        wallet: {
                            display: 'modal',
                        },
                    }}
                >
                    {children}
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}