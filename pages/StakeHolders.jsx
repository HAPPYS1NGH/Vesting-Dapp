import Header from '@/components/Header'
import { useState, useEffect } from "react";
import React from 'react'
import {
    useAccount,
    useContractRead,
    useContractWrite,
    useWaitForTransaction,
    usePrepareContractWrite
} from "wagmi";
import { abi, contractAddress } from "../contracts/vesting";

function StakeHolders() {
    //Form for Adding StakeHolder
    const [role, setRole] = useState();
    const [stakeHolderAddress, setStakeHolderAddress] = useState();
    const [timeLock, setTimeLock] = useState()
    const [tokens, setTokens] = useState();
    const [organisationAddress, setOrganisationAddress] = useState();

    //For storing Holders 
    const [holders, setHolders] = useState()
    //Reading Form for Holders
    const [organisationAddressRead, setorganisationAddressRead] = useState()
    const [roleRead, setRoleRead] = useState()


    function handleRoleChange(e) {
        setRole(e.target.value);
    }
    function handleStakeHolderAddress(e) {
        setStakeHolderAddress(e.target.value);
    }
    function handleTimeLock(e) {
        setTimeLock(e.target.value);
    }
    function handleTokens(e) {
        setTokens(e.target.value);
    }
    function handleOrganisationAddress(e) {
        setOrganisationAddress(e.target.value);
    }

    const { data: stakeHoldersData, isError: stakeHolderError } =
        useContractRead({
            address: contractAddress,
            abi: abi,
            functionName: "getHolders",
            watch: true,
            args: [organisationAddressRead, roleRead]
        });

    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: abi,
        functionName: 'registerOrganisation',
        args: [name, symbol]
    })

    const { data, write: register, isLoading: registering } = useContractWrite(config)
    const waitForTransaction = useWaitForTransaction({
        hash: data?.hash,
    })

    async function registerOrganisation(e) {
        await register();
        e.preventDefault();
    }



    return (
        <div>
            <Header />
            <form className='flex flex-col space-y-4 mb-10'>
                <label className='flex flex-col'>
                    <span className='mb-1 font-bold'>Role:</span>
                    <input type="text" value={role} onChange={handleRoleChange} className='border border-gray-400 p-2 rounded-md' />
                </label>
                <label className='flex flex-col'>
                    <span className='mb-1 font-bold'>Stake Holder Address:</span>
                    <input type="text" value={stakeHolderAddress} onChange={handleStakeHolderAddress} className='border border-gray-400 p-2 rounded-md' />
                </label>
                <label className='flex flex-col'>
                    <span className='mb-1 font-bold'>Time Lock:</span>
                    <input type="text" value={timeLock} onChange={handleTimeLock} className='border border-gray-400 p-2 rounded-md' />
                </label>
                <label className='flex flex-col'>
                    <span className='mb-1 font-bold'>Tokens:</span>
                    <input type="text" value={tokens} onChange={handleTokens} className='border border-gray-400 p-2 rounded-md' />
                </label>
                <label className='flex flex-col'>
                    <span className='mb-1 font-bold'>Tokens:</span>
                    <input type="text" value={organisationAddress} onChange={handleOrganisationAddress} className='border border-gray-400 p-2 rounded-md' />
                </label>
                <button type="submit" onClick={addStakeHolder} disabled={!registerOrganisation || waitForTransaction.isLoading || registering} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'>{waitForTransaction.isLoading ? "Transacting..... " : (registering ? "Check Wallet" : "Register")}</button>
            </form>
        </div>
    )
}

export default StakeHolders