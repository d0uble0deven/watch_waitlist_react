import React, { useState } from 'react'
import WatchCard from '../Components/WatchCard'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Test from '../Components/Test'

const ViewPage = () => {
    const [selected, setSelected] = useState(false)
    // const [activeTab, setActiveTab] = useState('1');

    // const toggle = tab => {
    //     if (activeTab !== tab) setActiveTab(tab);
    // }

    return (
        <div>
            VIEW PAGE
            <p>Select a Watch</p>
            <button>Select All Watches</button>
            <WatchCard />
            <WatchCard />
            <WatchCard />
            <WatchCard />

            <div ClassName="TicketView">


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
                    </TabPanel>
                    <TabPanel>
                        <h2>Fulfilled Tickets</h2>
                        <Test />
                    </TabPanel>
                </Tabs>




                {/* <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            All
          </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Pending
          </NavLink>
                    </NavItem>
                </Nav>

                <TabContent activeTab={activeTab}>

                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>Tab 1 Contents</h4>
                            </Col>
                        </Row>
                    </TabPane>

                    <TabPane tabId="2">
                        <Row>
                            <Col sm="6">
                                <h4>Tab 2 Contents</h4>

                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body>
                                    <CardTitle>Special Title Treatment</CardTitle>
                                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    <Button>Go somewhere</Button>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>

                </TabContent> */}

                {/* buttons become tabs */}
                {/* <button>All</button> */}
                {/* <button>Pending</button> */}
                {/* <button>Fulfilled</button> */}

                {/* maps ticket info according to tab selected */}
                {/* map ticket info here */}


            </div>



        </div>
    )

}

export default ViewPage