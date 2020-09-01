import React from 'react'

import Modal from 'react-bootstrap/Modal'

import WolfThumbnail from '../../images/thumbnails/werewolf-thumbnail.png'
import Countdown from '../../images/modals/wolf/countdown.png'
import Lobby from '../../images/modals/wolf/lobby.png'
import Game from '../../images/modals/wolf/game.png'
import Role from '../../images/modals/wolf/role.png'

class WerewolfModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.wolfShow}
                onHide={() => this.props.closeEvent()}
                dialogClassName='modal-90w'
            >
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <h1>One Night Ultimate Werewolf</h1>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={WolfThumbnail}></img></Modal.Body>
                <Modal.Body>
                    I love to play games! Boardgames, video games, and sports, life is about enjoying the journey and I try to make applications that reflect that feeling.
                     I also love a little bit of deception among friends so one of my favorite board games is One Night Ultimate Werewolf, but unfortunately 
                     sometimes you cant be around your friends all the time so I wanted to create a way we could get in a Discord chat and just play without having to set 
                     anything up. This was the inspiration behind this projected.
                </Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Lobby}></img></Modal.Body>
                <Modal.Body>
                    Using a Ruby on Rails API backend and React frontend me and some friends were able to create this web application version of the classic board game!
                    We started by planning how the layout of creating and entering a game. Our solution was to give each table of game having a phase attribute.
                    This allowed us to display game that still within lobby phase and join those games. On creation users are given the option to choose player size and create a
                    lobby afterwords. Users can then go to the home page and join a game with a chosen unique nickname and have the game real time update and show all people within the lobby.
                    Once filled the creator is able to start the game.
                </Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Game}></img></Modal.Body>
                <Modal.Body>
                    Once the game ss started the backend will randomly assign all players a random role and assign the phase of the game into the role of the current turn.
                    Players will either be transported into the active game lobby or shown their role action if their phase is active. The lobby will display all players in 
                    the game and the current phase. A timer will show how much time the current phase is and role turn. It will also display what role you were given at the 
                    start but not your current role for game logic. Since role can switch player teams, it was imperative to store only the starting role and not their 
                    current assigned role in the backend.
                </Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Role}></img></Modal.Body>
                <Modal.Body>
                    When a player's phase comes up the display changes from the active lobby into their roles component. These differ in their actions and information, for 
                    example an insomnaic role will display their information and instruction along with showing their stored role in the backend. A werewolf on the other 
                    hand will show all other werewolves. The troublemaker is given a menu to choose two players and change their roles in the backend. A timer will display 
                    the time left to make their actions or absorb information. Once the time has passed it will return the player to the active lobby.
                </Modal.Body>
                <Modal.Body>
                    The logic here is something I'am proud to display. One trouble we had to plan for was player not having two turns. Since a role can change 
                    we had to account for a change, but still let a player take their action from their starting role. This fortunately enough was planned for before in 
                    the display. By displaying starting roles only we were able to track what phase a screen should change based on this attribute. The tricky 
                    part of this attribute also came in the Seer role. The Seer allowed player to see their backend current role instead of starting. The 
                    trouble came in having the backend able to see this information only certain occurrences.
                </Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Countdown}></img></Modal.Body>
                <Modal.Body>
                    After all role logic has been taken the wait screen then starts passive phase to allow player to discuss actions and try to complete their 
                    win objectives. After the timer runs out a voting screen comes up allowing players to vote who should be killed by the town. This core logic was 
                    completed by a series of win condition logic we implemented to decide if the town or werewolves win.
                </Modal.Body>
            </Modal>
        )
    }
}

export default WerewolfModal