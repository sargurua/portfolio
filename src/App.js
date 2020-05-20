import React from 'react';
import './App.css';

import Fade from 'react-reveal/Fade'

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

  render() {
    return (
      <div className="App" style={{height: '100%'}}>
        {this.state.openPortfolio ?
        <Fade bottom>
          <Portfolio/>
        </Fade>
        :
        <TerminalAnimation changeOpenPortfolio={this.changeOpenPortfolio}/>
      }
      </div>
    );
  }
}

export default App;
