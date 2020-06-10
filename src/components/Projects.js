import React from 'react'

import Card from './Card'
import Fade from 'react-reveal/Fade'

class Projects extends React.Component {
    render() {
        return (
            <div style={{height: '100vh', backgroundColor: '#1a1a1a',}}>
                <Fade bottom>
                    <h2 style={{color: '#4EC9B0', borderBottom: '.5vh solid #4EC9B0'}}>Projects</h2>
                    <div className='cards'>
                        <Card
                            img='https://picsum.photos/id/54/400/300'
                            title='What I learned from my visit to The Upside Down'
                            author='Nancy Wheeler' 
                        />
                        <Card
                            img='https://picsum.photos/id/54/400/300'
                            title='What I learned from my visit to The Upside Down'
                            author='Nancy Wheeler' 
                        />
                                                <Card
                            img='https://picsum.photos/id/54/400/300'
                            title='What I learned from my visit to The Upside Down'
                            author='Nancy Wheeler' 
                        />
                                                <Card
                            img='https://picsum.photos/id/54/400/300'
                            title='What I learned from my visit to The Upside Down'
                            author='Nancy Wheeler' 
                        />
                                                <Card
                            img='https://picsum.photos/id/54/400/300'
                            title='What I learned from my visit to The Upside Down'
                            author='Nancy Wheeler' 
                        />
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Projects