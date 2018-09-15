import React from 'react'
import './components/debug'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Toolbar, value, ThemeContext } from './components/Theme'
import Home from './components/Home'
import Default from './components/Default'

console.log({ BrowserRouter, Route, Link, Default });

const App = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/default">Default</Link>
        </li>
      </ul>
      <h1>Hello, Dude!</h1>
      <Route path='/home' exact component={Home} />
      <Route path='/default' component={Default} />
    </React.Fragment>
  )
}

export default App