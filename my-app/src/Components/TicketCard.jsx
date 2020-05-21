import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap';

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

    const listCustomer = customer.map((item, index) =>

        <Card inverse key={index} >
            <CardTitle>{item.first_name} {item.last_name}</CardTitle>
            <CardBody>
                <li>Street: {item.street}</li>
                <li>City: {item.city}</li>
                <li>State: {item.state}</li>
                <li>Zip Code: {item.zip_code}</li>
                <li>Phone Number: {item.phone_number}</li>
                <li>Email: {item.email}</li>
                <li>Watch Ordered: {item.watch_ordered}</li>
                <li>Date of Order:{JSON.stringify(item.date_ordered)}</li>
                <li>Fulfilled: {JSON.stringify(item.fulfilled)}</li>
                <li>Date Fulfilled{JSON.stringify(item.date_fulfilled)}</li>
                {/* when button is clicked it updates db with fulfillment status, 
                updates state to remove ticket */}
                <Button color="success">Yes</Button>
                <Button color="secondary">No</Button>
            </CardBody>
        </Card>
    )

    return (
        <div>
            {listCustomer}
        </div>
    )

}

export default TicketCard;