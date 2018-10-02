import React from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';

import Bio from './Bio';
import Links from './Links';
import Skills from './Skills';
import Projects from './Projects';

class Main extends React.Component {
  renderTabs = () => {
    const sections = [
      {
        content: <Bio key="Bio" navigator={this.props.navigator} />,
        title: 'Bio',
        icon: 'md-home',
      },
      {
        content: <Skills key="Skills" navigator={this.props.navigator} />,
        title: 'Skills',
        icon: 'md-info',
      },
      {
        content: <Projects key="Projects" navigator={this.props.navigator} />,
        title: 'Projects',
        icon: 'md-settings',
      },
      {
        content: <Links key="Links" navigator={this.props.navigator} />,
        title: 'Links',
        icon: 'md-link',
      },
    ];

    return sections.map((section) => ({
      content: section.content,
      tab: <Tab key={section.title} label={section.title} icon={section.icon} />,
    }));
  }

  render() {
    return (
      <Page>
        <Tabbar
          initialIndex={0}
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}

export default Main;
