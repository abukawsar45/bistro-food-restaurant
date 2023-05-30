import { Link } from "react-router-dom";
import Cover from "../../../../shared/Cover/Cover";
import MenuItem from "../../../../shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coverImg}) => {
  return (
    <div className='py-4 md:py-16'>
      {title && <Cover img={coverImg} title={title} />}
      <div className='grid md:grid-cols-2 gap-4 mt-4 md:mt-8 mb-4 md:mb-8'>
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          {' '}
          <button className='uppercase mt-4 bg-green-500 text-center text-black btn btn-outline px-8 border-0 border-b-4'>
            Order now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;