import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import DailyCard from './Cards/DailyCard';
import WeeklyCard from './Cards/WeeklyCard';
import EventCard from './Cards/EventCard';
import SharedCard from './Cards/SharedCard';

export default function TabCharacter() {
    return (
        <Container>
            <div>
                <Row>
                    <Col>
                    {/* Daily Card */}
                    <DailyCard />
                    </Col>
                    <Col>
                    {/* Weekly Card */}
                    <WeeklyCard />
                    </Col>
                    <Col>
                    {/* Event Card */}
                    <EventCard />
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col>
                    {/* Shared Card */} 
                    <SharedCard />
                    </Col>
                </Row>
            </div>
        </Container>     
    );
};