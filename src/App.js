import './App.css';
import Home from './component/Home';
import About from './component/About';
import {Route,Switch} from 'react-router-dom';
import Error from './component/Error';
import Menu from './component/Menu';

function App() {
  return (
    <div className="App">
      <main>
        <Menu/>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
          <Route component={Error}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
