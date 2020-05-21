import React from 'react';
import { useInput } from '../Hooks/InputHooks'
import axios from 'axios'


export default function NameForm(props) {
    // const [name, setName] = useState("")
    // const { value, bind, reset } = useInput('')
    const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
    const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
    const { value: phoneNumber, bind: bindNumber, reset: resetNumber } = useInput('');
    const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');


    const addTicketToDb = (input) => {
        console.log(input)
        axios.post('http://localhost:3001/tickets/add/addTickets', {
            input: input
        })
        handleSubmit()

    }

    const handleSubmit = () => {
        console.log('handleSubmit is working!')
        alert(`Submitting ${firstName} ${lastName} ${phoneNumber} ${email}`);
        resetFirstName();
        resetLastName();
        resetNumber();
        resetEmail();
    };


    /* PSEUDOCODE FOR IMPLEMENTING NAME VALIDATION */
    // before it is submitted, it must be validated; after it is typed, it must be validated
    // event.preventDefault() has to happen before everything else
    // bindFirstName is the input
    // input gets passed into validation function 
    // return true, handle submit fires off
    // return false, sends alert message 'please input valid name'

    const validate = (event, inputFirstName = bindFirstName.value, inputLastName = bindLastName.value, inputNumber = bindNumber.value, inputEmail = bindEmail.value) => {
        event.preventDefault()
        const names = /^\D{2,}$/;
        const number = /^\d{3}-\d{3}-\d{4}$/;
        const emails = /[\w-]+@([\w-]+\.)+[\w-]+/;
        if (names.test(inputFirstName) && names.test(inputLastName) && emails.test(inputEmail)) {
            if (number.test(inputNumber)) {
                const inputs = { inputFirstName, inputLastName, inputNumber, inputEmail }
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

            {/* <label>Address:<input type="text" placeholder="2211 Lawnmont Ave" /></label> */}

            {/* <label>City:<input type="text" placeholder="2211 Lawnmont Ave" /></label> */}

            {/* <label>State:<input type="text" placeholder="Texas" /></label> */}

            {/* <label>Zip Code:<input type="text" placeholder="75034" /></label> */}

            {/* <label>Date Ordered:<input type="date" placeholder="09/21/1994" /></label> */}

            {/* <label>Watch Ordered:<input type="range" /></label> */}

            {/* <label>Date Picked Up:<input type="date" placeholder="09/21/1994" /></label> */}

            {/* <label>Fullfiled?:<input type="checkbox" placeholder="No" /></label> */}

            <input type="submit" value="Submit" />
        </form>

    )
}