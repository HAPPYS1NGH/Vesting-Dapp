import React from 'react'
import { useState } from "react";
import {
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from "wagmi";
import { abi, contractAddress } from "../contracts/vesting";
import WhiteListedComponent from '@/components/WhiteListedComponent';

function WhiteList() {
  const [role, setRole] = useState();
  const [organisationAddress, setOrganisationAddress] = useState();

  const [organisationAddressRead, setorganisationAddressRead] = useState()
  const [whiteListedAccount, setwhiteListedAccounts] = useState()

  function handleRoleChange(e) {
    setRole(e.target.value);
  }
  function handleOrganisationAddress(e) {
    setOrganisationAddress(e.target.value);
  }

  function handleOrganisationAddressRead(e) {
    setorganisationAddressRead(e.target.value);
  }


  const { data: whiteListedAccounts, isError: errorfetching } =
    useContractRead({
      address: contractAddress,
      abi: abi,
      functionName: "getWhiteList",
      watch: true,
      args: [organisationAddressRead]
    });

  function readWhitelist() {

    if (errorfetching) {
      console.log(errorfetching + "Error")
      console.log(whiteListedAccounts)
    }
    else {
      setwhiteListedAccounts(whiteListedAccounts)
      console.log(whiteListedAccounts)
    }
  }
  async function getWhiteListedAccounts(e) {
    e.preventDefault();
    readWhitelist();
  }

  const { config, status } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi,
    functionName: 'whitelist',
    args: [role, organisationAddress]
  })

  const { data, isLoading: registering, write } = useContractWrite(config)
  const waitForTransaction = useWaitForTransaction({
    hash: data?.hash,
  })

  function whiteListAccounts(e) {
    e.preventDefault();
    try {
      console.log("Status" + status)
      console.log("Organisation" + organisationAddress)
      console.log("Role" + role)
      write();
    } catch (error) {
      console.log("Please fill details or else You are not Owner ");
    }

  }

  return (
    <div>
      <main className='mx-20 my-10'>
        <div className='rounded-lg shadow-md hover:shadow-lg overflow-hidden bg-slate-300 text-black px-4 py-2 mb-20'>
          <h1 className='text-3xl font-bold mt-10 mb-5'>WhiteList StakeHolders</h1>
          <form className='flex flex-col space-y-4 mb-10'>
            <label className='flex flex-col'>
              <span className='mb-1 font-bold'>StakeHolders Role:</span>
              <input type="text" value={role} onChange={handleRoleChange} className='border border-gray-400 p-2 rounded-md' />
            </label>
            <label className='flex flex-col'>
              <span className='mb-1 font-bold'>Organization Address:</span>
              <input type="text" value={organisationAddress} onChange={handleOrganisationAddress} className='border border-gray-400 p-2 rounded-md' />
            </label>
            <button type="submit" onClick={whiteListAccounts} disabled={waitForTransaction.isLoading || registering} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'>{waitForTransaction.isLoading ? "Transacting..... " : (registering ? "Check Wallet" : "Register")}</button>
          </form>
        </div>
      </main>
      <div className='mx-20 my-10  bg-slate-300  px-4 py-2 rounded-lg shadow-md hover:shadow-lg overflow-hidden '>
        <h1 className='text-3xl font-bold mt-10 mb-5'>White Listed Accounts</h1>
        <form className='flex flex-col space-y-4 mb-10'>
          <div className='flex flex-col'>
            <label htmlFor='organisationAddress' className='mb-1 font-bold'>Organisation Address:</label>
            <input type='text' id='organisationAddress' value={organisationAddressRead} onChange={handleOrganisationAddressRead} className='border border-gray-400 p-2 rounded-md' />
          </div>
          <button type='submit' onClick={getWhiteListedAccounts} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'>Get WhiteListed Accounts</button>
        </form>

        {whiteListedAccount && < WhiteListedComponent accounts={whiteListedAccount} />}

      </div>
    </div >
  )
}

export default WhiteList



