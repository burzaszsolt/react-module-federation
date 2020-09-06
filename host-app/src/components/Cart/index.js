import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const MfCart = React.lazy(() => import("mfCart/App"));

const Cart = () => {
  const theme = useTheme();
  return (
    <React.Suspense fallback="Loading MfCart">
      <MfCart theme={theme} />
    </React.Suspense>
  ); 
};

export default Cart;
