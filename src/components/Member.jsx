import React from 'react'

function Member({details}){
    if(!details){
        return <h3>Fetching your member details...</h3>
    }

    return (
        <div>
            <h2> {details.firstName} {details.lastName} </h2>
            <p> Email: {details.email} </p>
        </div>
    )
}

export default Member