import React from 'react';
import Header from './components/Header';

function Provider({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Provider;
