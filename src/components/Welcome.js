import React from 'react'

import Background from '../images/code_background_blur.png'

import FadeIn from 'react-fade-in';
import Button from 'react-bootstrap/Button'

class Welcome extends React.Component {
    divStyling = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${Background})`,
        overflow: 'hidden'
    }

    elementStyling = {
        color: '#DCDCAA',
        textAlign: 'left',
        paddingLeft: '5vh',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        width: '50%'
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
                    <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                        <p><Button style={{justifyContent: 'flex-end', marginTop: '20vh'}} variant="info">About Me</Button>{' '}</p>
                    </div>

                </div>
        )
    }
}

export default Welcome