import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: max-content;
  display: flex;
  align-items: center;
  background: #166bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  letter-spacing: -0.2px;
  font-size: 1.2rem;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 36%);
  cursor: pointer;

  &:hover:not([disabled]) {
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 30%);
    background: #2d7aff;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.7;
    transform: translateY(0px);
    box-shadow: none;
  }

  svg {
    display: inline-block;
    height: 1em;
    width: auto;
    vertical-align: middle;
    margin-left: 2px;
  }
`;
