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

export const ContainerButtons = styled.div`
  button {
    padding: 0.4rem 0.8rem;
    border: 0;
    border-radius: 0.6rem;

    svg {
      margin: 0.4rem auto 0;
    }

    & + button {
      margin-left: 0.8rem;
    }
  }

  button:nth-child(1) {
    background-color: var(--color-button-edit);
  }

  button:nth-child(2) {
    background-color: var(--color-button-delete);
  }
`;

export const Content = styled.div`
  margin-top: 1.6rem;

  display: flex;
  justify-content: space-between;

  p {
    font: 500 1.6rem 'Poppins';
    color: var(--color-text-primary);

    display: flex;
    align-items: center;

    span {
      margin: 0 0.4rem;
    }

    svg {
      margin-right: 0.4rem;
    }
  }
`;
