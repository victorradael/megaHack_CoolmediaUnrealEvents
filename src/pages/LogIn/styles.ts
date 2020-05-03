import styled from 'styled-components';
import { lighten } from 'polished';

export const TopBar = styled.div`
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

      & + button {
        text-transform: uppercase;
        background: #f98419;

        &:hover {
          background: ${lighten(0.2, '#f98419')};
        }
      }
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f4f8f9;
  align-items: center;
  div {
    padding: 32px;
    h1 {
      font-size: 40px;
      color: #444;
      margin-bottom: 16px;
    }
    p {
      color: #333;
      margin-bottom: 16px;
    }
    button {
      align-self: center;
      padding: 16px;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      background: #0089ed;
      box-shadow: 2px 2px 2px -4px rgba(60, 60, 60, 0.5);
      font-size: 14px;
      text-transform: uppercase;
      transition: 0.2s;

      &:hover {
        background: ${lighten(0.2, '#0089ED')};
        color: #f98419;
      }
    }
    & + div {
      text-align: center;
      padding: 0;

      img {
        height: 500px;
      }
    }
  }
`;
export const ContentLeft = styled.div`
  background: #f4f8f9;

  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: 0.2s;

  div {
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    h2 {
      color: #333;
      margin-bottom: 8px;
    }
    h3 {
      margin-bottom: 8px;
    }
    p {
      color: #777;
      font-size: 14px;
    }
    & + div {
      padding: 0;
      img {
        height: 300px;
        border-radius: 300px 0 0 300px;
      }
    }
  }

  &:hover {
    border-radius: 300px 0 0 300px;
    transform: translate(16px, 0);
  }
`;
export const ContentRight = styled.div`
  background: #f4f8f9;

  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: 0.2s;

  div {
    padding: 0;
    img {
      height: 300px;
      border-radius: 0 300px 300px 0;
    }

    & + div {
      padding: 32px;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: center;

      h2 {
        color: #333;
        margin-bottom: 8px;
      }
      h3 {
        margin-bottom: 8px;
      }
      p {
        color: #777;
        font-size: 14px;
      }
    }
  }

  &:hover {
    border-radius: 0 300px 300px 0;
    transform: translate(-16px, 0);
  }
`;

export const CreateEvent = styled.div`
  background: #f4f8f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  h1 {
    margin-bottom: 32px;
  }
  button {
    align-self: center;
    padding: 16px;
    border-radius: 8px;
    width: 160px;
    color: white;
    font-weight: bold;
    background: #0089ed;
    box-shadow: 2px 2px 2px -4px rgba(60, 60, 60, 0.5);
    font-size: 14px;
    text-transform: uppercase;
    transition: 0.2s;

    &:hover {
      background: ${lighten(0.2, '#0089ED')};
      color: #f98419;
    }
  }
`;

export const Footer = styled.div`
  background: #252594;
  height: 200px;
`;
