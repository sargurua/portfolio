import React from 'react'

import Modal from 'react-bootstrap/Modal'
import YouTube from 'react-youtube-embed'

import ScoopThumbnail from '../../images/thumbnails/scoop-thumbnail.png'
import Comments from '../../images/modals/scoop/comments.png'
import Home from '../../images/modals/scoop/home.png'

class ScoopModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.scoopShow}
                onHide={() => this.props.closeEvent()}
                dialogClassName='modal-90w'
            >
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <h1>Scoop Group</h1>
                </Modal.Header>
                <Modal.Body><YouTube id="cyVzTf9XLN0" /></Modal.Body>
                <Modal.Body>Me and a cohort mate one day wanted ice cream but neither of us knew the loop very well. We asked around but wasn't sure the level of ice cream other people held as  their standard. We thought of a place where ice cream afficiinados could look for local spots near them and hear fellow  ice cream elitists opinions on the quality. This dream became our application known as Scoop Group</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={ScoopThumbnail}></img></Modal.Body>
                <Modal.Body>A Javascript and HTML frontend with a Ruby on Rails API backend, Scoop Group allowed users to log into the application and retrieve their current location through geolocation and immediatley get results on ice cream shops nearest to them. Tthe locations were provided by the Google Places API and displayed on a embedded Google Map, displaying their current locations and nearby locations numbered for sorting purposes.</Modal.Body>
                <Modal.Body>The home display show the map, with customized CSS to match the applications fun and light hearted mood. On the left side a menu displays shops with their operatiions hours along with links to get their directions and link to their website. The nav bar up top allows users to log in and favorite their favorite ice cream shops.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Home}></img></Modal.Body>
                <Modal.Body>Going to the events page wiill display all the events that are scheduled to happen. This page will only display events that have not passed their start date and time. This is able to limit events that have happened in the past of currently happening. this page will also show location information along with times. Clicking on any event will take you to that events specific page.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Comments}></img></Modal.Body>
            </Modal>
        )
    }
}

export default ScoopModal