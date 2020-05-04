import styled from 'styled-components';

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

  & + div {
    margin-top: 8px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
