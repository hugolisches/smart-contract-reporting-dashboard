import React from 'react';
import { useTheme } from "@mui/material";
import { ResponsiveBoxPlot } from '@nivo/boxplot';
import PreprocessBox from "../functions/preprocessBox"; // Ensure the correct path

const GasBox = ({ data: chartData }) => {
  const theme = useTheme();
  const preprocessedData = PreprocessBox(chartData);

  return (
    <ResponsiveBoxPlot
      data={preprocessedData}
      margin={{ top: 60, right: 140, bottom: 60, left: 68 }}
      minValue="auto"
      maxValue="auto"
      quantiles={[0, 0.1, 0.25, 0.5, 0.75, 0.9, 1]}
      padding={0.2}
      innerPadding={1}
      layout="horizontal"
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.grey[800],
              strokeWidth: 1,
              fontFamily: "Montserrat"
            },
          },
          legend: {
            text: {
              fill: theme.palette.grey[800],
              fontFamily: "Montserrat"
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.grey[800],
              strokeWidth: 1,
              fontFamily: "Montserrat"
            },
            text: {
              fill: theme.palette.grey[800],
              fontFamily: "Montserrat"
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.grey[800],
            fontFamily: "Montserrat"
          },
        },
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Boxplot Gas',
        legendPosition: 'middle',
        legendOffset: 46,
        fontFamily: "Montserrat"
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Gas value',
        legendPosition: 'middle',
        legendOffset: -60,
        fontFamily: "Montserrat"
      }}
      colors={"#44895f"} // Box color
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      medianColor={"#002a16"} // Median line color
      whiskerColor={"#002a16"} // Whisker color
      whiskerEndSize={0.65}
      borderWidth={2}
      labelTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
    />
  );
};

export default GasBox;

