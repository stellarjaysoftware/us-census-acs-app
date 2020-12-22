import React from 'react';
import styled from "styled-components";

const AppFooter = styled.footer`
  margin: 20px 5px;
`;

const Attribution = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  color: #666;
`;

export const Footer = () => {
  return (
    <AppFooter>
      <Attribution>
        This product uses the Census Bureau Data API but is not endorsed or certified by the Census Bureau.
      </Attribution>
      © {new Date().getFullYear()}, <a href="https://stellarjaysoftware.com">StellarJay Software</a>
    </AppFooter>
  )
}