import styled from 'styled-components';

export const UserText = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin: 0px 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(84, 13, 13);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;

  &:hover,
  &:focus {
    background-color: #fff;
    color: rgb(84, 13, 13);
    cursor: pointer;
  }
`;
