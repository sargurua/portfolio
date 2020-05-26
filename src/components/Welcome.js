import React from 'react'

import FadeIn from 'react-fade-in';

class Welcome extends React.Component {
    divStyling = {
        /* The image used */
        backgroundImage: `url("./images/code_background")`,

        /* Add the blur effect */
        filter: 'blur(8px)',
        webkitFilter: 'blur(8px)',

        /* Full height */
        height: '100%',

        /* Center and scale the image nicely */
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    elementStyling = {
        backgroundColor: 'rgb(0,0,0)',/* Fallback color */
        backgroundColor: 'rgba(0,0,0, 0.4)', /* Black w/opacity/see-through */
        color: 'white',
        fontWeight: 'bold',
        border: '3px solid #f1f1f1',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '2',
        width: '80%',
        padding: '20px',
        textAlign: 'center'
    }
    render() {
        return (
                <div style ={this.divStyling}>
                    <FadeIn delay={150}>
                        <h1 style={this.elementStyling}>Avinash Sarguru</h1>
                        <br/>
                        <h4 style={this.elementStyling}>Fullstack Developer</h4>
                        <br/>
                        <h4 style={this.elementStyling}>Freelancer</h4>
                        <br/>
                        <h4 style={this.elementStyling}>Basketball Enthusiast</h4>
                    </FadeIn>
                </div>
        )
    }
}

export default Welcome