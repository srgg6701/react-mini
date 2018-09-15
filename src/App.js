import React from 'react'
import './components/debug'
import { Route } from 'react-router-dom'
import ThemeContext from './components/Theme'
import Menu from './Menu'
import Default from './components/Default'
import Home from './components/Home'
import Routing from './components/Routing'

const App = () => {
  return (
    <React.Fragment>
      <Menu />
      <Route path='/' exact component={Default} />
      <Route path='/home' exact component={Home} />
      <Route path='/routing' component={Routing} />
      <Route path='/context' component={ThemeContext} />
    </React.Fragment>
  )
}

export default App