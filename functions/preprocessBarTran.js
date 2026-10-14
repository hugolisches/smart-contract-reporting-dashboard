import ContractTransactionValues from "../util/contractTransactionValues";

const PreprocessBarTran = (data) => {
  // Object to count interactions per user
  const interactionsPerUser = {};

  // Count the number of interactions for each user
  data.forEach(item => {
    const userAddress = item[ContractTransactionValues.FROM];
    if (interactionsPerUser[userAddress]) {
      interactionsPerUser[userAddress]++;
    } else {
      interactionsPerUser[userAddress] = 1;
    }
  });

  // Object to aggregate users by the number of interactions
  const usersByInteractions = {};

  // Aggregate users by their number of interactions
  Object.values(interactionsPerUser).forEach(interactions => {
    if (usersByInteractions[interactions]) {
      usersByInteractions[interactions]++;
    } else {
      usersByInteractions[interactions] = 1;
    }
  });

  // Prepare the data for the bar chart
  const preparedData = Object.entries(usersByInteractions).map(([interactions, usersCount]) => ({
    // The 'id' could be the number of interactions, making it easy to understand the chart
    id: `${interactions}`,
    count: usersCount
  }));

  // Sort the data by number of interactions to ensure the chart is orderly
  preparedData.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  return preparedData;
};

export default PreprocessBarTran;

