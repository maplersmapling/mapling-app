import React from 'react';
import { useState } from 'react';
import TrackerForm from './TrackerForm';
import TrackerList from './TrackerList';

import { Card, Tab, Tabs } from 'react-bootstrap';
import { 
    dailyTasks, dailyBosses, 
    weeklyTasks, weeklyBosses,
    eventTasks,
    sharedTasks
} from './testData';

//================== DailyCard() ========================================================
export function DailyCard() {

    const [key, setKey] = useState('tasks');


    const [dTaskList, setDtaskList] = useState(dailyTasks);
    const [dBossList, setDbossList] = useState(dailyBosses);

    const dtasks = dTaskList.filter(dtask => 
        dtask.type === 'Task'
    );
    const darcaneRivers = dTaskList.filter(darcaneRiver => 
        darcaneRiver.type === 'Arcane River'
    ); 
    const dgrandis = dTaskList.filter(grandis =>
        grandis.type === 'Grandis'
    );

    return (
        <Card>
            <Card.Header>Daily:</Card.Header>
            <Card.Body>
                <Tabs 
                    justify
                    id="tbd-controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab
                        eventKey="tasks"
                        title="Tasks"
                    >
                        <Card.Text>
                            {/* <TrackerForm items={dTaskList} setItems={setDtaskList}/> */}
                            Tasks: 
                            <TrackerList items={dtasks} />
                            Arcane River: 
                            <TrackerList items={darcaneRivers} />
                            Esfera: 
                            <TrackerList items={dgrandis} /> 
                        </Card.Text>
                    </Tab>
                    <Tab
                        eventKey="bosses"
                        title="Bosses"
                    >
                        <Card.Text>
                            <TrackerList items={dBossList} />
                        </Card.Text>
                    </Tab>
                    <Tab
                        eventKey="done"
                        title="Done"
                    >
                        <Card.Text>
                            **figure out 
                        </Card.Text>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
};
//================== end of DailyCard() =================================================
//
//
//================== WeeklyCard() =======================================================
export function WeeklyCard() {

    const [key, setKey] = useState('tasks');

    const [wTaskList, setWtaskList] = useState(weeklyTasks);
    const [wBossList, setWbossList] = useState(weeklyBosses);

    const wtasks = wTaskList.filter(wtask => 
        wtask.type === 'Task'
    );
    const warcaneRivers = wTaskList.filter(warcaneRiver => 
        warcaneRiver.type === 'Arcane River'
    );

    return (
        <Card>
            <Card.Header>Weekly:</Card.Header>
            <Card.Body>
                <Tabs
                    justify
                    id="tbd-controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab
                        eventKey="tasks"
                        title="Tasks"
                    >
                        <Card.Text>
                    {/*<TrackerForm items={wTaskList} setItems={setWtaskList} />*/} 
                            Tasks: 
                            <TrackerList items={wtasks} />
                            Arcane River: 
                            <TrackerList items={warcaneRivers} />
                        </Card.Text>
                    </Tab>
                    <Tab
                        eventKey="bosses"
                        title="Bosses"
                    >
                        <Card.Text>
                            <TrackerList items={wBossList} />
                        </Card.Text>
                    </Tab>
                    <Tab
                        eventKey="done"
                        title="Done"
                    >
                        <Card.Text>
                            **figure out 
                        </Card.Text>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
};
//================== end of WeeklyCard() ================================================
//
//
//================== EventCard() ========================================================
export function EventCard() {

    const [key, setKey] = useState('main');
 
    const [eventList, setEventList] = useState(eventTasks);

    const abyssals = eventList.filter(abyssal => 
        abyssal.type === 'Abyssal Expedition'
    );
    const identisks = eventList.filter(identisk =>
        identisk.type === 'Identisk'
    );
    const others = eventList.filter(other =>
        other.type !== 'Abyssal Expedition' && other.type !== 'Identisk'
    );

    return (
        <Card>
            <Card.Header>Event:</Card.Header>
            <Card.Body>
                <Tabs
                    justify
                    id="tbd-controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab
                        eventKey="main"
                        title="Main"
                    >
                        <Card.Text>
                            Abyssal Expedition: 
                            <TrackerList items={abyssals} /> 
                            Identisk: 
                            <TrackerList items={identisks} />
                            Other: 
                            <TrackerList items={others} />          
                        </Card.Text>
                    </Tab>
                    <Tab
                        eventKey="done"
                        title="Done"
                    >
                        <Card.Text>
                            *figure out*
                        </Card.Text>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
};
//================== end of EventCard() =================================================
//
//
//================== SharedCard() =======================================================
export function SharedCard() {
    
    const [key, setKey] = useState('daily');

    const [sharedList, setSharedList] = useState(sharedTasks);

    const dailies = sharedList.filter(daily => 
        daily.type === 'daily'
    );
    const weeklies = sharedList.filter(weekly => 
        weekly.type === 'weekly'
    );

    return (
        <Card>
            <Card.Header>Shared:</Card.Header>
            <Card.Body>
                <Tabs
                    justify
                    id="tbd-controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                    <Tab
                        eventKey="daily"
                        title="Daily"
                    >
                        <Card.Text>
                            <TrackerList items={dailies} />                              
                        </Card.Text>
                    </Tab>
                    <Tab
                        eventKey="weekly"
                        title="Weekly"
                    >
                        <Card.Text>
                            <TrackerList items={weeklies} />                          
                        </Card.Text>
                    </Tab>
                    <Tab
                        eventKey="done"
                        title="Done"
                    >
                        <Card.Text>
                            *figure out*
                        </Card.Text>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
};
//================== end of SharedCard() ================================================