import React from 'react'
import Holders from './Holders'
function HoldersList(props) {
    const Holder = props.holders.map((holder) => {
        return <Holders key={holder[1]} o={holder} />;
    });

    return (
        // <div>
        //     <h1>Holder List</h1>
        //     <div>{Holder}</div>
        // </div>
        <div className="px-4 py-8">
            <h1 className="mb-4 text-xl font-semibold">Holder List</h1>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {Holder}
            </div>
        </div>
    )
}

export default HoldersList