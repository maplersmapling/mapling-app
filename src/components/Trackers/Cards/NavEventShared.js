import React from 'react';
import { Nav } from 'react-bootstrap';

// tabs: tasks, done
export default function NavEventShared() {

    return (
        <Nav
            fixed="bottom" 
            variant="tabs"
        >
            <Nav.Item>
                <Nav.Link eventKey="tasks">
                    Tasks
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="done">
                    Done
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}