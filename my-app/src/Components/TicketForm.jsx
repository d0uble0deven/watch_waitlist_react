import React, { useState } from 'react';
import { useInput } from '../Hooks/InputHooks'
import axios from 'axios'
import './ComponentStyling/TicketFormStyling.css'

export default function NameForm(props) {

    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: phoneNumber, bind: bindNumber, reset: resetNumber } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');

    const { value: street, bind: bindStreet, reset: resetStreet } = useInput('');
    const { value: city, bind: bindCity, reset: resetCity } = useInput('');
    const { value: state, bind: bindState, reset: resetState } = useInput('');
    const { value: zipCode, bind: bindZipCode, reset: resetZipCode } = useInput('');
    const { value: dateOrdered, bind: bindDateOrdered, reset: resetDateOrdered } = useInput('');
    const { value: watchOrdered, bind: bindWatchOrdered, reset: resetWatchOrdered } = useInput('');



    const addTicketToDb = (input) => {
        console.log(input)
        axios.post('http://localhost:3001/tickets/add/addTickets', {
            input: input
        })
        handleSubmit()

    }

    const handleSubmit = () => {
        console.log('handleSubmit is working!')
        alert(`Submitting ${firstName} ${lastName} ${phoneNumber} ${email} ${street} ${city} ${state} ${zipCode} ${dateOrdered} ${watchOrdered}`);
        resetFirstName();
        resetLastName();
        resetNumber();
        resetEmail();
        resetStreet();
        resetCity();
        resetState();
        resetZipCode();
        resetDateOrdered();
        resetWatchOrdered();
    };

    const validate = (event, inputFirstName = bindFirstName.value, inputLastName = bindLastName.value, inputNumber = bindNumber.value, inputEmail = bindEmail.value, inputStreet = bindStreet.value, inputCity = bindCity.value, inputState = bindState.value, inputZipCode = bindZipCode.value, inputDateOrdered = bindDateOrdered.value, inputWatchOrdered = bindWatchOrdered.value) => {
        event.preventDefault()
        const names = /^\D{2,}$/;
        const number = /^\d{3}-\d{3}-\d{4}$/;
        const emails = /[\w-]+@([\w-]+\.)+[\w-]+/;
        if (names.test(inputFirstName) && names.test(inputLastName) && emails.test(inputEmail)) {
            if (number.test(inputNumber)) {
                const inputs = { inputFirstName, inputLastName, inputNumber, inputEmail, inputStreet, inputCity, inputState, inputZipCode, inputDateOrdered, inputWatchOrdered }
                console.log(inputs)
                addTicketToDb(inputs)
            } else {
                alert('Please follow the 000-000-0000 format.');
            }
        }
        else alert('Please input valid information.');
    }

    return (
        <div className="form_containter">

            <h1>Add a Ticket</h1>
            <hr />
            <form className="ticket_form" onSubmit={validate}>

                <label>First Name: <input type="text" placeholder="John" {...bindFirstName} /></label>
                <br />
                <br />
                <label>Last Name: <input type="text" placeholder="Doe" {...bindLastName} /></label>
                <br />
                <br />
                <label>Email: <input type="email" placeholder="me@email.com" {...bindEmail} /></label>
                <br />
                <br />
                <label>Phone Number: <input type="tel" placeholder="000-000-0000" {...bindNumber} /></label>
                <br />
                <br />
                <label>Street:<input type="text" placeholder="2211 Lawnmont Ave" {...bindStreet} /></label>
                <br />
                <br />
                <label>City:<input type="text" placeholder="Austin" {...bindCity} /></label>
                <br />
                <br />
                <label>State:<input type="text" placeholder="Texas" {...bindState} /></label>
                <br />
                <br />
                <label>Zip Code:<input type="text" placeholder="75034" {...bindZipCode} /></label>
                <br />
                <br />
                <select value={'select a watch'} {...bindWatchOrdered}>
                    <option value="Sky Dweller">Sky Dweller</option>
                    <option value="Daytona">Daytona</option>
                    <option value="Milgauss">Milgauss</option>
                    <option value="Datejust">Datejust</option>
                    <option value="Day-Date">Day-Date</option>
                    <option value="Cellini">Cellini</option>
                    <option value="Oyster Perpetual">Oyster Perpetual</option>
                    <option value="Sea Dweller">Sea Dweller</option>
                </select>
                <br />
                <br />
                <label>Date Ordered:<input type="date" placeholder="09/21/1994" {...bindDateOrdered} /></label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>

    )
}