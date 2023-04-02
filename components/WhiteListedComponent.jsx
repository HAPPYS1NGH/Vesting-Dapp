import React from 'react'
import WhitListAccountComponent from './WhitListAccountComponent'

function WhiteListedComponent(props) {
    const accountsRender = props.accounts.map(
        (account) => {
            return <WhitListAccountComponent key={account[1]} account={account} />
        }
    )
    return (
        <div className="px-4 py-8">
            <h1 className="mb-4 text-xl font-semibold">White List</h1>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {accountsRender}
            </div>
        </div>
    )
}

export default WhiteListedComponent