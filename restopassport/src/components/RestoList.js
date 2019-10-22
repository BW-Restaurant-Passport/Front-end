// import React, { useState, useEffect } from 'react';
// import RestoDetail from './RestoDetail';
// import axiosWithAuth from '../helpers/axiosWithAuth';

// const restosApi = "https://build-restaurant-passport.herokuapp.com/cities/3/restaurants";

// export default function RestoList () {
//     const [restoList, setRestoList] = useState([]);
//     useEffect(() => {
//         axiosWithAuth()
//         .get(restosApi)
//         .then(response => {
//             console.log(response);
//             setRestoList(response.data.restaurants)
//         })
//         .catch(error => {
//             console.log(error.message)
//         })
//     }, [])

//     return (
//         <div className='restoList'> 
//             {
//                 restoList.map(resto => (     
//                 <RestoDetail id={resto.id}
//                 name={resto.name}
//                 description={resto.description}/>
//                 ))
//             }
//         </div>
//     )
// };

