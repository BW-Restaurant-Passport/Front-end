import React from 'react';
import RestoDetail from './RestoDetail';

function RestoList () {

    render (
        <div className='restoList'> 
            {
                restos.map(resto => {     
                <RestoDetail resto={resto}/>
                })
            }
        </div>
    )
}