import React from 'react';
import { DailyCard, WeeklyCard, EventCard, SharedCard } from './Cards';
import { Container, Row, Col } from 'react-bootstrap'

export default function CharacterTab() {
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