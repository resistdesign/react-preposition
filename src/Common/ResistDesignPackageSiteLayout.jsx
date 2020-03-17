import '../App/Assets/Fonts/Gasalt/stylesheet.css';
import React, {Component, ComponentType, Fragment} from 'react';
import type {ReactNode} from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';
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
import {hybrid as StandardCodeTheme} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {okaidia as PrismCodeTheme} from 'react-syntax-highlighter/dist/esm/styles/prism';
import JSONLanguage from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import BashLanguage from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import PlainTextLanguage from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext';
import JSXLanguage from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import GHRepo from '../App/Assets/Graphics/github-repo.svg';
import GHRepoMessage from '../App/Assets/Graphics/github-repo-message.svg';
import ZapLogo from '../App/Assets/Graphics/zap-logo.svg';

SyntaxHighlighter.registerLanguage('plaintext', PlainTextLanguage);
SyntaxHighlighter.registerLanguage('json', JSONLanguage);
SyntaxHighlighter.registerLanguage('bash', BashLanguage);
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
const Description = styled(Typography).attrs(p => ({className: 'site-layout-description'}))`
  text-align: center;
  
  &.site-layout-description {
    margin: 0 0 2em 0;
  }
`;
const SectionTitle = styled(Typography)`
  flex: 0 0 auto;
`;
const SubSectionTitle = styled(SectionTitle).attrs(p => ({className: 'sub-section-title'}))`
  &.sub-section-title {
    margin: 0 0 1em 0;
  }
`;
const SubSectionBox = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  padding: 1em;
  
  & > *:not(${SectionTitle}) {
    flex: 1 0 auto;
  }
`;
export const AreaBase = styled.div`
  padding: 2em 2em 0 2em;
  
  &:last-child {
    padding-bottom: 2em;
  }
`;
const AreaTitle = styled(SectionTitle).attrs(p => ({className: 'section-grid-title'}))`
  &.section-grid-title {
    margin: 0 0 1em 0;
  }
`;
const SectionGridContent: ComponentType<{ cols: 1 | 2 | 3 }> = styled.div`
  display: grid;
  grid-template-columns: ${p => [...new Array(p.cols || 3)].map(x => '1fr').join(' ')};
  grid-gap: 1em;
  box-sizing: border-box;
  
  @media (max-width: 1024px) {
    grid-template-columns: ${p => [...new Array(((p.cols || 3) - 1) || 1)].map(x => '1fr').join(' ')};
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CodeBox: ComponentType<{ height: string, bigger: boolean }> = styled.div`
  overflow: auto;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  font-size: ${p => !!p.bigger ? '1.23076923077em' : '1em'};
  ${p => p.height ? css`max-height: ${p.height};` : ''}
  
  & > * {
    flex: 1 1 auto;
    margin: 0 !important;
  }
`;

//**********
// Exports
//**********

export const Area: ComponentType<{
  title: string,
  children: ReactNode
}> = ({
        title = '',
        children,
        ...props
      } = {}) => (
  <AreaBase
    {...props}
  >
    {!!title ? (<AreaTitle variant='h6'>{title}</AreaTitle>) : undefined}
    {children}
  </AreaBase>
);
export const SectionGrid: ComponentType<{
  title: string,
  cols: 1 | 2 | 3,
  children: ReactNode
}> = ({
        cols = 3,
        children,
        ...props
      } = {}) => (
  <Area
    {...props}
  >
    <SectionGridContent
      cols={cols}
    >
      {children}
    </SectionGridContent>
  </Area>
);
export const Section = ({title = '', children, ...props} = {}) => (
  <Box
    display='flex'
    flexDirection='column'
    alignItems='stretch'
    justifyContent='stretch'
    {...props}
  >
    {!!title ? (<SectionTitle variant='h6'>{title}</SectionTitle>) : undefined}
    {children}
  </Box>
);
export const SubSection = ({title = '', children, ...props} = {}) => (
  <SubSectionBox
    {...props}
  >
    {!!title ? (<SubSectionTitle>{title}</SubSectionTitle>) : undefined}
    {children}
  </SubSectionBox>
);
export const CodeSample: ComponentType<{
  language: 'plaintext' | 'bash' | 'json' | 'jsx',
  height: string,
  children: ReactNode
}> = ({
        language = 'plaintext',
        height,
        children,
        ...props
      } = {}) => (
  <CodeBox
    height={height}
    bigger={language === 'plaintext' || language === 'bash'}
  >
    {language !== 'jsx' ?
      (
        <SyntaxHighlighter
          language={language}
          style={StandardCodeTheme}
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
          style={PrismCodeTheme}
          showLineNumbers
          wrapLines
          {...props}
        >
          {children}
        </PrismSyntaxHighlighter>
      )}
  </CodeBox>
);

type AppBaseProps = {
  logoSrc: string,
  repoLink: string,
  preTitle: ReactNode,
  title: ReactNode,
  postTitle: ReactNode,
  description: ReactNode,
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
      description = '',
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
            {!!description ? (
              <Area>
                <Description>
                  {description}
                </Description>
              </Area>
            ) : undefined}
            {children}
          </Base>
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
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default AppBase;
