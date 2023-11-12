import {useState} from 'react';
import orderCover from "../../../assets/order/order.jpg"
import Cover from "../../../Shared/Cover/Cover"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../hooks/UseMenu';
import OrderTab from '../OrderTab/OrderTab';
import {useParams} from 'react-router'

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseMenu();
    const {category} = useParams();
    console.log(category);
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Cover
                img={orderCover}
                title="Order Food"
            ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                  <OrderTab items={salad}>  </OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}> </OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}> </OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}> </OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}> </OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;