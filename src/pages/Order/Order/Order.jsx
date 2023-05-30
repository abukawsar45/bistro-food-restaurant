import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/SectionTitle/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  // console.log(initialIndex);
    const desserts = menu.filter((item) => item.category === 'dessert');
    const soup = menu.filter((item) => item.category === 'soup');
    const salad = menu.filter((item) => item.category === 'salad');
    const offered = menu.filter((item) => item.category === 'offered');
    const pizza = menu.filter((item) => item.category === 'pizza');
    const drinks = menu.filter((item) => item.category === 'drinks');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={orderImg} title={'order food'} />
      <div className='text-center'>
        <div className='tabs '>
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Desseert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              <OrderTab items={salad}/>
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza}/>
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup} />
            </TabPanel>
            <TabPanel>
                  <OrderTab items={desserts}/>
            </TabPanel>
            <TabPanel>
            <OrderTab items={drinks}/>
          </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Order;
