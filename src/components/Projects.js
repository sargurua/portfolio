import React from 'react'

import Fade from 'react-reveal/Fade'

class Projects extends React.Component {
    render() {
        return (
            <div style={{height: '100vh', backgroundColor: '#1a1a1a',}}>
                <Fade bottom>
                    <h2 style={{color: '#4EC9B0', borderBottom: '.5vh solid #4EC9B0'}}>Projects</h2>
                </Fade>
            </div>
        )
    }
}

export default Projects