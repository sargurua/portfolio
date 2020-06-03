import React from "react";

import Welcome from './Welcome'
import Header from './Header'
import About from './About'

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <Welcome/>
                <About/>
                <div style={{height: '100vh'}}>

                </div>
            </div>
        )
    }
}

export default Portfolio