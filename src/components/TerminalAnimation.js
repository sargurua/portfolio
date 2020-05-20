import React, {Component} from 'react'
import Terminal from 'terminal-in-react'

class TerminalAnimation extends Component{
  showMsg = () => 'Hello World'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          hideTopBar={true}
          style={{ fontWeight: "bold", fontSize: "1em" }}
          startState='maximised'
          allowTabs={false}
          commands={{
            'why-cant-the-bulls-win': () => window.open('https://en.wikipedia.org/wiki/Jim_Boylen', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React'),
            'open-portfolio': () => this.props.changeOpenPortfolio()
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert',
            'why-cant-the-bulls-win': `find out why I think the bulls can't win right now`,
            'open-portfolio': 'see my portfolio'
          }}
          msg='Welcome to my portfolio, type help for options'
        />
      </div>
    );
  }
}

export default TerminalAnimation