import './App/Assets/Fonts/Gasalt/stylesheet.css';
import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {
  Box,
  Typography
} from '@material-ui/core';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';
import SRACLMUITheme from '@resistdesign/sracl-mui-theme';
import {Light as SyntaxHighlighter, PrismLight as PrismSyntaxHighlighter} from 'react-syntax-highlighter';
import {hybrid} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {duotoneSpace} from 'react-syntax-highlighter/dist/esm/styles/prism';
import JSONLanguage from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import JSXLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import {ItemQueueProcessor} from './index';
import Logo from './App/Assets/Graphics/Incarnate Logo Icon 2020.svg';
import GHRepo from './App/Assets/Graphics/github-repo.svg';
import GHRepoMessage from './App/Assets/Graphics/github-repo-message.svg';
import SampleCode from '!raw!./Sample Code.txt';

SyntaxHighlighter.registerLanguage('json', JSONLanguage);
PrismSyntaxHighlighter.registerLanguage('jsx', JSXLanguage);

const THEME = createMuiTheme(SRACLMUITheme);
export const ThemeBase = ({children} = {}) => (
  <ThemeProvider
    theme={THEME}
  >
    {children}
  </ThemeProvider>
);
const GlobalStyle = createGlobalStyle`
  html,
  body,
  #app-root {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
`;
const Base = styled(Box)`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;
const HeaderBox = styled(Box)`
  box-sizing: border-box;
  padding: 2em;
`;
const LogoImg = styled.img`
  width: 7.5em;
`;
const GHRepoMessageCornerImg = styled.img`
  width: 10em;
`;
const GHRepoCornerImg = styled.img`
  width: 10em;
  margin-left: -10em;
`;
const GHRepoAnchor = styled.a`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  & > ${GHRepoMessageCornerImg} {
    width: 5em;
    
    transition: width 100ms ease-in-out;
  }
  
  &:hover {
    & > ${GHRepoMessageCornerImg} {
      width: 10em;
    }
  }
`;
const GHRepoCorner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
const Title = styled(Typography).attrs(p => ({
  ...p,
  style: {
    ...p.style,
    fontFamily: 'gasaltblack, sans-serif',
    letterSpacing: '0.05em'
  }
}))`
  
`;
const Area = styled.div`
  padding: 2em;
`;
const SectionGrid = styled(Area)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 4em;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const SubSectionBox = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  padding: 1em;
  
  & > * {
    flex: 10 auto;
  }
`;
const CodeBox = styled.div`
  height: 10em;
  overflow: auto;
  
  & > * {
    min-height: 100%;
    margin: 0;
  }
`;
const OutputCodeBox = styled(CodeBox)`
  height: 20em;
`;
const Section = ({title = '', children, ...props} = {}) => (
  <Box
    display='flex'
    flexDirection='column'
    alignItems='stretch'
    justifyContent='stretch'
    {...props}
  >
    {!!title ? (<Typography variant='h6'>{title}</Typography>) : undefined}
    {children}
  </Box>
);
export const SubSection = ({title = '', children, ...props} = {}) => (
  <SubSectionBox
    {...props}
  >
    {!!title ? (<Typography>{title}</Typography>) : undefined}
    {children}
  </SubSectionBox>
);

export const Site = ({children} = {}) => (
  <Fragment>
    <GlobalStyle/>
    <ThemeBase>
      <Base>
        {children}
      </Base>
    </ThemeBase>
  </Fragment>
);
