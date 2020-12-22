import React from 'react';
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 10px;
`;

const NavItem = styled.div`
  display: inline-block;
  position: relative;
  border: solid 1px ${props => props.theme.borders};
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  padding: 0;
  margin: 0 0 0 10px;
  background-color: #fff;
  color: ${props => props.theme.primary}; 
  &.selected {
    padding: 0 0 2px;
    margin: 0 0 -2px 10px;
    background-color: ${props => props.theme.secondary};
    color: #fff;
  }
`;

const NavButton = styled.button`
  background: none;
  margin: 0;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: 1em;
  display: inline-block;
  padding: 8px 20px;
  text-decoration: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <NavItem className="selected">
        <NavButton type="button" onClick={() => { console.log('transportation')}}>Transportation</NavButton>
      </NavItem>
      <NavItem>
        <NavButton type="button" onClick={() => { console.log('migration')}}>Migration</NavButton>
      </NavItem>
      <NavItem>
        <NavButton type="button" onClick={() => { console.log('real estate')}}>Real Estate Ownership</NavButton>
      </NavItem>
    </Nav>
  );
}