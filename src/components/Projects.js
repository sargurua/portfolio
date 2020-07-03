import React from 'react'

import AuthModal from "./modals/AuthModal"
import HoopModal from "./modals/HoopModal"
import EventModal from "./modals/EventModal"

import AuthThumbnail from '../images/thumbnails/auth_backend.png'
import HoopThumbnail from '../images/thumbnails/wehoopin-thumbnail.png'
import EventThumbnail from '../images/thumbnails/wegoin-thumbnail.png'
import WerewolfThumbnail from  '../images/thumbnails/werewolf-thumbnail.png'
import TpThumbnail from '../images/thumbnails/tp-thumbnail.png'
import ScoopThumbnail from '../images/thumbnails/scoop-thumbnail.png'
import RandomThumbnail from '../images/thumbnails/random-thumbnail.png'

import Card from './Card'
import Fade from 'react-reveal/Fade'
import Modal from 'react-bootstrap/Modal'

class Projects extends React.Component {
    state =  {
        authShow: false,
        hoopShow: false,
        goShow: false
    }

    openAuth = () => {
        this.setState({
            authShow: true
        })
    }

    closeAuth = () => {
        this.setState({
            authShow: false
        })
    }

    openHoop = () => {
        this.setState({
            hoopShow: true
        })
    }

    render() {
        return (
            <div style={{backgroundColor: '#1a1a1a', width: '100%'}}>
                <Fade bottom>
                    <h2 style={{color: '#4EC9B0', borderBottom: '.5vh solid #4EC9B0'}}>Projects</h2>
                    <div className='cards'>
                        <Card
                            img={AuthThumbnail}
                            title='Freelance Oauth Backend'
                            body='Freelance project to create User login, logout, edit, sign up, and tokenization API. Made using Rails with Devise and JWT.'
                            author='Ruby on Rails, Devise, JWT, API' 
                            handleClick={this.openAuth}
                        />
                        <Card
                            img={HoopThumbnail}
                            title='WeHoopin'
                            body='NodeJS and React Application. NBA application that showed summarization of the previous days top performers and best games. Also used algorithmic computation to predict teams true records.'
                            author='NodeJs, Express, React, Redux, NBA API' 
                            handleClick={this.openHoop}
                        />
                        <Card
                            img={EventThumbnail}
                            title='Event Scheduler'
                            body='Ruby on Rails application. Allowed users to create events, users could then see all events that have not passed and join them. Allowed users to friend request other users to see all their events.'
                            author='Ruby on Rails, JWT, Devise'
                            handleClick={() => {this.setState({goShow: true})}} 
                        />
                        <Card
                            img={WerewolfThumbnail}
                            body='Ruby on Rails and React application. Web application version of board game One Night Ultimate Werewolf. User played live action game that updated users to the interactions of other players on their own character.'
                            title='One Night Ultimate Werewolf'
                            author='Ruby on Rails, React, Action Cable, Websockets, API' 
                        />
                        <Card
                            img={TpThumbnail}
                            title='TP Report'
                            author='React, Redux, GraphQL, NodeJs, Express, Google Maps' 
                        />
                        <Card
                            img={ScoopThumbnail}
                            title='Scoop Group'
                            author='Ruby on Rails, Javascript, HTML, CSS, Google Maps' 
                        />
                        <Card
                            img={RandomThumbnail}
                            title='Nba Player Randomizer'
                            author='Ruby on Rails, React, API, NBA API' 
                        />
                    </div>
                    <AuthModal authShow={this.state.authShow} closeAuth={() => {this.setState({authShow: false})}}/>
                    <HoopModal hoopShow={this.state.hoopShow} closeHoop={() => {this.setState({hoopShow: false})}}/>
                    <EventModal goShow={this.state.goShow} closeEvent={() => { this.setState({ goShow: false })}}/>
                </Fade>
            </div>
        )
    }
}

export default Projects