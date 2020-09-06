import React from 'react';

const HostApp = React.lazy(() => import("hostApp/App"));

const App = () => (
  <React.Suspense fallback="Loading HostApp">
    <HostApp  />
  </React.Suspense>
);

export default App;
