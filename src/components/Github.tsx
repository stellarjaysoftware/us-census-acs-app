import React from 'react';
import styled from "styled-components";

const GithubRibbon = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Github = () => {
  return (
    <GithubRibbon href="https://github.com/stellarjaysoftware/us-census-acs-app">
      <img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
          className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" />
      </GithubRibbon>
  );
}