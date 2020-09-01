import React from 'react'

import Modal from 'react-bootstrap/Modal'

import AuthError from '../../images/modals/auth/postman-error-test.png'
import AuthSignUp from '../../images/modals/auth/postman-signup.png'
import AuthThumbnail from '../../images/thumbnails/auth_backend.png'

class AuthModal extends React.Component {
    render () {
        return(
            <Modal
                show={this.props.authShow}
                onHide={() => this.props.closeAuth()}
                dialogClassName='modal-90w'
            >
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <h1>Oauth Backend</h1>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={AuthThumbnail}></img></Modal.Body>
                <Modal.Body>I Worked on this Freelance project with the goal of creating an Auth Rails API Backend. Essentially the client just needed a template for User authorization set up. Using Devise and JWT I was able to set request to the backend sending either tokenization of user information or error message. </Modal.Body>
                <Modal.Body>Using Devise I set up the User table on Rails to provide only needed parameters such as password, username, email, and even such helper rows like password conformation. After creating the table I started creating the controllers necessary for the backend. These include the Users, Sessions, and Applications controllers. By dividing the controller I was able to organize the different routes for editing, signing up, login, etc. Setting up the params allowed in a seperate function allowed me to call the method before each action, throwing an error if the required parameters were not met.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={AuthError}></img></Modal.Body>
                <Modal.Body>Using Postman to test the API, we can see that multiple errors will be sent back from the request depending on what is wron with them. It checks for availability of email, username, and enforces password restrictions. This API also allows Users to have extra profile information for example a bio, but will not require it to be set on creation. The edit route allows users to add profile pictures and a bio post profile creation.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={AuthSignUp}></img></Modal.Body>
                <Modal.Body>On a successful request a token is recieved through JWT encryption written within the User model. It also the profile information like username and bio, but not the password. This token allows for future session storage to remember the account that is signed in without having to store the password in plain text. Though the frontend may have to encrypt the token somewhere to allow for extra security. The token is set to reset every month to allow extra security, this means Users must sign in again every month. This setting can be tweaked to never expire, but I thought the added security would be beneficial.</Modal.Body>
            </Modal>
        )
    }
}

export default AuthModal