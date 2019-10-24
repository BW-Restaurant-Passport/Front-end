import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export  function RestoDetail ({getRestosDetails, restoDetailsTwo}) { 
    useEffect(() => {
     getRestosDetails();

    },[])

    return (
        <div className="restoDetail">
            <h1>{restoDetailsTwo.name}</h1>
            <h1>{restoDetailsTwo.address}</h1>
            <h1>{restoDetailsTwo.city}</h1>
            <h1>{restoDetailsTwo.description}</h1>
        </div>
    )
}

export default connect(state => state,
actionCreators) (RestoDetail);