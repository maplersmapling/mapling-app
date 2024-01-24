import React from 'react';
import { useState } from 'react';
import { Card, Tab } from 'react-bootstrap';

import NavShared from './NavEventShared';
import EditShared from './EditItem';
import ListShared from './ListItems';
import ListCompleted from './ListChecked';

import { 
    sharedTitles, dailyShared, 
    weeklyShared, otherShared
} from '../testData';

export default function Shared() {

    const sharedHeader = useState('Shared');
    const [key, setKey] = useState('tasks');
    const [isSharedEditing, setIsSharedEditing] = useState(false);
    const [sChecked, setSchecked] = useState(null);

    const [sTitles, setStitles] = useState(sharedTitles);
    const [dShared, setDshared] = useState(dailyShared);
    const [wShared, setWshared] = useState(weeklyShared);
    const [others, setOthers] = useState(otherShared);
    
    let sharedContent;
    if (isSharedEditing) {
        sharedContent = (
            <>
                <Card.Header>
                    {sharedHeader}:
                    <button type="submit" onClick={handleSharedSubmit}>
                        Save Shared
                    </button>
                </Card.Header>
                <Card.Body> 
                    {sTitles.map(stl => {
                        if (stl.title === 'Daily') {
                            return (
                                <>
                                    <Card.Title key={stl.id}>
                                        {stl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <EditShared 
                                            items={dShared}
                                            setItems={setDshared}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (stl.title === 'Weekly') {
                            return (
                                <>
                                    <Card.Title key={stl.id}>
                                        {stl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <EditShared 
                                            items={wShared}
                                            setItems={setWshared}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (stl.title === 'Other') {
                            return (
                                <>
                                    <Card.Title key={stl.id}>
                                        {stl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <EditShared 
                                            items={others}
                                            setItems={setOthers}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else {
                            return (
                                <Card.Text>
                                    Error loading edit shared list
                                </Card.Text>
                            );
                        }
                    })}
                </Card.Body>
            </>
        );
    } else {
        sharedContent = (
            <>
                <Card.Header>
                    {sharedHeader}:
                    <button type="submit" onClick={() => setIsSharedEditing(true)}>
                        Edit Shared
                    </button>
                </Card.Header>
                <Card.Body>
                    {sTitles.map(stl => {
                        if (stl.title === 'Daily') {
                            return (
                                <>
                                    <Card.Title key={stl.id}>
                                        {stl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListShared 
                                            items={dShared}
                                            setItems={setDshared}
                                            handleCheck={handleSharedCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (stl.title === 'Weekly') {
                            return (
                                <>
                                    <Card.Title key={stl.id}>
                                        {stl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListShared 
                                            items={wShared}
                                            setItems={setWshared}
                                            handleCheck={handleSharedCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else if (stl.title === 'Other') {
                            return (
                                <>
                                    <Card.Title key={stl.id}>
                                        {stl.title}:
                                    </Card.Title>
                                    <Card.Text>
                                        <ListShared 
                                            items={others}
                                            setItems={setOthers}
                                            handleCheck={handleSharedCheck}
                                        />
                                    </Card.Text>
                                </>
                            );
                        } else {
                            return (
                                <Card.Text>
                                    Error loading shared list
                                </Card.Text>
                            );
                        }
                    })}
                </Card.Body>
            </>
        );
    }

    function handleSharedSubmit(e) {
        e.preventDefault();

        setIsSharedEditing(!isSharedEditing);
    }

    function handleSharedCheck(nextChecked) {

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
                        {sharedContent}
                    </Tab.Pane>
                    <Tab.Pane eventKey="done">
                        <Card.Header>
                            {sharedHeader}:
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <ListCompleted 
                                    completed={sChecked}
                                />
                            </Card.Text>
                        </Card.Body>
                    </Tab.Pane>
                </Tab.Content>
                {/*--------- tab nav ----------*/}
                <Card.Footer>
                    <NavShared />
                </Card.Footer>
            </Tab.Container>
        </Card>
    );
}