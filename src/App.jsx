import {hot} from 'react-hot-loader';
import React, {Component, Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import MyLayout, {
  HeaderSection,
  LeftPanel,
  RightPanel
} from './App/MyLayout';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app-root {
    margin: 0;
    padding: 0;
  }
`;
const Base = styled.div`
  width: 100vw;
  min-height: 100vh;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`;

export class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <Base>
          <MyLayout
            bgColor='#111111'
          >
            <HeaderSection>Header</HeaderSection>
            <LeftPanel>Left</LeftPanel>
            <RightPanel>Right</RightPanel>
          </MyLayout>
        </Base>
      </Fragment>
    );
  }
}

export default hot(module)(App);
