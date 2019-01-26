import React, { Component } from 'react';
import './App.css';
import Navigation from '../../components/Navigation/Navigation'
import Home from '../../components/Home/Home'
import Projects from '../../components/Projects/Projects'
import About from '../../components/about/About'
import Contact from '../../components/Contact/Contact'
import NasaAPI from '../../components/FetchApi/FetchApi'
import "react-responsive-carousel/lib/styles/carousel.min.css";



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
      <About
      id="about"
      >
      </About>
     
        <NasaAPI></NasaAPI>
      <Contact></Contact>



      {this.props.children}
      </div>
    );
  }
}

export default App;
