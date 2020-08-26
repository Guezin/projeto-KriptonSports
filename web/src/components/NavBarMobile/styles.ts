import styled, { keyframes, css } from 'styled-components';

interface INavProps {
  showMenu: boolean;
  selected: number;
}

const animationNav = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Nav = styled.div<INavProps>`
  width: 80%;
  margin: 6.4rem auto;
  animation: ${animationNav} 1s ease-in forwards;

  display: none;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      width: 100%;
      padding: 1.6rem 3.2rem;

      li {
        font: 500 1.6rem 'Poppins';
        color: var(--color-text-title);

        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    a:nth-child(${props => props.selected}) {
      border-bottom: 1px solid #fff;
    }
  }

  ${props =>
    props.showMenu &&
    css`
      display: block;
    `}
`;
