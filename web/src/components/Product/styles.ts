import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.6rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  background-color: var(--color-content-primary);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font: 600 2rem 'Poppins';
      color: var(--color-text-primary);

      span {
        margin-left: 0.4rem;
      }
    }

    > span {
      font: 600 1.8rem 'Poppins';
      color: var(--color-text-primary);

      display: flex;
      align-items: center;

      svg {
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Content = styled.div`
  margin-top: 1.6rem;

  display: flex;
  justify-content: space-between;

  p {
    font: 500 1.6rem 'Poppins';
    color: var(--color-text-primary);

    span {
      margin: 0 0.4rem;
    }
  }
`;
