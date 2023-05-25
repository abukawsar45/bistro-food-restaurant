import Cover from "../../../../shared/Cover/Cover";
import MenuItem from "../../../../shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coverImg}) => {
  return (
    <div className="py-4 md:py-16">
      {title && <Cover img={coverImg} title={title} />}
      <div className='grid md:grid-cols-2 gap-4 mt-4 md:mt-8 mb-4 md:mb-8'>
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;