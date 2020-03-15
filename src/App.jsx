import {hot} from 'react-hot-loader';
import React, {Component} from 'react';
import styled from 'styled-components';
import MyLayout, {
  HeaderSection,
  LeftPanel,
  RightPanel
} from './App/MyLayout';
import AppBase from './Common/ResistDesignPackageSiteLayout';


export class App extends Component {
  render() {
    return (
      <AppBase>
        <MyLayout
          bgColor='#111111'
        >
          <HeaderSection>Header</HeaderSection>
          <LeftPanel>Left</LeftPanel>
          <RightPanel>Right</RightPanel>
        </MyLayout>
      </AppBase>
    );
  }
}

export default hot(module)(App);
