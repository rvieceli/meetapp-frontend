import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(0deg, #402845, #22202c);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 312px;

  text-align: center;

  form,
  div {
    display: flex;
    flex-direction: column;
    margin-top: 45px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 15px 20px;
      color: #fff;
      margin: 0px 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      position: relative;
      background: #fff;

      color: #e5556e;
      margin-bottom: 10px;
      text-align: start;
      padding: 5px 10px;
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

    button {
      margin: 5px 0 10px;
      height: 50px;
      border: 0;
      border-radius: 4px;
      background: #e5556e;
      color: #fff;
      font-size: 18px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#e5556e')};
      }

      svg {
        animation: ${rotate} 2s linear infinite;
      }
    }

    a {
      margin-top: 10px;
      font-size: 16px;
      color: #fff;
      opacity: 0.6;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }

    p {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 100px;
      color: #fff;
      margin: 0px 0 10px;
      font-size: 18px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
