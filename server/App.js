import React from 'react'
import { Route, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from '../src/components/Home'
import Hello from '../src/components/Hello'
import Bye from '../src/components/Bye'

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('Did mount', { this: this, props: props });
  }
  componentDidMount() {
  }
  render() {
    return (
      <ServerRouter>
        <React.Fragment>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Hello'>Hello</Link>
            </li>
            <li>
              <Link to='/Bye'>Bye</Link>
            </li>
          </ul>
          <hr />
          <Route path='/' exact component={Home} />
          <Route path='/Hello' component={Hello} />
          <Route path='/Bye' component={Bye} />
        </React.Fragment>
      </ServerRouter>
    )
  }
}

export default App