import React from 'react'

import Modal from 'react-bootstrap/Modal'
import YouTube from 'react-youtube-embed'

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
                </Modal.Header>
                <Modal.Body><YouTube id="U4JEXnRi5v0" /></Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={HoopThumbnail}></img></Modal.Body>
                <Modal.Body>Probably my personal favorite project I have ever worked on weHoopin was the answer to the problem of clicking 17 links every time I wanted information from ESPN and the question, "How can I stay up to date on basketball while spending 14hrs a day coding during a bootcamp?".  </Modal.Body>
                <Modal.Body>Using NodeJs, React, and Redux, I combined multiple NBA API's to create a backend that could track previous, future, and present games, along with tracking a player stats from their career, season, and recent games. Using this data I was able to formulate a homepage that updated daily with yesterdays games, along with notable achievements from the game, and showing individual top performers. By using the accumulation of every players performance from the previous days games, I created a formula to combine all counting statistics and weigh them and output the top 5 scores from ghe formula on the front of the application. Yesterdays games are also displayed on the right side providing scoring breakdown by quarter and notable events that have taken place in the game</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={BoxScore}></img></Modal.Body>
                <Modal.Body>Clicking on a game will view a box score of the game. By using API data I displayed a breakdown of the statistics for each teams players. I also was able to track during a live game who was currently on the court vs on the bench. Each of these player breakdowns also contained a link to the players personal page. The team logos also contained links to their team's page</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={TeamPrediction}></img></Modal.Body>
                <Modal.Body>At any point clicking on a team logo will allow a user to access the team's page. This contains data specific to the team. This information includes the players currently on the team's active roster, players who are leading in each statistical category, projected record prediction, and comparative rankings in counting stats to other teams. Comparing a teams player I was able to get information for both the rosters and statistical leaders. Sorting the statistics I was able to displayed leaders in their category and show the actual average they had. With the teams comparative stats, using the API data i was able to store team averages and send their rank from the backend. Finally the projections I created were based on two models, one was a simple win percentage formula described as (wins / losses) * 82. The second was a Pythagorean expectation formula, this was developed specifically for basketball and is described as ( points_for^13.91 / ( points_for^13.91 * points_against^13.91 ) ) * 16.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={AllPlayers}></img></Modal.Body>
                <Modal.Body>A separate tab in the application will lead you to the players page. This displays all players who have played in the current season. This will display each players picture along with a breakdown of their career stats in each individual category. Since the list is large, having close to 500 players displayed in the tab I implemented a search bar to find any player. This will match the inputted to string to match a name by using regular expressions to find matching characters. As the search finds matching results it will way display a drop down of the 5 closest matching names. The dropdown displays the players full name along with a picture to give suggestion. Upon clicking on a name it will take to you that respective players page.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={PlayerPage}></img></Modal.Body>
                <Modal.Body>The players page will show the players picture, team, career stats, and current season stats. This page also will dynamically change the background color of the player based on the team their currently player for. The breakdown of stats will show every year a player played and how they performed in the individual season. The current season will then be displayed with their current numbers for the season in play changing after each game. The career stats then combines all the seasons and average them to provide averages over their entire NBA career. The page also provide functionality to follow a player. By following a player a user must sign in and it allows the user to see a players list of watched players to see their last game stats.</Modal.Body>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}><img style={{ width: 'auto', height: '60vh' }} src={FollowedPlayers}></img></Modal.Body>
                <Modal.Body>The followed players page is available to to signed in users. The page will track the users followed players to show each player last performance along with the date the game was played. The players will also display since when the user has followed the players to show whether or not a fan has "bandwagoned" onto a player or followed them since their start. The followed players tab also allows searching functionality for other users. A user can go to another users page to see their followed player and length of following.</Modal.Body>
            </Modal>
        )
    }
}

export default AuthModal