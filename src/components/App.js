import React from 'react'

const Toolbar = theme => {
  return (<HandleBar {...theme} />)
}
const HandleBar = theme => {
  return(
    <Button {...theme}></Button>
  )
}
const Button = ({btnTheme, btnText}) => (<button className={btnTheme}>{btnText}</button>)

const App = () => {
  var theme = {btnTheme:"dark", btnText:"Push me"};
  return (
    <React.Fragment>
      <h3>Hello World!</h3>
      <Toolbar {
        // is equal to theme = {<deconstruction:> theme }
        // notice, that this cannot be put as {btnTheme:"dark", btnText:"Push me"} !
        // so that's why the deconstruction is needed here
        ...theme
      } />
    </React.Fragment>
  )
}

export default App