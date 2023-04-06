import React from 'react'
import OrganisationComponent from './OrganisationComponent'

function OrganisationsList(props) {
    const organisations = props.organisations
    const organisationComponent = organisations.map((org, index) => (
        <OrganisationComponent key={index} organisation={org} />
    ))
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
            {organisationComponent}
        </div>
    )
}

export default OrganisationsList
