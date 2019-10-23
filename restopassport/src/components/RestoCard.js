import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';


export function RestoCard ({resto}) { 


    return (
        <div className='restocard'>
            <div>
                <button /*onClick={onHandleDelete}*/>X</button>
            </div>
            <div>
                <h4>${resto.name}</h4>
                <img href="#" alt="restaurant image" />
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