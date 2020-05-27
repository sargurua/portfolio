import React from 'react'

import Fade from 'react-reveal/Fade'

class About extends React.Component {

    divStyle = {
        backgroundColor: 'white',
        height: '100vh'
    }

    h2Style = {
        borderBottom: '.5vh solid #4EC9B0',
        backgroundColor: '#1a1a1a',
        height: '20%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 0 4px'
    }
    render () {
        return (
            <div style={this.divStyle}>
                <Fade bottom>
                    <div style={this.h2Style}>
                        <h2 style={{color: '#DCDCAA'}}>About Me</h2>
                    </div>
                    <br/>
                    <p style={{color: '#DCDCAA', marginTop: '10vh', marginLeft: '3vh', marginRight: '3vh', fontSize: '150%'}}>
                        Full stack web developer with experience in Ruby, JavaScript, C++, and Java. I got a Bachelor's in Computer Science from Northern Illinois University and studied Software Engineering at the Flatrion School in Chicago. I have passion for creating web applications on both the front and backend.
                    </p>
                    <p style={{color: '#DCDCAA', marginTop: '5vh', fontSize: '150%', marginLeft: '3vh', marginRight: '3vh'}}>
                        I have experience working with projects in a freelance and personal setting. Solving problems and making them look pretty to the user is what makes development fun for me.
                    </p>
                    <p style={{color: '#DCDCAA', marginTop: '5vh', fontSize: '150%', marginLeft: '3vh', marginRight: '3vh'}}>
                        Most important, Bulls fan for life.
                    </p>
                </Fade>
            </div>
        )
    }
}

export default About