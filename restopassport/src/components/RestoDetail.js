import React from 'react';

export default function RestoDetail ({restos}) { 

    return (
        <div className="restoDetail">
            <h2>{restos.name}</h2>
            <p>{restos.description}</p>
        </div>
    )
}