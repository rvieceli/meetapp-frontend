import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 1000px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    display: flex;
    flex-direction: column;
    margin-right: 30px;

    strong {
      font-size: 14px;
      color: #fff;
    }

    a {
      font-size: 14px;
      color: #fff;
      opacity: 0.6;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  button {
    border: 0;
    height: 42px;
    width: 71px;
    border-radius: 4px;
    background: #d44059;

    color: #fff;
    font-size: 16px;

    &:hover {
      background: ${darken(0.1, '#d44059')};
    }
  }
`;
