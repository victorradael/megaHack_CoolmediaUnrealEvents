import styled from 'styled-components';
import { lighten } from 'polished';

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  background: #f4f8f9;
  align-items: center;
  justify-content: center;

  div {
    max-height: 240px;
    overflow: hidden;
    img {
      width: 1440px;
      align-self: center;
    }
  }

  h1 {
    font-size: 40px;
    color: #444;
    margin-bottom: 16px;
    padding: 16px;
    text-align: center;
    color: rgba(0, 41, 145, 1);
  }
`;

export const Counter = styled.div`
  background: #f4f8f9;
  color: rgba(0, 41, 145, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 4px solid rgba(0, 41, 145, 1);
  border-bottom: 4px solid rgba(0, 41, 145, 1);

  div {
    text-align: center;
    margin: 0 8px;
    padding: 16px;

    h4 {
      font-size: 32px;
      text-align: center;
    }
    p {
      color: #777;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: #f4f8f9;
  align-items: center;
  padding: 32px;

  div {
    padding: 32px;
    display: flex;
    flex-direction: column;
    background: #eee;
    margin: 32px 0 0 32px;
    box-shadow: 6px 4px 11px -6px rgba(0, 41, 145, 1);

    a {
      text-decoration: none;
      color: #333;
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 54px;
      font-weight: bold;
      &:hover {
        color: ${lighten(0.2, '#f98419')};
        font-size: 20px;
      }
    }

    & + div {
      text-align: center;
      padding: 0;
      align-items: center;
      justify-content: center;
      background: none;
      margin: 0;
      box-shadow: none;
    }
  }
`;
