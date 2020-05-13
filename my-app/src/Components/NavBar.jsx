import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddPage from '../Pages/AddPage'
import ViewPage from '../Pages/ViewPage'

const NavBar = () => {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">View Tickets</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Ticket</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/add" component={AddPage}>
                    </Route>
                    <Route path="/" component={ViewPage}>
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}



export default NavBar

