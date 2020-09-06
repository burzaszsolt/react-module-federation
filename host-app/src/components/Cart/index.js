import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const CartService = React.lazy(() => import("mfCart/CartService"));

const Cart = () => {
  const theme = useTheme();
  return (
    <React.Suspense fallback="Loading CartService">
      <CartService theme={theme} />
    </React.Suspense>
  ); 
};

export default Cart;
