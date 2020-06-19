import styled from 'styled-components';
import { lighten } from 'polished'

export const Container = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #F9F7F4;

  a {
    width: 100%;
    height: 60px;
    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      margin-right: 40%;
    }

    &:hover {
      border-left: 4px solid #F9F7F4;
      background: ${lighten(0.02, '#2D2B2C')}
    }
  }

`;
