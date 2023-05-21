import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <img src={require("./logo/react-logo.png")} width={100} />
        <ul className = "nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent () {
  return (
    <div>
      <h1>React Fun Facts</h1>
      <ol>
        <li>
          React is Not a Framework. Even all of the expert React builders say
          that React is a Javascript framework
        </li>
        <li>Virtual DOM is faster than real DOM</li>
        <li>React Has a Strong Community</li>
      </ol>
    </div>
  );
}

function Footer () {
return (
  <footer>
    <small> © 2023 All Right Reserved by Chotu Marandi</small>
  </footer>
);
}

function Page () {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'))