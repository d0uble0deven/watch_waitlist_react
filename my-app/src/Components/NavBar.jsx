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
        border: rgba(173, 135, 2, .1) solid 2px;
        border-radius: 5px;
        background-color: rgba(173, 135, 2, .1);
        font-size: 24px;
        justify-self: stretch; 
        box-shadow:  2px 2px 1px rgba(4, 4, 4, .1);
        place-self:center;
        text-shadow: 2px 2px 2px white;

        
        &:hover{
            /* background-color: rgba(33, 118, 255, .4); */
            border: rgba(33, 118, 255, .1) solid 1px;            
            text-shadow: 2px 2px 2px white;
            box-shadow: inset 3px 3px 2px rgba(4, 4, 4, .9);


        }
    `

    const NavContainer = styled.div`
        display: grid;
        grid-template-rows: repeat(3, 60px);
        height: 3em;
        margin-bottom: 12em;
        padding-top: 1em;
        
    `
    const Title = styled.h1`
        font-size: 50px;
        place-self: center;        /* box-shadow: 2px 2px 1px rgba(4, 4, 4, .1); */
        text-shadow: 2px 2px 2px lightgrey;
        color: rgba(4, 4, 4, .6);
        padding: 2px;
        font-family: 'Varela Round', sans-serif;
        font-family: 'Roboto Slab', serif;


    `

    return (
        <Router>
            <div>
                <nav>
                    <NavContainer>
                        <Title>Watch Waitlist</Title>

                        <NavPlace>
                            <Link style={{ color: 'rgba(4, 4, 4, .9)', textDecoration: 'none', placeSelf: 'center' }} to="/">View Tickets</Link>
                        </NavPlace>
                        <NavPlace>
                            <Link style={{ color: 'rgba(4, 4, 4, .9)', textDecoration: 'none', }} to="/tickets/add">Add Ticket</Link>
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

