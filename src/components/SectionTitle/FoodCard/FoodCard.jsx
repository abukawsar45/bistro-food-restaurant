import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate,  } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {

  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { name, image, price, recipe, _id } = item;
  const [, refetch] = useCart();
  const handleAddtoCaart = item => {
    // console.log(item);
    if (user && user.email)
    {
      const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      
      fetch('http://localhost:4700/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
      .then(data=>{
        // console.log(data)
        if (data.insertedId) {
          refetch();
          Swal.fire({
            title: 'Food added on the cart',
            text: 'Modal with a custom image.',
            imageAlt: 'Custom image',
          });
        }
      })
    }
    else{
      Swal.fire({
  title: 'At First Login',
  text: "Then Add to Cart!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Login Now!'
}).then((result) => {
  if (result.isConfirmed)
  {
    navigate('/login', {state:{from:location}})
    // return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
  }
})
    }
  }
  return (
    <div className='card w-96  bg-base-100  shadow-xl'>
      <figure>
        <img src={image} alt='Food Image' className='w-full p-2' />
      </figure>
      <p className='absolute right-0 px-2 py-1 mt-6 mr-4 rounded-sm text-xl bg-zinc-700 text-white '>
        $ {price}
      </p>
      <div className='card-body flex flex-col justify-center '>
        <h2 className='text-3xl'>{name}</h2>
        <p>{recipe}</p>
        <div>
          <button onClick={()=>handleAddtoCaart(item)} className=' mt-4 bg-slate-100 text-center text-black btn btn-outline px-4 border-0 border-b-4 border-orange-400'>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;