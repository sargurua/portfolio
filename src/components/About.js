import React from 'react'

import "../css/Icon.css"

import Fade from 'react-reveal/Fade'

class About extends React.Component {

    divStyle = {
        backgroundColor: '#1a1a1a',
        height: '100vh'
    }

    h2Style = {
        backgroundColor: '#DCDCAA',
        height: '13%%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 0 20px 20px'
    }

    lineStyle = {
        backgroundImage: 'linear-gradient(#4EC9B0, #4EC9B0)',
        backgroundSize: '2px 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        height: '100%'
    }

    columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: '1',
        marginTop: '5vh',
        alignItems: 'center'
    }
    render () {
        return (
            <div style={this.divStyle}>
                <Fade bottom>
                    <div style={this.h2Style}>
                        <h2 style={{color: '#4EC9B0', borderBottom: '.5vh solid #4EC9B0'}}>About Me</h2>
                    </div>
                    <br/>
                    <p style={{color: '#DCDCAA', marginTop: '5vh', marginLeft: '3vh', marginRight: '3vh', fontSize: '110%'}}>
                        Full stack web developer with experience in Ruby, JavaScript, C++, and Java. I got a Bachelor's in Computer Science from Northern Illinois University and studied Software Engineering at the Flatrion School in Chicago. I have passion for creating web applications on both the front and backend.
                    </p>
                    <p style={{color: '#DCDCAA', marginTop: '5vh', fontSize: '110%', marginLeft: '3vh', marginRight: '3vh'}}>
                        I have experience working with projects in a freelance and personal setting. Solving problems and making them look pretty to the user is what makes development fun for me.
                    </p>
                    <p style={{color: '#DCDCAA', marginTop: '5vh', fontSize: '110%', marginLeft: '3vh', marginRight: '3vh'}}>
                        Most important, Bulls fan for life.
                    </p>
                </Fade>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
                    <div style={this.columnStyle}>

                    </div>
                    <div style={this.columnStyle}>
                        <h4 style={{color: '#4EC9B0', borderBottom: '.3vh solid #4EC9B0', width: '70%'}}>Technologies</h4>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '2vh'}}>
                            <p><a href="https://guides.rubyonrails.org/" target="_blank"><img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png" /></a></p>
                            <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img class="js-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/OttawaJS.svg/240px-OttawaJS.svg.png" /></a></p>
                            <p><a href="https://nodejs.org/en/docs/" target="_blank"><img class="node-icon" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" /></a></p>
                            <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img class="css-icon" src="https://img.icons8.com/color/144/000000/css3.png"/></a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About