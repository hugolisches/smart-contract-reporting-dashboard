import React from 'react';
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import PreprocessBarTran from "../functions/preprocessBarTran"; // Adjust this path as necessary

const BarTran = ({ data: chartData }) => {
  const theme = useTheme();
  const preprocessedData = PreprocessBarTran(chartData);

  return (
    <ResponsiveBar
      data={preprocessedData}
      keys={["count"]} // Indicating the data key for bar heights
      indexBy="id" // Using the formatted time intervals as the index
      margin={{ top: 50, right: 130, bottom: 60, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={"#22673d"}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 1,
        tickPadding: 1,
        tickRotation: 0,
        legendOffset: 40,
        legend: 'Interactions',
        legendPosition: 'middle'
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Count', // Updated legend text
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default BarTran;
