import React from 'react'

const Toolbar = () => {
  return (<HandleBar />)
}
const HandleBar = () => {
  return (
    <ThemeContext.Consumer>
      { // the name of arguments don't matter because it considers Provider data 
        someprops => <Button {...someprops}></Button>
      }
    </ThemeContext.Consumer>
  )
}
const Button = ( props ) => {
  return (<button className={props.class_name}>{props.text}</button>)
}

//const value = { class_name: "dark", text: "Push me" };
//const ThemeContext = React.createContext(value);
const ThemeContext = React.createContext({ class_name: "dark", text: "Push me" });
console.log(ThemeContext);
const App = () => {
  return (
    <React.Fragment>
      <h3>Hello World!</h3>
      <p>Look, we don't need to pass <em>props</em> as an argument down the hierarchy anymore!</p>
      <p>Moreover, no matter which argument name we pass to <b>HandleBar</b> children.</p>
      <hr />
      <ThemeContext.Provider value={ThemeContext._currentValue}>
        <Toolbar />
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

export default App