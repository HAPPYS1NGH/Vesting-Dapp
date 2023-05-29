import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
function ConnectTheWallet() {
    return (
        <div className='text-center h-full'>
            <h1 className='text-2xl m-20'>
                Connect The Wallet to continue on this Page
            </h1>
            <div className='flex justify-center pb-20'>
                <ConnectButton />
            </div>
        </div>
    )
}

export default ConnectTheWallet