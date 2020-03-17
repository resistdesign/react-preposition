import {hot} from 'react-hot-loader';
import React, {Component} from 'react';
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
        description='Create React layouts with predetermined positions.'
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
