import React from 'react';
import { useState } from 'react';
import { Card, Tab } from 'react-bootstrap';

import NavEvent from './NavEventShared';
import EditEvents from './EditList';
import ListEvents from './ListItems';
import ListCompleted from './ListChecked';
import { 
    eventTitles, abyssalExpeditions, 
    dailyIdentisks, weeklyIdentisks, identiskWindCoins, 
    zeroHundred 
} from '../testData';

export default function Event() {

    const eventHeader = useState('Events');
    const [key, setKey] = useState('tasks');
    const [isEventEditing, setIsEventEditing] = useState(false);
    const [eventChecked, setEventChecked] = us/eState(null);

    const [eTitles, setEtitles] = useState(eventTitles);
    const [abyssExpeds, setAbyssExpeds] = useState(abyssalExpeditions);
    const [dIdentisks, setDidentisks] = useState(dailyIdentisks);
    const [wIdentisks, setWidentisks] = useState(weeklyIdentisks);
    const [idenWindCoins, setIdenWindCoins] = useState(identiskWindCoins);
    const [zeroHunds, setZeroHunds] = useState(zeroHundred);

    let eventContent;
    if (isEventEditing) {
        eventContent = (
            <>
                <Card.Header>
                    {eventHeader}:
                    <button type="submit" onClick={handleEventSubmit}>
                        Save Events
                    </button>
                </Card.Header>
                <Card.Body>
                    {eTitles.map(etl => {
                        if (etl.title === 'Abyssal Expedition') {
                            return (
                                <>
                                    <Card.Title key={etl.id}>
                                        {etl.title}:
                                    </Card.Title>
                                    <Card.Text> 
                                        <EditEvents 
                                            items={abyssExpeds}
                                            setItems={setAbyssExpeds}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (etl.title === 'Identisks') {
                            return (
                                <>
                                    <Card.Title key={etl.id}>
                                        {etl.title}:
                                    </Card.Title>
                                    <Card.Text> 
                                        <EditEvents 
                                            items={dIdentisks}
                                            setItems={setDidentisks}
                                        />
                                        <EditEvents 
                                            items={wIdentisks}
                                            setItems={setWidentisks}
                                        />
                                        <EditEvents 
                                            items={idenWindCoins}
                                            setItems={setIdenWindCoins}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (etl.title === 'Zero to One Hundred') {
                            return (
                                <>
                                    <Card.Title key={etl.id}>
                                        {etl.title}:
                                    </Card.Title>
                                    <Card.Text> 
                                        <EditEvents 
                                            items={zeroHunds}
                                            setItems={setZeroHunds}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else {
                            return(
                                <Card.Text>
                                    Error loading edit event list 
                                </Card.Text>
                            );
                        }
                    })}
                </Card.Body>
            </>
        );
    } else {
        eventContent = (
            <>
                 <Card.Header>
                    {eventHeader}:
                    <button type="submit" onClick={() => setIsEventEditing(true)}>
                        Edit Events 
                    </button>
                 </Card.Header>
                 <Card.Body>
                    {eTitles.map(etl => {
                        if (etl.title === 'Abyssal Expedition') {
                            return (
                                <>
                                    <Card.Title key={etl.id}>
                                        {etl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListEvents 
                                            items={abyssExpeds}
                                            setItems={setAbyssExpeds}
                                            handleCheck={handleEventCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (etl.title === 'Identisk') {
                            return (
                                <>
                                    <Card.Title key={etl.id}>
                                        {etl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListEvents 
                                            items={dIdentisks}
                                            setItems={setDidentisks}
                                            handleCheck={handleEventCheck}
                                        />
                                        <ListEvents 
                                            items={wIdentisks}
                                            setItems={setWidentisks}
                                            handleCheck={handleEventCheck}
                                        />
                                        <ListEvents 
                                            items={idenWindCoins}
                                            setItems={setIdenWindCoins}
                                            handleCheck={handleEventCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (etl.title === 'Zero to One Hundred') {
                            return (
                                <>
                                    <Card.Title key={etl.id}>
                                        {etl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListEvents 
                                            items={zeroHunds}
                                            setItems={setZeroHunds}
                                            handleCheck={handleEventCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else {
                            return (
                                <Card.Text>
                                    Error loading event list 
                                </Card.Text>
                            );
                        }
                    })}
                 </Card.Body>
            </>
        );
    }

    function handleEventSubmit(e) {
        e.preventDefault();

        setIsEventEditing(!isEventEditing);
    }

    function handleEventCheck(doneItem) {
        setEventChecked([...eventChecked, doneItem]);
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
                        {eventContent}
                    </Tab.Pane>
                    <Tab.Pane eventKey="done">
                        <Card.Header>
                            {eventHeader}:
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ListCompleted 
                                    completed={eventChecked}
                                />
                            </Card.Text>
                        </Card.Body>
                    </Tab.Pane>
                </Tab.Content>
                    {/*---- tab navigation -------*/}
                <Card.Footer>
                    <NavEvent /> 
                </Card.Footer>
            </Tab.Container>
        </Card>
    );
}
