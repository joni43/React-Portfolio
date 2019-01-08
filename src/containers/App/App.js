import React, { Component } from 'react';
import './App.css';
import Navigation from '../../components/NavigationBar'
import Projects from '../../containers/Projects/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      {this.props.children}
      </div>
    );
  }
}

export default App;
