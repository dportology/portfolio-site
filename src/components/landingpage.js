import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://dailystoic.com/wp-content/uploads/2016/07/seneca.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Android Application Developer</h1>
                            <hr/>
                            <p>Android | Python | Firebase | React</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/alex-davenport-557a60153/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/dportology" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>

                                {/* Email */}
                                <a href="https://www.linkedin.com/in/alex-davenport-557a60153/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;