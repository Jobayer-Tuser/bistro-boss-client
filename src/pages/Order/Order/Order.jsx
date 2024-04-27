import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menuItems] = useMenu();
    const desserts = menuItems.filter(item => item.category === 'dessert');
    const soup = menuItems.filter(item => item.category === 'soup');
    const salad = menuItems.filter(item => item.category === 'salad');
    const pizza = menuItems.filter(item => item.category === 'pizza');
    const drinks = menuItems.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro-Boss | Order-Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title={'our shop'}></Cover>
            <div className="mx-auto text-center">
                <div role="tablist" className="tabs tabs-boxed bg-transparent my-10">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className='list-none'>
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Dessert</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                        <TabPanel>
                            <OrderTab items={salad}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                        </TabPanel>
                        <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Order;
