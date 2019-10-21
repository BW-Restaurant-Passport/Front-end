import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";

const Login = () => {
  const initialValues = {
    username: "",
    password: ""
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
    password: yup.string().required("Password required")
  });

  return (
    <>
      <h1>Log In</h1>
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
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button>Submit</button>
          </Form>
        )}
      />
    </>
  );
};

export default Login
