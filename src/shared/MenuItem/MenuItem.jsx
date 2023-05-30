
const MenuItem = ({item}) => {
  const { name, image, price, recipe } = item;
  // console.log(image)
  // console.log(item)
  return (
    <div className="flex space-x-4 ">
   <img style={{borderRadius: '0 200px 200px 200px'}} className="w-12 h-8  object-contain  " src={image} alt="" />
      <div>
        <h3 className="uppercase">{ name }--00-----</h3>
        <p>{ recipe}</p>
      </div>
      <p className="text-yellow-500">${ price }</p>
      
    </div>
  );
};

export default MenuItem;