import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  return (
    <div className="login-box">
            <h2 className='login-header'>Login</h2>
            {/* <div className='login-input'> */}
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
            {/* </div> */}
            <button className='login-button'>Login</button>
            <p>
              If already have an account, <a href="/login">Login</a>
            </p>
          </div>
  );
}