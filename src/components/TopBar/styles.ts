import styled from 'styled-components';
import { lighten } from 'polished';

export const Bar = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  background: #f4f8f9;
  padding: 16px;
  justify-content: space-between;

  img {
    width: 320px;
    text-align: left;
    margin-left: 50px;
    font-size: 24px;
    font-weight: bold;
    color: #252594;
  }

  div {
    align-items: center;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
    align-self: left;
    a {
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      color: #333;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#333')};
      }
    }

    button {
      padding: 8px;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      background: #252594;
      box-shadow: 2px 2px 2px -4px rgba(60, 60, 60, 0.5);
      font-size: 12px;
      transition: background-color 0.2s;
      text-transform: uppercase;

      &:hover {
        background: ${lighten(0.2, '#252594')};
      }

      & + a {
        background: #f98419;
        padding: 8px;

        border-radius: 8px;
        color: white;
        font-weight: bold;

        box-shadow: 2px 2px 2px -4px rgba(60, 60, 60, 0.5);
        font-size: 12px;
        transition: background-color 0.2s;
        text-transform: uppercase;

        &:hover {
          background: ${lighten(0.2, '#f98419')};
        }
      }
    }
  }
`;
