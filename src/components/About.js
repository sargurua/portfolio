import React from 'react'

class About extends React.Component {

    divStyle = {
        backgroundColor: 'white',
        height: '100vh'
    }

    h2Style = {
        textDecoration: 'underline'
    }
    render () {
        return (
            <div style={this.divStyle}>
                <h2 style={this.h2Style}>About Me</h2>
            </div>
        )
    }
}

export default About