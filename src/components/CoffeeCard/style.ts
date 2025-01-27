import styled from "styled-components";

export const MainCard = styled.article`
  width: 275px;
  min-height: 275px;
  max-height: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: relative;
  border-bottom: 1px solid #1f6047;
  padding-bottom: 70px;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  position: relative;
  font-weight: bolder;
  font-size: 1.5em;
  color: black;
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

export const BottomRightText = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  width: fit-content;
  color: #1f6047;
`;

export const IconsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 10px;
`;
export const BottomLeftImage = styled.img`
  width: 20px;
`;
