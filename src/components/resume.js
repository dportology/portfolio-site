import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>

                <embed src="alex_davenport_cv.pdf" width="100%" height="1500px" />

                {/* <Grid>

                    <Cell col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img 
                                src="https://animalogic.ca/wp-content/uploads/2018/05/shutterstock_633482957.jpg"
                                alt="avatar"
                                style={{ height: "200px"}}
                            />
                        </div>

                        <h2 style={{ paddingTop: "2em" }}>
                            Alex Davenport
                        </h2>
                        <h4 style={{ color: "grey" }}>Programmer</h4>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%"}}/>
                        <p>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.</p>
                        <h5>Address</h5>
                        <p>this play here 03434</p>
                        <h5>Phone</h5>
                        <p>123-123-1234</p>
                        <h5>Email</h5>
                        <p>asefase@asijf.com</p>
                        <hr style={{ borderTop: "3px solid #833fb2", width: "50%"}}/>

                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        
                        <h2>Education</h2>
                        <Education 
                            startYear={2012}
                            endYear={2016}
                            schoolName="Eastern Connecticut State University"
                            schoolDescription="klajhseklahwekilfualekfnuahsklecfnhasjkecf"
                        />

                        <hr style={{ borderTop: "3px solid #e22947" }}/>
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2012}
                            endYear={2012}
                            jobName="thing"
                            jobDescription="aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9"
                        />
                        
                        <Experience 
                            startYear={2012}
                            endYear={2012}
                            jobName="thing"
                            jobDescription="aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9aklsieucmiloauwsyvrn9aq3874n59paq283c45f7npaw894nc9"
                        />

                        <hr style={{ borderTop: "3px solid #e22947" }}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="Android"
                            progress={100}
                        />
                        <Skills 
                            skill="Python"
                            progress={90}
                        />
                        <Skills 
                            skill="React"
                            progress={30}
                        />

                    </Cell>
                </Grid> */}
            </div>
        )
    }
}

export default Resume;