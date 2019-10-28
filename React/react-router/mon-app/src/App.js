import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import History from "./History";
import Headers from "./header";
function App() {
  return (
    <div className="App">
      <Headers />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/my-history" component={History} />
      </Switch>
    </div>
  );
}

export default App;
