import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import { Popover, Button, Typography } from 'antd';
import styled from 'styled-components';
import { Card } from 'antd';

const { Meta } = Card;
const { Title } = Typography;

const content = (
  <div>
    <p>the best restaurant in the world</p>
    <p>only the best of reviews</p>
  </div>
);

const StyledGrid = styled.div`
    display: flex,
    flex-direction: column
    align-text: center
`

export function RestoCard ({resto, deleteResto, state , getRestosDetails}) { 
    
    return (
        <StyledGrid className='restocard' resto={resto} key={resto.restID}>
            <div>
                <Button type="danger" onClick={() => {deleteResto(state, resto.restID)}}>X</Button>
            </div>
            <br></br>
            <div>
                <Button theme="dark" onClick={ () => {getRestosDetails(resto.restID)}}>GET DETAILS</Button>
            </div> 
            <br></br>
            <div>
            <Popover content={content} title="Reviews">
                <Button type="primary">{resto.restName}</Button>
                <Title  level={4}>{resto.restName}</Title>
            </Popover>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="fancy restaurant" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Italian Restaurant" description="finest restaurant in Florida" />
            </Card>
                {/* <p onClick={onHandleStamp} >Add Stamp</p> */}
                
            </div>
        </StyledGrid>


    )
}


export default connect(
    state => state,
    actionCreators
) (RestoCard);