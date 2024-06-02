// Register.js
import React from 'react';
import './Register.css';
import DockerIMG from './DockerIMG'

const Register = () => {
  return (
    <div className="register">
        <div className="logo-section">
          <div className="logo-box">
            <a href='https://docs.docker.com'><DockerIMG/></a>
            <p>Docker Logo with some cool stuff</p>
            <p>For more information visit <a href="https://docs.docker.com">docker docs</a></p>
          </div>
        </div>
        <div className="register-section">
          <div className="register-box">
            <h2>Register</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <p>
              If already have an account, <a href="/login">Login</a>
            </p>
          </div>
        </div>
    </div>
  );
};

export default Register;
