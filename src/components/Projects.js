import React from 'react'

import AuthThumbnail from '../images/thumbnails/auth_backend.png'
import HoopThumbnail from '../images/thumbnails/wehoopin-thumbnail.png'
import EventThumbnail from '../images/thumbnails/wegoin-thumbnail.png'
import WerewolfThumbnail from  '../images/thumbnails/werewolf-thumbnail.png'
import TpThumbnail from '../images/thumbnails/tp-thumbnail.png'
import ScoopThumbnail from '../images/thumbnails/scoop-thumbnail.png'
import RandomThumbnail from '../images/thumbnails/random-thumbnail.png'

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
                            img={WerewolfThumbnail}
                            body='Ruby on Rails and React application. Web application version of board game One Night Ultimate Werewolf. User played live action game that updated users to the interactions of other players on their own character.'
                            title='One Night Ultimate Werewolf'
                            author='Ruby on Rails, React, Action Cable, Websockets, API' 
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