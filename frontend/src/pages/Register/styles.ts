import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Calendar = styled.div`
  width: 100%;
  height: 208px;
  color: #252222;
  padding-right: 155px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    margin: 32px 20px 8px;
  }

  strong {
    font-size: 28px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 540px;

  form {
    margin-left: 128px;
  }

  input {
    color: #252222;

    &::placeholder {
      color: #dedede;
    }
  }

  button {
    width: 150px;
    height: 48px;
    padding: 0 32px;
    margin-top: 64px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    border: 0;
    border-radius: 8px;
    background-color: #10ce5c;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
