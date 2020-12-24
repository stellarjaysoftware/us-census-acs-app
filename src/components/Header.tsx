import React from 'react';
import logo from "../images/logo-sm.png";
import logo2 from "../images/logo-sm@2x.png";
import logo3 from "../images/logo-sm@3x.png";
import {ThemeChooser} from "./ThemeChooser";
import styled from "styled-components";

export const AppHeader = styled.header`
  margin: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 110px;
  @media (max-width: 500px) {
    grid-template-columns: 2fr 1fr;
  }
`;
export const AppTitle = styled.div`
  color: #333;
`;
export const AppTheme = styled.div`
  text-align: right;
`;

const Logo = styled.img`
  position: relative;
  top: 8px;
  margin-right: 6px;
`;

interface Props {
  setTheme: Function
}

export const Header = (props:Props) => {
  return (
    <AppHeader>
      <AppTitle>
        <Logo srcSet={`${logo}, ${logo2} 2x, ${logo3} 3x`} src={logo} title="US Census Visualization" />
        US Census Visualization
      </AppTitle>
      <AppTheme>
        <ThemeChooser setTheme={props.setTheme} />
      </AppTheme>
    </AppHeader>
  );
}