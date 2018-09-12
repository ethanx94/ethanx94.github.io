import React, { Component } from 'react';
import { Page, Carousel, CarouselItem, Button } from 'react-onsenui';

import Header from '../components/Header';

class Projects extends Component {
  renderToolbar = () => <Header title="Projects" />;

  state = {
    items: [
      { key: 'Project1', color: '#F1948A', title: 'Wednesday App', subtext: 'React Native - Frog App', url: 'https://github.com/ethanx94/WednesdayApp/' },
      { key: 'Project2', color: '#D7BDE2', title: 'SIUC Virtual Campus', subtext: 'JS - HTML5 Phaser Demo', url: '/PhaserVirtualCampus' },
      { key: 'Project3', color: '#85C1E9', title: 'SIUC ACM', subtext: 'ASP.NET - Local Chapter Page', url: 'http://siucacm.herokuapp.com' },
      { key: 'Project4', color: '#73C6B6', title: 'GamerTagDB', subtext: 'ASP.NET - Share Gamertags At Your Event', url: 'http://devpost.com/software/gamer-tag-database-share-gamer-tags-at-your-event' },
      { key: 'Project5', color: '#927151', title: 'Rapid Braille', subtext: 'Java/Python - Braille Translator', url: 'https://github.com/ethanx94/RapidBraille' },
      { key: 'Project6', color: '#a333bd', title: 'Pegitory Puzzle', subtext: 'Java - Software Development', url: 'https://github.com/ethanx94/PegitoryPuzzle' },
    ],
    index: 0,
  };

  handleChange = (e) => {
    this.setState({ index: e.activeIndex });
  };

  setIndex(index) {
    this.setState({ index });
  }

  goToProject = () => {
    const { items, index } = this.state;
    window.open(items[index].url);
  };

  render() {
    const { items, index } = this.state;
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Carousel onPostChange={this.handleChange} index={index} fullscreen swipeable autoScroll overscrollable>
          {items.map(item => (
            <CarouselItem key={item.key} style={{ backgroundColor: item.color }}>
              <div style={{ marginTop: '50%', textAlign: 'center' }}>
                <h2>{item.title}</h2>
                <p>{item.subtext}</p>
                <Button modifier="outline" onClick={this.goToProject}>
                  View
                </Button>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
        <div style={{
          textAlign: 'center',
          fontSize: '20px',
          position: 'absolute',
          bottom: '36px',
          left: '0px',
          right: '0px'
        }}
        >
          {items.map(({ key }, curIndex) => (
            // eslint-disable-next-line
            <span key={key} style={{ cursor: 'pointer' }} onClick={() => this.setIndex(curIndex)}>
              {index === curIndex ? '\u25CF' : '\u25CB'}
            </span>
          ))}
        </div>
      </Page>
    );
  }
}

export default Projects;
