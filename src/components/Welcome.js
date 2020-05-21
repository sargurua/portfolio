import React from 'react'

import FadeIn from 'react-fade-in';

class Welcome extends React.Component {
    divStyling = {
        display: 'flex', 
        margin: '0',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        minHeight: '90vh',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: 'left'
    }
    elementStyling = {
        margin: '0',
        color: 'E9E8ED',
        textAlign: 'left'
    }
    render() {
        return (
            <div style={this.divStyling}>
                <FadeIn delay={150}>
                    <h1 style={this.elementStyling, {textAlign: 'left', marginBottom: "3vh", marginLeft: "15vh"}}>Avinash Sarguru</h1>
                    <br/>
                    <h4 style={this.elementStyling, {marginLeft: "15vh"}}>Fullstack Developer</h4>
                    <br/>
                    <h4 style={this.elementStyling, {marginLeft: "15vh"}}>Freelancer</h4>
                    <br/>
                    <h4 style={this.elementStyling, {marginBottom: "15vh", marginTop: "0", marginLeft: "15vh"}}>Basketball Enthusiast</h4>
                </FadeIn>
            </div>
        )
    }
}

export default Welcome