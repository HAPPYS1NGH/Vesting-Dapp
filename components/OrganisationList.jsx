import React from 'react'
import OrganisationComponent from './OrganisationComponent'

function OrganisationsList(props) {
    const organisations = props.organisations

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
            {organisations.map((org, index) => (
                <OrganisationComponent key={index} organisation={org} />
            ))}
        </div>
    )
}

export default OrganisationsList
