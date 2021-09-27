import './App.css';
import Home from './component/Home';
import About from './component/About';
import {Route,Switch} from 'react-router-dom';
import Error from './component/Error';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About} exact></Route>
          <Route component={Error}></Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;


