import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardMenu, CardText, CardTitle, Button, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fksr-ugc.imgix.net%2Fassets%2F017%2F931%2F632%2Fbd12f0dccad621ff449b51c19d4367a7_original.png%3Fcrop%3Dfaces%26w%3D1552%26h%3D873%26fit%3Dcrop%26v%3D1503930745%26auto%3Dformat%26q%3D92%26s%3Dad594c03806b5ec2fc2855af65e96c70&f=1) center / cover'}} />
                        <CardText>
                            Details on my projects go here. its a super nice projects really once you get to know it.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#000'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fksr-ugc.imgix.net%2Fassets%2F017%2F931%2F632%2Fbd12f0dccad621ff449b51c19d4367a7_original.png%3Fcrop%3Dfaces%26w%3D1552%26h%3D873%26fit%3Dcrop%26v%3D1503930745%26auto%3Dformat%26q%3D92%26s%3Dad594c03806b5ec2fc2855af65e96c70&f=1) center / cover'}} />
                        <CardText>
                            Details on my projects go here. its a super nice projects really once you get to know it.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#000'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fksr-ugc.imgix.net%2Fassets%2F017%2F931%2F632%2Fbd12f0dccad621ff449b51c19d4367a7_original.png%3Fcrop%3Dfaces%26w%3D1552%26h%3D873%26fit%3Dcrop%26v%3D1503930745%26auto%3Dformat%26q%3D92%26s%3Dad594c03806b5ec2fc2855af65e96c70&f=1) center / cover'}} />
                        <CardText>
                            Details on my projects go here. its a super nice projects really once you get to know it.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#000'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Python</h1></div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is React</h1></div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div><h1>This is Misc</h1></div>
            )
        }
    }
    
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                    <Tab>Android</Tab>
                    <Tab>Python</Tab>
                    <Tab>React</Tab>
                    <Tab>Misc</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{ this.toggleCategories() }</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Projects;