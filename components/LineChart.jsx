import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockdata";
import { tokens } from "../theme";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.lighGray[800],
              fontFamily: ["Montserrat"]
            },
          },
          legend: {
            text: {
              fill: colors.lighGray[800],
              fontFamily: ["Montserrat"]
            },
          },
          ticks: {
            line: {
              stroke: colors.lighGray[800],
              strokeWidth: 1,
              fontFamily: ["Montserrat"]
            },
            text: {
              fill: colors.lighGray[800],
              fontFamily: ["Montserrat"]
            },
          },
        },
        legends: {
          text: {
            fill: colors.lighGray[800],
            fontFamily: ["Montserrat"]
          },
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      colors={["#002a16",
      
      "#40004b",
      
      "#88cca3",
      
      "#c2a5cf",]}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false, //If true NIVO will sum the values on the y axis
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickValues: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enablePoints={false}//no points in the Chart
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;