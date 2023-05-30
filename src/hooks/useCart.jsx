import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';


            
const useCart = () => {

 const {user} = useContext(AuthContext)
  // console.log('------010101----', user,'--email',user?.email)

  
   const {
     refetch,
     isLoading,
     data: cart = [],
   } = useQuery({
     queryKey: ['carts', user?.email],
     queryFn: async () => {
       const response = await fetch(`http://localhost:4700/carts?email=${user?.email}`
       );
       return response.json();
     },
   });
  return [cart, refetch, isLoading];
};

export default useCart;
