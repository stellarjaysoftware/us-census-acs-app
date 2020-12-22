import styled from "styled-components";

export const AppWrapper = styled.div`
  margin: 20px 0;
`;

export const AppContent = styled.div`
  padding: 0 20px;
  // with navigation: border-top: solid 2px ${props => props.theme.borders};
`;

export const GeoSelected = styled.div`
  margin: 10px 0;
`;

export const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.secondary};
  text-shadow: 1px 1px #fff;
`;

export const H2 = styled.h2`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.primary};
  // text-shadow: 1px 1px #333;
  margin: 0 0 0.2em;
`;

export const H3 = styled.h3`
  font-family: 'Oswald', sans-serif;
  color: ${props => props.theme.primary};
  // text-shadow: 1px 1px #333;
  margin: 0 0 0.2em 0;
`;

export const ContentCard = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  border: solid 1px ${props => props.theme.borders};
  border-radius: 10px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
  background-color: #fff;
  padding: 10px 20px;
  margin: 0 0 10px 0;  
`;

export const Button = styled.button`
  border: solid 1px ${props => props.theme.borders};
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  margin: 0 0 10px 0;
  cursor: pointer;
  &:focus {
    background-color: ${props => props.theme.primary};
    outline: none;
  }
`;

export const ActionButton = styled(Button)`
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.primary};
  font-weight: bold;
  padding: 10px 35px;
  margin: 0 0 10px 0;
  &:focus {
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.primary};
    border: solid 1px ${props => props.theme.primary};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.seconday};
  color: ${props => props.theme.neutral};
  padding: 10px 35px;
  margin: 0 0 10px 0;
`;

export const DisabledButton = styled(Button)`
  background-color: #999;
  color: #fff;
  border: solid 1px ${props => props.theme.borders};
  padding: 10px 35px;
  margin: 0 0 10px 0;
  &:focus {
    background-color: #666;
    color: #fff;
  }
`;

export const SmallButton = styled(Button)`
  border: solid 1px #999;
  border-radius: 5px;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.neutral};
  padding: 6px 10px;
  margin: 0 5px;  
`;

export const LinkButton = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: 1em;
  cursor: pointer;
  text-decoration: underline;
`;

export const BoldLinkButton = styled(LinkButton)`
  font-weight: bold;
`;

export const ResultsViewSelect = styled.div`
  display: inline-block;
  position: relative;
  border: solid 1px ${props => props.theme.borders};
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  padding: 0;
  margin: 0 0 0 10px;
  background-color: #ccc;
  &.selected {
    padding: 0 0 1px;
    margin: 0 0 -1px 10px;
    background-color: #fff;
  }
`;

export const ResultsViewLink = styled.button`
  background: none;
  margin: 0;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: 1em;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
`;

export const ResultsContentWrapper = styled.div`
  border-top: solid 1px ${props => props.theme.borders};
  padding: 10px;
`;

export const NoResults = styled.div`
  margin: 20px 0;
  font-size: 1.4em;
`;