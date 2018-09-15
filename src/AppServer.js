import Loadable from 'react-loadable';

const AsyncComponent = Loadable({
  loader: () => import("./SomeComponent"),
  loading: () => <div>loading...</div>,
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dude, this is the Server</h1>
        <AsyncComponent/>
      </div>
    );
  }
}