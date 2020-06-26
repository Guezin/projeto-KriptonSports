import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 208px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const InfoQtdProduct = styled.div`
  width: 245px;
  height: 100%;
  padding: 0 32px 8px;
  color: #252222;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 10px 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  p {
    color: #b1b3b3;
  }

  span {
    font-size: 46px;
    font-weight: 500;
  }
`;
export const Calendar = styled.div`
  color: #252222;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 16px;
  }

  strong {
    font-size: 28px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 540px;

  display: flex;
  justify-content: center;

  table {
    color: #252222;
    width: 612px;
    padding-top: 64px;

    th {
      font-weight: 500;
    }

    th,
    td {
      padding: 8px;
      border-bottom: 1px solid #ddd;
      text-align: center;
      font-size: 18px;
    }
  }
`;
