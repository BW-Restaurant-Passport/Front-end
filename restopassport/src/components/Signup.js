import React from "react";
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as yup from "yup";


const Signup = (props) => {
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

  const signUpApi = "https://build-restaurant-passport.herokuapp.com/users/register";

  const onSubmit = formValues => {
    axios
    .post(signUpApi, formValues)
    .then(
      props.history.push("/login")
    )
    .catch(error => {
      console.log(error.message)
    })
  }

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
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        render={props => (

        // <Form className="login-form">
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
        // </Form>
        )}
      />

    </>
  );
};

export default Signup;


// class NormalLoginForm extends React.Component {
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   };

//   render() {
//     return (
//       <Form className="login-form">
//         <Form.Item>
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Username"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input
//               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               type="password"
//               placeholder="Password"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           {getFieldDecorator('remember', {
//             valuePropName: 'checked',
//             initialValue: true,
//           })(<Checkbox>Remember me</Checkbox>)}
//           <a className="login-form-forgot" href="">
//             Forgot password
//           </a>
//           <Button type="primary" htmlType="submit" className="login-form-button">
//             Log in
//           </Button>
//           Or <a href="">register now!</a>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

