import React from 'react';
import { useState } from 'react';
import { Card, Tab, Row, Col } from 'react-bootstrap';

import NavCard from './NavTaskBoss';
import ListTasks from './ListTasks';
import { weeklyTasks, weeklyBosses} from '../testData';

export default function Weekly() {

    const [key, setKey] = useState('tasks');

    const [tasks, setTasks] = useState(weeklyTasks);
    const taskList = tasks.filter(t => t.category === 'task');
    const guildList = tasks.filter(g => g.category === 'guild');
    const arcaneList = tasks.filter(a => a.category === 'arcane');

    const [bosses, setBosses] = useState(weeklyBosses);

    function handleCheckTask(taskId, nextDone) {

        setTasks(tasks.map(task => {
            // if tasks.id is equal to taskId, change done to true. If not, return task
            if (task.id === taskId) {
                // update task done = false => true
                return {...task, done: nextDone};
            } else {
                // no change
                return task;
            }
        }))
    }
    function handleCheckBoss(bossId, nextDone) {

        setBosses(bosses.map(boss => {
            if (boss.id === bossId) {
                return {...boss, done: nextDone};
            } else {
                return boss;
            }
        }))
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
                        <Tab.Pane eventKey="tasks">
                            <Card.Header>Weekly:</Card.Header>
                            <Card.Body>
                                <Card.Subtitle>Tasks:</Card.Subtitle>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Card.Subtitle>Guild:</Card.Subtitle>
                                <Card.Text>
                                    
                                </Card.Text>
                                <Card.Subtitle>Arcane River:</Card.Subtitle>
                                <Card.Text>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="bosses">
                            <Card.Header>Weekly:</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ListTasks tasks={bosses} onCheck={handleCheckBoss} />
                                </Card.Text>
                            </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="done">
                        <Card.Header>Weekly:</Card.Header>
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
                    <NavCard />
                </Row>
            </Tab.Container>
        </Card>
    );
}