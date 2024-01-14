import React from 'react';
import { useState } from 'react';
import { Card, Tab, Row, Col } from 'react-bootstrap';

import NavTaskBoss from './NavTaskBoss';
import EditList from './EditList';
import ListTasks from './ListTasks';
import ListDone from './ListDone';

import { 
    dailyTasks, dailyBosses 
} from '../testData';

export default function DailyCard() {

    const [key, setKey] = useState("tasks");
    const [isEditing, setIsEditing] = useState(false);

    const [tasks, setTasks] = useState(dailyTasks);
    const taskList = tasks.filter(t => t.category === 'task');
    const arcaneList = tasks.filter(a => a.category === 'arcane');
    const grandisList = tasks.filter(g => g.category === 'grandis');

    const [bosses, setBosses] = useState(dailyBosses);

    const handleSubmit = e => {
        e.preventDefault(); // stop browser re-render
        // set isEditing = false => true
        setIsEditing(!isEditing);
    }

    const updateTaskTitle = (task) => {
        setTasks(tasks.map(item => {
            if (item.id === task.id) {
                // update task title to user input
                return {
                    ...item,
                    title: task.title
                };
                // no changes
            } else {
                return item;
            }
        }))
    }

    const updateBossTitle = (boss) => {
        setBosses(bosses.map(item => {
            if (item.id === boss.id) {
                // update boss title to user input  
                return {
                    ...item,
                    title: boss.title
                };
            } else {
                return item;
            }
        }))
    }

    function handleCheckTask(taskId, nextDone) {

        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                // update task item from done = false => true
                return { ...task, done: nextDone};
            } else {
                // no changes
                return task;
            }
        }));
    }

    function handleCheckBoss(bossId, nextDone) {

        setBosses(bosses.map(boss => {
            if (boss.id === bossId) {
                // update boss item from done = false => true
                return { ...boss, done: nextDone}
            } else {
                // no changes
                return boss;
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
                        <Tab.Pane eventKey="tasks">
                            {isEditing ? (
                                <>
                                    <Card.Header>
                                        Daily: 
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Subtitle>Editing Tasks: </Card.Subtitle>
                                        <Card.Text>
                                            <form onSubmit={handleSubmit}>      
                                                <EditList tasks={tasks} updateHandler={updateTaskTitle}/>
                                                <button type="submit" onClick={() => setIsEditing(false)}>
                                                    Save Tasks
                                                </button>
                                            </form>
                                        </Card.Text>
                                    </Card.Body> 
                                </>
                            ) : (
                                <>
                                    <Card.Header>
                                        Daily: 
                                    <button type="submit" onClick={() => setIsEditing(true)}>
                                        Edit Tasks
                                    </button>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Subtitle>Tasks:</Card.Subtitle>
                                        <Card.Text>
                                            <ListTasks tasks={taskList} onCheck={handleCheckTask} />
                                        </Card.Text>
                                        <Card.Subtitle>ArcaneRiver:</Card.Subtitle>
                                        <Card.Text>
                                            <ListTasks tasks={arcaneList} onCheck={handleCheckTask} />
                                        </Card.Text>
                                        <Card.Subtitle>Grandis:</Card.Subtitle>
                                        <Card.Text>
                                            <ListTasks tasks={grandisList} onCheck={handleCheckTask} />
                                        </Card.Text>
                                    </Card.Body>
                                </>
                            )}
                        </Tab.Pane>
                        <Tab.Pane eventKey="bosses">
                        <Card.Header>Daily:</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <ListTasks tasks={bosses} onCheck={handleCheckBoss}/>      
                                </Card.Text>
                            </Card.Body>
                        </Tab.Pane>
                        <Tab.Pane eventKey="done">
                            <Card.Header>Daily:</Card.Header>
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
                    <NavTaskBoss />
                </Row>
            </Tab.Container>
        </Card>
    );
}