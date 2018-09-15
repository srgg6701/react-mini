import React from 'react'

const App = () => {
  return (
    <React.Fragment>
      <h3>Hello World!</h3>
      <p>Look, we don't need to pass <em>props</em> as an argument down the hierarchy anymore!</p>
      <p>Moreover, no matter which argument name we pass to <b>HandleBar</b> children.</p>
    </React.Fragment>
  )
}

export default App