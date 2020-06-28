import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface IContainerProps {
  selected: boolean;
}

export const Container = styled.div<IContainerProps>`
  font-size: 18px;
  font-weight: 500;
  color: #f9f7f4;

  a {
    width: 100%;
    height: 60px;
    padding: 8px 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props =>
      props.selected &&
      css`
        border-left: 4px solid #f9f7f4;
      `}

    &:hover {
      border-left: 4px solid #f9f7f4;
      background: ${lighten(0.02, '#2D2B2C')};
    }
  }
`;
