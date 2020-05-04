import styled from 'styled-components';
import { lighten } from 'polished';

export const SearchBar = styled.div`
  background: #f4f8f9;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: center;
  align-items: center;
  padding: 32px;
  gap: 16px;
  color: #f98419;
`;

export const Container = styled.div`
  background: #f4f8f9;
  border-radius: 10px;
  border: 2px solid #252594;
  padding: 16px;
  width: 100%;
  color: #666360;
  box-shadow: 6px 4px 11px -6px rgba(0, 41, 145, 1);

  display: flex;
  align-items: center;

  select {
    background: transparent;
    flex: 1;
    border: 0;
    color: #333;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const List = styled.div`
  background: #f4f8f9;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 64px;
  align-self: center;
  padding: 64px;
`;

export const Card = styled.div`
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  box-shadow: 6px 4px 11px -6px rgba(0, 41, 145, 1);

  img {
    width: 100%;
  }

  div {
    padding: 8px;
    h1 {
      font-size: 24px;
      margin-top: 16px;
      text-align: center;
    }
    p {
      color: #777;
      padding: 16px 0;
      border-bottom: 2px solid #ddd;
      text-align: center;
    }

    h4 {
      font-size: 18px;
      padding: 16px;
      span {
        color: #f98419;
      }
    }

    h5 {
      padding: 0 16px;
      font-size: 22px;
      span {
        color: #f98419;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        margin-top: 16px;
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
  }
`;
