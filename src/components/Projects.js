import React from 'react'

import AuthModal from "./modals/AuthModal"
import HoopModal from "./modals/HoopModal"
import EventModal from "./modals/EventModal"
import WerewolfModal from "./modals/WerewolfModal"
import ScoopModal from "./modals/ScoopModal"
import RandomModal from "./modals/RandomModal"

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
        goShow: false,
        wolfShow: false,
        tpShow: false,
        scoopShow: false,
        randomShow: false
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
                            handleClick={() => {this.setState({authShow: true})}}
                        />
                        <Card
                            img={HoopThumbnail}
                            title='WeHoopin'
                            body='NodeJS and React Application. NBA application that showed summarization of the previous days top performers and best games. Also used algorithmic computation to predict teams true records.'
                            author='NodeJs, Express, React, Redux, NBA API' 
                            handleClick={() => {this.setState({hoopShow: true})}}
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
                            handleClick={() => {this.setState({wolfShow: true})}}
                        />
                        <Card
                            img={TpThumbnail}
                            title='TP Report'
                            author='React, Redux, GraphQL, NodeJs, Express, Google Maps'
                            handleClick={() => {this.setState({tpShow: true})}}
                        />
                        <Card
                            img={ScoopThumbnail}
                            title='Scoop Group'
                            author='Ruby on Rails, Javascript, HTML, CSS, Google Maps' 
                            handleClick={() => {this.setState({scoopShow: true})}}
                        />
                        <Card
                            img={RandomThumbnail}
                            title='Nba Player Randomizer'
                            author='Ruby on Rails, React, API, NBA API' 
                            handleClick={() => {this.setState({randomShow: true})}}
                        />
                    </div>
                    <AuthModal authShow={this.state.authShow} closeAuth={() => {this.setState({authShow: false})}}/>
                    <HoopModal hoopShow={this.state.hoopShow} closeHoop={() => {this.setState({hoopShow: false})}}/>
                    <EventModal goShow={this.state.goShow} closeEvent={() => { this.setState({ goShow: false })}}/>
                    <WerewolfModal wolfShow={this.state.wolfShow} closeEvent={() => {this.setState({wolfShow: false})}} />
                    <TpModal tpShow={this.state.tpShow} closeEvent={() => {this.setState({tpShow: false})}} />
                    <ScoopModal scoopShow={this.state.scoopShow} closeEvent={() => {this.setState({scoopShow: false})}} />
                    <RandomModal randomShow={this.state.randomShow} closeEvent={() => {this.setState({randomShow: false})}} />
                </Fade>
            </div>
        )
    }
}

export default Projects