import React from "react";
import { WordWithMissingLetters } from "./Components/WordWithMissingLetters";
import {
  CenterStyled,
  GameStatusStyled,
  HintOverViewStyled,
  MainWindowStyled,
} from "./Styles";
import { ButtonsComponent } from "./Components/ButtonsComponent";
import { IconsComponent } from "./Components/IconsComponent";
import TextField from "@mui/material/TextField";
import { useMissingLetters } from "./Hooks/useMissingLetters";

export const MainWindow = () => {
  const {
    handleInputChange,
    wordWithMissingLeters,
    handleCheckTheGuessButtonClick,
    gameStatus,
    status,
    initGameParams,
    numOfHint,
    rightAnswer,
    wrongAnswer,
    lifePoint,
    handleHintIcon,
    hintOverview,
    answer,
  } = useMissingLetters();

  const buttonProps = {
    onCheckTheGuessClick: handleCheckTheGuessButtonClick,
    gameStatus: gameStatus,
    onStartOver: initGameParams,
  };

  const iconProps = {
    numOfHint,
    rightAnswer,
    wrongAnswer,
    lifePoint,
    handleHintIcon,
  };

  return (
    <MainWindowStyled>
      <IconsComponent {...iconProps} />
      <CenterStyled>
        <GameStatusStyled>{status}</GameStatusStyled>
        <WordWithMissingLetters wordWithMissingLeters={wordWithMissingLeters} />
        <TextField
          sx={{ input: { color: "white" } }}
          style={{ color: "white" }}
          onChange={handleInputChange}
          color="secondary"
          value={answer}
          focused
          label="Your guess"
        />
        <ButtonsComponent {...buttonProps} />
        <HintOverViewStyled>{hintOverview}</HintOverViewStyled>
      </CenterStyled>
    </MainWindowStyled>
  );
};
