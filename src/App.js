import React from 'react';
import { Navigator } from 'react-onsenui';

import Main from './js/pages/Main';
import './css/main.css';
import '../node_modules/onsenui/css/onsenui.css';
import '../node_modules/onsenui/css/onsen-css-components.css';

export default class App extends React.Component {
  renderPage = (route, navigator) => {
    const props = route.props || {};
    props.navigator = navigator;
    return React.createElement(route.component, props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          component: Main,
          props: { key: 'main' }
        }}
        renderPage={this.renderPage}
      />
    );
  }
}
