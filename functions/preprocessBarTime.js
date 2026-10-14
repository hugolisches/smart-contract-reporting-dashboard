import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import ContractTransactionValues from "../util/contractTransactionValues";

const PreprocessBarTime = (data) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Initialize an array to count transactions per hour
  let hourlyCounts = Array.from({ length: 24 }, () => 0);

  // Increment the count for the hour in which each transaction occurred
  data.forEach(item => {
    const dateTime = new Date(item[ContractTransactionValues.DATETIME]);
    const hour = dateTime.getHours();
    hourlyCounts[hour]++;
  });

  // Prepare the data in the format expected by Nivo, similar to the mock data
  const preparedData = hourlyCounts.map((count, hour) => ({
    id: `${hour.toString().padStart(2, '0')}:00-${(hour + 1).toString().padStart(2, '0')}:00`, // Formatting the hour
    count: count
  }));

  return preparedData;
};

export default PreprocessBarTime;


