import React from 'react';
import './App.css';

const Remote1App = React.lazy(() => import('remote1/App'));
const Remote2App = React.lazy(() => import('remote2/App'));

const App = () => {
  return (
    <>
      <div className="content">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
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
