import styled from 'styled-components';
import { lighten } from 'polished';

export const Header = styled.div`
  background: #f4f8f9;
  border-bottom: 3px solid #ddd;
  border-top: 3px solid #ddd;
  display: grid;
  grid-template-columns: 1fr 6fr;
  padding: 16px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      height: 100px;
      width: 100px;
      color: #ddd;
      border: 3px solid #ddd;
      border-radius: 50%;
      padding: 8px;
    }
    & + div {
      justify-content: left;
      align-items: center;
      display: block;

      h1 {
        font-size: 24px;
      }

      h3 {
        font-size: 20px;
        font-weight: 400;
        color: #777;
      }
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: #f4f8f9;
  align-items: center;

  div {
    padding: 32px;
    display: flex;
    flex-direction: column;
    border-right: 3px solid #ddd;
    a {
      text-decoration: none;
      color: #333;
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 54px;
      font-weight: bold;
      &:hover {
        color: ${lighten(0.2, '#252594')};
        font-size: 20px;
      }
    }

    & + div {
      text-align: center;
      padding: 0;
      align-items: center;
      justify-content: center;
    }
  }
`;
