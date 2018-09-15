import React from 'react'
import './components/debug'
import {Toolbar, value, ThemeContext} from './components/Theme'
import Home from './components/Home'

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
      <hr/>
      <Home />
    </React.Fragment>
  )
}

export default App