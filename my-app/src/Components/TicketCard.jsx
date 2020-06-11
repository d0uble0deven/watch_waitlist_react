import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, Button, Input } from 'reactstrap';
import axios from 'axios'


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const TicketCard = (props) => {

    // const handlePending = (event) => {
    //     // when this button is clicked, fetch api
    //     // set Ticket.fulfilled to false
    //     event.persist()
    //     console.log(event.target.value)
    //     axios.put('http://localhost:3001/tickets/updatePendingFulfillment', {
    //         id: event.target.value,
    //         status: false
    //     })
    // }
    // const handleFulfilledFulfilled = (event) => {
    //     // when this button is clicked, fetch api
    //     // set Ticket.fulfilled to true
    //     event.persist()
    //     console.log(event.target.value)
    //     axios.put('http://localhost:3001/tickets/updateFulfilledFulfillment', {
    //         id: event.target.value,
    //         status: true
    //     })
    // }

    const handleFulfillmentUpdate = (event) => {
        console.log('handleFulfillmentUpdate is firing')
        event.persist()
        const statusUpdate = { id: event.target.id, status: event.target.value }
        console.log('statusUpdate: ' + JSON.stringify(statusUpdate))
        axios.put('http://localhost:3001/tickets/updateFulfillment', {
            statusUpdate: statusUpdate
        })
    }


    return (
        <div>

            <Card inverse key={props.id} >

                <CardTitle>id: {props.id} </CardTitle>
                <CardBody >
                    <li>Name: {props.first_name} {props.last_name}</li>
                    <li>Street: {props.street}</li>
                    <li>City: {props.city}</li>
                    <li>State: {props.state}</li>
                    <li>Zip Code: {props.zip_code}</li>
                    <li>Phone Number: {props.phone_number}</li>
                    <li>Email: {props.email}</li>
                    <li>Watch Ordered: {props.watch_ordered}</li>
                    <li>Date of Order: {props.date_ordered}</li>
                    <li>Fulfilled: {props.fulfilled}</li>
                    <li>Date Fulfilled: {props.date_fulfilled}</li>

                    <Button outline color="primary" id={props.id} value={true} onClick={handleFulfillmentUpdate}>Fulfilled</Button>
                    <Button outline color="secondary" id={props.id} value={false} onClick={handleFulfillmentUpdate}>Pending</Button>

                </CardBody>
            </Card>



        </div>
    )

}

export default TicketCard;