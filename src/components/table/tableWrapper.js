import styled from 'styled-components';

export const TableWrapper = styled.table`
  * {
    font-family: sans-serif;
  }

  border-collapse: collapse;
  margin: 25px 0;
  font-size: 1rem;
  min-width: 80%;
  margin 0 auto;
  overflow: hidden;


& thead tr {
    background-color: #E94F37;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }

& th,
& td {
    padding: 12px 15px;
  }

& tbody tr {
    border-bottom: 1px solid #f3f3f3;
  }



& tbody tr:hover {
    background-color: #f3f3f3;
  }

& input[type=text] {
border: 1px solid #f3f3f3;
padding: 5px 5px;
font-size: 1rem;
outline: none;
transition: border .3s ease-in;
}

& input[type=text]:hover {
  border: 1px solid #555;
}
`;
