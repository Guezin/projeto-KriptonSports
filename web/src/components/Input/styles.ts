import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  padding: 1.6rem;
  border: 2px solid var(--color-input-border-primary);
  border-radius: 0.8rem;
  color: var(--color-input-placeholder);
  background-color: var(--color-input-background);

  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      border-color: var(--color-input-border-focus);
      color: var(--color-input-border-focus);
    `};

  ${props =>
    props.isFilled &&
    css`
      color: var(--color-input-border-focus);
    `};

  svg {
    margin-right: 1.4rem;
  }

  input {
    width: 100%;
    border: 0;
    color: var(--color-text-secondary);
    background-color: transparent;

    ::placeholder {
      color: var(--color-input-placeholder);
    }
  }
`;
