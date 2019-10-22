import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';


export function RestoCard ({getCityData, city}) { 

    useEffect(() => {
        getCityData()
    }, [])

    return (
        <div className='restocard'>
            <div>
                <button /*onClick={onHandleDelete}*/>X</button>
            </div>
            <div>
                <h1>{city.name}</h1>
                
                <h1>Restaurant Name</h1>
                <p>Description: </p> 
                <p /*onClick={onHandleStamp}*/ >Add Stamp</p>
                <img src='#' alt='img caption'/>
            </div>
        </div>
    )
}


export default connect(
    state => state,
    actionCreators
) (RestoCard);