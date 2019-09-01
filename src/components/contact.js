import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Alex Davenport</h2>
                        <img 
                            src="https://dailystoic.com/wp-content/uploads/2016/07/seneca.jpg"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: "Anton", whiteSpace: "nowrap" }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        +1-860-949-5948
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: "Anton", whiteSpace: "nowrap" }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        live:alex.davenport2194
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: "Anton", whiteSpace: "nowrap" }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        alex.davenport2194@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;