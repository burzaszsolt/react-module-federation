import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const MfProducts = React.lazy(() => import("mfProducts/App"));

const Products = () => {
  const theme = useTheme();
  return (
    <React.Suspense fallback="Loading MfProducts">
      <MfProducts theme={theme} />
    </React.Suspense>
  ); 
};

export default Products;
