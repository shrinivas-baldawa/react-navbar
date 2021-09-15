import './App.css';
import home from './component/home';
import about from './component/about';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/home" component={home}></Route>
          <Route path="/about" component={about}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
