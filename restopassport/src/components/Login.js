import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
import styled from 'styled-components';
import { Typography } from 'antd';
// import { useDispatch, useSelector } from "react-redux";
// import { setUserDetails, setFormDetails } from "../state/actionCreators";
// import axiosWithAuth from "../helpers/axiosWithAuth";

const { Title } = Typography;
const StyledForm = styled(Form)`
  padding-left: 35%;
`
;

const StyledInput = styled(Field)`
  padding: 1rem;
  font-size: 16px;
  width: 50%;
  display: block;
  align: center;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
  border: 1px solid #ccc;
`
;

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 16px;
  width: 50%;
  display: block;
  align: center;
  text-align: center;
  vertical-align: middle;
  border-radius: 4px;
  border: 1px solid #ccc;
`
export const Login = props => {
  const initialValues = {
    username: "",
    password: ""
  };

  const loginApi =
    "https://build-restaurant-passport.herokuapp.com/users/login";

  const onSubmit = formValues => {
    axios
      .post(loginApi, formValues)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        props.history.push("/passport");
      })
      .catch(error => {
        console.log(error.message);
        alert("invalid credentials")
      });
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username required"),
    password: yup.string().required("Password required")
  });

  return (
    <>
      <Title  level={1}>Log In</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        render={props => (
          <StyledForm>
            <div>
              <StyledInput name="username" type="text" placeholder="Username"  />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <StyledInput name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <StyledButton type="submit">Log In</StyledButton>
          </StyledForm>
        )}
      />
    </>
  );
};

export default Login;


