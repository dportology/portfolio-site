import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardText, CardTitle, Button } from 'react-mdl';
import Carousel from 'nuka-carousel';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid" style={{margin: 'auto'}}>
                    
                    <Grid>
                        <Cell col={4}>
                            {/* Project 1 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                {/* <CardTitle style={{color: '#000', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fksr-ugc.imgix.net%2Fassets%2F017%2F931%2F632%2Fbd12f0dccad621ff449b51c19d4367a7_original.png%3Fcrop%3Dfaces%26w%3D1552%26h%3D873%26fit%3Dcrop%26v%3D1503930745%26auto%3Dformat%26q%3D92%26s%3Dad594c03806b5ec2fc2855af65e96c70&f=1) center / cover'}} /> */}
                                <Carousel style={{height: '185px'}}>
                                    <img src="/images/odyssey.png" alt="carousel-img" />
                                    <img src="/images/map.png" alt="carousel-img" />
                                    <img src="/images/wendigo_draugr.png" alt="carousel-img" />
                                    <img src="/images/ghost_kappa.png" alt="carousel-img" />
                                    <img src="/images/ker_kappa.png" alt="carousel-img" />
                                    <img src="/images/dragonturtle_info.png" alt="carousel-img" />
                                    <img src="/images/golem_info.png" alt="carousel-img" />
                                    <img src="/images/bluecap_info.png" alt="carousel-img" />
                                </Carousel>
                                <CardText>
                                    A location based game where players explore the real world, capturing and training monsters from various mythologies to battle each other.
                                </CardText>
                                <CardActions border>
                                    <Button colored>Play Store</Button>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            {/* Project 2 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '185px', background: 'url(http://assets1.ignimgs.com/2018/01/30/pong-1517350663502_1280w.jpg) center / cover'}}>Bluetooth Pong</CardTitle>
                                <CardText>
                                    A simple pong game with networking facilitated entirely by the phones bluetooth connections.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/dportology/BluetoothPong" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            {/* Project 3 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://assets.pcmag.com/media/images/550282-game-of-thrones-logo.jpg?thumb=y&width=810&height=456) center / cover'}}>GoT Character Info</CardTitle>
                                <CardText>
                                    A simple app which hits an IMDB API to retrieve information about various Game of Thrones characters.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/dportology/GoT_List_View" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>

                    <Grid>
                        <Cell col={4}>
                            {/* Project 4 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#000', height: '185px', background: 'url(http://www.codeproject.com/KB/android/824711/java-jni-ndk.png) center / cover'}}>Android JNI Example</CardTitle>
                                <CardText>
                                    Uses JNI to access a C++ data controller, and display information on various movies in an item / detail format.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/dportology/highrise_test_project" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Cell>

                    </Grid>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid" style={{margin: 'auto'}}>
                    
                    <Grid>
                        <Cell col={4}>
                            {/* Project 1 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://i.ytimg.com/vi/d6dtP2ES9tY/maxresdefault.jpg) center / cover'}}>Solar System Simulation</CardTitle>
                                <CardText>
                                    Simulation code designed for cluster computers. Runs an astronomical simulation to determine the probability of the Earth being struck by a meteor or comet.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/dportology/MPI_Orbital_Simulation" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            {/* Project 2 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://www.casinopauma.com/wp-content/uploads/2016/11/poker-5.jpg) center / cover'}}>Poker</CardTitle>
                                <CardText>
                                    Python program to calculate the scores of poker hands and compare hands.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/dportology/poker_hands" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            {/* Project 3 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '185px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Turdus-migratorius-002.jpg/1200px-Turdus-migratorius-002.jpg) center / cover'}}>Round Robin Scheduling</CardTitle>
                                <CardText>
                                    Simple program to illustrate round robin process scheduling in an OS.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/dportology/PythonRoundRobinProject" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid" style={{margin: 'auto'}}>
                    <Grid>
                        <Cell col={4}>
                            {/* Project 1 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '185px', background: 'url(http://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png) center / cover'}}>Portfolio Site</CardTitle>
                                <CardText>
                                    Take a look at the code for this website here.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/dportology/portfolio-site" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
            <div className="projects-grid" style={{margin: 'auto'}}>
                    <Grid>
                        <Cell col={4}>
                            {/* Project 1 */}
                            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '185px', background: 'url(http://www.spudislunarresources.com/Images_Maps/Moon%20albedo%20near%20far.jpg) center / cover'}}>Lunar Formation Simulation</CardTitle>
                                <CardText>
                                    A C++ simulation of the formation of the Earths moon, used to determine the likely velocity, mass, and angle of impact of the large object (Theia) that likely impacted Earth roughly 30 million years after the creation of our solar system.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/dportology/MPI_Orbital_Simulation" rel="noopener noreferrer" target="_blank">
                                        <Button colored>Github</Button>
                                    </a>
                                </CardActions>

                            </Card>
                        </Cell>
                    </Grid>
                </div>
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

                <div className="content">{ this.toggleCategories() }</div>

            </div>
        )
    }
}

export default Projects;