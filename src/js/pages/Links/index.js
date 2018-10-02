import React, { Component } from 'react';
import { Page, List, ListItem } from 'react-onsenui';

import Header from '../../components/Header';
import Map from './Map';

class Links extends Component {
  renderToolbar = () => <Header title="Links" />;

  state = {
    items: [
      {
        key: 'Resume',
        onClick: () => window.open('https://docs.google.com/document/d/1-c4_aCAzGKqhpSocfLbg9kdgNXOvj0SX03eli3ndMco/edit?usp=sharing', '_blank'),
      },
      {
        key: 'GitHub',
        onClick: () => window.open('http://github.com/ethanx94', '_blank'),
      },
      {
        key: 'Twitter',
        onClick: () => window.open('https://twitter.com/ethanx94/', '_blank'),
      },
      {
        key: 'LinkedIn',
        onClick: () => window.open('https://www.linkedin.com/in/ethan-richardson-854214b5/', '_blank'),
      },
      {
        key: 'Places I\'ve Visited',
        onClick: () => this.props.navigator.pushPage({ component: Map, props: { key: 'map' } }),
      },
    ],
  };

  _renderRow({ key, onClick }) {
    return (
      <ListItem key={key} tappable onClick={onClick}>
        {key}
      </ListItem>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <List dataSource={this.state.items} renderRow={this._renderRow} />
      </Page>
    );
  }
}

export default Links;
