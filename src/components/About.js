import React from 'react'

import "../css/Icon.css"

import Fade from 'react-reveal/Fade'

class About extends React.Component {

    divStyle = {
        backgroundColor: '#1a1a1a',
        height: '100vh'
    }

    h2Style = {
        backgroundColor: '#1a1a1a',
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
                        <h4 style={{color: '#4EC9B0', borderBottom: '.3vh solid #4EC9B0', width: '70%'}}>Education</h4>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '5vh', height: '33%'}}>
                            <p><img class='gcap-icon' src="https://www.pngfind.com/pngs/m/23-236225_educated-blue-graduation-cap-icon-png-transparent-png.png"/></p>
                        </div>

                    </div>
                    <div style={this.columnStyle}>
                        <h4 style={{color: '#4EC9B0', borderBottom: '.3vh solid #4EC9B0', width: '70%'}}>Proficiencies</h4>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '5vh', height: '33%'}}>
                            <p><a href="https://guides.rubyonrails.org/" target="_blank"><img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png" /></a></p>
                            <p><a href="https://nodejs.org/en/docs/" target="_blank"><img class="node-icon" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" /></a></p>
                            <p><a href="https://reactjs.org/" target="_blank"><img class="react-icon" src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" /></a></p>
                            <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img class="js-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/OttawaJS.svg/240px-OttawaJS.svg.png" /></a></p>
                            <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><img class="css-icon" src="https://img.icons8.com/color/144/000000/css3.png"/></a></p>
                            <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><img class="html-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"/></a></p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', marginTop: '0vh', height: '33%'}}>
                            <p><a href="https://docs.oracle.com/en/java/" target="_blank"><img class="java-icon" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"/></a></p>
                            <p><a href="https://devdocs.io/cpp/" target="_blank"><img class="cplus-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png"/></a></p>
                            <p><a href="https://docs.python.org/3/" target="_blank"><img class="python-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"/></a></p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <p><a href="https://www.postgresql.org/docs/" target="_blank"><img class="post-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"/></a></p>
                            <p><a href="https://www.postgresql.org/docs/" target="_blank"><img class="mongo-icon" src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"/></a></p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About