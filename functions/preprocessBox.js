import ContractTransactionValues from "../util/contractTransactionValues";
import { mean, deviation } from 'd3-array';

const PreprocessBox = (data) => {
  // Splitting the data into two groups based on IS_ERROR value
  const groups = {
    normal: data.filter(item => item[ContractTransactionValues.IS_ERROR] === "0"),
    failed: data.filter(item => item[ContractTransactionValues.IS_ERROR] === "1")
  };

  // Function to calculate statistics and transform data
  const transformData = (groupData, groupName) => {
    // Extracting GAS values and converting to numbers
    const gasValues = groupData.map(item => parseFloat(item[ContractTransactionValues.GAS])).filter(value => !isNaN(value));

    // Calculating statistics
    const mu = mean(gasValues);
    const sd = deviation(gasValues);
    const n = gasValues.length;

    // Transforming each gas value to the specified format
    return gasValues.map(gasValue => ({
      group: groupName,
      mu: mu,
      sd: sd,
      n: n,
      value: gasValue
    }));
  };

  // Transforming data for both groups
  const normalData = transformData(groups.normal, "Normal");
  const failedData = transformData(groups.failed, "Failed");

  // Combining the data from both groups
  return [...normalData, ...failedData];
};

export default PreprocessBox;



