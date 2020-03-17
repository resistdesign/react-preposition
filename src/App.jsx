import {hot} from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import MyLayout, {
  Over,
  Left,
  Right,
  Under
} from './App/MyLayout';
import AppBase, {
  CodeSample,
  Section,
  SectionGrid,
  SubSection
} from './Common/ResistDesignPackageSiteLayout';

export class App extends Component {
  render() {
    return (
      <AppBase
        preTitle='React'
        title='Preposition'
        description={(
          <Fragment>
            Create React layouts with&nbsp;
            <svg viewBox="0 0 75 25" style={{
              width: '2em',
              marginLeft: '-0.25em',
              marginRight: '-1.75em',
              verticalAlign: 'bottom'
            }}>
              <path
                d="M 0 25 L 0 22 C 30 18 45 16 75 20 C 40 21 30 23 0 25"
                fill="#0096E4"
              ></path>
            </svg>
            <span
              style={{
                color: '#FF9B00',
                fontStyle: 'oblique'
              }}
            >pre</span>determined&nbsp;
            <span style={{
              color: '#FF9B00'
            }}>positions</span>.
          </Fragment>
        )}
        repoLink='https://github.com/resistdesign/react-preposition'
      >
        <SectionGrid
          cols={2}
        >
          <Section
            title='Write this:'
          >
            <SubSection>
              <CodeSample
                language='jsx'
                showLineNumbers={false}
              >
                {`// Layout

export const Over = createLayoutPosition();
export const Left = createLayoutPosition();
export const Right = createLayoutPosition();
export const Under = createLayoutPosition();

export const MyLayout = createLayout((props = {}) => (<div>...</div>);

// App

<MyLayout>
  <Over>Header</Over>
  <Left>Left</Left>
  <Right>Right</Right>
  <Under>Where?</Under>
</MyLayout>`}
              </CodeSample>
            </SubSection>
          </Section>
          <Section
            title='Get this:'
          >
            <SubSection>
              <MyLayout>
                <Over>Header</Over>
                <Left>Left</Left>
                <Right>Right</Right>
                <Under>Where?</Under>
              </MyLayout>
            </SubSection>
          </Section>
        </SectionGrid>
        <SectionGrid
          title='Install'
          cols={1}
        >
          <Section>
            <SubSection>
              <CodeSample
                language='bash'
                showLineNumbers={false}
              >
                npm i -S react-preposition
              </CodeSample>
            </SubSection>
          </Section>
        </SectionGrid>
        <SectionGrid
          title='Usage'
          cols={2}
        >
          <Section>
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
          </Section>
          <Section>
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
          <Section>
            <SubSection
              title={`Then add your positions anywhere you want in your layout:`}
            >
              <CodeSample
                language='jsx'
                height='30em'
              >
                {`// MyLayout.jsx
export const MyLayout = createLayout((props = {}) => {
  return (
    <div
      style={{...}}
      {...props}
    >
      <div
        style={{...}}
      >
        <Over/>
      </div>
      <div
        style={{...}}
      >
        <div
          style={{...}}
        >
          <Left/>
        </div>
        <div
          style={{...}}
        >
          <Right/>
        </div>
      </div>
      <div
        style={{...}}
      >
        <Under/>
      </div>
    </div>
  );
});

export default MyLayout;`}
              </CodeSample>
            </SubSection>
          </Section>
          <Section>
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
          </Section>
        </SectionGrid>
      </AppBase>
    );
  }
}

export default hot(module)(App);
