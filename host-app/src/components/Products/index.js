import React from 'react';

const MfProducts = React.lazy(() => import("mfProducts/App"));

const Products = () => (
  <React.Suspense fallback="Loading AppContainer">
    <MfProducts />
  </React.Suspense>
);

export default Products;
