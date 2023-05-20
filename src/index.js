import React from 'react'
import ReactDOM from 'react-dom'

function Page () {
  return (
    <ol>
      <li>I am excited to learning React</li>
      <li>Because it is the most using framework</li>
      <li>And to a better developer</li>
    </ol>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))