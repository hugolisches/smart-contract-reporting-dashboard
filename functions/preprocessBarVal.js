import ContractTransactionValues from "../util/contractTransactionValues";

const PreprocessBarVal = (data) => {
  // Object to store the count of transactions per rounded value
  const transactionsCount = {};

  // Iterate over each item in the data array
  data.forEach(item => {
    // Extract the value, convert from gwei to Matic, and round it to three decimal places
    const valueInMatic = Number.parseFloat(item[ContractTransactionValues.VALUE]) / Math.pow(10, 18);
    const roundedValue = valueInMatic.toFixed(1);
    // Increment the count for this rounded value
    transactionsCount[roundedValue] = (transactionsCount[roundedValue] || 0) + 1;
  });

  // Convert the transactionsCount object into an array suitable for the bar chart
  const processedData = Object.keys(transactionsCount).map(value => ({
    id: value, // The rounded value as id
    count: transactionsCount[value] // The count of transactions for this value
  }));

  // Sort the array by value to ensure the chart is ordered
  processedData.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

  return processedData;
};

export default PreprocessBarVal;


