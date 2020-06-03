import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const TicketCard = (props) => {


    const deleteTicket = (id) => {
        // console.log('deleteTicket')
        // console.log('id: ' + Object.keys(id))
        // takes in id, filter it out, show all that do now have id
        // setCustomer(customer.filter(element => element.id !== id))
        // console.log(customer)
    }


    return (
        <div>

            <Card inverse>

                <CardTitle>id:{props._id}</CardTitle>
                <CardBody >
                    <li>Name:{props.first_name} {props.last_name}</li>
                    <li>Street: {props.street}</li>
                    <li>City: {props.city}</li>
                    <li>State: {props.state}</li>
                    <li>Zip Code: {props.zip_code}</li>
                    <li>Phone Number: {props.phone_number}</li>
                    <li>Email: {props.email}</li>
                    <li>Watch Ordered: {props.watch_ordered}</li>
                    <li>Date of Order:{JSON.stringify(props.date_ordered)}</li>
                    <li>Fulfilled: {JSON.stringify(props.fulfilled)}</li>
                    <li>Date Fulfilled: {JSON.stringify(props.date_fulfilled)}</li>
                    {/* when button is clicked it updates db with fulfillment status, 
                updates state to remove ticket */}
                    {/* input_check or button, check is set as boolean, button has to have both button */}

                    {/* if button is clicked it fires a function,
                the function updates the db field for fulfilled, 
            updates the date_fulfilled to Date.now() */}
                    <Button outline color="success">Yes</Button>
                    <Button outline color="secondary">No</Button>
                    {/* copy and paste _id in to input form to delete */}
                    <input></input>
                    <Button value={props._id} size='lg' outline color='danger' size='sm' type="submit" onClick={deleteTicket}>Delete:  {props.id} </Button>
                    {/* <Link to="/tickets/show/:id">Update?</Link> */}
                </CardBody>
            </Card>



        </div>
    )

}

export default TicketCard;