import React from "react";

import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from "formik";


import Login from './Login'
import axios from "axios";
import * as yup from "yup";
import { Typography } from 'antd';
import styled from 'styled-components';


const { Title } = Typography;

const StyledForm = styled(Form) `
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

const StyledLoginButton = styled.button`
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
const Signup = props => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };


  const signUpApi = "https://build-restaurant-passport.herokuapp.com/users/register";

  const onSubmit = formValues => {
    const {confirmPassword, ...rest} = formValues
    console.log('rest', rest);
    axios
    .post(signUpApi, rest)
    .then(() => {
       props.history.push("/login")
      })
    .catch(error => {
      console.log(error.message)
    })
  }

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username required"),
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

  const onDirect= () => {

    props.history.replace('/login');
  }

  return (
    <>
      <Title  level={1}>Sign Up</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        render={props => (

          <StyledForm>

            <div>
                <StyledInput name="username" type="text" placeholder="Username" />

                <ErrorMessage name="username" component="div" />
            </div>
        

            {/* <div>
              <Field name="city" type="text" placeholder="City" />
              <ErrorMessage name="city" component="div" />
            </div> */}
            <div>
              <StyledInput name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <StyledInput name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <StyledInput
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>

  
             <StyledButton type="submit">Sign Up</StyledButton>
            <br></br>
            <br></br>

        <StyledButton onClick={onDirect}>
          Log In
        </StyledButton>
          </StyledForm>

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

