import React from 'react';
import { Nav } from 'react-bootstrap';

export default function NavDayWeek() {

    return (
        <Nav
            fixed="bottom" 
            variant="tabs"
        >
            <Nav.Item>
                <Nav.Link eventKey="daily">
                    Daily
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="weekly">
                    Weekly
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