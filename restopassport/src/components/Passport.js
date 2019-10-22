import React from "react";
// import axiosWithAuth from "../helpers/axiosWithAuth";
import * as actionCreators from "../state/actionCreators";
import { connect } from "react-redux";

const Passport = props => {
    // actionCreators.getUser();
    // console.log(props)

  return (
    <div>
      <h3>My Passport</h3>
      {/* <h3>Current City: `${props.city}`</h3> */}
      {/* <RestoList /> */}
    </div>
  );
};

export default connect(
  state => state,
  actionCreators
)(Passport);
