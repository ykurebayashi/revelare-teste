import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #1f6047;
  background: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    height: 150px;
    width: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
