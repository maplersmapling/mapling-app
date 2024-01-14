/*=============================================================================
File: index.js for Trackers
-------------------------------------------------------------------------------
Description: Parent component 
=============================================================================*/
import React from 'react'; 
import { Nav, Tab, Row } from 'react-bootstrap';
import NavChar from './NavCharacter';
import TabChar from './TabCharacter';

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
                    <NavChar />
                </Row>
                <Tab.Content>
                    <Tab.Pane eventKey="char1">
                        *char 1 content*  
                        <TabChar />                   
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


