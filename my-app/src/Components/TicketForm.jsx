import React, { useState } from 'react';
import { useInput } from '../Hooks/InputHooks'
import axios from 'axios'


export default function NameForm(props) {
    // const [name, setName] = useState("")
    // const { value, bind, reset } = useInput('')
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
    const { value: dateFulfilled, bind: bindDateFulfilled, reset: resetDateFulfilled } = useInput('');

    //reset is not working
    const { reset: resetFulfilled } = useInput(false);
    // if checkbox clicked, toggle value, either by setState(fulfilled) or !
    const [fulfilled, setFulfilled] = useState(false)

    const addTicketToDb = (input) => {
        console.log(input)
        axios.post('http://localhost:3001/tickets/add/addTickets', {
            input: input
        })
        handleSubmit()

    }

    const handleSubmit = () => {
        console.log('handleSubmit is working!')
        alert(`Submitting ${firstName} ${lastName} ${phoneNumber} ${email} ${street} ${city} ${state} ${zipCode} ${dateOrdered} ${watchOrdered} ${dateFulfilled} ${fulfilled}`);
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
        resetDateFulfilled();
        resetFulfilled();
    };


    /* PSEUDOCODE FOR IMPLEMENTING NAME VALIDATION */
    // before it is submitted, it must be validated; after it is typed, it must be validated
    // event.preventDefault() has to happen before everything else
    // bindFirstName is the input
    // input gets passed into validation function 
    // return true, handle submit fires off
    // return false, sends alert message 'please input valid name'

    const validate = (event, inputFirstName = bindFirstName.value, inputLastName = bindLastName.value, inputNumber = bindNumber.value, inputEmail = bindEmail.value, inputStreet = bindStreet.value, inputCity = bindCity.value, inputState = bindState.value, inputZipCode = bindZipCode.value, inputDateOrdered = bindDateOrdered.value, inputWatchOrdered = bindWatchOrdered.value, inputDateFulfilled = bindDateFulfilled.value, inputFulfilled = fulfilled) => {
        event.preventDefault()
        const names = /^\D{2,}$/;
        const number = /^\d{3}-\d{3}-\d{4}$/;
        const emails = /[\w-]+@([\w-]+\.)+[\w-]+/;
        if (names.test(inputFirstName) && names.test(inputLastName) && emails.test(inputEmail)) {
            if (number.test(inputNumber)) {
                const inputs = { inputFirstName, inputLastName, inputNumber, inputEmail, inputStreet, inputCity, inputState, inputZipCode, inputDateOrdered, inputWatchOrdered, inputDateFulfilled, inputFulfilled }
                console.log(inputs)
                addTicketToDb(inputs)
            } else {
                alert('Please follow the 000-000-0000 format.');
            }
        }
        else alert('Please input valid information.');
    }

    return (
        <form onSubmit={validate}>

            <label>First Name: <input type="text" placeholder="Jon" {...bindFirstName} /></label>

            <label>Last Name: <input type="text" placeholder="Doe" {...bindLastName} /></label>

            <label>Email: <input type="email" placeholder="me@email.com" {...bindEmail} /></label>

            <label>Phone Number: <input type="tel" placeholder="000-000-0000" {...bindNumber} /></label>

            <label>Street:<input type="text" placeholder="2211 Lawnmont Ave" {...bindStreet} /></label>

            <label>City:<input type="text" placeholder="2211 Lawnmont Ave" {...bindCity} /></label>

            <label>State:<input type="text" placeholder="Texas" {...bindState} /></label>

            <label>Zip Code:<input type="text" placeholder="75034" {...bindZipCode} /></label>

            <label>Watch Ordered:<input type="range" {...bindWatchOrdered} /></label>

            <label>Date Ordered:<input type="date" placeholder="09/21/1994" {...bindDateOrdered} /></label>

            <label>Date Picked Up:<input type="date" placeholder="09/21/1994" {...bindDateFulfilled} /></label>

            <label>Fullfiled?:<input type="checkbox" placeholder="No" onClick={() => setFulfilled(!fulfilled)} /></label>

            <input type="submit" value="Submit" />
        </form>

    )
}