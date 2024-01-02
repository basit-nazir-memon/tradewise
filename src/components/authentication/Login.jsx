import React, {useState} from "react";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/esm/Alert';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import "./Login.css";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  const { from } = location.state || { from: { pathname: '/' } };

  const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const email = formData.get('email');
      const password = formData.get('password');

      try {
          const response = await axios.post('http://localhost:5000/login', {
              email,
              password,
          });
          const { data } = response;
          if (response.status === 200) {
              localStorage.setItem('token', data.token);
              localStorage.setItem('role', data.role);
              localStorage.setItem('id', data.id);
              navigate(from, { replace: true });
              window.location.reload();
          }
      } catch (error) {
          setError(error.response.data.msg || 'An error occurred while processing your request.');
      }
  };


  return (
      <>
      <Form className='d-flex' style={{ flexDirection: 'column' }} onSubmit={handleSubmit}>
                  <h2 className='mb-4' style={{ textAlign: 'center', color: 'tomato' }}>Login</h2>
                  {error ? <Alert variant='danger'>{error}</Alert> : ''}
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Password" />
                      <Form.Text style={{ alignSelf: 'flex-end' }}>
                          <Link style={{color: 'tomato'}} to='/forgot-password'>Forgot password?</Link>
                      </Form.Text>
                  </Form.Group>

                  
                  <Form.Text className='mt-2' style={{ alignSelf: 'center' }}>
                      By clicking Sign Up/ Log In, you agree to our{" "}
                      <Link style={{color: 'tomato'}} to={"/user-agreement"}>User Agreement</Link> and{" "}
                      <Link style={{color: 'tomato'}} to={"/privacy-policy"}>Privacy Policy</Link>
                  </Form.Text>
                  <br />

                  <Button type="submit" variant='outline-primary col-6' style={{ alignSelf: 'center' }}>Sign In</Button>


                  <Form.Text className='mt-4' style={{ alignSelf: 'center' }}>
                    Not having an Account? {" "}
                    <Link to={"/register"} style={{color: 'tomato'}}>Sign Up</Link>
                  </Form.Text>

                  <Form.Text className='mt-3' style={{ alignSelf: 'center' }}>Or Continue with</Form.Text>
                  <div style={{ alignSelf: 'center' }}>
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        console.log(credentialResponse);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                      auto_select= {true}
                    />
                  </div>
        </Form>
      </>
  );
}


export default Login;