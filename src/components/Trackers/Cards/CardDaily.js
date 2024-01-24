/*=============================================================================
File: CardDaily.js
-------------------------------------------------------------------------------
Description: Contains trackers for daily items
-----------------------------------------------
Parent: TabCharacter
=> CardDaily =>
Children: NavDailyWeekly, EditSection, ListSection, ListChecked
------------------------------------------------------------------------
Lists Included: dailyTaskTitles, dailyTasks, dailyArcanes, dailyGrandis,
                dailyBossTitles, dailyBosses 
---------------
props: none
------
fncs: handleTaskSubmit, handleBossSubmit, handleItemCheck
=============================================================================*/
import React from 'react';
import { useState } from 'react';
import { Card, Tab } from 'react-bootstrap';

import NavDaily from './NavDailyWeekly';
import EditDailies from './EditList';
import ListDailies from './ListItems';
import ListCompleted from './ListChecked';

// { category: '', items: [{id: '', title: '', done: ''}] }

import { 
    dailyTaskTitles, dailyTasks, dailyArcanes, dailyGrandis,
    dailyBossTitles, dailyBosses 
} from '../testData';

export default function Daily() {

    const dailyHeader = useState("Daily");
    const [key, setKey] = useState("tasks");
    const [isTaskEditing, setIsTaskEditing] = useState(false);
    const [isBossEditing, setIsBossEditing] = useState(false);
    const [checked, setChecked] = useState(null);

    // declare array lists for data from testData
    //----- tasks tab ----------
    const [taskTitles, setTaskTitles] = useState(dailyTaskTitles);
    const [tasks, setTasks] = useState(dailyTasks);
    const [arcanes, setArcanes] = useState(dailyArcanes);
    const [grandis, setGrandis] = useState(dailyGrandis);
    //----- bosses tab ---------
    const [bossTitles, setBossTitles] = useState(dailyBossTitles);
    const [bosses, setBosses] = useState(dailyBosses);

    let taskContent;
    if (isTaskEditing) {
        // if isTaskEditing = true, edit list
        taskContent = (
            <>
                <Card.Header>
                    {dailyHeader}:
                    <button type="submit" onClick={handleTaskSubmit}>
                        Save Tasks
                    </button>
                </Card.Header>
                <Card.Body>
                {taskTitles.map(ttl => {
                    if (ttl.title === 'Tasks') {
                        return (
                            <>
                                <Card.Title key={ttl.id}>
                                    {ttl.title}: 
                                </Card.Title>
                                <Card.Text>
                                    <EditDailies 
                                        items={tasks}
                                        setItems={setTasks}
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
                                    <EditDailies 
                                        items={arcanes}
                                        setItems={setArcanes}
                                    />
                                </Card.Text>
                            </>
                        );
                    } else if (ttl.title === "Grandis") {
                        return (
                            <>
                                <Card.Title key={ttl.id}>
                                    {ttl.title}: 
                                </Card.Title>
                                <Card.Text>
                                    <EditDailies 
                                        items={grandis}
                                        setItems={setGrandis}
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
        // if isTaskEditing = false, display checklist
        taskContent = (
            <>
                <Card.Header>
                    {dailyHeader}:
                    <button type="submit" onClick={() => setIsTaskEditing(true)}>
                        Edit Tasks
                    </button>
                </Card.Header>
                <Card.Body>
                    {taskTitles.map(ttl => {
                        if (ttl.title === 'Tasks') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListDailies 
                                            items={tasks}
                                            setItems={setTasks}
                                            handleCheck={handleItemCheck}
                                        />
                                    </Card.Text>
                                </>
                            )
                        } else if (ttl.title === 'Arcane River') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListDailies 
                                            items={arcanes}
                                            setItems={setArcanes}
                                            handleCheck={handleItemCheck}
                                        />
                                </Card.Text>
                                </>
                            )
                        } else if (ttl.title === 'Grandis') {
                            return (
                                <>
                                    <Card.Title key={ttl.id}>
                                        {ttl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListDailies 
                                            items={grandis}
                                            setItems={setGrandis}
                                            handleCheck={handleItemCheck}
                                        />
                                </Card.Text>
                                </>
                            );
                        } else {
                            return (
                                <Card.Text>
                                    Error loading list view
                                </Card.Text>
                            );
                        }
                    })}
                </Card.Body>
            </>
        )
    }

    let bossContent;
    if (isBossEditing) {
        // if isBossEditing = true, edit list
        bossContent = (
            <>
                <Card.Header>
                    {dailyHeader}:
                    <button type="submit" onClick={handleBossSubmit}>
                        Save Bosses
                    </button>
                </Card.Header>
                <Card.Body>
                    {bossTitles.map(btl => {
                        return (
                            <>
                                <Card.Title key={btl.id}>
                                    {btl.title}:
                                </Card.Title>
                                <Card.Text>
                                    <EditDailies 
                                        items={bosses}
                                        setItems={setBosses}
                                    />
                            </Card.Text>
                            </>
                        );
                    })}
                </Card.Body>
            </>
        )
    } else {
        // if isBossEditing = false, display checklist
        bossContent = (
            <>
                <Card.Header>
                    {dailyHeader}:
                    <button type="submit" onClick={() => setIsBossEditing(true)}>
                        Edit Bosses
                    </button>
                </Card.Header>
                <Card.Body>
                    {bossTitles.map(btl => {
                        return (
                            <>
                                <Card.Title key={btl.id}>
                                    {btl.title}:
                                </Card.Title>
                                <Card.Text>
                                    <ListDailies 
                                        items={bosses}
                                        setItems={setBosses}
                                        handleCheck={handleItemCheck}
                                    />
                                </Card.Text>
                            </>
                        );
                    })}
                </Card.Body>
            </>
        )
    }
    
    let doneContent;
    if (checked !== null) {
        doneContent = (
            <Card.Text>
                <ListCompleted 
                    completed={checked}
                />
            </Card.Text>
        );
    } else {
        doneContent = (
            <Card.Text>
                No Completed items {' ):'}
            </Card.Text>
        );
    }

    function handleTaskSubmit(e) {
        e.preventDefault(); // stop browser re-render
        
        setIsTaskEditing(!isTaskEditing);
    }

    function handleBossSubmit(e) {
        e.preventDefault();

        setIsBossEditing(!isBossEditing);
    }

    function handleItemCheck(doneItem) {
        if (doneItem !== null) {
            // add new checked item to end of checked list
            setChecked([...checked, {
                ...doneItem,
                id: Date.now()
            }]);
        } 
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
                        {taskContent}
                    </Tab.Pane>
                    <Tab.Pane eventKey="bosses">
                        {bossContent}
                    </Tab.Pane>
                    <Tab.Pane eventKey="done">
                        <Card.Header>
                            {dailyHeader}: 
                        </Card.Header>
                        <Card.Body>
                            {doneContent}
                        </Card.Body>
                    </Tab.Pane>
                </Tab.Content>
                <Card.Footer>
                    <NavDaily />
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