import React from 'react';
import { useState } from 'react';
import { Card, Tab, Row, Col } from 'react-bootstrap';

import NavDailyWeekly from './NavDailyWeekly';
import EditList from './EditList';
import ListItems from './ListItems';
import ListChecked from './ListChecked';

// { category: '', items: [{id: '', title: '', done: ''}] }

import { 
    dailyTasks, dailyArcanes, dailyGrandis,
    dailyBosses 
} from '../testData';

export default function Daily() {

    const [key, setKey] = useState("tasks");
    const [isEditing, setIsEditing] = useState(false);
    const [checked, setChecked] = useState([]);

    const [tasks, setTasks] = useState(dailyTasks);
    const [arcanes, setArcanes] = useState(dailyArcanes);
    const [grandis, setGrandis] = useState(dailyGrandis);
    const [bosses, setBosses] = useState(dailyBosses);

    const handleSubmit = e => {
        e.preventDefault(); // stop browser re-render
        // set isEditing = false => true
        setIsEditing(!isEditing);
    }

    const handleChecked = doneItems => {
        setChecked(checked.map(item => {
            if (item.title !== doneItems.title) {
                return {
                    id: Date.now(),
                    title: doneItems.title,
                    done: doneItems.done
                };
            } else {
                return item;
            }
        }))
    }

    return (
        <Card>
            <Tab.Container 
                id="bottom-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab.Content>
                    <Tab.Pane eventKey="tasks">
                    {isEditing ? (
                    <>
                        <Card.Header>
                            Daily:
                        <button type="submit" onClick={handleSubmit}>
                            Save
                        </button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Editing Tasks:
                            </Card.Title>
                                <Card.Subtitle>Tasks:</Card.Subtitle>
                                <Card.Text>
                                    <EditList items={tasks} setItems={setTasks}/>
                                </Card.Text>
                                <Card.Subtitle>Arcane River:</Card.Subtitle>
                                <Card.Text>
                                    <EditList items={arcanes} setItems={setArcanes}/>   
                                </Card.Text>
                                <Card.Subtitle>Grandis:</Card.Subtitle>
                                <Card.Text>
                                    <EditList items={grandis} setItems={setGrandis}/>
                                </Card.Text>
                        </Card.Body>
                    </>
                    ) : (
                    <>
                        <Card.Header>
                            Daily:
                            <button onClick={() => setIsEditing(true)}>
                                Edit
                            </button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Tasks:</Card.Subtitle>
                            <Card.Text>
                                <ListItems items={tasks} setItems={setTasks} handleChecked={handleChecked} />
                            </Card.Text>
                            <Card.Subtitle>Arcane River:</Card.Subtitle>
                            <Card.Text>
                                <ListItems items={arcanes} setItems={setArcanes} handleChecked={handleChecked} />
                            </Card.Text>
                            <Card.Subtitle>Grandis:</Card.Subtitle>
                            <Card.Text>
                                <ListItems items={grandis} setItems={setGrandis} handleChecked={handleChecked} />
                            </Card.Text>
                        </Card.Body>
                    </>
                    )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="bosses">
                        
                    </Tab.Pane>
                    <Tab.Pane eventKey="done">
                        
                    </Tab.Pane>
                </Tab.Content>
                <Card.Footer>
                    <NavDailyWeekly />
                </Card.Footer>
            </Tab.Container>
        </Card>
    );
}

/* 
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
                        <Card>
                            <Card.Header>
                                Daily: 
                            </Card.Header>
                            <Card.Body>
                                <Card.Subtitle>Editing Tasks:</Card.Subtitle>
                                <Card.Text>
                                    <form onSubmit={handleSubmit}> 
                                        <h2>Tasks: </h2>     
                                        <EditList items={tasks} setItems={setTasks}/>
                                        <h2>Arcanes: </h2>  
                                        <EditList items={arcanes} setItems={setArcanes}/>
                                        <h2>Grandis: </h2>  
                                        <EditList items={grandis} setItems={setGrandis}/>
                                        <button type="submit" onClick={() => setIsEditing(false)}>
                                            Save Tasks
                                        </button>
                                    </form>
                                </Card.Text>
                            </Card.Body> 
                        </Card>
                    ) : (
                        <Card>
                            <Card.Header>
                                Daily: 
                            <button type="submit" onClick={() => setIsEditing(true)}>
                                Edit Tasks
                            </button>
                            </Card.Header>
                            <Card.Body>
                                <Card.Subtitle>Tasks:</Card.Subtitle>
                                <Card.Text>
                                    <ListItems items={tasks} setItems={setTasks} handleChecked={handleChecked} />
                                </Card.Text>
                                <Card.Subtitle>Arcane River:</Card.Subtitle>
                                <Card.Text>
                                    <ListItems items={arcanes} setItems={setArcanes} handleChecked={handleChecked} />
                                </Card.Text>
                                <Card.Subtitle>Grandis:</Card.Subtitle>
                                <Card.Text>
                                    <ListItems items={grandis} setItems={setGrandis} handleChecked={handleChecked} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="bosses">
                        <Card>
                            <Card.Header>Daily:</Card.Header>
                            <Card.Body>
                                <Card.Text>      
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tab.Pane>
                    <Tab.Pane eventKey="done">
                        <Card>
                            <Card.Header>Daily:</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    done items
                                    <ListChecked checked={checked} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            <Row>
                <NavDailyWeekly />
            </Row>
        </Tab.Container>
*/
/*
            <Card.Footer>
                <Nav variant="tabs" defaultActiveKey=""
            </Card.Footer>
        </Card>
*/