import React from 'react'

const Toolbar = () => {
    return <HandleBar />
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
  const Button = (props) => {
    return (<button className={props.class_name}>{props.text}</button>)
  }
  
  const value = { class_name: "dark", text: "Push me" };
  const ThemeContext = React.createContext(value)

export default () =><ThemeContext.Provider value={value}><Toolbar /></ThemeContext.Provider>
