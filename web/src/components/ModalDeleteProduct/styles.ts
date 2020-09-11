import styled from 'styled-components';

export const CloseModal = styled.div`
  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border: 0;
    background: none;
  }
`;

export const Title = styled.p`
  text-align: center;
  font: 500 2.4rem 'Poppins';
  color: var(--color-text-title);
`;

export const DeleteButton = styled.button`
  padding: 1.6rem 3.2rem;
  margin: 3.2rem auto 0;
  border: 0;
  border-radius: 8px;
  background-color: var(--color-button-delete);

  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    padding: 0 0.8rem;
    color: var(--color-button-text);
  }

  svg {
    margin-left: 0.8rem;
  }
`;
