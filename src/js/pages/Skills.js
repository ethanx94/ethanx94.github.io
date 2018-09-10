import React, { Component, Fragment } from 'react';
import { Page, ProgressBar } from 'react-onsenui';

import Header from '../components/Header';

class Skills extends Component {
  renderToolbar = () => <Header title="My Skills" />;

  state = {
    skills: [
      { key: 'ES8 JavaScript', progress: 100 }, // eslint-disable-line
      { key: 'Handlebars/PUG', progress: 90 },
      { key: 'C#/ASP.NET', progress: 80 },
      { key: 'SQL', progress: 70 },
      { key: 'Python', progress: 60 },
      { key: 'Java', progress: 50 }
    ],
  }

  render() {
    const { skills } = this.state;
    return (
      <Page renderToolbar={this.renderToolbar}>
        <section style={{ margin: '16px' }}>
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
