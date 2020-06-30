import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IContainerProps {
  type?: 'info' | 'success' | 'error';
}

const toastTypes = {
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background-color: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background-color: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<IContainerProps>`
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 8px;
  display: flex;

  ${props => toastTypes[props.type || 'info']}

  svg {
    margin-right: 8px;
  }

  div {
    line-height: 24px;

    strong {
      font-size: 16px;
      font-weight: 700;
    }

    p {
      opacity: 0.8;
    }
  }
`;
