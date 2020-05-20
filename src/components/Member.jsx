import React from 'react'

function Member({details}){
    if(!details){
        return <h3>Fetching your member details...</h3>
    }

    return (
        <div>
            <h2> {details.first_name} {details.last_name} </h2>
            <p> Email: {details.email} </p>
        </div>
    )
}

export default Member