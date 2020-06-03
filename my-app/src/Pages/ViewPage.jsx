import React, { useState } from 'react'
import WatchCard from '../Components/WatchCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';
import './PagesStyling/ViewPageStyling.css'
import TicketCard from '../Components/TicketCard';
import TestHooks from '../Components/TestHooks';
import datejust from '../Images/Watches/datejust.png'
import daytona from '../Images/Watches/daytona.png'
import milgauss from '../Images/Watches/milgauss.png'
import skydweller from '../Images/Watches/skydweller.png'
import Chevron from '../Components/Chevron';


const ViewPage = () => {

    // get ticket data
    const [customer, setCustomer] = useState([])

    // gets tickets from db when 'View Search Results' is clicked
    const getTicketsFromDb = () => {
        // 404 means that is not pulling data from backend api
        fetch('http://localhost:3001/tickets/getTickets')
            // Response {type: "cors", url: "http://localhost:3001/tickets/getTickets", redirected: false, status: 404, ok: false, …}
            .then(data => data.json())
            .then(res => setCustomer(res.data))
        console.log(customer)
    }


    // collapsible WC component
    const [isActive, setIsActive] = useState('')
    const [watchHeight, setWatchHeight] = useState('0px')
    const [rotation, setRotation] = useState('accordion_icon')

    const watches = [
        { name: 'Cosmograph Daytona', image: daytona }, { name: 'Sky Dweller', image: skydweller }, { name: 'Milgauss', image: milgauss }, { name: 'Datejust', image: datejust }];



    /* last watch is appearing, despite the state set to 0px
    add accordion_content css to WatchCard???  no effect
    add useRef???  no effect
    brute - set css to dissapear items
    
    if isActive === '' {dont fire map function}


    */


    const toggleAccordion = () => {
        setIsActive(isActive === '' ? 'active' : '')
        setWatchHeight(isActive === 'active' ? '0px' : '1000px')
        setRotation(isActive === 'active' ? 'accordion_icon' : 'accordion_icon rotate')
    }


    return (
        <div>
            <Button size="lg" color='info' className={`accordion ${isActive}`} onClick={toggleAccordion}>
                <p>view watches</p>
                <Chevron className={`${rotation}`} width={10} fill={"#777"} />
            </Button>

            {(isActive === 'active') ?
                watches.map((item, index) => {
                    return (<div style={{ maxHeight: `${watchHeight}` }} key={index}>
                        <WatchCard name={item.name} image={item.image} />
                    </div>
                    )
                })
                :
                <div></div>
            }

            <div className="TicketView">
                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Pending</Tab>
                        <Tab>Fulfilled</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>All Tickets</h2>

                        {(2 === 2) ?
                            customer.map((item, index) => {
                                return (<div key={index}>
                                    <TicketCard
                                        first_name={item.first_name}
                                        last_name={item.last_name}
                                        street={item.street}
                                        city={item.city}
                                        state={item.state}
                                        zip_code={item.zip_code}
                                        phone_number={item.phone_number}
                                        email={item.email}
                                        watch_ordered={item.watch_ordered}
                                        date_ordered={JSON.stringify(item.date_ordered)}
                                        fulfilled={JSON.stringify(item.fulfilled)}
                                        date_fulfilled={JSON.stringify(item.date_fulfilled)}
                                    />
                                </div>
                                )
                            })
                            : <div></div>
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Pending Tickets</h2>
                        <TestHooks />
                    </TabPanel>
                    <TabPanel>
                        <h2>Fulfilled Tickets</h2>
                    </TabPanel>
                </Tabs>

            </div>

        </div >
    )

}

export default ViewPage