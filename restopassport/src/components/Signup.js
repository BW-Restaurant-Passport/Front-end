import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    city: "",
    password: "",
    passwordConfirm: ""
  };

  //   const onSubmit = formValues => {
  //     axios
  //       .post(url, formValues)
  //       .then(response => {
  //         const token = response.data.payload;
  //         localStorage.setItem("token", reponse.data.token);
  //         props.history.push("/passport");
  //       })
  //       .catch(error => {
  //         console.log(error.message);
  //       });
  //   };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username required"),
    city: yup.string().required("Please enter your city"),
    email: yup
      .string()
      .email()
      .required("Email required"),
    password: yup
      .string()
      .required("Please enter a valid password")
      .min(8, "Password should be a minimum of 8 characters")
      .matches(/(?=.*[0-9])/, "Password must contain a number"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please confirm password")
  });

  return (
    <>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        // onSubmit={onSubmit}
        validationSchema={validationSchema}
        render={props => (
          <Form>
            <div>
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <Field name="city" type="text" placeholder="City" />
              <ErrorMessage name="city" component="div" />
            </div>
            <div>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit">Sign Up</button>
          </Form>
        )}
      />
    </>
  );
};

export default Signup;
