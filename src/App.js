import './App.css';
// import Home from './component/Home';
// import About from './component/About';
// import {Route,Switch} from 'react-router-dom';
// import Error from './component/Error';
// import Menu from './component/Menu';
// import Form from './component/Form';
import LifecycleA from './component/LifecycleA'

function App() {
  return (
    <div className="App">
      {/* <main>
        <Menu/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
          <Route component={Error}></Route>
        </Switch>
      </main> */}
      {/* <Form></Form> */}
      <LifecycleA />
    </div>
  );
}

export default App;
