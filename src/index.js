import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('mount');

  if (!mount) {
    // eslint-disable-next-line no-console
    console.warn('no mount');
    return;
  }

  ReactDOM.render((
    <>
      <App />
    </>
  ), mount);
});
