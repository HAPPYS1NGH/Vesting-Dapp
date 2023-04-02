import React from 'react'
import MintAccount from './MintAccount';

function MintList(props) {
    const Minters = props.holders.map((holder) => {
        return <MintAccount key={holder[1]} holder={holder} org={props.org} />;
    });
    return (
        <div className="px-4 py-8">
            <h1 className="mb-4 text-xl font-semibold">Minters List</h1>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {Minters}
            </div>
        </div>
    )
}
export default MintList