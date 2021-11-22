import React from "react";
import { WordWithMissingLetters } from "./WordWithMissingLetters";
import {
  CenterStyled,
  GameStatusStyled,
  HintOverViewStyled,
  MainWindowStyled,
} from "../Styles/Styles";
import { ChackTheGuess } from "./ChackTheGuess";
import { HintAndStatistic } from "./HintAndStatistic";
import TextField from "@mui/material/TextField";
import { useMissingLetters } from "../Hooks/useMissingLetters";

export const MainWindow = () => {
  const {
    handleInputChange,
    wordWithMissingLeters,
    handleCheckTheGuessButtonClick,
    gameStatus,
    statusLabel,
    initGameParams,
    numOfHint,
    rightAnswer,
    wrongAnswer,
    lifePoint,
    handleHintIcon,
    hintOverview,
    answer,
    isWrongAnswer,
  } = useMissingLetters();

  const inputLabel = isWrongAnswer ? "error" : "Your guess";

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
      <HintAndStatistic {...iconProps} />
      <CenterStyled>
        <GameStatusStyled>{statusLabel}</GameStatusStyled>
        <WordWithMissingLetters wordWithMissingLeters={wordWithMissingLeters} />
        <TextField
          sx={{ input: { color: "white" } }}
          error={isWrongAnswer}
          color="secondary"
          label={inputLabel}
          focused
          onChange={handleInputChange}
          value={answer}
        />
        <ChackTheGuess {...buttonProps} />
        <HintOverViewStyled>{hintOverview}</HintOverViewStyled>
      </CenterStyled>
    </MainWindowStyled>
  );
};
