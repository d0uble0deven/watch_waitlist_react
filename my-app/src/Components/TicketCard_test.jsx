import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
const TicketCard = () => {

    // get info from db and then map out cards here
    // map out sample cards then connect to db to get real info

    const customer = [{ customer_name: { first_name: 'John', last_name: 'Doe' }, address: { street: '2211 Lawnmont Avenue', city: 'Austin', state: 'Texas', zip_code: '78756' }, contact_info: { phone_number: '8172668041', email: 'dev.govindji.software@gmail.com' }, order: { date_ordered: 'May 5, 2020', watch_ordered: 'daytona', date_fulfilled: null, fulfilled: false } },
    { customer_name: { first_name: 'Dave', last_name: 'Danson' }, address: { street: '4433 Train Boulevard', city: 'Waco', state: 'Texas', zip_code: '76799' }, contact_info: { phone_number: '2146629087', email: 'dave@gmail.com' }, order: { date_ordered: 'May 7, 2020', watch_ordered: 'skydweller', date_fulfilled: 'May 13, 2020', fulfilled: true } }]
    // date_fulfilled caen either be date or null
    // fulfilled can either be true or false


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