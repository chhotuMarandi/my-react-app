import React from 'react'
import ReactDOM from 'react-dom'

const Elm = (
  <div>
  <img src="logo.png" alt="" width={200} height={200}/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>was first released in 2013</li>
      <li>was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise app, including mobile apps</li>
    </ul>
  </div>
)

ReactDOM.render(Elm, document.getElementById('root'))