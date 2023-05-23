import React from 'react'
import ReactDOM from 'react-dom'

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <img src={require("./logo/react-logo.png")} />
        <h1>React Facts</h1>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header