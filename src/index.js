import React from 'react'
import ReactDOM from 'react-dom'

function Page () {
  return (
    <div>
      <header>
        <nav>
          <img src={require("./logo/react-logo.png")} width={100} />
        </nav>
      </header>
      <h1>I am excited to learn React</h1>
      <ol>
        <li>I am excited to learning React</li>
        <li>Because it is the most using framework</li>
        <li>And to a better developer</li>
      </ol>
      <footer>
        <p> © All Right Reserved by Chotu Marandi</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'))