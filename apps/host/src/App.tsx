import React from 'react';

const Remote1App = React.lazy(() => import('remote1/App'));
const Remote2App = React.lazy(() => import('remote2/App'));

const App = () => {
  return (
    <>
      <div className="content">
        <h1>Host</h1>
      </div>
      <React.Suspense fallback={<div>Loading Remote1...</div>}>
        <Remote1App />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading Remote2...</div>}>
        <Remote2App />
      </React.Suspense>
    </>
  );
};

export default App;
