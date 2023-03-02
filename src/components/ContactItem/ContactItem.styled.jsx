import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  color: inherit;
`;
export const Name = styled.span`
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
`;

export const Number = styled.span`
  color: #2a2a2a;
  margin-left: auto;
`;

export const Button = styled.button`
  color: #c920fa;
  border-color: #c920fa;
  background-color: #f0e2f4;

  margin-left: 30px;
  :hover {
    color: #ffffff;
    cursor: pointer;
    background-color: #c6edf2;
    border: none;
    border-radius: 2px;
  }
`;
