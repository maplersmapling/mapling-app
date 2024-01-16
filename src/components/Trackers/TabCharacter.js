import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Daily from './Cards/CardDaily';

export default function TabCharacter() {
    return (
        <Container>
            <div>
                <Row>
                    <Col>
                    {/* Daily Card */}
                    <Daily />
                    </Col>
                    <Col>
                    {/* Weekly Card */}
                    </Col>
                    <Col>
                    {/* Event Card */}
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col />
                    <Col>
                    {/* Shared Card */} 
                    </Col>
                </Row>
            </div>
        </Container>     
    );
};