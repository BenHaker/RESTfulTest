import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import SearchPerson from './components/SearchPerson';
import CreateRandomPerson from './components/CreateRandomPerson';
import CreatePerson from './components/CreatePerson'
import UpdatePerson from './components/UpdatePerson'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
            <div>
              <h2>Person App</h2>
              <ul className="list-group">
                <li className="list-group-item"><Link to="/search">Search</Link></li>
                <li className="list-group-item"><Link to="/create">Create New</Link></li>
                <li className="list-group-item"><Link to="/createRandon">Create Batch</Link></li>
              </ul>
            </div>
            <Route path="/search" component={ SearchPerson } />
            <Route path="/create" component={ CreatePerson } />
            <Route path="/createRandon" component={ CreateRandomPerson } />
            <Route path="/update" component={ UpdatePerson } />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;