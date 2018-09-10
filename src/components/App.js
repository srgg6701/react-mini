import React from 'react'

const Toolbar = () => {
  return (<HandleBar />)
}
const HandleBar = () => {
  return (
    <ThemeContext.Consumer>
      {someprops => <Button {...someprops}></Button>}
    </ThemeContext.Consumer>
  )
}
const Button = ( props ) => {
  console.log(props);
  return (<button className={props.class_name}>{props.text}</button>)
}

const value = { class_name: "dark", text: "Push me" };
const ThemeContext = React.createContext(value);

const App = () => {
  return (
    <React.Fragment>
      <h3>Hello World!</h3>
      <p>Look, we don't need to pass <em>props</em> as an argument down the hierarchy anymore!</p>
      <p>Moreover, no matter which argument name we pass to <b>HandleBar</b> children.</p>
      <hr />
      <ThemeContext.Provider value={value}>
        <Toolbar />
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

export default App