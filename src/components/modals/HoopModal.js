import React from 'react'

import Modal from 'react-bootstrap/Modal'

import HoopThumbnail from '../../images/thumbnails/wehoopin-thumbnail.png'
import AllPlayers from '../../images/modals/hoopin/all_players.png'
import TeamPrediction from '../../images/modals/hoopin/team_prediction.png'
import FollowedPlayers from '../../images/modals/hoopin/followed_players.png'
import BoxScore from '../../images/modals/hoopin/box_score.png'
import PlayerPage from '../../images/modals/hoopin/player_page.png'

class AuthModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.hoopShow}
                onHide={() => this.props.closeHoop()}
                dialogClassName='modal-90w'
            >
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <h1>WeHoopin</h1>
                    <div>
                        <img className='github-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1920px-Font_Awesome_5_brands_github.svg.png' />
                    </div>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={HoopThumbnail}></img></Modal.Body>
                <Modal.Body>Probably my personal  favorite project I have ever worked on weHoopin was the answer to the problem of clicking 17 links every time I wanted information from ESPN and the question, "How can I stay up to date on basketball while spending 14hrs a day coding during a bootcamp?".  </Modal.Body>
                <Modal.Body>Using NodeJs, React, and Redux, I combined multiple NBA API's to create a backend that could track previous, future, and present games, along with tracking a player stats from their career, season, and recent games. Using this data I was able to formulate a homepage that updated daily with yesterdays games, along with notable achievements from the game, and showing individual top performers. By accumalating every players performance from the previous days games, I created a formula to combine all counting statistics and weigh them and output the top 5 scores from ghe formula on the front of the application.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={BoxScore}></img></Modal.Body>
                <Modal.Body>Using Postman to test the API, we can see that multiple errors will be sent back from the request depending on what is wron with them. It checks for availability of email, username, and enforces password restrictions. This API also allows Users to have extra profile information for example a bio, but will not require it to be set on creation. The edit route allows users to add profile pictures and a bio post profile creation.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={TeamPrediction}></img></Modal.Body>
                <Modal.Body>On a successful request a token is recieved through JWT encryption written within the User model. It also the profile information like username and bio, but not the password. This token allows for future session storage to remember the account that is signed in without having to store the password in plain text. Though the frontend may have to encrypt the token somewhere to allow for extra security. The token is set to reset every month to allow extra security, this means Users must sign in again every month. This setting can be tweaked to never expire, but I thought the added security would be beneficial.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={FollowedPlayers}></img></Modal.Body>
                <Modal.Body>On a successful request a token is recieved through JWT encryption written within the User model. It also the profile information like username and bio, but not the password. This token allows for future session storage to remember the account that is signed in without having to store the password in plain text. Though the frontend may have to encrypt the token somewhere to allow for extra security. The token is set to reset every month to allow extra security, this means Users must sign in again every month. This setting can be tweaked to never expire, but I thought the added security would be beneficial.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={AllPlayers}></img></Modal.Body>
                <Modal.Body>On a successful request a token is recieved through JWT encryption written within the User model. It also the profile information like username and bio, but not the password. This token allows for future session storage to remember the account that is signed in without having to store the password in plain text. Though the frontend may have to encrypt the token somewhere to allow for extra security. The token is set to reset every month to allow extra security, this means Users must sign in again every month. This setting can be tweaked to never expire, but I thought the added security would be beneficial.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={PlayerPage}></img></Modal.Body>
                <Modal.Body>On a successful request a token is recieved through JWT encryption written within the User model. It also the profile information like username and bio, but not the password. This token allows for future session storage to remember the account that is signed in without having to store the password in plain text. Though the frontend may have to encrypt the token somewhere to allow for extra security. The token is set to reset every month to allow extra security, this means Users must sign in again every month. This setting can be tweaked to never expire, but I thought the added security would be beneficial.</Modal.Body>
            </Modal>
        )
    }
}

export default AuthModal