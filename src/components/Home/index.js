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
import {Container, Form, Button, Col, Row} from 'react-bootstrap'; //formatting components
import styles from './stylePages.module.css' //page styling 
import downArrow from './Utilities/downArrowH.png'; //down arrow icon

export default function Home() {
    return(
        <>
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
                                Let us know if this website is missing anything or is displaying {'\n'}
                                incorrect information and we'll update it as fast as we can! {'\n'}
                            </p>
                        </div>
                        <h2>
                            Send a Request{' '}
                            {/* insert down arrow here */}
                        </h2>
                        <Form className="justify-content end" style={{width: "100%"}}>
                            <Row>
                                <Col 
                                    XS={4}
                                />
                                <Col>
                                <Form.Group 
                                    className="mb-3"
                                    controlId="requestForm.ControlTextarea1"
                                >
                                    <Form.Control as="textarea" rows={5}/>
                                </Form.Group>
                                <Button variant="outline-light" style={{float: 'right'}}>
                                    Submit
                                </Button>
                                </Col>
                            </Row>
                        </Form>
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
        <body>
            <Container 
                //className={styles.basicTheme}
            >
{/*============================================================================*/}
{/*------------- 1st Row ------------------------------------------------------*/}
                <Row>
                    <div>
{/*===================================================================*/}
{/*--------------------- 1st Column ----------------------------------*/}
                        <Col xs={12} md={8} className={styles.homeCol1}>
{/*-------------------------- Homepage header ---------------*/}
                            <h1>Welcome to Mapling!</h1>
                            <div className={styles.homeCol1Border}>
{/*----------------------------- Homepage introduction ------*/}
                                <p>
                                    We are here to help you with all your mapling needs! 
                                </p>
                                <p>
                                    Whether it be tracking your daily tasks, knowing specific boss 
                                    requirements, or equipment your character should have, we got you! 
                                </p>
                                <p>
                                    p.s. there's more we offer, just explore the website!
                                </p>
                                <p>
                                    Let us know if this website is missing anything or is displaying 
                                    incorrect information an we'll update it as fast as we can!
                                </p>
                            </div>
{/*------------------------- Request form: user feedback ---*/}
                            <h2>Send a Request{' '}
                                <img 
                                alt="Down Arrow"
                                src={downArrow}
                                width="auto"
                                height="auto"
                                className="d-inline-block align-bottom"
                                />
                            </h2>  
{/*------------------------- Text Area + Submit button -----*/}
                            <Form className="justify-content-end" style={{width: "100%"}}>
                                <Row>
                                    <Col xs={4}/>
                                    <Col>
                                    <Form.Group className="mb-3" 
                                                controlId="requestForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={5}/> 
                                    </Form.Group> 
                                    <Button variant="outline-light" style={{float: 'right'}}>Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col> 
{/*--------------------- end of 1st Column ---------------------------*/}
{/*===================================================================*/}
{/*===================================================================*/}
{/*--------------------- 2nd Column ----------------------------------*/}
                        <Col xs={6} md={4} className={styles.homeCol2}>
                            <Row className={styles.homeCol2B1}>
                            <h3>Highlight #1</h3>
                            <p>*adding info later</p>
                            </Row>
                            <Row className={styles.homeCol2B2}>
                                <h3>Highlight #2</h3>
                                <p>*adding info later</p>
                            </Row>
                            <Row className={styles.homeCol2B1}>
                            <h3>Highlight #3</h3>
                            <p>*adding info later</p>
                            </Row>
                            <Row>
                                <p>*add picture here</p>
                            </Row>
                        </Col>
{/*--------------------- end of 2nd Column ---------------------------*/}
{/*===================================================================*/}
                    </div>               
                </Row> 
{/*------------- end of 1st Row -----------------------------------------------*/}
{/*============================================================================*/}
{/*------------- 2nd Row ------------------------------------------------------*/}
{/*============================================================================*/}
                <Row> 
                </Row> 
{/*------------- end of 2nd Row -----------------------------------------------*/}
{/*============================================================================*/}
            </Container>
        </body> 
        </>
    );
}