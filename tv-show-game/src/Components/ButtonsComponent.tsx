import React from "react";
import Button from "@mui/material/Button";
import { useMissingLetters } from "../Hooks/useMissingLetters";
import { GameStatus } from "../Types";

interface ButtonsComponentProps {
  onCheckTheGusseClick: () => void;
  gameStatus: GameStatus;
  onStartOver: () => void;
}

const onGame = "Check the gusse";
const startOver = "Start over";

export const ButtonsComponent = (props: ButtonsComponentProps) => {
  const { onCheckTheGusseClick, gameStatus, onStartOver } = props;

  const handleOnClick = () => {
    if (gameStatus === GameStatus.ON_GAME) onCheckTheGusseClick();
    else onStartOver();
  };

  return (
    <Button onClick={handleOnClick} variant="outlined">
      {gameStatus === GameStatus.ON_GAME ? onGame : startOver}
    </Button>
  );
};
