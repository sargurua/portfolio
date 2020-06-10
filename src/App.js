import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import Background from './images/code_background_blur.png'

import TerminalAnimation from './components/TerminalAnimation';
import Portfolio from './components/Portfolio'

class App extends React.Component {
  state = {
    openPortfolio: true
  }

  changeOpenPortfolio = () => {
    this.setState({
      openPortfolio: true
    })
  }

  sectionStyle = {

  };

  content = {
    height: '100%',
    width: '100%',
    overlfow: 'hidden'
  };

  render() {
    return (
      <div className="App" style={this.sectionStyle}>
        <div style={this.content}>
          {this.state.openPortfolio ?
            <Portfolio/>
          :
            <TerminalAnimation changeOpenPortfolio={this.changeOpenPortfolio}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
