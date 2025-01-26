import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em 3em;
  height: 78dvh;
  width: 100%;
  padding: 10px 0;
  background-color: #e7e9ed;
  overflow-y: scroll;
`;

export const PaginationButtons = styled.div`
  width: 100%;
  border-top: 1px solid #1f6047;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  height: 7vh;
  padding: 0.5em;
  gap: 5px;
`
export const PaginationButton = styled.button`
  background: none;
  border: 1px solid #1f6047;
  border-radius:4px;
  width: 100px;
  height: 100%;
  cursor: pointer;
`