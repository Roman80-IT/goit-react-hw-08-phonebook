import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 540px;
  height: 100%;
  margin: 0 auto;
  margin-top: 70px;

  gap: 10px;

  padding: 25px 15px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px, rgba(0, 0, 0, 0.2) 0px 6px 12px;
`;

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 380px;
  gap: 10px;
`;

export const FormSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const FormInput = styled.input`
  width: 280px;
  height: 32px;

  font-size: 16px;
  background: transparent;

  box-sizing: border-box;
  border: 1px solid black;
  transition: border 0.3s ease;
  border-radius: 5px;

  &:hover,
  &:focus {
    border: 2px solid black;
    outline: none;
    background: transparent;
  }
`;

export const FormBtn = styled.button`
  width: 120px;
  height: 32px;
  margin-top: 20px;

  font-size: 16px;

  background-color: transparent;
  border: 1px solid black;
  border-radius: 7px;

  cursor: pointer;

  &:hover,
  &:focus {
    border: 1px solid black;
    background-color: black;
    color: #fff;
  }
`;
