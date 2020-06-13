import React from 'react'

import AuthThumbnail from '../images/auth_backend.png'
import HoopThumbnail from '../images/wehoopin-thumbnail.png'
import EventThumbnail from '../images/wegoin-thumbnail.png'

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
                            img={AuthThumbnail}
                            title='Freelance Oauth Backend'
                            body='Freelance project to create User login, logout, edit, sign up, and tokenization API. Made using Rails with Devise and JWT.'
                            author='Ruby on Rails, Devise, JWT, API' 
                        />
                        <Card
                            img={HoopThumbnail}
                            title='WeHoopin'
                            body='NodeJS and React Application. NBA application that showed summarization of the previous days top performers and best games. Also used algorithmic computation to predict teams true records.'
                            author='NodeJs, Express, React, Redux' 
                        />
                        <Card
                            img={EventThumbnail}
                            title='Event Scheduler'
                            body='Ruby on Rails application. Allowed users to create events, users could then see all events that have not passed and join them. Allowed users to friend request other users to see all their events.'
                            author='Ruby on Rails, JWT, Devise' 
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