import React, {useState} from 'react';
import '../App.css';
// import { Navigation } from './Navigation';
import * as AppStyles from "../styles/App";
import { Themes } from "../styles/Themes";
import { TransportationForm } from './TransportationForm';
import {TransportationResults} from "./TransportationResults";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Github} from "./Github";

export const GlobalStyle = createGlobalStyle<{theme: any}>`
  body {
    background-color: ${props => props.theme.neutral};
    margin: 0;
    padding: 0;
  }
`

export const App = () => {
  const [theme, setTheme] = useState('charger');

  // @ts-ignore
  const currentTheme = Themes[theme];
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Github />
      <AppStyles.AppWrapper>
        <Header setTheme={setTheme} />
        {/*<Navigation />*/}
        <AppStyles.AppContent>
          <AppStyles.H1>Means of Transportation</AppStyles.H1>
          <TransportationForm />
          <TransportationResults />
          <Footer />
        </AppStyles.AppContent>
      </AppStyles.AppWrapper>
    </ThemeProvider>
  );
}
