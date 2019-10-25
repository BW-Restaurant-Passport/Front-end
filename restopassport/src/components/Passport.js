import React from "react";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";
import RestoList from "./RestoList";
import { Typography } from 'antd';

const { Title } = Typography;

const Passport = props => {
    // actionCreators.getUser();
    // console.log(props)

  return (
    <div>
      <Title  level={3} > My Passport </Title>
      {/* <h3>Current City: `${props.city}`</h3> */}
      <RestoList />
      <div>
          
      </div>
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(Passport);
