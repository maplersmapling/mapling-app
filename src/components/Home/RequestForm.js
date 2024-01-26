import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
//import downArrow from './Utilities/downArrowH.png'; //down arrow icon

export default function RequestForm() {

    return (
        <>
            <h2>
                Send a Request{' '}
                {/* insert down arrow here */}
            </h2>
            <p>
                Let us know if this website is missing anything or is displaying {'\n'}
                incorrect information and we'll update it as fast as we can! {'\n'}
            </p>
            <Form
                className="justify-content-end" 
                style={{width: "100%"}}
            >
                <Row>
                    <Col
                        xs={4}
                    />
                    <Col>
                        <Form.Group
                            className="mb-3"
                            controlId="requestForm.ControlTextarea1"
                        >
                            <Form.Control 
                                as="textarea"
                                rows={5}
                            />
                            <Button 
                                variant="outline-light" 
                                style={{float: 'right'}}
                            >
                                Submit
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    );
}