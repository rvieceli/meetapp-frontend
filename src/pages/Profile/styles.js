import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      margin-bottom: 10px;
      border: 0;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);

      color: #fff;
      font-size: 18px;
      padding: 0 20px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      height: 42px;
      align-self: flex-end;
      margin-top: 10px;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;

      color: #fff;
      font-size: 16px;
      padding: 0 30px;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: ${darken(0.1, '#f94d6a')};
      }

      svg {
        color: #fff;
        margin-right: 10px;
      }
    }

    span {
      position: relative;
      background: #fff;

      color: #e5556e;
      margin-bottom: 10px;
      text-align: start;
      padding: 10px 10px;
      border-radius: 4px;

      &::before {
        content: '';
        position: absolute;
        top: -15px;
        left: 20px;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
        border-bottom: 15px solid #fff;
      }
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 30px 0 20px;
  }
`;
