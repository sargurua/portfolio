import React from "react";

import Welcome from './Welcome'
import Header from './Projects'
import About from './About'
import Projects from "./Projects";

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <Welcome/>
                <About/>
                <Projects/>
            </div>
        )
    }
}

export default Portfolio