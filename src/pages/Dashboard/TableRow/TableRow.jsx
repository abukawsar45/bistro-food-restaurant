import {FaTrashAlt} from 'react-icons/fa'
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const TableRow = ({ item, ind }) => {
  const [,refetch] = useCart();
  const { _id, name, image, price } = item;
  const handleRemoveItem = (_id) => { 
    console.log(_id)

    Swal.fire({
      title: 'Are you sure Delete this item?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
    
        fetch(`http://localhost:4700/carts/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log(data.deletedCount);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          });
      }
    });

    
  }
  return (
    <>
      <tr>
        <th>
          <p>{ind}</p>
        </th>
        <td>
          <div className='flex items-center space-x-3'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img src={image} alt='Avatar Tailwind CSS Component' />
              </div>
            </div>
            <div></div>
          </div>
        </td>
        <td>
          <p>{name} </p>
        </td>
        <td>${price} </td>
        <th>
          <button onClick={()=>handleRemoveItem(_id)} className='btn  bg-orange-100 btn-circle hover:text-2xl hover:text-red-700 text-xl hover:bg-lime-500 relative btn-lg'>
            <FaTrashAlt className='text-red-600  absolute ' />{' '}
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableRow;