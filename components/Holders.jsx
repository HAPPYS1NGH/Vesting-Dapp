import React from 'react'

function Holders(props) {
    let Type;
    if (props.o[0] == 0) {
        Type = <h1>Founder</h1>
    }
    else if (props.o[0] == 1) {
        Type = <h1>Advisor</h1>
    }
    else if (props.o[0] == 2) {
        Type = <h1>Investor</h1>
    }
    const timeLockDate = new Date(parseInt(props.o[2]) * 1000);
    const timeLockString = timeLockDate.toLocaleString();

    return (
        // <div>
        //     {Type}
        //     <h1>Address :{props.o[1]}</h1>
        //     <h1>WhiteListed :{props.o[4] ? "True" : "False"}</h1>
        //     <h1>TimeLock :{timeLockString}</h1>
        //     <h1>Tokens :{parseInt(props.o[3])}</h1>
        // </div>
        <div className="p-4 border rounded-lg shadow-md">
            <div className="mb-2 font-semibold">{Type}</div>
            <div className="mb-2 text-sm">
                <span className="font-semibold">Address:</span> {props.o[1]}
            </div>
            <div className="mb-2 text-sm">
                <span className="font-semibold">Whitelisted:</span> {props.o[4] ? "Yes" : "No"}
            </div>
            <div className="mb-2 text-sm">
                <span className="font-semibold">Timelock:</span> {timeLockString}
            </div>
            <div className="text-sm">
                <span className="font-semibold">Tokens:</span> {parseInt(props.o[3])}
            </div>
        </div>
    )
}

export default Holders