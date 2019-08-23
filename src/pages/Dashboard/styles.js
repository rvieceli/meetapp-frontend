import styled from 'styled-components';
import { darken } from 'polished';

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

  a {
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
`;

export const Meetup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  margin-bottom: 10px;
  padding-left: 30px;
  background: rgba(0, 0, 0, 0.1);

  strong {
    font-weight: normal;
    font-size: 18px;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }

    a {
      display: flex;
      align-items: center;
      height: 60px;
      padding: 0 30px;

      svg {
        color: #fff;
        height: 16px;
        width: 16px;
      }

      &:hover {
        svg {
          color: #f94d6a;
        }
      }
    }
  }
`;
