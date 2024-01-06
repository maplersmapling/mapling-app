/*=============================================================================
File: index.js for Trackers
-------------------------------------------------------------------------------
Description: Parent component 
=============================================================================*/
import React from 'react';
import { useState } from 'react'; 
import { Nav, Tab, Row , Tabs, Container, Col, Card} from 'react-bootstrap';
import CharNav from './CharacterNav';
import CharTab from './CharacterTab';
import TrackerForm from './TrackerForm';

import {charNames} from './testData';
import styles from '../components.module.css';

export default function Trackers() {
     

    return (
        <body className={styles.basicTheme}>
             <Tab.Container
                id="character-tabs"
                defaultActiveKey="char1"
            >
                <Row>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey='char1' >
                                Character 1
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="char2">
                                Character 2
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="char3">
                                Character 3
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="char4">
                                Character 4
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Tab.Content>
                    <Tab.Pane eventKey="char1">
                        *char 1 content*  
                        <CharTab />                   
                    </Tab.Pane>
                    <Tab.Pane eventKey="char2">
                        *char 2 content*
                        {/* <CharTab character={charName.at(2)} /> */}
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="char3">
                        *char 3 content*
                        {/* <CharTab character={charName.at(3)} /> */}
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="char4">
                        *char 4 content*
                        {/* <CharTab character={charName.at(4)} /> */}  
                    </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
    </body>
    );
};


