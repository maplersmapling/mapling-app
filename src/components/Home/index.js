/*=============================================================================
File: index.js for Home
-------------------------------------------------------------------------------
Description: Parent component 
=============================================================================*/
/*=============================================================================
File: Home.js
-------------------------------------------------------------------------------
Description: Homepage for Website.
-----------------------------------
Includes: purpose,
          submit form for function/material requests, 
          highlights, 
          and creator information 
=============================================================================*/
import React from 'react'; //react components 
import {Container, Col, Row} from 'react-bootstrap'; //formatting components

import RequestForm from './RequestForm';

//import styles from '../components.module.css' //page styling 


export default function Home() {
    return(
        <body>
            <Container>
                <Row>
                    <Col
                        xs={12}
                        md={8}
                        //className={styles.homeColi}
                    >
                        <h1>
                            Welcome to Mapling!
                        </h1>
                        <div>
                            <p>
                                We are here to help you with all of your programming needs! {'\n'}
                                Whether it be tracking your dailies, knowing specific boss {'\n'}
                                requirements, or wanting to know the recommended equipment {'\n'}
                                your charactershould have, we got you! {'\n'}
                                p.s. there's more we offer, just explore the website{' (:\n'}
                            </p>
                        </div>
                        <RequestForm />
                    </Col>
                    <Col
                        xs={6}
                        md={4}
                        //className={styles.homeCol2}
                    >
                        <Row
                            //className={styles.homecol2b1}
                        >
                            <h3>
                                Highlight #1
                            </h3>
                            <p>
                                adding later
                            </p>
                        </Row>
                        <Row
                            //className={styles.homeCol2b2}
                        >
                            <h3>
                                Highlight #2
                            </h3>
                            <p>
                                add later
                            </p>
                        </Row>
                        <Row
                            //className={styles.homeCol2b1}
                        >
                            <h3>
                                Highlight #3
                            </h3>
                            <p>
                                add later
                            </p>
                        </Row>
                        <Row>
                            <p> 
                                add picture here
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </body>
    );
}