import React from 'react'

import Modal from 'react-bootstrap/Modal'

import RandomThumbnail from '../../images/thumbnails/random-thumbnail.png'
import Players from '../../images/modals/random/players.png'

class RandomModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.randomShow}
                onHide={() => this.props.closeEvent()}
                dialogClassName='modal-90w'
            >
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <h1>WeGoin</h1>
                    <div>
                        <img className='github-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1920px-Font_Awesome_5_brands_github.svg.png' />
                    </div>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={RandomThumbnail}></img></Modal.Body>
                <Modal.Body>With the purpose of ending all scheduling conflicts me and some friends created a application to schedule events and confirm attendance along with providing event location and times. </Modal.Body>
                <Modal.Body>A fullstack Ruby on Rails project presented a way for users to create and attend events along with creating a social aspect using a friend system. Users would be able to track all their events they are currently attending along with looking at their friends to see what they are going to. This allows users to make plans easier and with less communication but still confirming attendance.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Players}></img></Modal.Body>
            </Modal>
        )
    }
}

export default RandomModal