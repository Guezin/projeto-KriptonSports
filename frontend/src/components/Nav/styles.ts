import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
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

    &:hover {
      border-left: 4px solid #f9f7f4;
      background: ${lighten(0.02, '#2D2B2C')};
    }
  }
`;
