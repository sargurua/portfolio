import React from "react";

import Welcome from './Welcome'
import Header from './Header'
import About from './About'

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Welcome/>
                <About/>
            </div>
        )
    }
}

export default Portfolio