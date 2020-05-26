import React from 'react';
import './App.css';

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
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `url(${Background})`
  };

  content = {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
