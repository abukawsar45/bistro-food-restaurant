import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';

const Order = () => {

  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
    const desserts = menu.filter((item) => item.category === 'dessert');
    const soup = menu.filter((item) => item.category === 'soup');
    const salad = menu.filter((item) => item.category === 'salad');
    const offered = menu.filter((item) => item.category === 'offered');
    const pizza = menu.filter((item) => item.category === 'pizza');
  return (
    <div>
      <Cover img={orderImg} title={'order food'} />
      <div className='tabs flex justify-center '>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desseert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
