import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, Button, Input } from 'reactstrap';
import axios from 'axios'


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const TicketCard = (props) => {
    const [rSelected, setRSelected] = useState(null);

    const handlePending = (event) => {
        // when this button is clicked, fetch api
        // set Ticket.fulfilled to false
        event.persist()
        console.log(event.target.value)
        axios.put('http://localhost:3001/tickets/updatePendingFulfillment', {
            id: event.target.value,
            status: false
        })
    }
    const handleFulfilledFulfilled = (event) => {
        // when this button is clicked, fetch api
        // set Ticket.fulfilled to false
        event.persist()
        console.log(event.target.value)
        axios.put('http://localhost:3001/tickets/updateFulfilledFulfillment', {
            id: event.target.value,
            status: true
        })
    }


    return (
        <div>

            <Card inverse key={props.id} >

                <CardTitle>id: {props.id} </CardTitle>
                <CardBody >
                    <li>Name:{props.first_name} {props.last_name}</li>
                    <li>Street: {props.street}</li>
                    <li>City: {props.city}</li>
                    <li>State: {props.state}</li>
                    <li>Zip Code: {props.zip_code}</li>
                    <li>Phone Number: {props.phone_number}</li>
                    <li>Email: {props.email}</li>
                    <li>Watch Ordered: {props.watch_ordered}</li>
                    <li>Date of Order:{props.date_ordered}</li>
                    <li>Fulfilled: {props.fulfilled}</li>
                    <li>Date Fulfilled: {props.date_fulfilled}</li>
                    {/* when button is clicked it updates db with fulfillment status, 
                updates state to remove ticket */}
                    {/* input_check or button, check is set as boolean, button has to have both button */}

                    {/* if button is clicked it fires a function,
                the function updates the db field for fulfilled, 
            updates the date_fulfilled to Date.now() */}
                    <Button outline color="primary" value={props.id} onClick={handleFulfilledFulfilled}>Fulfilled</Button>
                    <Button outline color="secondary" value={props.id} onClick={handlePending}> Pending</Button>
                    {/* copy and paste _id in to input form to delete */}
                    {/* <Input />
                    <Button value={props._id} size='lg' outline color='danger' size='sm' type="submit" onClick={deleteTicket}>Delete: {props.id} </Button> */}
                    {/* <Link to="/tickets/show/:id">Update?</Link> */}
                </CardBody>
            </Card>



        </div>
    )

}

export default TicketCard;