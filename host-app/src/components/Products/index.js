import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const ProductService = React.lazy(() => import("mfProducts/ProductService"));

const Products = () => {
  const theme = useTheme();
  return (
    <React.Suspense fallback="Loading ProductService">
      <ProductService theme={theme} />
    </React.Suspense>
  ); 
};

export default Products;
