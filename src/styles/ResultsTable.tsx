import styled from "styled-components";

export const ResultsOptions = styled.div`
 margin: 10px 0;
`;

export const ResultTable = styled.table`
  margin: 10px 0 20px;
  border-collapse: collapse;
  border: solid 1px ${props => props.theme.borders};
  border-radius: 3px;
  width: 100%;
`;

export const ResultHeader = styled.thead`
  background-color: #ccc;
  font-weight: bold;
`;

export const ResultsBody = styled.tbody`
  
`;
export const ResultsRow = styled.tr`
  display: grid;
  grid-template-columns: 40px minmax(100px, 1fr) repeat(3, 1fr) 100px;
  justify-items: stretch;
  &:nth-child(odd) td {
    background: #eee;
  }
  cursor: pointer;
`;


export const Cell = styled.td`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &.left {
    text-align: left;
    padding-left: 20px;
  }
  &.right {
    text-align: right;
    padding-right: 20px;
  }
`;

export const HeaderCell = styled(Cell)`
 padding: 10px 2px;
 font-weight: bold;
`;
export const BodyCell = styled(Cell)`
  padding: 8px 4px;
  text-align: center;
`;

export const ResultOptions = styled.div`
  // display: grid;
  // grid-template-columns: minmax(100px, 1fr); //180px repeat(auto-fill, 1fr);
  // grid-template-columns: auto;
`;

