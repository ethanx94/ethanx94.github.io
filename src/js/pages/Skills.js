import React, { Component, Fragment } from 'react';
import { Page, ProgressBar, ListHeader, List, ListItem } from 'react-onsenui';

import Header from '../components/Header';
import siuLogo from '../../images/SIUlogo.png';
import cdmLogo from '../../images/CDMlogo.jpg';

class Skills extends Component {
  renderToolbar = () => <Header title="Skills and Work Experience" />;

  state = {
    skills: [
      { key: 'ES8 JavaScript', progress: 100 }, // eslint-disable-line
      { key: 'Handlebars/PUG', progress: 90 },
      { key: 'C#/ASP.NET', progress: 80 },
      { key: 'SQL', progress: 70 },
      { key: 'Python', progress: 60 },
      { key: 'Java', progress: 50 }
    ],
    work: [
      { key: 'Southern Illinois University Museum', image: siuLogo, duration: '2015-2016' },
      { key: 'CDM Smith', image: cdmLogo, duration: '2016-Present' },
    ],
  }

  renderRow = ({key, image, duration}) =>
    <ListItem key={key}>
      <div className='left'>
        <img src={image} className='list-item__thumbnail' />
      </div>
      <div className='center'>
        {key}<br />{duration}
      </div>
    </ListItem>

  render() {
    const { skills, work } = this.state;
    return (
      <Page renderToolbar={this.renderToolbar}>
        <section style={{ margin: '16px' }}>
          <List
            dataSource={work}
            renderRow={this.renderRow}
            renderHeader={() => <ListHeader>Work</ListHeader>}
          />
          <ListHeader>Skills</ListHeader>
          <p>
            Here is a general breakdown of my familiarity with a handful of programming languages.
          </p>
          {skills.map(({ key, progress }) => (
            <Fragment key={key}>
              <p>
                {`${key}: ${progress}%`}
              </p>
              <p>
                <ProgressBar value={progress} />
              </p>
            </Fragment>
          ))}
        </section>
      </Page>
    );
  }
}

export default Skills;
