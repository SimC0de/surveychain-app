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
                            name: 'SurveyChain',        // Displayed in modal header
                            logo: 'https://your-logo.com',// Displayed in modal header
                            mode: '400',                 // 'light' | 'dark' | '400'
                            theme: 'base',             // 'default' or custom theme
                        },
                        wallet: {
                            display: 'modal',
                            termsUrl: 'https://...',
                            privacyUrl: 'https://...',
                        },
                    }}
                >
                    {children}
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}