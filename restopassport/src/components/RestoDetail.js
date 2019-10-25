import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

import { Typography, Button } from 'antd';
import { Descriptions } from 'antd';

const { Title } = Typography;

export function RestoDetail ({getRestosDetails, restoDetailsTwo}) {
    useEffect(() => {
     getRestosDetails(restoDetailsTwo.id);
    },[])

    return (
        <div className="restoDetail">

        <Descriptions title="Visit Our Restaurant">
        <Descriptions.Item label="Our Cuisine">
            <Title level={1}>{restoDetailsTwo.name}</Title>
        </Descriptions.Item>
            <Title  level={1}>{restoDetailsTwo.address}</Title>
            <Title  level={1}>{restoDetailsTwo.city}</Title>
            <Title  level={1}>{restoDetailsTwo.description}</Title>
            {/* <h2>{restos.name}</h2> */}
            {/* <p>{restos.description}</p> */}
        </Descriptions>
        <button 
            style={{ border: '1px solid black', backgroundColor: 'red'}}
            onClick={e => {
                debugger
                return document.querySelector('div .restoDetail').classList.toggle('visited')
            }}
        >Add Stamp</button>
    </div>

    )
}

export default connect(state => state,
actionCreators) (RestoDetail);