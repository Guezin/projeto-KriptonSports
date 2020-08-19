import styled from 'styled-components';

export const Container = styled.div`
  width: 25.6rem;
  height: 100%;
  background-color: var(--color-background-secondary);

  display: none;

  nav {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        width: 100%;
        padding: 1.6rem 3.2rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
          font: 500 1.6rem 'Poppins';
          color: var(--color-text-title);
        }
      }
    }
  }

  @media (min-width: 1020px) {
    display: block;
  }
`;
