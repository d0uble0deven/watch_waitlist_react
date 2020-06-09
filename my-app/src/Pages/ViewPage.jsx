import React, { useState, useEffect } from 'react'
import WatchCard from '../Components/WatchCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';
import './PagesStyling/ViewPageStyling.css'
import TicketCard from '../Components/TicketCard';
import TestHooks from '../Components/TestHooks';
// import datejust from '../Images/Watches/datejust.png'
// import daytona from '../Images/Watches/daytona.png'
// import milgauss from '../Images/Watches/milgauss.png'
// import skydweller from '../Images/Watches/skydweller.png'
import Chevron from '../Components/Chevron';



// when watch is clicked, filter data with watch_ordered
// setCustomer(result)
// tabFilter customer
// TicketModel.watch_ordered needs to be embedded WatchModel._id

const ViewPage = () => {

    // show tickets only for selectedWatches
    const [selectedWatch, setSelectedWatch] = useState('') // not name, but _id of watch


    // tabs
    const [currentTab, setCurrentTab] = useState(1)

    const handleCurrentTab = (index) => {
        console.log('index: ' + index) // shows what was just cliked
        setCurrentTab(index)
        console.log('currentTab: ' + currentTab) // shows what was just setState
        filterTickets()
    }

    // make sure than this.state.customer is set to tickets filtered by watch before running this fn

    const filterTickets = () => {
        // if (currentTab === 0) {
        //     customer.filter(ticket => ticket)
        // }
        // may have to live inside tab, combined with map
        if (currentTab === 1) {
            // console.log('pending: ' + JSON.stringify(customer.filter(ticket => ticket.fulfilled === false)))
            customer.filter(ticket => ticket.fulfilled === false)
        }
        if (currentTab === 2) {
            customer.filter(ticket => ticket.fulfilled === true)
        }

    }

    const [watches, setWatches] = useState([])
    const [time, setTime] = useState('')

    // get ticket data
    const [customer, setCustomer] = useState([])

    const [isTCActive, setIsTCActive] = useState('active')
    const [ticketHeight, setTicketHeight] = useState('0px')
    const [tCRotation, setTCRotation] = useState('accordion_icon')


    const [areTabsVisible, setAreTabsVisible] = useState('none')

    // gets tickets from db when 'View Search Results' is clicked
    const getTicketsFromDb = () => {
        setTime(new Date().toLocaleString())
        console.log('getTicketsFromDb firing')
        if (isTCActive === 'active') {
            // make tabs visible
            setAreTabsVisible('inline')
            // 404 means that is not pulling data from backend api
            fetch('http://localhost:3001/tickets/getTickets')
                // Response {type: "cors", url: "http://localhost:3001/tickets/getTickets", redirected: false, status: 404, ok: false, …}
                .then(data => data.json())
                .then(res => setCustomer(res.data))
                .then(console.log(customer))
        }

    }


    // collapsible WC component
    const [isActive, setIsActive] = useState('')
    const [watchHeight, setWatchHeight] = useState('0px')
    const [rotation, setRotation] = useState('accordion_icon')



    const getWatchesFromDb = () => {
        console.log('hello')
        if (rotation === 'accordion_icon') {
            fetch('http://localhost:3001/watches/getWatches')
                .then(data => data.json())
                .then(res => setWatches(res.data))
                .then(console.log(watches))
        }

    }

    const displayTabs = () => {
        return (<div>

            {/* place all of tabs in here */}
        </div>
        )
    }

    const toggleTCAccordion = () => {
        getTicketsFromDb()
        setIsTCActive(isTCActive === '' ? 'active' : '')
        setTicketHeight(isTCActive === 'active' ? '0px' : '1000px')
        setTCRotation(isTCActive === 'active' ? 'accordion_icon' : 'accordion_icon rotate')

    }

    const toggleAccordion = () => {
        getWatchesFromDb()
        setIsActive(isActive === '' ? 'active' : '')
        setWatchHeight(isActive === 'active' ? '0px' : '1000px')
        setRotation(isActive === 'active' ? 'accordion_icon' : 'accordion_icon rotate')
    }


    return (
        <div>
            <Button size="lg" outline color='info' className={`accordion ${isActive}`} onClick={toggleAccordion}>
                <p>view watches</p>
                <Chevron className={`${rotation}`} width={10} fill={"#777"} />
            </Button>

            {/* <Button outline color='info' size='sm' onClick={getWatchesFromDb}>View Watches</Button> */}

            {(isActive === 'active') ?
                watches.map((item, index) => {
                    return (<div style={{ maxHeight: `${watchHeight}` }} key={index}>
                        <WatchCard name={item.name} image={item.image} selectedWatch={selectedWatch} setSelectedWatch={setSelectedWatch} id={item._id} />
                    </div>)
                })
                :
                <div></div>
            }
            <br />
            <hr />
            <div className="TicketView">
                <Button outline color='info' size='sm' onClick={getTicketsFromDb}>View Most Recent Results</Button>
                        Last Updated: {new Date().toLocaleString()}


                {/* tabs begin */}
                <Tabs selectedIndex={currentTab} onSelect={handleCurrentTab} style={{ display: `${areTabsVisible}` }}>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Pending</Tab>
                        <Tab>Fulfilled</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>All Tickets</h2>


                        {(isTCActive === 'active') ?
                            customer.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <TicketCard
                                            id={item._id}
                                            // name to left of assigment is what name must be in child
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
                                    </div>)
                            })
                            :
                            <div></div>
                        }
                    </TabPanel>
                    <TabPanel>
                        <h2>Pending Tickets</h2>
                        {(isTCActive === 'active') ?
                            customer.filter(ticket => ticket.fulfilled === false).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <TicketCard
                                            id={item._id}
                                            // name to left of assigment is what name must be in child
                                            first_name={item.first_name}
                                            last_name={item.last_name}
                                            street={item.street}
                                            city={item.city}
                                            state={item.state}
                                            zip_code={item.zip_code}
                                            phone_number={item.phone_number}
                                            email={item.email}
                                            watch_ordered={item.watch_ordered}
                                            date_ordered={item.date_ordered}
                                            fulfilled={item.fulfilled}
                                            date_fulfilled={item.date_fulfilled}
                                        />
                                    </div>)
                            })
                            :
                            <div>No Pending Tickets</div>
                        }
                        <TestHooks />
                    </TabPanel>
                    <TabPanel>
                        <h2>Fulfilled Tickets</h2>
                        {(isTCActive === 'active') ?
                            customer.filter(ticket => ticket.fulfilled === true).map((item, index) => {
                                return (
                                    <div key={index}>
                                        <TicketCard
                                            id={item._id}
                                            // name to left of assigment is what name must be in child
                                            first_name={item.first_name}
                                            last_name={item.last_name}
                                            street={item.street}
                                            city={item.city}
                                            state={item.state}
                                            zip_code={item.zip_code}
                                            phone_number={item.phone_number}
                                            email={item.email}
                                            watch_ordered={item.watch_ordered}
                                            date_ordered={item.date_ordered}
                                            fulfilled={item.fulfilled}
                                            date_fulfilled={item.date_fulfilled}
                                        />
                                    </div>)
                            })
                            :
                            <div>No Fulfilled Tickets</div>
                        }
                    </TabPanel>
                </Tabs>

            </div>

        </div >
    )

}

export default ViewPage