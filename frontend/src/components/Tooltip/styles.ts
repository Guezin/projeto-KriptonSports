import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    padding: 8px;
    position: absolute;
    border-radius: 4px;
    background: #c53030;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    bottom: calc(100% + 12px);
    left: 50%;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 46%;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
