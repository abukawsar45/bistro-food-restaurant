
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';



const Menu = () => {
  const [menu] = useMenu();
  // console.log(menu)
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const pizza = menu.filter(item => item.category === 'pizza');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={ coverImg } title={ 'our menu' } />
      {/* main cover */}
      <SectionTitle subHeading={ "Don't Miss" } heading={ "today's offer" } />
      {/* offered menu items */}
      <MenuCategory items={ offered } />
      {/* dessert menu items */}
      <MenuCategory items={ desserts} title='dessert' coverImg={dessertImg} />
      {/* pizza menu items */}
      <MenuCategory items={ pizza} title='pizza' coverImg={pizzaImg} />
      {/* salad menu items */}
      <MenuCategory items={ salad} title='salad' coverImg={saladImg} />
      {/* soup menu items */}
      <MenuCategory items={ soup} title='soup' coverImg={soupImg} />
      
    
    </div>
  );
};

export default Menu;
