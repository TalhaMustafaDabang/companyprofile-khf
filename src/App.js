import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
