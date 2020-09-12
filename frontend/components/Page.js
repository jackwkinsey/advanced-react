import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta.js';
import Header from './Header.js';

const theme = {
  black: '#393939',
  grey: '#3a3a3a',
  lightgrey: '#e1e1e1',
  offWhite: '#ededed',
  red: '#ff0000',
  white: '#ffffff',
  maxWidth: '900px',
  boxShadow: '0 12ps 24px 0 rgba(0, 0, 0, 0.09)',
};
theme.lightGrey = theme.lightgrey;

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next'
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{props.children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

export default Page;
