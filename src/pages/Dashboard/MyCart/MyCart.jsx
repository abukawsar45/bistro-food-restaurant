import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import TableRow from "../TableRow/TableRow";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart)
  
  const total = cart.reduce((sum, item) => item.price + sum, 0)
  // console.log(total)
  return (
    <div className='mx-2 md:mx-6 my-2 md:my-6'>
      <Helmet>
        <title>Bistro Boss || MyCart</title>
      </Helmet>
      <div>
        <div className='flex justify-between uppercase'>
          <h3 className='text-3xl text-start'>Total Orders: {cart?.length}</h3>
          <h3 className='text-3xl text-start'>Total Price: {total}</h3>
          <div>
            <button className='btn btn-active btn-accent'>pay</button>
          </div>
        </div>
        <div>
          <div className='overflow-x-auto w-full'>
            <table className='table w-full'>
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                     serial
                    </label>
                  </th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {cart.map((item, ind) => (
                  <TableRow key={item._id} item={item} ind={ind + 1} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;