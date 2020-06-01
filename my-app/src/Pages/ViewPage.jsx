import React, { useState } from 'react'
import WatchCard from '../Components/WatchCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TicketCard from '../Components/TicketCard';
import TestHooks from '../Components/TestHooks';
import datejust from '../Images/Watches/datejust.png'
import daytona from '../Images/Watches/daytona.png'
import milgauss from '../Images/Watches/milgauss.png'
import skydweller from '../Images/Watches/skydweller.png'


const ViewPage = () => {
    const [selected, setSelected] = useState(false)
    const [showWatches, setShowWatches] = useState(false)

    const watches = [
        { name: 'Cosmograph Daytona', image: daytona }, { name: 'Sky Dweller', image: skydweller }, { name: 'Datejust', image: datejust }, { name: 'Milgauss', image: milgauss }];



    return (
        <div>

            {watches.map((item, index) =>
                <div key={index}>
                    <WatchCard name={item.name} image={item.image} />
                </div>
            )}
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