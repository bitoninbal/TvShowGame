import React from "react";
import Button from "@mui/material/Button";
import { GameStatus } from "../Types";

interface ButtonsComponentProps {
  onCheckTheGuessClick: () => void;
  gameStatus: GameStatus;
  onStartOver: () => void;
}

const onGame = "Check the Guess";
const startOver = "Start over";

export const ButtonsComponent = (props: ButtonsComponentProps) => {
  const { onCheckTheGuessClick, gameStatus, onStartOver } = props;

  const handleOnClick = () => {
    if (gameStatus === GameStatus.ON_GAME) onCheckTheGuessClick();
    else onStartOver();
  };

  return (
    <Button onClick={handleOnClick} variant="contained" size="large">
      {gameStatus === GameStatus.ON_GAME ? onGame : startOver}
    </Button>
  );
};
