/*=============================================================================
File: CharacterNavs.js
-------------------------------------------------------------------------------
Description: 
=============================================================================*/
import React from 'react';
import { Nav } from 'react-bootstrap';

export default function NavCharacter() {

    return (
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
    );
};
