import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Daily from './Cards/CardDaily';
import Weekly from './Cards/CardWeekly';
import Event from './Cards/CardEvent';
import Shared from './Cards/CardShared';

export default function TabCharacter() {
    return (
        <Container>
            <div>
                <Row>
                    <Col>
                    {/*------ Daily Card ------*/}
                    <Daily />
                    </Col>
                    <Col>
                    {/*------ Weekly Card ------*/}
                    <Weekly />
                    </Col>
                    <Col>
                    {/*------ Event Card ------*/}
                    <Event />
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col />
                    <Col>
                    {/*------ Shared Card ------*/} 
                    <Shared />
                    </Col>
                </Row>
            </div>
        </Container>     
    );
};