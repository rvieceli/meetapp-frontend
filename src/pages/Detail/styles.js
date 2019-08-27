import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 30px;
`;

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  h1 {
    font-size: 32px;
    color: #fff;
    font-weight: normal;
  }

  .button {
    height: 42px;
    align-self: flex-end;
    margin-top: 10px;
    border: 0;
    border-radius: 4px;

    color: #fff;
    font-size: 16px;
    padding: 0 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: #fff;
      margin-right: 10px;
    }
  }

  div {
    display: flex;

    button {
      background: #f94d6a;
      margin-left: 15px;
      height: 60px;
      &:hover {
        background: ${darken(0.1, '#f94d6a')};
      }
    }

    a {
      background: #4dbaf9;
      &:hover {
        background: ${darken(0.1, '#4DBAF9')};
      }
    }
  }
`;

export const Meetup = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 300px;
    border-radius: 4px;
  }

  p {
    color: #fff;
    margin: 25px 0;
  }

  > div {
    display: flex;
    align-items: center;

    > div {
      display: flex;
      align-items: center;
      margin-right: 30px;

      svg {
        height: 16px;
        width: 16px;
        color: rgba(255, 255, 255, 0.6);
        margin-right: 17px;
      }
      span {
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
      }
    }
  }
`;

export const Confirmation = styled.div`
  p {
    margin: 20px 0;
    color: #666;
  }

  > div {
    display: flex;
    margin: 20px 0 0;
  }

  button {
    height: 42px;
    align-self: flex-end;
    border: 0;
    border-radius: 4px;

    color: #fff;
    font-size: 16px;
    padding: 0 30px;
  }

  .cancel {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    &:hover {
      background: ${lighten(0.3, '#4dbaf9')};
    }
  }

  .ok {
    background: #f94d6a;
    margin-left: 15px;
    &:hover {
      background: ${darken(0.1, '#f94d6a')};
    }
  }
`;
