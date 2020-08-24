import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

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

export const Form = styled(Unform)`
  div + div {
    margin-top: 0.8rem;
  }

  button {
    margin-top: 0.8rem;
    background-color: var(--color-button-secondary);
  }
`;
