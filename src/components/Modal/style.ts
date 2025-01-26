import styled from "styled-components";

export const StyledDialog = styled.dialog`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 80%;
max-height: 80%;
padding: 20px;
background-color: white;
border-radius: 8px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
z-index: 1000;
`;

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
