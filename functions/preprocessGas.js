import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import ContractTransactionValues from "../util/contractTransactionValues";
import { startOfWeek, format } from 'date-fns';

const PreprocessGas = (data) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Ensure data is in the correct format and valid
  const validateAndParseData = (item) => {
    const gasValue = parseFloat(item[ContractTransactionValues.GAS]);
    return isNaN(gasValue) ? 0 : gasValue;
  };

  // Helper function to group data by week
  const groupByWeek = (data) => {
    const grouped = {};
    data.forEach(item => {
      const date = new Date(item[ContractTransactionValues.DATETIME]);
      const weekStart = startOfWeek(date, { weekStartsOn: 1 }); // considering week starts on Monday
      const weekKey = format(weekStart, 'yyyy-MM-dd'); // Format the date

      if (!grouped[weekKey]) {
        grouped[weekKey] = [];
      }
      grouped[weekKey].push(item);
    });
    return grouped;
  };

  // Group data by week
  const weeklyGroupedData = groupByWeek(data);

  // Calculate average GAS value for each week
  const weeklyAverageData = Object.entries(weeklyGroupedData).map(([weekStart, weekData]) => {
    const sum = weekData.reduce((acc, curr) => acc + validateAndParseData(curr), 0);
    const average = weekData.length > 0 ? sum / weekData.length : 0; // Avoid division by zero
    return {
      x: weekStart, // Formatted week start date as x-axis
      y: average    // Average GAS value for the week as y-axis
    };
  });

  const id = "Gas";
  const color = colors.mainBrandcol[600];

  const nivoData = [
    {
      id,
      color,
      data: weeklyAverageData
    },
  ];

  return nivoData;
};

export default PreprocessGas;
