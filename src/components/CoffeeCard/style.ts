import styled from "styled-components";

export const MainCard = styled.article`
  width: 350px;
  min-height: 275px;
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
    color: #1f6047;
`;

export const IconsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  gap: 10px;
`
export const BottomLeftImage = styled.img`
  width: 20px;
`;

export const CheckRecipeButton = styled.button`
  width: 130px;
  height: 45px;
  background: none;
  border: 1px solid #1f6047;
  color: #1f6047;
  border-radius: 50px;
  cursor: pointer;
`