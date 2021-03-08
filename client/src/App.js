import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Fibonacci Number Calculator
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
