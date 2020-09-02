import React, { useState, useEffect } from 'react'
import WatchCard from '../Components/WatchCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from 'reactstrap';
import 'react-tabs/style/react-tabs.css';
import './PagesStyling/ViewPageStyling.css'
import TicketCard from '../Components/TicketCard';
import Chevron from '../Components/Chevron';
import styled from 'styled-components'


// proxy: localhost 3001

// TODO: convert tabs in to radio buttons to filter contents, tabs currently get tickets for all watches
// TODO: get req.body to pick up idToDelete

const ViewPage = () => {
    // tabs
    const [currentTab, setCurrentTab] = useState(1)
    const handleCurrentTab = (index) => setCurrentTab(index)

    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // }
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const options = {
        headers
    }


    // gets tickets from db when 'View Search Results' is clicked
    const [customer, setCustomer] = useState([])

    const [isTCActive, setIsTCActive] = useState('active')


    const [areTabsVisible, setAreTabsVisible] = useState('none')

    let baseUrl
    if (process.env.NODE_ENV === "development") {
        baseUrl = "http://localhost:3000/";
    } else if (process.env.NODE_ENV === "production") {
        baseUrl = "https://peaceful-reef-53400.herokuapp.com/";
    }

    const getTicketsFromDb = () => {
        if (isTCActive === 'active') {
            setAreTabsVisible('inline')
            fetch(baseUrl + 'tickets/getTickets', headers)
                .then(data => data.text())
                .then(text => console.log(text))
                .then(res => setCustomer(res.data))
        }

    }

    useEffect(() =>
        (selectedWatch !== '') ? getTicketsFromDbForSelectedWatch() : getTicketsFromDb()
        , [currentTab])
    // useEffect(() => getTicketsFromDb(), [currentTab])


    const getTicketsFromDbForSelectedWatch = () => {
        if (isTCActive === 'active') {
            setAreTabsVisible('inline')
            fetch(baseUrl + 'tickets/getTickets', headers)
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
        console.log('baseUrl: ' + baseUrl)
        if (rotation === 'accordion_icon') {
            fetch(baseUrl + 'watches/getWatches', headers)
                .then(data => data.json())
                .then(res => setWatches(res.data))
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
            <VPButton style={{ marginLeft: '1em', float: 'right' }} onClick={getTicketsFromDb}>
                Select All Watches</VPButton>
            {/* <br />
            <br /> */}
            <VPButton className={`accordion ${isActive}`} style={{ height: '60px', width: '200px' }} onClick={toggleAccordion}>
                <span>Select Watch</span>
                <Chevron className={`${rotation}`} width={10} fill={"#777"} />
            </VPButton>
            <VPButton style={{ float: 'right' }} onClick={getTicketsFromDbForSelectedWatch}>  {selectedWatch ? 'View Results For ' + selectedWatch : 'Click here once you have selected a watch'}</VPButton>
            <Container>
                {(isActive === 'active') ?
                    watches.map((item, index) => {
                        return (

                            <div style={{ maxHeight: `${watchHeight}` }} key={index}>
                                <WatchCard name={item.name} image={item.image} selectedWatch={selectedWatch} setSelectedWatch={setSelectedWatch} id={item._id} />
                            </div>

                        )
                    })
                    :
                    <div>
                    </div>
                }
            </Container>

            <div className="TicketView">



                {/* ///// tabs begin ///// */}
                <hr />
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
                                    </div>
                                )
                            })
                            :
                            <div>No tickets fit the current criteria.</div>
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
                            <div>No tickets fit the current criteria.</div>
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
                            <div>No tickets fit the current criteria.</div>
                        }
                    </TabPanel>
                </Tabs>

            </div>

        </div >
    )

}

export default ViewPage