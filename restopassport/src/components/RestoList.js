import React, {  useEffect } from 'react';
import RestoCard from "./RestoCard";
import { connect } from 'react-redux';
import * as actionCreators from "../state/actionCreators";

import { Spin } from 'antd';



const restosApi = "https://build-restaurant-passport.herokuapp.com/cities/3/restaurants";

export function RestoList ({restoDetails, getRestos}) {
    
    useEffect(() => {
        getRestos(restosApi);
    },[]);
    
    return (
        <div className='restoList'> 
            {
                !Object.keys(restoDetails).length
                ?
                <Spin/>
                :
                restoDetails.restaurants.map(resto => (     
                <RestoCard resto={resto} key={resto.restID} state={restoDetails}
                />
                ))
            }
        </div>
    )
};

export default connect(
    state => state,
    actionCreators,
)(RestoList);

