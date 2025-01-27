import styled, { css } from "styled-components";

type MainGridType = {
  $division: "half" | "third";
  $backgroundColor?: string;
  $columns?: number;
  $isMobile?: boolean;
};

export const MainGrid = styled.section<MainGridType>`
  ${({ $isMobile, $division, $columns }) =>
    !$isMobile &&
    css`
      display: grid;

      grid-template-rows: repeat(
        ${$division === "half" ? "2, 50dvh" : "3, 33.33dvh"}
      );

      grid-template-columns: repeat(
        ${$columns ? `${$columns}, ${100 / $columns}%` : "2, 50%"}
      );
    `}

  ${({ $isMobile }) =>
    $isMobile &&
    css`
      display: flex;
      flex-direction: column;
    `}

  background-color: ${(props) => props.$backgroundColor || "transparent"};
`;
