import React, {  useEffect } from 'react';
import RestoCard from "./RestoCard";
// import RestoDetail from './RestoDetail';
import axiosWithAuth from '../helpers/axiosWithAuth';
import { connect } from 'react-redux';
import * as actionCreators from "../state/actionCreators";
import { restoDetailReducer } from '../state/reducers';

const restosApi = "https://build-restaurant-passport.herokuapp.com/cities/3/restaurants";



export function RestoList ({restoDetails, getRestos}) {
  console.log('hey', restoDetails);
    
    useEffect(() => {
        getRestos(restosApi);
    },[]);
    
    return (
        <div className='restoList'> 
            {
                !Object.keys(restoDetails).length
                ?
                <div>loading</div>
                :
                restoDetails.restaurants.map(resto => (     
                <RestoCard resto={resto} key={resto.restID}
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

