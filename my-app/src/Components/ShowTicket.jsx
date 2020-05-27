import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom'

/*
backend is working, 
UI is not firing,
Issue 1: there are two versions of react firing at once,
prevents use of additional hooks (useParams, useHistory),
once fixed, the ui can access the /:id in the uri

Issue 1 solved by adding: `react: path.resolve('./node_modules/react'),`
in line 302 of file my-app/node_modules/react-scripts/config/webpack.config.js

Time to pull from uri once more, accessing _id and /:id, which one??
*/


const ShowTicket = () => {
    const history = useHistory()

    // ticketInfo is an array to map out data, holds object from db
    const [ticketInfo, setTicketInfo] = useState([])

    useEffect(() => {
        getTicketInfo()
    })

    const deleteFromDb = () => {
        console.log('deleteFromDb')
        // fetch('http://localhost:3001/tickets/delete')

        // redirect to view page
        history.push('/tickets')
    }
    // Provides access to search parameters in the URL
    // This was possible earlier only using match.params.
    //  this means the node side must be completed, then react can grab id from url
    // const User = () => {
    //     const params = useParams();

    //     console.log('params: ' + typeof(params))
    // }

    // displays contents from db in to input boxes
    const getTicketInfo = () => {


        console.log('!!!getTicketInfo is firing')
        debugger;
        fetch('http://localhost:3001/tickets/show/:id')
            // fetch('http://localhost:3001/tickets/show/${this.props.match.params.id}')
            .then(data => data.json())
            .then(res => setTicketInfo(res.data))
        // returns object from DB with ticketInfo
        console.log('ticketInfo: ' + ticketInfo) // undefined, means not grabbing info correctly, fix node than this
    }


    // onClick is the function that updates the DB when submitted??





    return (
        <div>

            {/* dont need map
        form can tbe returned
        data that is sent to ui is set to state
        state is then called in input forms */}
            <Card inverse>
                This is the info from the ticket: {ticketInfo}

                <CardTitle>name</CardTitle>
                <CardBody>

                    {/* input box is populated with info from DB */}
                    <li>Name: <input type="text">
                        {/* {ticketInfo.name} */}
                    </input></li>

                    <li>Street: <input type="text"></input></li>
                    <li>City: <input type="text"></input></li>
                    <li>State: <input type="text"></input></li>
                    <li>Zip Code: <input type="text"></input></li>
                    <li>Phone Number: <input type="tel"></input></li>
                    <li>Email: <input type="email"></input></li>
                    <li>Watch Ordered:  <input type="range"></input></li>
                    <li>Date of Order: <input type="date"></input></li>
                    <li>Fulfilled:<input type="checkbox"></input> </li>
                    <li>Date Fulfilled: <input type="date"></input></li>
                    {/* when button is clicked it updates db with fulfillment status, 
        updates state to remove ticket */}
                    <Button color="success">Yes</Button>
                    <Button color="secondary">No</Button>

                </CardBody>
                {/*  when clicked, fires off updateToDb() with inputs as args */}
                <input type="submit" value="Update" />
                <input type="button" value="Delete" onClick={deleteFromDb} />
            </Card>
        </div>
    )
}

export default ShowTicket;