import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../../shared/MenuItem/MenuItem";
import useMenu from "../../../../hooks/useMenu";

const PopolarMenu = () => {
  const [menu] = useMenu();
  console.log(menu)
  const popular = menu.filter(item=>item.category === 'popular')
  // const [menu, setMenu] = useState([])
  // useEffect(() => {
    
  //   fetch('menu.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       const popularItems = data.filter((item) => item.category === 'popular');
  //       setMenu(popularItems)
  //     });
  // }
  // , [])
  return (
    <div>
      <SectionTitle subHeading={'Check it out'} heading={'Populer menu'} />
      <div className='grid md:grid-cols-2 gap-4 mb-4 md:mb-8'>
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopolarMenu;