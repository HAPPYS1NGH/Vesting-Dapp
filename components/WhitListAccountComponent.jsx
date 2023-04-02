import React from 'react'

function WhitListAccountComponent(props) {
  let Type;
  if (props.account[0] == 0) {
    Type = <h1>Founder</h1>
  }
  else if (props.account[0] == 1) {
    Type = <h1>Advisor</h1>
  }
  else if (props.account[0] == 2) {
    Type = <h1>Investor</h1>
  }
  const timeLockDate = new Date(parseInt(props.account[2]) * 1000);
  const timeLockString = timeLockDate.toLocaleString();

  return (

    <div className="p-4 border rounded-lg shadow-md">
      <div className="mb-2 font-semibold">{Type}</div>
      <div className="mb-2 text-sm">
        <span className="font-semibold">Address:</span> {props.account[1]}
      </div>
      <div className="mb-2 text-sm">
        <span className="font-semibold">Whitelisted:</span> {props.account[4] ? "Yes" : "No"}
      </div>
      <div className="mb-2 text-sm">
        <span className="font-semibold">Timelock:</span> {timeLockString}
      </div>
      <div className="text-sm">
        <span className="font-semibold">Tokens:</span> {parseInt(props.account[3])}
      </div>
    </div>
  )
}

export default WhitListAccountComponent