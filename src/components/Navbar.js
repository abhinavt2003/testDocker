import React from 'react'
import './Navbar.css'
import Login from './Login'

export default function Navbar({onLoginClick}) {
  return (
    <div>
      <header>
        <div className="logo">Docker as a Service</div>
        <nav>
          <a href="/register">Register</a>
          <a href="/login" onClick={onLoginClick}>Login</a>
          <a href="/docs">Docs</a>
        </nav>
      </header>
    </div>
  )
}
