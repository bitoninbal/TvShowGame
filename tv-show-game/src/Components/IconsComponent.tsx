import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import {
  IconsStyled,
  IconsWrapperStyled,
  LifeStatusStyled,
  PopOverContentStyled,
  PopOverContentWrapperStyled,
} from "../Styles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";

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

  const [
    isEqualizerPopovereOpen,
    setIsEqualizerPopovereOpen,
  ] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleEqualizerIcon = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsEqualizerPopovereOpen(!isEqualizerPopovereOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsEqualizerPopovereOpen(!isEqualizerPopovereOpen);
    setAnchorEl(null);
  };

  const popoverContent = () => {
    return (
      <PopOverContentWrapperStyled>
        <PopOverContentStyled>Right Answer: {rightAnswer}</PopOverContentStyled>
        <PopOverContentStyled>Wrong Answer: {wrongAnswer}</PopOverContentStyled>
        <PopOverContentStyled>Number Of Hint: {numOfHint}</PopOverContentStyled>
      </PopOverContentWrapperStyled>
    );
  };

  const renderPopover = () => {
    return (
      <Popover
        open={isEqualizerPopovereOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography
          component={popoverContent}
          style={{ background: "beige" }}
          sx={{ p: 2 }}
        ></Typography>
      </Popover>
    );
  };

  return (
    <IconsWrapperStyled>
      <IconsStyled>
        <Tooltip title="Hint">
          <IconButton onClick={handleHintIcon} color="secondary">
            <LightbulbIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Statistics">
          <IconButton onClick={handleEqualizerIcon} color="primary">
            <EqualizerIcon />
          </IconButton>
        </Tooltip>
        {renderPopover()}
      </IconsStyled>
      <LifeStatusStyled>Life: {lifePoint}</LifeStatusStyled>
    </IconsWrapperStyled>
  );
};
