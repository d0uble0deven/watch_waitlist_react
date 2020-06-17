import React, { useState, useEffect } from 'react'
import WatchCard from '../Components/WatchCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';
import './PagesStyling/ViewPageStyling.css'
import TicketCard from '../Components/TicketCard';
import Chevron from '../Components/Chevron';
import styled from 'styled-components'


const ViewPage = () => {
    // tabs
    const [currentTab, setCurrentTab] = useState(1)
    const handleCurrentTab = (index) => setCurrentTab(index)



    // gets tickets from db when 'View Search Results' is clicked
    const [time, setTime] = useState('')
    const [customer, setCustomer] = useState([])

    const [isTCActive, setIsTCActive] = useState('active')
    // const [ticketHeight, setTicketHeight] = useState('0px')
    // const [tCRotation, setTCRotation] = useState('accordion_icon')

    const [areTabsVisible, setAreTabsVisible] = useState('none')

    const getTicketsFromDb = () => {
        setTime(new Date().toLocaleString())
        console.log('getTicketsFromDb firing')
        if (isTCActive === 'active') {
            setAreTabsVisible('inline')
            fetch('http://localhost:3001/tickets/getTickets')
                .then(data => data.json())
                .then(res => setCustomer(res.data))
        }

    }

    useEffect(() => getTicketsFromDbForSelectedWatch(), [currentTab])


    const getTicketsFromDbForSelectedWatch = () => {
        setTime(new Date().toLocaleString())
        console.log('getTicketsFromDbForSelectedWatch firing')
        if (isTCActive === 'active') {
            setAreTabsVisible('inline')
            fetch('http://localhost:3001/tickets/getTickets')
                .then(data => data.json())
                .then(res => setCustomer(res.data.filter(ticket => ticket.watch_ordered == selectedWatch)))
        }

    }




    // collapsible WC component
    const [isActive, setIsActive] = useState('')
    const [watchHeight, setWatchHeight] = useState('0px')
    const [rotation, setRotation] = useState('accordion_icon')

    const toggleAccordion = () => {
        getWatchesFromDb()
        setIsActive(isActive === '' ? 'active' : '')
        setWatchHeight(isActive === 'active' ? '0px' : '1000px')
        setRotation(isActive === 'active' ? 'accordion_icon' : 'accordion_icon rotate')

    }

    const [watches, setWatches] = useState([]) // displays watches

    const getWatchesFromDb = () => {
        if (rotation === 'accordion_icon') {
            fetch('http://localhost:3001/watches/getWatches')
                .then(data => data.json())
                .then(res => setWatches(res.data))
                .then(console.log(watches))
        }
    }

    const [selectedWatch, setSelectedWatch] = useState('') // selects watches


    const Container = styled.div`
        display: grid;
        grid-template-columns: repeat(5, 14em);
        grid-template-rows: auto

    `

    const VPButton = styled.button`
        text-shadow: 1px 1px 1px rgba(255,255,255,.9);
        background-color: rgba(173, 135, 2, .1);
        border: black 1px solid;
        border-radius: 7px;
        font-weight: 100px;

        &:hover{
            box-shadow: inset 2px 2px 1px rgba(4, 4, 4, .9);

        }

    `


    return (
        <div>
            <VPButton onClick={getTicketsFromDb}>
                Select All</VPButton>
            <br />
            <br />
            <VPButton className={`accordion ${isActive}`} onClick={toggleAccordion}>
                <p>Select Watch</p>
                <Chevron className={`${rotation}`} width={10} fill={"#777"} />
            </VPButton>
            <Container>
                {(isActive === 'active') ?
                    watches.map((item, index) => {
                        return (
                            <div>

                                <div style={{ maxHeight: `${watchHeight}` }} key={index}>
                                    <WatchCard name={item.name} image={item.image} selectedWatch={selectedWatch} setSelectedWatch={setSelectedWatch} id={item._id} />
                                </div>

                            </div>)
                    })
                    :
                    <div>
                    </div>
                }
            </Container>
            <br />
            <hr />
            <div className="TicketView">
                <VPButton onClick={getTicketsFromDbForSelectedWatch}>  {selectedWatch ? 'View Results For ' + selectedWatch : 'Click here once you have selected a watch'}</VPButton>
                <hr />



                {/* ///// tabs begin ///// */}
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
                                            employee_responsible={item.employee_responsible}
                                            watch_ordered={item.watch_ordered}
                                            date_ordered={item.date_ordered}
                                            fulfilled={JSON.stringify(item.fulfilled)}
                                            date_fulfilled={item.date_fulfilled}

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
                                            employee_responsible={item.employee_responsible}
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
                                            employee_responsible={item.employee_responsible}
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