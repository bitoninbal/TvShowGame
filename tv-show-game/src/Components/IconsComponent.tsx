import React from "react";
import IconButton from "@mui/material/IconButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import { IconsStyled, IconsWrapperStyled, LifeStatusStyled } from "../Styles";
import { Tooltip } from "@mui/material";
import { StatisticPopover } from "./StatisticPopover";

interface IconsComponentProps {
  numOfHint: number;
  rightAnswer: number;
  wrongAnswer: number;
  lifePoint: number;
  handleHintIcon: () => void;
}
export const IconsComponent = (props: IconsComponentProps) => {
  const {
    numOfHint,
    rightAnswer,
    wrongAnswer,
    lifePoint,
    handleHintIcon,
  } = props;

  const statisticPopoverProps = {
    numOfHint,
    rightAnswer,
    wrongAnswer,
  };
  return (
    <IconsWrapperStyled>
      <IconsStyled>
        <Tooltip title="Hint">
          <IconButton onClick={handleHintIcon} color="secondary">
            <LightbulbIcon />
          </IconButton>
        </Tooltip>
        <StatisticPopover {...statisticPopoverProps} />
      </IconsStyled>
      <LifeStatusStyled>Life: {lifePoint}</LifeStatusStyled>
    </IconsWrapperStyled>
  );
};
