import React, { Component } from "react";
import { GoogleLogin } from "@react-oauth/google";
import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <form className="formbody">
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <p>
            By clicking Sign Up/ Log In, you agree to our{" "}
            <a href="/user-agreement">User Agreement</a> and{" "}
            <a href="/privacy-policy">Privacy Policy</a>
          </p>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

        <div className="forgot-password text-right">
          <a href="#"> Forgot password?</a>
        </div>
        <div className="forgot-password text-right">
          New User? <a href="#">Create an account</a>
        </div>

        <div className="social-login">
          Or continue with:
          <div>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          
          </div>
        </div>
      </form>
    );
  }
}
