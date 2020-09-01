import React from 'react'

import Modal from 'react-bootstrap/Modal'
import YouTube from 'react-youtube-embed'

import EventThumbnail from '../../images/thumbnails/wegoin-thumbnail.png'
import AllEvents from '../../images/modals/goin/all-events.png'
import Event from '../../images/modals/goin/event.png'
import User from '../../images/modals/goin/user.png'
import OtherUser from '../../images/modals/goin/other_user.png'

class EventModal extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.goShow}
                onHide={() => this.props.closeEvent()}
                dialogClassName='modal-90w'
            >
                <Modal.Header style={{ justifyContent: 'center' }}>
                    <h1>WeGoin</h1>
                </Modal.Header>
                <Modal.Body><YouTube id="cCA4db0DQf8" /></Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={EventThumbnail}></img></Modal.Body>
                <Modal.Body>With the purpose of ending all scheduling conflicts me and some friends created a application to schedule events and confirm attendance along with providing event location and times. </Modal.Body>
                <Modal.Body>A fullstack Ruby on Rails project presented a way for users to create and attend events along with creating a social aspect using a friend system. Users would be able to track all their events they are currently attending along with looking at their friends to see what they are going to. This allows users to make plans easier and with less communication but still confirming attendance.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={AllEvents}></img></Modal.Body>
                <Modal.Body>Going to the events page will display all the events that are scheduled to happen. This page will only display events that have not passed their start date and time. This is able to limit events that have happened in the past of currently happening. this page will also show location information along with times. Clicking on any event will take you to that events specific page.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Event}></img></Modal.Body>
                <Modal.Body>
                    When you go to a event page it display information about the event. The event will show the title given by the creator
                    along with details about the location, time, date, and description. The event contains a button that will allow the currently logged in user to
                    either chose to attend the event or if already attending the event, remove themselves from the event. Lastly on the right hand side a div displays the current users attending the event with links to their individual user pages.
                </Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={OtherUser}></img></Modal.Body>
                <Modal.Body>
                    A user contain display information about the user's activity and friends. The display will show all events the user is attending. These cards contain a link to the event page along with a simplified button that allows the currently signed in user to attend the event straight from another users page. The users page will also display other users that are linked to that page's selected user.
                    The header of the page also contains a button to send a friend request to the user. The header will also contain a user's self created description.
                </Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={User}></img></Modal.Body>
                <Modal.Body>
                    When returning to your homepage you can track multiple function of the application. Similar to going to any other users page, your home will display
                     currently attended events and a list of your friends. With these comes other options. In the friends page the display will show pending friend requests.
                     To link yourself with another user requires confirmation from both ends. The options to also create a new event exists on the page. From your homepage you
                      are able to edit your profile to change options such as your password, description, and username.
                </Modal.Body>
            </Modal>
        )
    }
}

export default EventModal