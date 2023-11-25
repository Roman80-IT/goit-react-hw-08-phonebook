import styled from 'styled-components';

export const ListContainer = styled.div`
  margin: 0 40px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 35px;
  padding: 6px;

  border: 1px solid black;
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;
`;

export const NumberFont = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const DeleteBtn = styled.button`
  display: block;

  cursor: pointer;

  background-color: transparent;
  color: black;
  border: none;
  transition: all 350ms ease-out;

  &:hover,
  &:focus {
    color: #cb4335;
  }
`;
