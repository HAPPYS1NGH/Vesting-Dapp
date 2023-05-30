import { useState, useEffect, useContext } from "react";
import React from 'react'
import {
    useContractRead,
    useContractWrite,
    useWaitForTransaction,
    usePrepareContractWrite
} from "wagmi";
import { abi, contractAddress } from "../contracts/vesting";
import HoldersList from '@/components/HoldersList';

function StakeHolders() {
    const [role, setRole] = useState();
    const [stakeHolderAddress, setStakeHolderAddress] = useState();
    const [timeLock, setTimeLock] = useState()
    const [tokens, setTokens] = useState();
    const [organisationAddress, setOrganisationAddress] = useState();

    //Special
    const [shouldReinitialize, setShouldReinitialize] = useState(false);

    //For storing Holders 
    const [holders, setHolders] = useState("")
    //Reading Form for Holders
    const [organisationAddressRead, setorganisationAddressRead] = useState()
    const [roleRead, setRoleRead] = useState()

    //Handling States
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

    function handleRoleReadChange(e) {
        setRoleRead(e.target.value);
    }

    function handleOrganisationAddressRead(e) {
        setorganisationAddressRead(e.target.value);
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
        functionName: 'addStakeHolders',
        args: [role, stakeHolderAddress, timeLock, tokens, organisationAddress]
    })


    const { data, isLoading: registering, write } = useContractWrite(config)
    const waitForTransaction = useWaitForTransaction({
        hash: data?.hash,
    })

    function addStakeHolder(e) {
        e.preventDefault();
        setShouldReinitialize(true);
        try {
            console.log("Organisation Address" + organisationAddress)
            write();
            setShouldReinitialize(false);

        } catch (error) {
            console.log("You are not the Owner")
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function readStakeHolders() {
        if (stakeHolderError) {
            console.log(stakeHolderError)
            console.log(stakeHoldersData)
        }
        else {
            setHolders(stakeHoldersData)
            console.log(stakeHoldersData)
        }
    }
    function readHolders(e) {
        e.preventDefault();
        readStakeHolders();

    }
    useEffect(() => {
        console.log("reinitialising")
    }, [shouldReinitialize, organisationAddress])
    useEffect(() => {
        readStakeHolders()
    }, [readStakeHolders, stakeHolderError, stakeHoldersData])




    return (
        <div>
            <div className='mx-20 my-10 bg-slate-300  px-4 py-2 rounded-lg shadow-md hover:shadow-lg overflow-hidden'>
                <h1 className='text-3xl font-bold mt-10 mb-5'>Register StakeHolders</h1>
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
                        <span className='mb-1 font-bold'>Organisation Address:</span>
                        <input type="text" value={organisationAddress} onChange={handleOrganisationAddress} className='border border-gray-400 p-2 rounded-md' />
                    </label>
                    <button type="submit" onClick={addStakeHolder} disabled={waitForTransaction.isLoading || registering} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'>{waitForTransaction.isLoading ? "Transacting..... " : (registering ? "Check Wallet" : "Register")}</button>
                </form>
            </div>
            <div className='mx-20 my-10  bg-slate-300  px-4 py-2 rounded-lg shadow-md hover:shadow-lg overflow-hidden '>
                <h1 className='text-3xl font-bold mt-10 mb-5'>Get Stakeholders</h1>
                <form className='flex flex-col space-y-4 mb-10'>
                    <div className='flex flex-col'>
                        <label htmlFor='role' className='mb-1 font-bold'>Role</label>
                        <input type='text' id='role' value={roleRead} onChange={handleRoleReadChange} className='border border-gray-400 p-2 rounded-md' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='organisationAddress' className='mb-1 font-bold'>Organisation Address:</label>
                        <input type='text' id='organisationAddress' value={organisationAddressRead} onChange={handleOrganisationAddressRead} className='border border-gray-400 p-2 rounded-md' />
                    </div>
                    <button type='submit' onClick={readHolders} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'>Get Stakeholders</button>
                </form>
                {holders &&
                    <HoldersList holders={holders} />
                }

            </div>
        </div>
    )
}

export default StakeHolders