import React from 'react';
import { Themes } from '../styles/Themes';
import styled, { withTheme } from 'styled-components';

interface Props {
  setTheme: Function,
  theme: {
    primary: string
  }
}

const ThemeSquare = styled.div`
  display: inline-block;
  width: 20px;
  height: 19px;
  border: solid 1px #fff; 
  border-radius: 5px; 
  background-color: #fff;
  position: relative;
  top: 8px;
  padding: 1px;
  &.selected {
    border-color: ${props => props.theme.borders}; 
  }
  @media (max-width: 600px) {
    width: 15px;
  }
`;

const ThemeStripe = styled.div`
  border-radius: 3px;
  margin: 1px 0;
  width: 20px;
  height: 5px;
  @media (max-width: 600px) {
    width: 15px;
  }
`;

const ThemeLink = styled.a`
  margin-right: 3px;
`;

const _ThemeChooser = (props:Props) => {
  return (
    <>
      {Object.entries(Themes).map(([key, theme], index) => {
        return (
          <React.Fragment key={`theme-${key}`}>
            <ThemeLink onClick={()=> props.setTheme(key)}>
              <ThemeSquare className={(theme.primary === props.theme.primary ? 'selected' : '')}>
                <ThemeStripe style={{backgroundColor: theme.primary}}/>
                <ThemeStripe style={{backgroundColor: theme.secondary}}/>
                <ThemeStripe style={{backgroundColor: theme.accent}}/>
              </ThemeSquare>
            </ThemeLink>
          </React.Fragment>
        );
      })}
    </>
  );
}

export const ThemeChooser = withTheme(_ThemeChooser);

