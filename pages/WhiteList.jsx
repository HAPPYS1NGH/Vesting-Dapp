import React from 'react'
import Header from '@/components/Header'
import { useState, useEffect } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite
} from "wagmi";
import { abi, contractAddress } from "../contracts/vesting";

function WhiteList() {
  return (
    <div>WhiteList</div>
  )
}

export default WhiteList




// function Register() {
//   const [name, setName] = useState("");
//   const [symbol, setSymbol] = useState("");

//   const [Organisations, setOrganisations] = useState([]);

//   //Fetching Organisation
//   const { address } = useAccount();
//   const { data: organisationsData, isError: organisationsError } =
//     useContractRead({
//       address: contractAddress,
//       abi: abi,
//       functionName: "getOrganisations",
//       watch: true
//     });

//   // const Data = organisationsData.map((el, i) => {
//   //   console.log(`Organisation ${i + 1} is ${el} `);
//   // });
//   // Registering 
//   const { config } = usePrepareContractWrite({
//     address: contractAddress,
//     abi: abi,
//     functionName: 'registerOrganisation',
//     args: [name, symbol]
//   })

//   const { data, write: register , isLoading: registering } = useContractWrite(config)
//   const waitForTransaction = useWaitForTransaction({
//     hash: data?.hash,
//   })

//   async function registerOrganisation(e) {
//     await register();
//     e.preventDefault();
//   }

//   function handleOrgNameChange(e) {
//     setName(e.target.value)
//   }
//   function handleOrgSymbolChange(e) {
//     setSymbol(e.target.value);
//   }
//   useEffect(() => {

//     if (organisationsError) {
//       console.log(organisationsError)
//     }
//     else {
//       setOrganisations(organisationsData)
//     }
//   }, [organisationsData])



//   return (

//     <div>
//       <Header />
//       <main className='mx-10 my-7'>
//         <h1 className='text-3xl font-bold mb-5'>Organisations</h1>
//         <OrganisationsList organisations={Organisations} />
//         <form className='flex flex-col space-y-4 my-28'>
//           <label className='flex flex-col'>
//             <span className='mb-1 font-bold'>Organization Name:</span>
//             <input type="text" value={name} onChange={handleOrgNameChange} className='border border-gray-400 p-2 rounded-md' />
//           </label>
//           <label className='flex flex-col'>
//             <span className='mb-1 font-bold'>Organization Symbol:</span>
//             <input type="text" value={symbol} onChange={handleOrgSymbolChange} className='border border-gray-400 p-2 rounded-md' />
//           </label>
//           <button type="submit" onClick={registerOrganisation} disabled={!registerOrganisation || waitForTransaction.isLoading || registering} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'>{waitForTransaction.isLoading ? "Transacting..... ": (registering? "Check Wallet" : "Register")}</button>
//         </form>
//       </main>
//     </div>

//   )
// }

// export default Register