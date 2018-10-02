import React from 'react';
import ReactDOM from 'react-dom';
import { platform } from 'onsenui';
import { AppContainer } from 'react-hot-loader';

import './globalStyles';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root'),
  );
  if (platform.isIPhoneX()) {
    document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
    document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
  }
};

// Do this once
registerServiceWorker();

// Render once
render();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render();
  });
}
