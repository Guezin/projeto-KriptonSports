import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 16px;
  background: #202020;
  border-radius: 10px;
  border: 2px solid #393939;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666360;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #fff;
      color: #fff;
    `};

  ${props =>
    props.isFilled &&
    css`
      color: #fff;
    `}

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 12px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    font-size: 18px;

    &::placeholder {
      color: #666360;
    }
  }
`;
