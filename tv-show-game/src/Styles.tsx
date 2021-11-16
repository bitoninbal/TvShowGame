import styled from "styled-components";

export const MainWindowStyled = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  width: 770px;
  height: 500px;
  align-items: center;
  border: 2px solid rebeccapurple;
  background: #303030;
`;

export const MainWindowWrapperStyled = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameStatusStyled = styled.h1`
  color: white;
`;

export const IconsStyled = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const CenterStyled = styled.div`
  height: 137px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 307px;
`;

export const UlStyled = styled.ul`
  list-style-type: none;
  display: flex;
  padding-inline-start: 13px;
`;

export const LiStyled = styled.li`
  border-bottom: 2px solid #9c27b0;
  margin-right: 15px;
  background: #303030;
  color: white;
  width: 26px;
  display: flex;
  justify-content: center;
  font-weight: 400;
  font-family: sans-serif;
  font-size: 26px;
`;