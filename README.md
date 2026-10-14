# Smart Contract Reporting Dashboard

## Project Overview

This project was developed as part of a collaborative Bachelor's thesis project at the University of Zurich.

The goal of the project was to build a web-based dashboard for analyzing smart contract activity. Users could enter the address of a smart contract on the Polygon Mumbai testnet, after which transaction data was retrieved and displayed through different visualizations.

The dashboard was designed to make blockchain transaction data easier to explore and understand. Among other things, it allowed users to analyze:

- smart contract activity over time
- gas usage
- transaction values
- transaction frequency
- user interaction patterns
- transaction inflows and outflows

## My Contribution

My main contribution to the project was the frontend data visualization layer.

I developed several visualization components using React and the Nivo visualization library. I also implemented preprocessing functions that transformed the raw transaction data received from the backend into the data structures required by the individual charts.

My work included:

- building line charts, bar charts and box plots with Nivo
- aggregating transaction activity over time
- preparing gas usage data for visualization
- analyzing transaction values and their distribution
- aggregating interactions by user address
- preparing transaction inflow and outflow data
- transforming raw blockchain transaction data into Nivo-compatible formats

For example, the preprocessing functions aggregate transaction activity by date, group gas usage over time and transform transaction values into structures that can directly be used by the visualization components. :chatgpt-content-reference{index="0"} :chatgpt-content-reference{index="1"}

The project also included visualizations for the distribution of transaction values in MATIC and for comparing gas usage between successful and failed transactions. :chatgpt-content-reference{index="2"} :chatgpt-content-reference{index="3"}

## Technologies

My contribution mainly involved:

- JavaScript
- React
- Nivo
- Material UI
- d3-array
- date-fns

The overall project also involved blockchain data retrieval and backend processing.

