import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import PreprocessGas from "../functions/preprocessGas";

const GasFeesChart = ({ data: chartData }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDashboard = true;

  const preprocessedData = PreprocessGas(chartData);

  //Maximum number of ticks that will appear on the x axis
  const xAxisMaxTicks = 5;


  return (
    <ResponsiveLine
      data={preprocessedData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.lighGray[800],
              fontFamily: ["Montserrat"],
            },
          },
          legend: {
            text: {
              fill: colors.lighGray[800],
              fontFamily: ["Montserrat"],
            },
          },
          ticks: {
            line: {
              stroke: colors.lighGray[800],
              strokeWidth: 1,
              fontFamily: ["Montserrat"],
            },
            text: {
              fill: colors.lighGray[800],
              fontFamily: ["Montserrat"],
            },
          },
        },
        legends: {
          text: {
            fill: colors.lighGray[800],
            fontFamily: ["Montserrat"],
          },
        },
      }}
      margin={{ top: 50, right: 70, bottom: 50, left: 70 }}
      colors={["#002a16", "#40004b", "#88cca3", "#c2a5cf"]}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",// maximum value for the scale
        stacked: false,
        reverse: false,
      }}      
      yFormat=" >-.2f"
      curve="linear"
      //   curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        tickValues: [
          /*This makes sure that the first and last values appear on the xAxis
          and that the maximum number of ticks is xAxisMaxTicks */
          ...preprocessedData[0].data
            .filter(
              (_, index) =>
                index == 0 ||
                index === preprocessedData[0].data.length - 1 ||
                index %
                  Math.ceil(preprocessedData[0].data.length / (xAxisMaxTicks - 1)) ===
                  0
            )
            .map((entry) => entry.x),
        ],
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
      
      enablePoints={false} //no points in the Chart
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

export default GasFeesChart;
