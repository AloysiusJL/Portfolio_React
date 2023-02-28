import React, { Component } from 'react';
import hero from './module/hero';
import about from './module/about';
import project from './module/project';
import mail from './module/mail';
import './style.css'

const Hero = hero
const About = about
const Project = project
const Mail = mail

class App extends Component{
  render(){
    return(
      <div className="App">
        <Hero />
        <About />
        <Project />
        <Mail />
    </div>  

    )
  }
}

export default App;
