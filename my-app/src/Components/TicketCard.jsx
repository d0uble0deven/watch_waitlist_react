import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom'


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const TicketCard = () => {
    const [customer, setCustomer] = useState([])

    // get tickets from DB
    useEffect(() => {
        getTicketsFromDb()
    })

    const getTicketsFromDb = () => {
        // 404 means that is not pulling data from backend api
        fetch('http://localhost:3001/tickets/getTickets')
            // Response {type: "cors", url: "http://localhost:3001/tickets/getTickets", redirected: false, status: 404, ok: false, …}
            .then(data => data.json())
            .then(res => setCustomer(res.data))
        console.log(customer)
    }

    const deleteTicket = (id) => {
        console.log('deleteTicket')
        console.log(id)
        // takes in id, filter it out, show all that do now have id
        setCustomer(customer.filter(item => item.id !== id))
        console.log(customer)
    }



    const listCustomer = customer.map((item, index) =>

        <Card inverse key={index} >
            {/* copy and paste _id in to input form to delete */}
            <input></input>
            <Button style={{ width: 50 }} outline color='danger' size='sm' type="submit" onClick={deleteTicket}>x</Button>
            <CardTitle>id:{item._id}</CardTitle>
            <CardBody >
                <li>Name:{item.first_name} {item.last_name}</li>
                <li>Street: {item.street}</li>
                <li>City: {item.city}</li>
                <li>State: {item.state}</li>
                <li>Zip Code: {item.zip_code}</li>
                <li>Phone Number: {item.phone_number}</li>
                <li>Email: {item.email}</li>
                <li>Watch Ordered: {item.watch_ordered}</li>
                <li>Date of Order:{JSON.stringify(item.date_ordered)}</li>
                <li>Fulfilled: {JSON.stringify(item.fulfilled)}</li>
                <li>Date Fulfilled: {JSON.stringify(item.date_fulfilled)}</li>
                {/* when button is clicked it updates db with fulfillment status, 
                updates state to remove ticket */}
                {/* input_check or button, check is set as boolean, button has to have both button */}

                {/* if button is clicked it fires a function,
                the function updates the db field for fulfilled, 
            updates the date_fulfilled to Date.now() */}
                <Button outline color="success">Yes</Button>
                <Button outline color="secondary">No</Button>
            </CardBody>
            {/* <Link to="/tickets/show/:id">Update?</Link> */}
        </Card>
    )

    return (
        <div>
            {listCustomer}
        </div>
    )

}

export default TicketCard;