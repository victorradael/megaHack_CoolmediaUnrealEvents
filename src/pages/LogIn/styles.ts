import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #f4f8f9;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-bottom: 64px;

  h1 {
    text-align: center;
    margin-bottom: 32px;
    color: #f98419;
    text-decoration: underline;
  }

  form {
    width: 50%;
    border: 2px solid #252594;
    padding: 56px;
    margin-top: 80px;
    border-radius: 3%;
    box-shadow: 6px 4px 11px -6px rgba(0, 41, 145, 1);

    div {
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 16px;
      font-weight: bold;
      color: #f98419;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        margin-top: 48px;
        background: #f98419;
        color: white;
        text-decoration: none;
        padding: 16px 32px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        box-shadow: 6px 4px 11px -6px rgba(0, 41, 145, 1);
        max-width: 60%;
        transition: 0.2s;

        &:hover {
          background: ${lighten(0.2, '#f98419')};
          color: #333;
        }
        svg {
          margin-right: 16px;
        }
      }
    }

    h6 {
      font-size: 13px;
      text-align: center;
      color: #999;
      strong {
        color: #333;
      }
    }

    h5 {
      font-size: 13px;
      text-align: center;
      color: #999;
      margin-top: 48px;
      a {
        color: #333;
        text-decoration: none;
        margin-left: 8px;
        color: #f98419;
      }
    }
  }
`;
