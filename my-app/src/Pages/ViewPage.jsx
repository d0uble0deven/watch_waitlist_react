import React, { useState } from 'react'
import WatchCard from '../Components/WatchCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Test from '../Components/Test'
import TicketCard from '../Components/TicketCard';

const ViewPage = () => {
    const [selected, setSelected] = useState(false)


    return (
        <div>
            <p>Select a watch:</p>

            <WatchCard />


            <div className="TicketView">

                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Pending</Tab>
                        <Tab>Fulfilled</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>All Tickets</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Pending Tickets</h2>
                        <TicketCard />
                    </TabPanel>
                    <TabPanel>
                        <h2>Fulfilled Tickets</h2>
                        <Test />
                    </TabPanel>
                </Tabs>

            </div>

        </div>
    )

}

export default ViewPage