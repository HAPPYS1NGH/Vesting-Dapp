import React from 'react'
import {
    useContractRead
} from "wagmi";
import { erc20ABI } from 'wagmi'

function MintAccount(props) {
    const { data: mintData, isError: minterError } =
        useContractRead({
            address: props.org,
            abi: erc20ABI,
            functionName: "balanceOf",
            watch: true,
            args: [props.holder[1]]
        });

    let Type;
    if (props.holder[0] == 0) {
        Type = <h1>Founder</h1>
    }
    else if (props.holder[0] == 1) {
        Type = <h1>Advisor</h1>
    }
    else if (props.holder[0] == 2) {
        Type = <h1>Investor</h1>
    }
    const timeLockDate = new Date(parseInt(props.holder[2]) * 1000);
    const timeLockString = timeLockDate.toLocaleString();
    return (
        <div>
            <div className="p-4 border rounded-lg shadow-md">
                <div className="mb-2 font-semibold">{Type}</div>
                <div className="mb-2 text-sm">
                    <span className="font-semibold">Address:</span> {props.holder[1]}
                </div>
                <div className="mb-2 text-sm">
                    <span className="font-semibold">Whitelisted:</span> {props.holder[4] ? "Yes" : "No"}
                </div>
                <div className="mb-2 text-sm">
                    <span className="font-semibold">Minted Tokens:</span> {parseInt(mintData)}
                </div>
                <div className="text-sm">
                    <span className="font-semibold">Hold Tokens:</span> {parseInt(props.holder[3])}
                </div>
            </div>
            {console.log(props)}
        </div>
    )
}

export default MintAccount