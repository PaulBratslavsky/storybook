import styled from 'styled-components';

export const QuoteBoxStyled = styled.div`
  background: white;
  max-width: ${({ width }) => width ? width : "100%"};
  padding: 2rem;
  border: 1px solid #edf2f7;
  box-shadow: 0 20px 38px -7px rgb(0 118 255 / 36%);
  border-radius: 1rem;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 400;
  color: #5f718c;

  svg {
    color: #0fcdbe;
    font-size: 2rem;
  }

  footer {
    display: flex;
    align-items: center;
    color: #166bff;
  }

  img {
    height: 2rem;
    border-radius: 100%;
    margin: 0 1rem 0 0;
  }
`;
