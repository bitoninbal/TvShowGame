import { IconButton, Popover, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { PopOverContentStyled, PopOverContentWrapperStyled } from "../Styles";
import EqualizerIcon from "@mui/icons-material/Equalizer";

interface StatisticPopoverProps {
  numOfHint: number;
  rightAnswer: number;
  wrongAnswer: number;
}

export const StatisticPopover = (props: StatisticPopoverProps) => {
  const { numOfHint, rightAnswer, wrongAnswer } = props;
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

  return (
    <>
      <Tooltip title="Statistics">
        <IconButton onClick={handleEqualizerIcon} color="primary">
          <EqualizerIcon />
        </IconButton>
      </Tooltip>

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
    </>
  );
};
