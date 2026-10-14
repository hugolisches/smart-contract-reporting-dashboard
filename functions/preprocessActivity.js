import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import ContractTransactionValues from "../util/contractTransactionValues";

const PreprocessActivity = (data) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const dates = {}; //Stores how many times each date appears

  for (const i in data) {
    const date = data[i][ContractTransactionValues.DATE]; //Gets the date

    //Check if the date has appeared before. If not add id with a count of 1
    if (!dates.hasOwnProperty(date)) {
      dates[date] = 1;
    } else {
      //If the date has appeared before increase the count
      dates[date] += 1;
    }
  }

  const id = "activity";
  const color = colors.mainBrandcol[600];

  const nivoData = [
    {
      id,
      color,
      data: Object.entries(dates).map(([date, count]) => ({
        x: date,
        y: count,
      })),
    },
  ];

  return nivoData;
};

export default PreprocessActivity;
