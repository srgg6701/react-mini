import React from 'react'

const Toolbar = () => {
  return (<HandleBar />)
}
const HandleBar = () => {
  return (
    <ThemeContext.Consumer>
      {theme => <Button class_name={theme}></Button>}
    </ThemeContext.Consumer>
  )
}
const Button = ( props ) => {
  console.log(props);
  return (<button className={props.class_name}>Btn here</button>)
}
/* */

const ThemeContext = React.createContext({theme:'light'});

const App = () => {
  // var theme = { btnTheme: "dark", btnText: "Push me" };
  return (
    <React.Fragment>
      <h3>Hello World!</h3>
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

export default App