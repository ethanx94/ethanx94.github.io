import React from 'react';
import { Navigator } from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import Main from './js/pages/Main';
import './css/main.css';
import './css/normalize.min.css';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const App = () => (
  <Navigator
    initialRoute={{
      component: Main,
      props: { key: 'main' },
    }}
    renderPage={(route, navigator) => {
      const props = route.props || {};
      props.navigator = navigator;
      return React.createElement(route.component, props);
    }}
  />
);

export default App;
