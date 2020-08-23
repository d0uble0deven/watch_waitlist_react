import React from 'react'
import { CardBody } from 'reactstrap';
import DeleteButton from './DeleteButton'
import styled from 'styled-components'
import axios from 'axios'


// text shadow, hover

const TCard = styled.div`
    max-width: 29em;
    max-height: 29em;
    background-color: rgba(255, 255, 255, .5);  
    border-radius: 5px;
    border: rgba(173, 135, 2, .9) solid 1px; /* dark goldenrod */
    margin-bottom: 2em;
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
`

const TButton = styled.button`
    color: rgba(33, 118, 255, .5); /* Blue Crayola */
    border-radius: 10px;
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

    const deleteTicketFromDB = (event) => {
        event.persist()
        console.log('deleteTicketFromDB is firing')
        // const ticketToDelete = { id: event.target.value }
        // console.log(ticketToDelete)
        axios.delete('http://localhost:3001/tickets/deleteTicket/:id', {
            id: event.target.value
        })


    }


    return (
        <TCard
            id="TicketCard" inverse key={props.id} >

            <CardBody >
                {/* <DeleteButton onClick={deleteTicketFromDB} value={props.id}>X</DeleteButton> */}
                <TInfo>Name: {props.first_name} {props.last_name}</TInfo>
                <TInfo>Address: {props.street}
                    <br />
                    {props.city}, {props.state} {props.zip_code} </TInfo>
                <TInfo>Contact Info: {props.phone_number} | {props.email}</TInfo>
                <hr />
                <TInfo>Employee Responsible: {props.employee_responsible}</TInfo>
                <TInfo>Watch Ordered: {props.watch_ordered}</TInfo>
                <TInfo>Date of Order: {new Date(props.date_ordered).toDateString()}</TInfo>
                {/* <TInfo>Fulfillment Status: {(props.fulfilled == true) ? 'Fulfilled' : 'Pending'}</TInfo> */}
                <TInfo>Fulfillment Status: {props.fulfilled}</TInfo>
                {/* <TInfo>Date Fulfilled: {(props.fulfilled == false) ? 'Not Yet Fulfilled' : new Date(props.date_fulfilled).toDateString()}</TInfo> */}
                <TInfo>Date Fulfilled: {props.fulfilled}</TInfo>

                <TButton outline color="primary" id={props.id} value={true} onClick={handleFulfillmentUpdate}>Fulfilled</TButton>
                <TButton outline color="secondary" id={props.id} value={false} onClick={handleFulfillmentUpdate}>Pending</TButton>

            </CardBody>
        </TCard>
    )

}

export default TicketCard;