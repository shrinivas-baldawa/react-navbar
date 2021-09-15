import './App.css';
import home from './component/home';
import about from './component/about';
import {Route,Switch} from 'react-router-dom';
import error from './component/error';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route path="/" component={home} exact></Route>
          <Route path="/about" component={about}></Route>
          <Route component={error}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
