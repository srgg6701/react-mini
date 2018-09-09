import React from 'react'

const Toolbar = props => (<HandleBar cl="ultraviolet" />)
const HandleBar = props => (<Button classNm={props.cl} />)
const Button = props => (<button className={props.classNm}>Btn</button>)

const App = () => {
  return (
    <React.Fragment>
      <h3>Hello World!</h3>
      <Toolbar theme="dark" />
    </React.Fragment>
  )
}

export default App