import ContractTransactionValues from "../util/contractTransactionValues";
import { format } from 'date-fns';

const PreprocessCashFlow = (data) => {
  // Helper function to ensure data is valid and parse values in Matic
  const validateAndParseValue = (item, valueType) => {
    const valueInGwei = parseFloat(item[valueType]);
    const valueInMatic = valueInGwei / Math.pow(10, 18); // Convert Gwei to Matic
    return isNaN(valueInMatic) ? 0 : valueInMatic;
  };

  const dailyCumulativeValue = {};
  const dailyCumulativeValueInternal = {};

  // Accumulate values for each day for both VALUE and VALUEINTERNAL
  data.forEach(item => {
    const date = new Date(item[ContractTransactionValues.DATETIME]);
    const formattedDate = format(date, 'yyyy-MM-dd');

    dailyCumulativeValue[formattedDate] = (dailyCumulativeValue[formattedDate] || 0) + validateAndParseValue(item, ContractTransactionValues.VALUE);
    dailyCumulativeValueInternal[formattedDate] = (dailyCumulativeValueInternal[formattedDate] || 0) + validateAndParseValue(item, ContractTransactionValues.VALUEINTERNAL);
  });

  // Calculating the daily difference (inflow - outflow) and cumulative balance
  const cumulativeBalance = {};
  let cumulativeTotal = 0; // Initialize cumulative total

  // Ensure we cover all dates where either inflow or outflow occurred
  const allDates = new Set([...Object.keys(dailyCumulativeValue), ...Object.keys(dailyCumulativeValueInternal)]);
  [...allDates].sort((a, b) => new Date(a) - new Date(b)).forEach(date => {
    const inflow = dailyCumulativeValue[date] || 0;
    const outflow = dailyCumulativeValueInternal[date] || 0;
    const dailyDifference = inflow - outflow;

    cumulativeTotal += dailyDifference; // Cumulatively add the daily difference
    cumulativeBalance[date] = cumulativeTotal; // Store cumulative total for the date
  });

  const preparedDataValue = Object.entries(dailyCumulativeValue).map(([date, value]) => ({ x: date, y: value }));
  const preparedDataValueInternal = Object.entries(dailyCumulativeValueInternal).map(([date, value]) => ({ x: date, y: value }));
  const preparedCumulativeBalance = Object.entries(cumulativeBalance).map(([date, value]) => ({ x: date, y: value }));

  // Prepare the final dataset for Nivo
  const nivoData = [
    {
      id: "Inflow",
      data: preparedDataValue
    },
    {
      id: "Outflow",
      data: preparedDataValueInternal
    },
    {
      id: "Cumulative",
      data: preparedCumulativeBalance
    }
  ];

  return nivoData;
};

export default PreprocessCashFlow;
