import '../App/Assets/Fonts/Gasalt/stylesheet.css';
import '../App/Assets/Fonts/Drawic/style.css';
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
import IssuesIcon from '@material-ui/icons/InfoOutlined';
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
import YouTubeIcon from '../App/Assets/Fonts/Drawic/youtube.svg';
import ZapLogo from '../App/Assets/Graphics/zap-logo.svg';

SyntaxHighlighter.registerLanguage('plaintext', PlainTextLanguage);
SyntaxHighlighter.registerLanguage('json', JSONLanguage);
SyntaxHighlighter.registerLanguage('bash', BashLanguage);
PrismSyntaxHighlighter.registerLanguage('jsx', JSXLanguage);

const CURRENT_FULL_YEAR = new Date().getFullYear();
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
const SubSectionBox: ComponentType<{ alignItems: string, justifyContent: string }> = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${p => !!p.alignItems ? p.alignItems : 'stretch'};
  justify-content: ${p => !!p.justifyContent ? p.justifyContent : 'stretch'};
  padding: 1em;
  
  & > *:not(${SectionTitle}) {
    ${p => p.justifyContent === 'stretch' ? css`flex: 1 0 auto;` : ''}
  }
`;
export const AreaBase: ComponentType<{ bgColor: string, padTop: boolean }> = styled.div`
  margin-top: ${p => !!p.padTop ? '2em' : '0'};
  padding: 2em 2em 0 2em;
  ${p => !!p.bgColor ? css`background-color: ${p.bgColor};` : ''}
  
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
const FooterLinkLabel = styled(Typography).attrs(p => ({
  className: 'footer-link-label',
  component: 'div'
}))`
  &.footer-link-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;
const FooterLinkLabelText = styled.span`
  
`;
const FooterLinkAnchor = styled.a`
  flex: 0 0 auto;
  text-decoration: none;
  color: inherit;
  padding: 0.5em 0 0.5em 0;
  
  &:first-child {
    padding-top: 0;
  }
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &:hover > ${FooterLinkLabel} > ${FooterLinkLabelText} {
    color: #0096E4;
  }
`;
const FooterIcon = styled.span.attrs(p => ({className: `${p.className} drawic`}))`
  flex: 0 0 auto;
  display: inline;
  font-size: 2em;
  
  &:after {
    content: ' ';
    white-space: pre;
    font-size: 0.25em;
  }
`;
const FooterImageIcon = styled.img`
  width: 1em;
`;
const FooterCopyrightText = styled.span`
  font-size: 0.75em;
  opacity: 0.5;
`;
const FooterLink = ({
                      href = '',
                      icon,
                      children,
                      ...props
                    } = {}) => !!href ? (
  <FooterLinkAnchor
    href={href}
    {...props}
  >
    <FooterLinkLabel>
      {icon}
      <FooterLinkLabelText>{!!children ? children : href}</FooterLinkLabelText>
    </FooterLinkLabel>
  </FooterLinkAnchor>
) : (
  <Fragment/>
);
const FooterBaseText = styled(Typography)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

//**********
// Exports
//**********

export const Area: ComponentType<{
  title: string,
  bgColor: string,
  children: ReactNode
}> = ({
        title = '',
        bgColor,
        children,
        ...props
      } = {}) => (
  <AreaBase
    bgColor={bgColor}
    {...props}
  >
    {!!title ? (<AreaTitle variant='h6'>{title}</AreaTitle>) : undefined}
    {children}
  </AreaBase>
);
export const SectionGrid: ComponentType<{
  title: string,
  cols: 1 | 2 | 3,
  bgColor: string,
  children: ReactNode
}> = ({
        cols = 3,
        bgColor,
        children,
        ...props
      } = {}) => (
  <Area
    bgColor={bgColor}
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
type FooterProps = {
  name: string,
  icon: ReactNode,
  showCopyright: boolean,
  webAddressLink: string,
  bgColor: string,
  issuesLink: string,
  githubLink: string,
  twitterLink: string,
  facebookLink: string,
  instagramLink: string,
  youtubeLink: string,
  children: ReactNode
};
export const Footer: ComponentType<FooterProps> = ({
                                                     name,
                                                     icon,
                                                     showCopyright,
                                                     webAddressLink,
                                                     bgColor,
                                                     issuesLink,
                                                     githubLink,
                                                     twitterLink,
                                                     facebookLink,
                                                     instagramLink,
                                                     youtubeLink,
                                                     children,
                                                     ...props
                                                   } = {}) => (
  <SectionGrid
    bgColor={bgColor}
    padTop
    {...props}
  >
    <Section>
      <SubSection
        alignItems='flex-start'
        justifyContent='space-between'
      >
        <FooterLink
          href={issuesLink}
          icon={<IssuesIcon
            style={{
              fontSize: '2em'
            }}
          />}
        >
          &nbsp;Issues
        </FooterLink>
        <FooterBaseText>
          {children}
        </FooterBaseText>
      </SubSection>
    </Section>
    <Section>
      <SubSection
        alignItems='center'
        justifyContent='flex-end'
      >
        <FooterLink
          href={webAddressLink}
          icon={icon}
        >
          {name}{!!showCopyright ? (
          <FooterCopyrightText>
            {!!name || !!icon ? (
              <Fragment>
                &nbsp;
              </Fragment>
            ) : undefined}
            ©&nbsp;{CURRENT_FULL_YEAR}
          </FooterCopyrightText>
        ) : undefined}
        </FooterLink>
      </SubSection>
    </Section>
    <Section>
      <SubSection
        alignItems='flex-end'
        justifyContent='space-between'
      >
        <FooterLink
          href={githubLink}
          icon={<FooterIcon
            className='drawic-github'
          />}
        >
          GitHub
        </FooterLink>
        <FooterLink
          href={twitterLink}
          icon={<FooterIcon
            className='drawic-twitter'
          />}
        >
          Twitter
        </FooterLink>
        <FooterLink
          href={facebookLink}
          icon={<FooterIcon
            className='drawic-facebook'
          />}
        >
          Facebook
        </FooterLink>
        <FooterLink
          href={instagramLink}
          icon={<FooterIcon
            className='drawic-instagram'
          />}
        >
          Instagram
        </FooterLink>
        <FooterLink
          href={youtubeLink}
          icon={<FooterIcon>
            <FooterImageIcon src={YouTubeIcon}/>
          </FooterIcon>}
        >
          YouTube
        </FooterLink>
      </SubSection>
    </Section>
  </SectionGrid>
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
