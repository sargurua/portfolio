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
                    <div>
                        <img className='github-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/1920px-Font_Awesome_5_brands_github.svg.png' />
                    </div>
                </Modal.Header>
                <Modal.Title style={{ display: 'flex', justifyContent: 'center' }}>Demo</Modal.Title>
                <Modal.Body><YouTube id="cCA4db0DQf8" /></Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={EventThumbnail}></img></Modal.Body>
                <Modal.Body>With the purpose of ending all scheduling conflicts me and some friends created a application to schedule events and confirm attendance along with providing event location and times. </Modal.Body>
                <Modal.Body>A fullstack Ruby on Rails project presented a way for users to create and attend events along with creating a social aspect using a friend system. Users would be able to track all their events they are currently attending along with looking at their friends to see what they are going to. This allows users to make plans easier and with less communication but still confirming attendance.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={AllEvents}></img></Modal.Body>
                <Modal.Body>Going to the events page wiill display all the events that are scheduled to happen. This page will only display events that have not passed their start date and time. This is able to limit events that have happened in the past of currently happening. this page will also show location information along with times. Clicking on any event will take you to that events specific page.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={Event}></img></Modal.Body>
                <Modal.Body>At any point clicking on a team logo will allow a user to access the team's page. This contains data specific to the team. This information includes the players currently on the team's active roster, players who are leading in each statistical category, projected record prediction, and comparative rankings in counting stats to other teams. Comparing a teams player I was able to get information for both the rosters and statistical leaders. Sorting the statistics I was able to displayed leaders in their category and show the actual average they had. With the teams comaprative stats, using the API data i was able to store team averages and send their rank from the backend. Finally the projections I created were based on two models, one was a simple win percentage formula described as (wins / losses) * 82. The second was a Pythagorean expectation formula, this was developed specifically for basketball and is described as ( points_for^13.91 / ( points_for^13.91 * points_against^13.91 ) ) * 16.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={OtherUser}></img></Modal.Body>
                <Modal.Body>A separate tab in the application will lead you to the players page. This displays all players who have played in the current season. This will display each players picture along with a breakdown of their career stats in each individual category. Since the list is large, having close to 500 players displayed in the tab I implemented a search bar to find any player. This will match the inputted to string to match a name by using regular expressions to find matching characters. As the search finds matching results it will way display a drop down of the 5 closest matching names. The dropdown displays the players full name along with a picture to give suggestion. Upon clicking on a name it will take to you that respective players page.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={User}></img></Modal.Body>
                <Modal.Body>The players page will show the players picture, team, career stats, and current season stats. This page also will dynamically change the background color of the player based on the team their currently player for. The breakdown of stats will show every year a player played and how they performed in the individual season. The current season will then be displayed with their current numbers for the season in play changing after each game. The career stats then combines all the seasons and average them to provide averages over their entire NBA career. The page also provide functionality to follow a player. By following a player a user must sign in and it allows the user to see a players list of watched players to see their last game stats.</Modal.Body>
            </Modal>
        )
    }
}

export default EventModal