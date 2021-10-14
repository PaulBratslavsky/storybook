import styled from 'styled-components'

export const ListStyled = styled.ul`
  list-style: none;
  margin: 1rem 0 0 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;

  }

  svg {
    margin-top: 4px;
  }

  span {
    line-height: 1.7;
    max-width: 85ch;
    font-size: 1.125rem;
    font-weight: 400;
    color: #5f718c;
  }
`;