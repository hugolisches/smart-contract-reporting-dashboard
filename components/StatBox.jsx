import React, { useState } from 'react';
import { Box, useTheme, Typography, Avatar, } from "@mui/material";
import { tokens } from "../theme";
import InfoPopover from './InfoPopover';

const StatBox = ({ title, subtitle, icon, infoText }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 

  return (
    <Box position="relative" width="100%" p="2px">
      {/* Container for positioning */}
      <Box
        position="absolute"
        top={60}
        right={0}
        zIndex={1}
        textAlign="right"
        p={0}  
      >
        
        <InfoPopover
          
          popoverText={infoText}
  />
      </Box>

      <Box
        display="flex"
        justifyContent="space-evenly"
        position="relative"
      >
        {icon ? (
          <Box
            display={['none', 'none', 'block', 'block']} // Hide on smaller screens
          >
            <Avatar sx={{ bgcolor: colors.lightGreen[500],fontSize: "1vw" }}>{icon}</Avatar>
          </Box>
        ) : undefined}

        <Box
          display="flex"
          flexDirection="column"
          style={{ alignItems: icon ? "flex-end" : "left" }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: colors.lighGray[500],
              maxWidth: "100%",
              fontSize: 'max(0.85vw, 8px)',// Set  minimum font size
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.mainBrandcol[700],
              maxWidth: "100%",
              fontSize: 'max(1.1vw, 10px)',// Set  minimum font size
             }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
  
    </Box>
  );
};

export default StatBox;
