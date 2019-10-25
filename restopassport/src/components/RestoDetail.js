import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

import { Typography } from 'antd';
import { Descriptions } from 'antd';
const { Title } = Typography;

export function RestoDetail ({getRestosDetails, restoDetailsTwo}) {
    useEffect(() => {
     getRestosDetails();

    },[])

    return (
        <div className="restoDetail">
            <h1>{restoDetailsTwo.name}</h1>
        <Descriptions title="Explore Our Restaurant">
        <Descriptions.Item label="UserName">
            <Title level={1}>{restoDetailsTwo.name}</Title>
        </Descriptions.Item>
            <Title  level={1}>{restoDetailsTwo.address}</Title>
            <Title  level={1}>{restoDetailsTwo.city}</Title>
            <Title  level={1}>{restoDetailsTwo.description}</Title>
            {/* <h2>{restos.name}</h2> */}
            {/* <p>{restos.description}</p>
            <button>Add Stamp</button> */}
    </Descriptions>
    </div>
    )
}

export default connect(state => state,
actionCreators) (RestoDetail);