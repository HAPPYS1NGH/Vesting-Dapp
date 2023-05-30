import React from 'react'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

function Header() {
  return (
    <nav className="bg-gray-800 px-4 py-4">
      <div className="mx-10 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
            Register Organisation
          </Link>
          <Link href="/StakeHolders" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Add StakeHolders
          </Link>
          <Link href="/WhiteList" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium" >
            WhiteList StakeHolders
          </Link>
          <Link href="/Mint" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Mint Tokens
          </Link>
        </div>
        <div className='ml-auto' >
          <ConnectButton />
        </div>

      </div>
    </nav>
  )
}

export default Header