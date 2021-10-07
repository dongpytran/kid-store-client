import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/customers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
