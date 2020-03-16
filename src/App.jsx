import {hot} from 'react-hot-loader';
import React, {Component} from 'react';
import MyLayout, {
  Over,
  Left,
  Right,
  Under
} from './App/MyLayout';
import AppBase, {
  Area,
  CodeSample,
  Section, SectionGrid,
  SubSection
} from './Common/ResistDesignPackageSiteLayout';
import {
  Card,
  CardContent
} from '@material-ui/core';

export class App extends Component {
  render() {
    return (
      <AppBase
        preTitle='React'
        title='Preposition'
        repoLink='https://github.com/resistdesign/react-preposition'
      >
        <Area>
          <Section
            title='Install'
          >
            <SubSection>
              <code>npm i -S react-preposition</code>
            </SubSection>
          </Section>
          <Section
            title='Usage'
          >
            <SubSection
              title='First import React and the higher order functions:'
            >
              <CodeSample
                language='jsx'
              >
                {`// MyLayout.jsx
import React from 'react';
import {
  createLayout,
  createLayoutArea
} from '../Utils/ReactPreposition';`}
              </CodeSample>
            </SubSection>
            <SubSection
              title={`Then create the positions you'll use in your layout:`}
            >
              <CodeSample
                language='jsx'
              >
                {`// MyLayout.jsx
export const Over = createLayoutPosition();
export const Left = createLayoutPosition();
export const Right = createLayoutPosition();
export const Under = createLayoutPosition();`}
              </CodeSample>
            </SubSection>
          </Section>
        </Area>
        <SectionGrid>
          <SubSection
            title={`Then add your positions anywhere you want in your layout:`}
          >
            <CodeSample
              language='jsx'
              height='25em'
            >
              {`// MyLayout.jsx
export const MyLayout = createLayout((props = {}) => {
  const panelStyle = {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3em'
  };

  return (
    <div
      style={{
        flex: '1 0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        fontFamily: 'sans-serif',
        height: '50vh'
      }}
      {...props}
    >
      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5em',
          color: 'white'
        }}
      >
        <Over/>
      </div>
      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'stretch'
        }}
      >
        <div
          style={{
            ...panelStyle,
            color: 'blue'
          }}
        >
          <Left/>
        </div>
        <div
          style={{
            ...panelStyle,
            color: 'green'
          }}
        >
          <Right/>
        </div>
      </div>
      <div
        style={{
          flex: '1 0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.5em',
          color: 'white'
        }}
      >
        <Under/>
      </div>
    </div>
  );
});

export default MyLayout;`}
            </CodeSample>
          </SubSection>
          <SubSection
            title={`Now use your layout in your app:`}
          >
            <CodeSample
              language='jsx'
            >
              {`// App.jsx
import React, {Component} from 'react';
import MyLayout, {
  Over,
  Left,
  Right,
  Under
} from './App/MyLayout';

const App => (props = {}) => (
  <MyLayout>
    <Over>Header</Over>
    <Left>Left</Left>
    <Right>Right</Right>
    <Under>Where?</Under>
  </MyLayout>
);`}
            </CodeSample>
          </SubSection>
          <SubSection
            title='And it looks like this:'
          >
            <Card>
              <CardContent>
                <MyLayout>
                  <Over>Header</Over>
                  <Left>Left</Left>
                  <Right>Right</Right>
                  <Under>Where?</Under>
                </MyLayout>
              </CardContent>
            </Card>
          </SubSection>
        </SectionGrid>
      </AppBase>
    );
  }
}

export default hot(module)(App);
