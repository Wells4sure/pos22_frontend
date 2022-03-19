import { Paper, Typography } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const SalesChart = () => {
  const series = [
    {
      name: "Total Sales K",
      type: "column",
      data: [440.50, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 960],
    },
  ];
  const options = {
    chart: {
      id: "monthlySales-bar",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mar",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ], //will be displayed on the x-asis
    },
  };
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>Monthly Revenue</Typography>
      <Chart options={options} type="bar" series={series} s height={320} />
    </Paper>
  );
};

export default SalesChart;
