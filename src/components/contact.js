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
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target</p>
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
                                        Skype ID here
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