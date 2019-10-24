import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export  function RestoDetail ({restoDetailsTwo,
    restos, getRestosDetails
    }) { 

    useEffect(() => {
        getRestosDetails()
    },[])

    return (
       
        <div className="restoDetail">
        {restos}
        {/* {restos.map(resto => (
            <RestoProfile key={resto.id}
            resto={resto}/>
        ))}              */}
        </div>

    )
}

export function RestoProfile ({resto}) {
    return(
        <div>
        <h1>{resto.name}</h1>
        <h2>{resto.description}</h2>
        </div>
        )
}

export default connect(state => state,
actionCreators) (RestoDetail);