import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { GoogleLogin } from "@react-oauth/google";
import Alert from 'react-bootstrap/esm/Alert';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const fullName = formData.get('fullName');
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirm_password = formData.get('confirmPassword');

        try {
            const response = await axios.post('http://localhost:5000/register', {
                fullName,
                username,
                email,
                password,
                confirm_password,
            });
            const { data } = response;
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            navigate('/', { replace: true })
            
        } catch (error) {
            setErrors(error.response.data.msg || 'An error occurred while processing your request.');
        }
    };

    return (
        <Container className='col-xs-12 col-ms-9 col-lg-6 col-xl-4' style={{ marginTop: 40, marginBottom: 100 }}>
            <Form className='d-flex' style={{ flexDirection: 'column' }} onSubmit={handleSubmit}>
                <h2 className='mb-4' style={{ textAlign: 'center', color: 'tomato' }}>Register</h2>
                {errors.length > 0 &&
                <Alert variant='danger'>
                    {errors}
                </Alert>
                }

                <Form.Group className="mb-3" controlId="formGroupFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" placeholder="Enter Your Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter Your User Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" />
                </Form.Group>

                <Button type="submit" variant='outline-primary col-6' style={{ alignSelf: 'center' }}>Sign Up</Button>

                <Form.Text className='mt-4' style={{ alignSelf: 'center' }}>
                    Already have an Account? {" "}
                    <Link to={"/login"} style={{color: 'tomato'}}>SignIn</Link>
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
                    />
                  </div>
            </Form>
        </Container>
    );
};

export default SignUp;
