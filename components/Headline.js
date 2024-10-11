import React from 'react'

const Headline = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>pages/{props.page}.js</h2>
    </div>
  )
}

export default Headline
