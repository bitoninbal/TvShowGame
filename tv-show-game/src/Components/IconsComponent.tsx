import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { IconsStyled } from "../Styles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export const IconsComponent = () => {
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
    setAnchorEl(null);
  };

  return (
    <IconsStyled>
      <IconButton color="secondary" aria-label="delete">
        <LightbulbIcon />
      </IconButton>
      <IconButton
        onClick={handleEqualizerIcon}
        color="primary"
        aria-label="delete"
      >
        <EqualizerIcon />
      </IconButton>
      <Popover
        id={"1"}
        open={isEqualizerPopovereOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </IconsStyled>
  );
};
