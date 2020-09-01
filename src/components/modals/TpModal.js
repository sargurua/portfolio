import React from 'react'

import Modal from 'react-bootstrap/Modal'

import TpThumbnail from '../../images/thumbnails/tp-thumbnail.png'
import Home from '../../images/modals/tp/home.png'
import Reports from '../../images/modals/tp/reports.png'

class TpModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.tpShow}
                onHide={() => this.props.closeEvent()}
                dialogClassName='modal-90w'
            >
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <h1>TP Report</h1>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={TpThumbnail}></img></Modal.Body>
                <Modal.Body>With the purpose of ending all scheduling conflicts me and some friends created a application to schedule events and confirm attendance along with providing event location and times. </Modal.Body>
                <Modal.Body>A fullstack Ruby on Rails project presented a way for users to create and attend events along with creating a social aspect using a friend system. Users would be able to track all their events they are currently attending along with looking at their friends to see what they are going to. This allows users to make plans easier and with less communication but still confirming attendance.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Home}></img></Modal.Body>
                <Modal.Body>Going to the events page wiill display all the events that are scheduled to happen. This page will only display events that have not passed their start date and time. This is able to limit events that have happened in the past of currently happening. this page will also show location information along with times. Clicking on any event will take you to that events specific page.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Reports}></img></Modal.Body>
            </Modal>
        )
    }
}

export default TpModal