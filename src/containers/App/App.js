import React, { Component } from 'react';
import './App.css';
import Navigation from '../../components/Navigation/Navigation'
import Home from '../../components/Home/Home'
import Projects from '../../components/Projects/Projects'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation/>
      <Home
      id="home"
      ></Home>
      <Projects
      id="projects"
      >
      </Projects>

      {this.props.children}
      </div>
    );
  }
}

export default App;
