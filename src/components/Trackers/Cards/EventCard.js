import React from 'react';
import { useState } from 'react';
import { Card, Tab, Row, Col } from 'react-bootstrap';

import NavDayWeek from './NavDayWeek';
import ListTasks from './ListTasks';
import { dailyEvents, weeklyEvents } from '../testData';

export default function EventCard() {

    const [key, setKey] = useState('daily');

    const [dailies, setDailies] = useState(dailyEvents);
    const abyssDaily = dailies.filter(abyss => abyss.category === 'abyssal');
    const idenDaily = dailies.filter(iden => iden.category === 'identisk');

    const [weeklies, setWeeklies] = useState(weeklyEvents);
    const idenWeekly = weeklies.filter(ident => ident.category === 'identisk');
    
    function handleCheckDaily(dailyId, nextDone) {

        setDailies(dailies.map(daily => {
            if (daily.id === dailyId) {
                // update dailies item from done = false => true
                return { ...daily, done: nextDone};
            } else {
                // no changes
                return daily;
            }
        }));
    }

    function handleCheckWeekly(weeklyId, nextDone) {

        setWeeklies(weeklies.map(weekly => {
            if (weekly.id === weeklyId) {
                // update boss item from done = false => true
                return { ...weekly, done: nextDone}
            } else {
                // no changes
                return weekly;
            }
        }));
    }

    return (
        <Card>
            <Tab.Container
                justify
                id="bottom-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Row>
                    <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey="daily">
                            <Card.Header>Event/s:</Card.Header>
                            <Card.Body>
                                <Card.Subtitle>Abyssal Expedition:</Card.Subtitle>
                                <Card.Text>
                                    <ListTasks tasks={abyssDaily} onCheck={handleCheckDaily} />
                                </Card.Text>
                                <Card.Subtitle>Identisk:</Card.Subtitle>
                                <Card.Text>
                                    <ListTasks tasks={idenDaily} onCheck={handleCheckDaily} />
                                </Card.Text>
                            </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="weekly">
                            <Card.Header>Event/s:</Card.Header>
                            <Card.Body>
                                <Card.Subtitle>Identisk:</Card.Subtitle>
                                <Card.Text>
                                    <ListTasks tasks={idenWeekly} onCheck={handleCheckWeekly} />
                                </Card.Text>
                            </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="done">
                            <Card.Header>Event/s:</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    done items
                                </Card.Text>
                            </Card.Body>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                <Row>
                    <NavDayWeek />
                </Row>
            </Tab.Container>
        </Card>
    );
}
