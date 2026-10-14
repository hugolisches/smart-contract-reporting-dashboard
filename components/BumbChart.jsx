import { ResponsiveBump } from "@nivo/bump";
import { mockBumbData as data} from "../data/bumbMockdata";

const BumbChart = () => {
  return (
    <ResponsiveBump
      data={data}
      colors={{ scheme: "purpleRed_green" }}
      lineWidth={3}
      activeLineWidth={6}
      inactiveLineWidth={3}
      inactiveOpacity={0.15}
      pointSize={10}
      activePointSize={16}
      inactivePointSize={0}
      pointColor={{ theme: "background" }}
      pointBorderWidth={3}
      activePointBorderWidth={3}
      pointBorderColor={{ from: "serie.color" }}
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -36,
        legendFontFamily: ["Montserrat"]
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
        legendFontFamily: ["Montserrat"]
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "ranking",
        legendPosition: "middle",
        legendOffset: -40,
        legendColor: "#414653",//lightGray 800
        //legendFontFamily: 'Montserrat', somehow doesn't function?? :( 
        
      }}
      margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
      axisRight={null}
    />
  );
};

export default BumbChart;
