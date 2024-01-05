/*=============================================================================
File: Navbar.js
-------------------------------------------------------------------------------
Description: Navigation bar for whole website.
-------------------------------------------------
Pages included: DWtracker, NewsEvents, QuestGuides, Characters, Leveling, 
                Bosses, Equipment, Legion, LinkSkills, Familiars
=============================================================================*/
import React from 'react';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';
import logo from './maplinglogo.png';

export default function NavBar() {
    return (
        <>
        <Navbar
            collapseOnSelect
            expand="lg"
            className={styles.nav}
        >
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" 
                     style={{ width: "100%"}}
                >
                    <Nav.Link as={NavLink} 
                              to="/register" 
                              className={styles.navLink}
                    >
                        Create Account
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Navbar collapseOnSelect 
                expand="lg" 
                className={styles.nav}
        >
            <Container className={styles.navbarContainer} 
                       style={{fontFamily: 'Playpen Sans'}}
            >
{/* ------------------------ Mapling logo -----------------------------------------*/} 
                <Navbar.Brand as={NavLink} 
                              to="/" 
                              className={styles.navLogo}>
                    <img 
                        alt="Mapling logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top" 
                    />{' '}
                    Mapling
                </Navbar.Brand> 
{/*------------------------ Navigation Bar Items -----------------------------------------*/}
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

{/*--- nav items are right aligned --------*/ }
                    <Nav className="justify-content-end" 
                         style={{ width: "100%"}}>

                        <Nav.Link as={NavLink} 
                                  to="/tracker" 
                                  className={styles.navLink}>
                           Daily/Weekly Tracker
                        </Nav.Link>

                        <Nav.Link as={NavLink} 
                                  to="/newsevents" 
                                  className={styles.navLink}>
                           News & Events 
                        </Nav.Link>

                        <Nav.Link as={NavLink} 
                                  to="/questguides" 
                                  className={styles.navLink}>
                           Quest Guides 
                        </Nav.Link>
                        <NavDropdown title="Character Progression" id="basic-nav-dropdown" className={styles.navDrobdown}>
                            <NavDropdown.Item href="/Characters" >
                                Characters
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/leveling">
                                Leveling
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/bosses">
                                Bosses
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/equipment">
                                Equipment
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/legion">
                                Legion
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/linkskills">
                                LinkSkills
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/familiars">
                                Familiars
                            </NavDropdown.Item>
                        </NavDropdown>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};
