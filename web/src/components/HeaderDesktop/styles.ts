import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem;
  background-color: var(--color-background-secondary);

  display: none;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img {
      width: 14rem;
      height: 6rem;
    }
  }

  @media (min-width: 1020px) {
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: 6.4rem;
    border: 0;
    background: none;
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
