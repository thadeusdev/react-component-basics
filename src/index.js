import React from 'react'
import ReactDOM from 'react-dom'

// - A component must return JSX (done!)
// - A component takes in one argument called "props", which is an object
// - The name of the function must start with a capital letter
function Card(props){
  // console.log(props)
  return (
    <div>
      <h1>{props.greeting}</h1>
      <h2>{props.subheader}</h2>
    </div>
  )
}

const element = (
  <div>
    <Card greeting="This is a component" subheader="wow" />   
  </div>
)

ReactDOM.render(element, document.getElementById('root'))