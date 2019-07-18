import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  greenBlue: '#39AFA9',
  dark: '#17252A',
  greyGreenBlue: '#2B7A78',
  lightGreenBlue: '#DEF2F1',
  white: '#FEFFFF',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.dark};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const MainPageStyle = createGlobalStyle`
  @font-face {
    font-family: 'Foo';
    src: url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
    font-family: 'IBM Plex Sans', serif;
    font-weight: 400;
    font-display: fallback; /* <- this can be added to each @font-face definition */
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.dark};
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <MainPageStyle />
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </div>
      </ThemeProvider>
    );
  }
}

export default Page;