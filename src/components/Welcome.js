import React from 'react'

import FadeIn from 'react-fade-in';
import Button from 'react-bootstrap/Button'

class Welcome extends React.Component {
    divStyling = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }

    elementStyling = {
        color: '#DCDCAA',
        textAlign: 'left',
        paddingLeft: '5vh',
        margin: '0'
    }

    h1Styling = {
        margin: '1vh 0vh 1vh'
    }

    render() {
        return (
                <div style ={this.divStyling}>
                    <div style={this.elementStyling}>
                        <FadeIn delay={300}>
                            <h1 style={this.h1Styling}>Hey, I'm Avinash Sarguru</h1>
                            <br/>
                            <h4 style={this.h1Styling}>>Fullstack Developer</h4>
                            <br/>
                            <h4 style={this.h1Styling}>>Freelancer</h4>
                            <br/>
                            <h4 style={this.h1Styling}>>Basketball Enthusiast</h4>
                        </FadeIn>
                    </div>
                    <Button variant="outline-info">Info</Button>{' '}
                </div>
        )
    }
}

export default Welcome