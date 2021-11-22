import React from "react";
import Button from "@mui/material/Button";
import { GameStatus } from "../Types/Types";

interface ChackTheGuessProps {
  onCheckTheGuessClick: () => void;
  gameStatus: GameStatus;
  onStartOver: () => void;
}

const onGame = "Check the Guess";
const startOver = "Start over";

export const ChackTheGuess = (props: ChackTheGuessProps) => {
  const { onCheckTheGuessClick, gameStatus, onStartOver } = props;

  const buttonLable = gameStatus === GameStatus.ON_GAME ? onGame : startOver;
  const handleOnClick = () => {
    if (gameStatus === GameStatus.ON_GAME) onCheckTheGuessClick();
    else onStartOver();
  };

  return (
    <Button onClick={handleOnClick} variant="contained" size="large">
      {buttonLable}
    </Button>
  );
};
