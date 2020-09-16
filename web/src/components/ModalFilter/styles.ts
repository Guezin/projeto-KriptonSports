import styled from 'styled-components';

interface ICheckBoxProps {
  selected: boolean;
}

export const Container = styled.div`
  > div {
    display: flex;
    align-items: center;
  }
`;

export const CloseModal = styled.div`
  margin: 1.6rem 0 3.2rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > button {
    border: 0;
    background: none;
  }
`;

export const Separator = styled.div`
  height: 4rem;
  margin: 0 3.2rem;
  border: 1px solid #fff;
`;

export const Content = styled.main`
  margin-top: 3.2em;

  > div {
    display: flex;
    align-items: center;

    p {
      font: 500 1.6rem 'Poppins';
      color: var(--color-text-secondary);
    }

    & + div {
      margin-top: 0.8rem;
    }
  }

  button {
    width: 100%;
    margin-top: 6.4rem;
    padding: 1.6rem;
    border: 0;
    border-radius: 0.8rem;
    color: var(--color-button-text);
    background-color: var(--color-button-select);
  }
`;

export const CheckBox = styled.div<ICheckBoxProps>`
  width: 2rem;
  height: 2rem;
  margin-right: 0.8rem;
  border: 2px solid
    ${({ selected }) =>
      selected
        ? 'var(--color-filter-in-checkbox)'
        : 'var(--color-filter-out-checkbox)'};
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
