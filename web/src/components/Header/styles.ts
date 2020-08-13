import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem 1.6rem;
  background-color: var(--color-background-secondary);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 12.4rem;
      height: 5.2rem;
    }
  }

  button {
    margin: 1.6rem 1.6rem 0;
    border: 0;
    background-color: transparent;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 1.6rem;
    font: 500 1.6rem 'Poppins';
    color: var(--color-text-secondary);
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
