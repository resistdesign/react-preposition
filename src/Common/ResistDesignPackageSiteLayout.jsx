import '../App/Assets/Fonts/Gasalt/stylesheet.css';
import React, {Component, ComponentType, Fragment} from 'react';
import type {ReactNode} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {
  Box,
  CssBaseline,
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
import GHRepo from '../App/Assets/Graphics/github-repo.svg';
import GHRepoMessage from '../App/Assets/Graphics/github-repo-message.svg';
import ZapLogo from '../App/Assets/Graphics/zap-logo.svg';

SyntaxHighlighter.registerLanguage('json', JSONLanguage);
PrismSyntaxHighlighter.registerLanguage('jsx', JSXLanguage);

const THEME = createMuiTheme(SRACLMUITheme);
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

//**********
// Exports
//**********

export const Area = styled.div`
  padding: 2em;
`;
export const SectionGrid = styled(Area)`
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
export const CodeBox: ComponentType<{ height: string }> = styled.div`
  height: ${p => p.height || '10em'};
  overflow: auto;
  
  & > * {
    min-height: 100%;
    margin: 0;
  }
`;
export const Section = ({title = '', children, ...props} = {}) => (
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
export const CodeSample = ({language = 'jsx', children, ...props} = {}) => language === 'json' ?
  (
    <SyntaxHighlighter
      language='json'
      style={hybrid}
      showLineNumbers
      wrapLines
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  ) :
  (
    <PrismSyntaxHighlighter
      language='jsx'
      style={duotoneSpace}
      showLineNumbers
      wrapLines
      {...props}
    >
      {children}
    </PrismSyntaxHighlighter>
  );

type AppBaseProps = {
  logoSrc: string,
  repoLink: string,
  preTitle: string,
  title: string,
  postTitle: string,
  children: ReactNode
};

export class AppBase extends Component<AppBaseProps> {
  render() {
    const {
      logoSrc = ZapLogo,
      repoLink = '',
      preTitle = '',
      title = '',
      postTitle = '',
      children
    } = this.props;

    return (
      <Fragment>
        <GlobalStyle/>
        <ThemeProvider
          theme={THEME}
        >
          <CssBaseline/>
          <Base
            display='flex'
            flexDirection='column'
            alignItems='stretch'
            justifyContent='flex-start'
          >
            <HeaderBox
              display='flex'
              flexDirection='row'
              alignItems='center'
              justifyContent='flex-start'
            >
              <LogoImg
                src={logoSrc}
              />
              <Title
                variant='h5'
              >
                {!!preTitle ? (
                  <Fragment>
                    <Title
                      display='inline'
                      variant='inherit'
                      color='textSecondary'
                    >
                      {preTitle}
                    </Title>
                    &nbsp;
                  </Fragment>
                ) : undefined}
                {title}
                {!!postTitle ? (
                  <Fragment>
                    &nbsp;
                    <Title
                      display='inline'
                      variant='inherit'
                      color='textSecondary'
                    >
                      {postTitle}
                    </Title>
                  </Fragment>
                ) : undefined}
              </Title>
            </HeaderBox>
            {children}
            <GHRepoCorner>
              <GHRepoAnchor
                target='_blank'
                href={repoLink}
              >
                <GHRepoMessageCornerImg
                  src={GHRepoMessage}
                />
                <GHRepoCornerImg
                  src={GHRepo}
                />
              </GHRepoAnchor>
            </GHRepoCorner>
          </Base>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default AppBase;
