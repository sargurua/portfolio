import React from 'react'

import AuthThumbnail from '../images/thumbnails/auth_backend.png'
import HoopThumbnail from '../images/thumbnails/wehoopin-thumbnail.png'
import EventThumbnail from '../images/thumbnails/wegoin-thumbnail.png'
import WerewolfThumbnail from  '../images/thumbnails/werewolf-thumbnail.png'
import TpThumbnail from '../images/thumbnails/tp-thumbnail.png'
import ScoopThumbnail from '../images/thumbnails/scoop-thumbnail.png'
import RandomThumbnail from '../images/thumbnails/random-thumbnail.png'

import AuthError from '../images/modals/auth/postman-error-test.png'
import AuthSignUp from '../images/modals/auth/postman-signup.png'

import Card from './Card'
import Fade from 'react-reveal/Fade'
import Modal from 'react-bootstrap/Modal'

class Projects extends React.Component {
    state =  {
        authShow: false,
        hoopShow: false
    }

    openAuth = () => {
        this.setState({
            authShow: true
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
                    <Modal
                        show={this.state.authShow}
                        onHide={() => this.setState({authShow: false})}
                        dialogClassName='modal-90w'
                    >
                        <Modal.Header style={{justifyContent: 'center'}}>
                            <h1>Auth Modal</h1>
                            <div>
                                <img className='github-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1920px-Font_Awesome_5_brands_github.svg.png' /> 
                            </div>
                        </Modal.Header>
                        <Modal.Body style={{display: 'flex', justifyContent:  'center'}}><img style={{width: 'auto', height: '60vh'}} src={AuthThumbnail}></img></Modal.Body>
                        <Modal.Body>I Worked on this Freelance project with the goal of creating an Auth Rails API Backend. Essentially the client just needed a template for User authorization set up. Using Devise and JWT I was able to set request to the backend sending either tokenization of user information or error message. </Modal.Body>
                        <Modal.Body>Using Devise I set up the User table on Rails to provide only needed parameters such as password, username, email, and even such helper rows like password conformation. After creating the table I started creating the controllers necessary for the backend. These include the Users, Sessions, and Applications controllers. By dividing the controller I was able to organize the different routes for editing, signing up, login, etc. Setting up the params allowed in a seperate function allowed me to call the method before each action, throwing an error if the required parameters were not met.</Modal.Body>
                        <Modal.Body style={{display: 'flex', justifyContent:  'center'}}><img style={{width: 'auto', height: '60vh'}} src={AuthError}></img></Modal.Body>
                        <Modal.Body>Using Postman to test the API, we can see that multiple errors will be sent back from the request depending on what is wron with them. It checks for availability of email, username, and enforces password restrictions. This API also allows Users to have extra profile information for example a bio, but will not require it to be set on creation. The edit route allows users to add profile pictures and a bio post profile creation.</Modal.Body>
                        <Modal.Body style={{display: 'flex', justifyContent:  'center'}}><img style={{width: 'auto', height: '60vh'}} src={AuthSignUp}></img></Modal.Body>
                        <Modal.Body>On a successful request a token is recieved through JWT encryption written within the User model. It also the profile information like username and bio, but not the password. This token allows for future session storage to remember the account that is signed in without having to store the password in plain text. Though the frontend may have to encrypt the token somewhere to allow for extra security. The token is set to reset every month to allow extra security, this means Users must sign in again every month. This setting can be tweaked to never expire, but I thought the added security would be beneficial.</Modal.Body>
                    </Modal>
                    <Modal
                        show={this.state.hoopShow}
                        onHide={() => this.setState({hoopShow: false})}
                        dialogClassName='modal-90w'
                    >
                        <Modal.Header style={{justifyContent: 'center'}}>
                            <h1>Auth Modal</h1>
                            <div>
                                <img className='github-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1920px-Font_Awesome_5_brands_github.svg.png' /> 
                            </div>
                        </Modal.Header>
                        <Modal.Body style={{display: 'flex', justifyContent:  'center'}}><img style={{width: 'auto', height: '60vh'}} src={HoopThumbnail}></img></Modal.Body>
                        <Modal.Body>Probably my personal  favorite project I have ever worked on weHoopin was the answer to the question, "How can I stay up to date on basketball while spending 14hrs a day coding during a bootcamp?".  </Modal.Body>
                        <Modal.Body>Using Devise I set up the User table on Rails to provide only needed parameters such as password, username, email, and even such helper rows like password conformation. After creating the table I started creating the controllers necessary for the backend. These include the Users, Sessions, and Applications controllers. By dividing the controller I was able to organize the different routes for editing, signing up, login, etc. Setting up the params allowed in a seperate function allowed me to call the method before each action, throwing an error if the required parameters were not met.</Modal.Body>
                        <Modal.Body style={{display: 'flex', justifyContent:  'center'}}><img style={{width: 'auto', height: '60vh'}} src={AuthError}></img></Modal.Body>
                        <Modal.Body>Using Postman to test the API, we can see that multiple errors will be sent back from the request depending on what is wron with them. It checks for availability of email, username, and enforces password restrictions. This API also allows Users to have extra profile information for example a bio, but will not require it to be set on creation. The edit route allows users to add profile pictures and a bio post profile creation.</Modal.Body>
                        <Modal.Body style={{display: 'flex', justifyContent:  'center'}}><img style={{width: 'auto', height: '60vh'}} src={AuthSignUp}></img></Modal.Body>
                        <Modal.Body>On a successful request a token is recieved through JWT encryption written within the User model. It also the profile information like username and bio, but not the password. This token allows for future session storage to remember the account that is signed in without having to store the password in plain text. Though the frontend may have to encrypt the token somewhere to allow for extra security. The token is set to reset every month to allow extra security, this means Users must sign in again every month. This setting can be tweaked to never expire, but I thought the added security would be beneficial.</Modal.Body>
                    </Modal>
                </Fade>
            </div>
        )
    }
}

export default Projects