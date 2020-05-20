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

        // console.log(item.contact_info.email)
        <Card inverse key={index} >
            <CardTitle>{item.customer_name.first_name} {item.customer_name.last_name}</CardTitle>
            <CardBody>
                <li>{item.order.date_ordered}</li>
                <li>{item.order.watch_ordered}</li>
                <li>{JSON.stringify(item.order.date_fulfilled)}</li>
                <li>{JSON.stringify(item.order.fulfilled)}</li>
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