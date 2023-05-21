import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function Header() {
  return (
    <header>
      <nav className='navbar'>
        <img src={require("./logo/react-logo.png")} />
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
    <div className='main-content'>
      <h1>React Fun Facts</h1>
      <ol className='list-item'>
        <li>React is a JavaScript-based UI development library</li>
        <li>Facebook and an open-source developer community run it</li>
        <li>
          Although React is a library rather than a language, it is widely used
          in web development.
        </li>
        <li>
          The library first appeared in May 2013 and is now one of the most
          commonly used frontend libraries for web development
        </li>
        <li>
          Jordan Walke, a software engineer at Facebook, founded the library in
          2011, giving it life.
        </li>
        <li>
          React's newsfeed was its debut application in 2011. Later, Instagram
          picks it up and incorporates it into their platform.
        </li>
      </ol>
    </div>
  );
}

function Footer () {
return (
  <footer className='footer'>
    <small> © 2023 All Right Reserved by Chotu Marandi</small>
  </footer>
);
}

function Page () {
  return (
    <div className='main-container'>
      <div className='wrapper'>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'))