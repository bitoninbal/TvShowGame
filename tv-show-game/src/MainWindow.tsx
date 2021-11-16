import React from "react";
import { WordWithMissingLetters } from "./Components/WordWithMissingLetters";
import { CenterStyled, GameStatusStyled, MainWindowStyled } from "./Styles";
import { ButtonsComponent } from "./Components/ButtonsComponent";
import { IconsComponent } from "./Components/IconsComponent";
import TextField from "@mui/material/TextField";
import { useMissingLetters } from "./Hooks/useMissingLetters";
import "./App.css";

export const MainWindow = () => {
  const {
    handleInputChange,
    wordWithMissingLeters,
    handleCheckTheGusseButtonClick,
    gameStatus,
    status,
    initGameParams,
  } = useMissingLetters();

  const buttonProps = {
    onCheckTheGusseClick: handleCheckTheGusseButtonClick,
    gameStatus: gameStatus,
    onStartOver: initGameParams,
  };
  return (
    <MainWindowStyled>
      <IconsComponent />
      <CenterStyled>
        <GameStatusStyled>{status}</GameStatusStyled>
        <WordWithMissingLetters wordWithMissingLeters={wordWithMissingLeters} />
        <TextField
          style={{ color: "white" }}
          onChange={handleInputChange}
          color="secondary"
          focused
        />
        <ButtonsComponent {...buttonProps} />
      </CenterStyled>
    </MainWindowStyled>
  );
};
