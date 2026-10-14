import {
  Backdrop,
  Box,
  ClickAwayListener,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import { useState } from "react";
import InfoPopover from './InfoPopover';

const ChartBox = ({ title, icon, infoText, chart }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const handleClickAway = () => {
    setShowInfo(false);
  };

  return (
    <Box position="relative" width="100%" p="2px">
      <Box display="flex" justifyContent="space-between">
        <Box zIndex={1} p={2}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color={colors.darkAccent[500]}
          >
            {title}
          </Typography>
        </Box>
        <Box position="absolute" top={0} right={0} zIndex={1} p={2}>
          {icon}
        </Box>
      </Box>
      <Box
        position="relative"
        display="flex"
        justifyContent="flex-end"
        top={-35}
        left={-10}
        right={0}
        bottom={0}
        height="275px"
      >
        {chart}
      </Box>
      {/* Container for positioning */}
      <Box
        position="absolute"
        top={260}
        right={5}
        zIndex={1}
        textAlign="right"
        p={0}  // Adjust padding as needed
      >
        
        <InfoPopover
          
          popoverText={infoText}
        />
      </Box>
      
    </Box>
  );
};

export default ChartBox;
