import React, { Component } from 'react';
import UserList from './component/UserList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <UserList/>
         
        </header>
      </div>
    );
  }
}

export default App;
