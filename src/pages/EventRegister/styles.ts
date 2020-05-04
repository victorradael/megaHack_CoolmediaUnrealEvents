import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #f4f8f9;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 64px;

  form {
    border: 2px solid #f98419;
    padding: 56px;
    border-radius: 3% 0 0 3%;
    box-shadow: 6px 4px 11px -6px rgba(0, 41, 145, 1);
    height: 100%;
    div {
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 16px;
      font-weight: bold;
      color: #f98419;
      padding: 16px 8px;
    }

    input {
      border: 1px solid #f98419;
      background: #f4f8f9;
      padding: 8px;
      border-radius: 3px;
      width: 70%;
    }

    textarea {
      border: 1px solid #f98419;
      background: #f4f8f9;
      padding: 8px;
      border-radius: 3px;
      width: 70%;
      height: 200px;
    }

    select {
      border: 1px solid #f98419;
      background: #f4f8f9;
      padding: 8px;
      border-radius: 3px;
      width: 70%;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        margin-top: 48px;
        background: rgba(0, 41, 145, 1);
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
          background: ${lighten(0.2, 'rgba(0, 41, 145, 1)')};
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
  }

  section {
    img {
      height: 100%;
      border-radius: 0 3% 3% 0;
    }
  }
`;
