import React from 'react'
import './components/debug'
import { Route } from 'react-router-dom'
import Menu from './Menu'
import Default from './components/Default'
import Children from './components/Children'
import Routing from './components/Routing'
import ThemeContext from './components/Theme'



const App = () => {
  return (
    <React.Fragment>
      <Menu />
      <Route path='/' exact component={Default} />
      <Route path='/children' exact component={Children} />
      <Route path='/routing' component={Routing} />
      <Route path='/context' component={ThemeContext} />
    </React.Fragment>
  )
}

export default App