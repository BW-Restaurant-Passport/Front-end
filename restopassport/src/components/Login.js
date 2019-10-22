import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserDetails, setFormDetails } from "../state/actionCreators";
// import axiosWithAuth from "../helpers/axiosWithAuth";

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
        const token = response.data.payload;
        localStorage.setItem("token", token);
        props.history.push("/passport");
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username required"),
    password: yup.string().required("Password required")
  });

  return (
    <>
      <h1>Log In</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        render={props => (
          <Form>
            <div>
              <Field name="username" type="text" placeholder="Username"  />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Log In</button>
          </Form>
        )}
      />
    </>
  );
};

export default Login;


