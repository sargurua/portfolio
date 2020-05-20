import React from 'react'

import Fade from 'react-reveal'

class Welcome extends React.Component {
    divStyling = {
        display: 'flex', 
        margin: '0',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        minHeight: '100vh',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    elementStyling = {
        margin: '0',
        color: 'white'
    }
    render() {
        return (
            <div style={this.divStyling}>
                <Fade bottom>
                    <h1 style={this.elementStyling, {marginBottom: "3vh", marginLeft: "15vh"}}>Avinash Sarguru</h1>
                    <br/>
                    <h4 style={this.elementStyling, {marginLeft: "15vh"}}>Fullstack Developer</h4>
                    <br/>
                    <h4 style={this.elementStyling, {marginLeft: "15vh"}}>Freelancer</h4>
                    <br/>
                    <h4 style={this.elementStyling, {marginBottom: "15vh", marginTop: "0", marginLeft: "15vh"}}>Basketball Enthusiast</h4>
                </Fade>
            </div>
        )
    }
}

export default Welcome