import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddPage from '../Pages/AddPage'
import ViewPage from '../Pages/ViewPage'
import ShowPage from '../Pages/ShowPage'
import styled from 'styled-components'

const NavBar = () => {

    const NavPlace = styled.span`
        margin: 2em 1em 5em 1em;
        color: white;
        border: rgba(33, 118, 255, .3) solid 2px;
        border-radius: 5%;
        background-color: rgba(33, 118, 255, .8);
        font-size: 30px;
        padding: .2em;
        /* box-shadow:  5px 5px 1px rgba(4, 4, 4, .9); */

        
        
        &:hover{
            background-color: rgba(33, 118, 255, .4);
            /* background-color: rgba(25, 200, 255, .3); */
            border: rgba(33, 118, 255, .1) solid 10px;
            /* border: rgba(25, 200, 255, .3) solid 5px; */
            text-shadow: 2px 2px 2px rgba(4,4,4);
            /* box-shadow: inset 2px 2px 2px rgba(4, 4, 4, .5); */

        }
    `

    const NavContainer = styled.div`
        /* background: red; */
        height: 3em;
        margin-bottom: 3em;
        padding-top: 1em;

        
    `


    return (
        <Router>
            <div>
                <nav>
                    <NavContainer>

                        <NavPlace>
                            {/* <StyledNavLink> */}
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">View Tickets</Link>
                            {/* </StyledNavLink> */}
                        </NavPlace>
                        <NavPlace>
                            {/* <StyledNavLink> */}
                            <Link style={{ color: 'white', textDecoration: 'none', }} to="/tickets/add">Add Ticket</Link>
                            {/* </StyledNavLink> */}
                        </NavPlace>
                        {/* <li>
                            <Link to="/tickets/show/:id"> Show Ticket </Link>
                        </li> */}
                    </NavContainer>
                    <hr />
                </nav>

                <Switch>
                    <Route path="/tickets/add" component={AddPage}>
                    </Route>
                    {/* <Route path="/tickets/show/:id" component={ShowPage}>
                    </Route> */}
                    <Route path="/" component={ViewPage}>
                    </Route>
                </Switch>
            </div>
        </Router >
    );

}



export default NavBar

