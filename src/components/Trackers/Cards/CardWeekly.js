import React from 'react';
import { useState } from 'react';
import { Card, Tab, Row, Col } from 'react-bootstrap';

import NavWeekly from './NavDailyWeekly';
import EditWeeklies from './EditList';
import ListWeeklies from './ListItems';
import ListCompleted from './ListChecked';

import { 
    weeklyTaskTitles, weeklyTasks, weeklyGuild, weeklyArcanes, 
    weeklyBossTitles, weeklyBosses
} from '../testData';

export default function Weekly() {

    const weeklyHeader = useState('Weekly');
    const [key, setKey] = useState('tasks');
    const [isWtaskEditing, setIsWtaskEditing] = useState(false);
    const [isWbossEditing, setIsWbossEditing] = useState(false);
    const [weeklyChecked, setWeeklyChecked] = useState(null);

    const [wTaskTitles, setWtaskTitles] = useState(weeklyTaskTitles);
    const [wTasks, setWtasks] = useState(weeklyTasks);
    const [wGuild, setWguild] = useState(weeklyGuild);
    const [wArcanes, setWarcanes] = useState(weeklyArcanes);
    
    const [wBossTitles, setWbossTitles] = useState(weeklyBossTitles);
    const [wBosses, setWbosses] = useState(weeklyBosses);

    let wTaskContent;
    if (isWtaskEditing) {
        wTaskContent = (
            <>
                <Card.Header>
                    {weeklyHeader}:
                    <button type="submit" onClick={handleWtaskSubmit}>
                        Save Weekly Tasks
                    </button>
                </Card.Header>
                <Card.Body>
                    {wTaskTitles.map(ttl => {
                        if (ttl.title === 'Tasks') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                        <Card.Text>
                                            <EditWeeklies 
                                                items={wTasks}
                                                setItems={setWtasks}
                                            />
                                        </Card.Text>
                                </>
                            );
                        } else if (ttl.title === 'Guild') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                        <Card.Text>
                                            <EditWeeklies 
                                                items={wGuild}
                                                setItems={setWguild}
                                            />
                                        </Card.Text>
                                    
                                </>
                            );
                        } else if (ttl.title === 'Arcane River') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                        <Card.Text>
                                            <EditWeeklies 
                                                items={wArcanes}
                                                setItems={setWarcanes}
                                            />
                                        </Card.Text>
                                </>
                            );
                        } else {
                            return (
                                <Card.Text>
                                    Error loading edit list
                                </Card.Text>
                            );
                        }
                    })}
                </Card.Body>
            </>
        );
    } else {
        wTaskContent = (
            <>
                <Card.Header>
                    {weeklyHeader}:
                    <button type="submit" onClick={() => setIsWtaskEditing(true)}>
                        Edit Weekly Tasks
                    </button>
                </Card.Header>
                <Card.Body>
                    {wTaskTitles.map(ttl => {
                        if (ttl.title === 'Tasks') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListWeeklies 
                                            items={wTasks}
                                            setItems={setWtasks}
                                            handleCheck={handleItemCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (ttl.title === 'Guild') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListWeeklies 
                                            items={wGuild}
                                            setItems={setWguild}
                                            handleCheck={handleItemCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (ttl.title === 'Arcane River') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListWeeklies 
                                            items={wArcanes}
                                            setItems={setWarcanes}
                                            handleCheck={handleItemCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else {
                            return (
                                <Card.Text>
                                    Error loading view list
                                </Card.Text>
                            );
                        }
                    })}
                </Card.Body>
            </>
        );
    }

    let wBossContent;
    if (isWbossEditing) {
        wBossContent = (
            <>
                <Card.Header>
                    {weeklyHeader}:
                    <button type="submit" onClick={handleWbossSubmit}>
                        Save W.Bosses
                    </button>
                </Card.Header>
                <Card.Body>
                    {wBossTitles.map(btl => {
                        if (btl.title === 'Bosses') {
                            return (
                                <>
                                    <Card.Title key={btl.id}>
                                        {btl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <EditWeeklies 
                                            items={wBosses}
                                            setItems={setWbosses}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else {
                            return (
                                <Card.Text>
                                    Error loading edit bosses
                                </Card.Text>
                            )
                        }
                    })}
                </Card.Body>
            </>
        );
    } else {
        wBossContent = (
            <>
                <Card.Header>
                    {weeklyHeader}:
                    <button type="submit" onClick={() => isWbossEditing(true)}>
                        Edit W.Bosses
                    </button>
                </Card.Header>
                <Card.Body>
                    {wBossTitles.map(btl => {
                        if (btl.title === 'Bosses') {
                            return (
                                <>
                                <Card.Title key={btl.id}>
                                    {btl.title}:
                                </Card.Title>
                                    <Card.Text>
                                        <ListWeeklies 
                                            items={wBosses}
                                            setItems={setWbosses}
                                            handleCheck={handleItemCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else {
                            return (
                                <Card.Text>
                                    Error loading list bosses
                                </Card.Text>
                            );
                        }
                    })}
                </Card.Body>
            </>
        );
    }

    
    let wDoneContent;
    if (weeklyChecked !== null) {
        wDoneContent = (
            <Card.Text>
                <ListCompleted 
                    completed={weeklyChecked}
                />
            </Card.Text>
        );
    } else {
        wDoneContent = (
            <Card.Text>
                No Completed items {' ):'}
            </Card.Text>
        );
    }

    function handleWtaskSubmit(e) {
        e.preventDefault();

        setIsWtaskEditing(!isWtaskEditing);
    }

    function handleWbossSubmit(e) {
        e.preventDefault();

        setIsWbossEditing(!isWbossEditing);
    }

    function handleItemCheck(nextWdoneItem) {
        if (nextWdoneItem !== null) {
            setWeeklyChecked([...weeklyChecked, {
                ...nextWdoneItem,
                id: Date.now()
            }]);
        } else {
            return {
                weeklyChecked
            };
        }
    }

    return (
        <Card>
            <Tab.Container
                justify
                id="bottom-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab.Content>
                    <Tab.Pane eventKey="tasks">
                        {wTaskContent}
                    </Tab.Pane>
                    <Tab.Pane eventKey="bosses">
                        {wBossContent}
                    </Tab.Pane>
                    <Tab.Pane eventKey="done">
                        <Card.Header>{weeklyHeader}:</Card.Header>
                        <Card.Body>
                            {wDoneContent}
                        </Card.Body>
                    </Tab.Pane>
                </Tab.Content>
                <Card.Footer>
                    <NavWeekly />
                </Card.Footer>
            </Tab.Container>
        </Card>
    );
}