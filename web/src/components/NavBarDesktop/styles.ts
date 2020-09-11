import styled from 'styled-components';
import { lighten } from 'polished';

interface IContainerProps {
  selected: number;
}

export const Container = styled.div<IContainerProps>`
  width: 25.6rem;
  height: 100%;
  background-color: var(--color-background-secondary);

  display: none;

  nav {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        width: 100%;
        padding: 1.6rem 3.2rem;
        transition: background-color ease-in-out 0.2s;

        li {
          font: 500 1.6rem 'Poppins';
          color: var(--color-text-title);

          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }

      a:nth-child(${props => props.selected}) {
        border-left: 2px solid #fff;
      }

      a:hover {
        border-left: 2px solid #fff;
        background-color: ${lighten(0.03, '#202020')};
      }
    }
  }

  @media (min-width: 1020px) {
    display: block;
  }
`;
