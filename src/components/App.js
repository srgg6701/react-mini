import React from 'react'

function Toolbar(props) {
  // The Toolbar component must take an extra "theme" prop
  // and pass it to the ThemedButton. This can become painful
  // if every single button in the app needs to know the theme
  // because it would have to be passed through all components.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

function ThemedButton(props) {
  return <Button theme={props.theme} />;
}

function Button(props) {
  return <button data-theme={props.theme}>Push me</button>
}

const App = () => {
  return (
    <React.Fragment>
      <h3>Hello World!</h3>
      <Toolbar theme="dark" />
    </React.Fragment>
  )
}

export default App