import React from 'react'

class Card extends React.Component {
    render() {
      return(
          <div className="card" onClick={() => this.props.handleClick()}>
            <img src={this.props.img} />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>{this.props.body}</p>
              <h5>{this.props.author}</h5>
            </div>
          </div>
      )
    }
}

export default Card