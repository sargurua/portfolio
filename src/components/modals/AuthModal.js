import React from 'react'

import Modal from 'react-bootstrap/Modal'

class AuthModal extends React.Component {
    render () {
        return(
            <Modal
                show={this.props.show}
            >
                <Modal.Header>Auth Backend</Modal.Header>
            </Modal>
        )
    }
}

export default AuthModal