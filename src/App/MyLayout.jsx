import React, {ComponentType} from 'react';
import styled from 'styled-components';
import {
  createLayout,
  createLayoutArea
} from '../Utils/ReactPreposition';

const Base: ComponentType<{ bgColor: string }> = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  font-family: sans-serif;
  background-color: ${p => p.bgColor || 'none'};
`;
const Header = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 5em;
  color: white;
`;
const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: stretch;
`;
const Panel: ComponentType<{ color: string }> = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  color: ${p => p.color || 'black'};
`;

export const HeaderSection = createLayoutArea();

export const LeftPanel = createLayoutArea();

export const RightPanel = createLayoutArea();

export const MyLayout: { bgColor: string } = createLayout((props = {}) => (
  <Base
    {...props}
  >
    <Header>
      <HeaderSection/>
    </Header>
    <Content>
      <Panel color='blue'><LeftPanel/></Panel>
      <Panel color='green'><RightPanel/></Panel>
    </Content>
  </Base>
));

export default MyLayout;
