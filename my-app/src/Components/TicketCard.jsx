import React from 'react'
import { Card, CardBody, CardTitle, Button, Input } from 'reactstrap';
import styled from 'styled-components'
import axios from 'axios'

// text shadow, hover

const TCard = styled.div`
    margin-left: 2em;    
    max-width: 29em;
    max-height: 29em;
    background-color: rgba(255, 255, 255, .5);  
    border-radius: 1%;
    border: rgba(173, 135, 2, .9) solid 1px; /* dark goldenrod */
    margin: 1em;
    padding-left: 1em;
    text-shadow: 1px 1px 1px lightgrey;
    box-shadow:  5px 5px 1px rgba(4, 4, 4, .2);


    &:hover{
    box-shadow: inset 2px 2px 2px rgba(4, 4, 4, .9);
    background-color: rgb(255, 255, 255);  
    }


    `
const TInfo = styled.li`
    list-style-type: none;
    color: rgba(173, 135, 2, .9); /* dark goldenrod */
    margin-bottom: 5px; 
`

const TCardTitle = styled.h1`
    color: rgba(173, 135, 2, .9); /* dark goldenrod */
    padding-bottom: 0;
    margin-bottom: 0;
`

const TButton = styled.button`
    color: rgba(33, 118, 255, .5); /* Blue Crayola */
    border-radius: 10%;
    border: rgba(33, 118, 255, .5) solid 1px;
    margin-top: 1em;
    margin-right: 1em;
    background-color:white;

    &:hover {
    background-color: rgba(33, 118, 255, .9); 
    color: white
    }
`

const TicketCard = (props) => {


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
        <TCard
            id="TicketCard" inverse key={props.id} >

            {/* <TCardTitle>{props.first_name} {props.last_name}</TCardTitle> */}
            <CardBody >
                <TInfo>Name: {props.first_name} {props.last_name}</TInfo>
                <TInfo>Address: {props.street}
                    <br />
                    {props.city}, {props.state} {props.zip_code} </TInfo>
                <TInfo>Contact Info: {props.phone_number} | {props.email}</TInfo>
                {/* <TInfo>Email: {props.email}</TInfo> */}
                <hr />
                <TInfo>Employee Responsible: {props.employee_responsible}</TInfo>
                <TInfo>Watch Ordered: {props.watch_ordered}</TInfo>
                <TInfo>Date of Order: {new Date(props.date_ordered).toDateString()}</TInfo>
                <TInfo>Fulfilled: {props.fulfilled}</TInfo>
                <TInfo>Date Fulfilled: {(props.fulfilled === false) ? '' : new Date(props.date_fulfilled).toDateString()}</TInfo>

                <TButton outline color="primary" id={props.id} value={true} onClick={handleFulfillmentUpdate}>Fulfilled</TButton>
                <TButton outline color="secondary" id={props.id} value={false} onClick={handleFulfillmentUpdate}>Pending</TButton>

            </CardBody>
        </TCard>
    )

}

export default TicketCard;