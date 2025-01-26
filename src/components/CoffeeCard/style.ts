import styled from "styled-components";

export const MainCard = styled.div`
  width: 350px;
  height: 275px;
  border: 1px solid green;
  border-radius: 4px;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  background-color: white;
  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
`;

export const Title = styled.h2`
  position: relative;
  font-weight: bolder;
  font-size: 1.5em;
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    height: 10px;
    width: 45%;
    background-color: #1f6047;
  }
`;

export const Category = styled.h3`
  color: rgb(51, 51, 51);
  font-size: 1em;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const BottomRightText = styled.p`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: fit-content;
`;

export const BottomLeftImage = styled.img`
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 20px;
`;