import styled from "styled-components";

export const StyledDialog = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainContent = styled.div<{$width?: string; $height?: string;}>`
    width: ${({ $width }) => $width || "100%"};
    height: ${({ $height }) => $height || "100%"};
    background-color: rgba(255, 255, 255, 0.9);
    position: relative;
    border-radius: 5px;
    padding: 2em;
`  

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #333;
`;
