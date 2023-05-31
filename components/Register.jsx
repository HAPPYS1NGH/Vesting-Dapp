import { useState, useEffect } from "react";
import {
    useContractRead,
    useContractWrite,
    useWaitForTransaction,
    usePrepareContractWrite
} from "wagmi";
import { abi, contractAddress } from "../contracts/vesting";
import OrganisationsList from '@/components/OrganisationList';
function Register() {
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [Organisations, setOrganisations] = useState([]);
    //Fetching Organisation
    const { data: organisationsData, isError: organisationsError } =
        useContractRead({
            address: contractAddress,
            abi: abi,
            functionName: "getOrganisations",
            watch: true
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
        register();
        e.preventDefault();
    }
    function handleOrgNameChange(e) {
        setName(e.target.value)
    }
    function handleOrgSymbolChange(e) {
        setSymbol(e.target.value);
    }
    useEffect(() => {
        if (organisationsError) {
            console.log(organisationsError)
        }
        else {
            setOrganisations(organisationsData)
        }
    }, [organisationsData, organisationsError])
    return (
        <div>
            <main className='mx-20 my-10'>
                <div className='rounded-lg shadow-md hover:shadow-lg overflow-hidden bg-slate-300 text-black px-4 py-2 mb-20'>
                    <h1 className='text-3xl font-bold mt-10 mb-5'>Register your Organisation</h1>
                    <form className='flex flex-col space-y-4 mb-10'>
                        <label className='flex flex-col'>
                            <span className='mb-1 font-bold'>Organization Name:</span>
                            <input type="text" value={name} onChange={handleOrgNameChange} className='border border-gray-400 p-2 rounded-md' />
                        </label>
                        <label className='flex flex-col'>
                            <span className='mb-1 font-bold'>Organization Symbol:</span>
                            <input type="text" value={symbol} onChange={handleOrgSymbolChange} className='border border-gray-400 p-2 rounded-md' />
                        </label>
                        <button type="submit" onClick={registerOrganisation} disabled={!registerOrganisation || waitForTransaction.isLoading || registering} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'>{waitForTransaction.isLoading ? "Transacting..... " : (registering ? "Check Wallet" : "Register")}</button>
                    </form>
                </div>
                <h1 className='text-3xl font-bold mb-5'>Organisations</h1>
                {Organisations &&
                    <OrganisationsList organisations={Organisations} />
                }
            </main>
        </div>
    )
}
export default Register