import React from "react";

import Welcome from './Welcome'
import Header from './Header'

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Welcome/>
            </div>
        )
    }
}

export default Portfolio