import styled from "styled-components";

export const RoundInfo = () => {
  return <Button></Button>;
};

export const Button = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #1f6047;
  background: none;
  transition: 0.2s ease-in-out;

  &:hover {
    height: 150px;
    width: 150px;
  }
`;
