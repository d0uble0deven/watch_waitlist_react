import React, { useState } from 'react'
import WatchCard from '../Components/WatchCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TicketCard from '../Components/TicketCard';
import TestHooks from '../Components/TestHooks';
import { UnmountClosed } from 'react-collapse';


const ViewPage = () => {
    const [selected, setSelected] = useState(false)
    const [showWatches, setShowWatches] = useState(false)

    const uncollapseWatches = () => {
        console.log(!showWatches)
        setShowWatches(!showWatches)
        if (showWatches) {
            return <div></div>
        }
        else {
            return <WatchCard />
        }
    }

    return (
        <div>
            <button onClick={uncollapseWatches}>show watches</button>
            {/* <UnmountClosed isOpened={true || false}> */}
            {/* <WatchCard /> */}
            {/* </UnmountClosed> */}


            <div className="TicketView">

                <Tabs>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>Pending</Tab>
                        <Tab>Fulfilled</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>All Tickets</h2>
                        {/* <TicketCard /> */}
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

        </div>
    )

}

export default ViewPage