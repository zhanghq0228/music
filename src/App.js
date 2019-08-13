import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "./application/Home";
import Recommend from "./application/Recommend";
import Leaderboard from "./application/Leaderboard";
import Search from "./application/Search"
;
function App() {
  return (
    <div className ="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/recommend" component={Recommend} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/search" component={Search} />
      </Router>
    </div>
  );
}

export default App;
