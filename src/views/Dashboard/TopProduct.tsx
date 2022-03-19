import { Paper } from "@mui/material";
import React from "react";
import Chart from "react-apexcharts";

const TopProduct = () => {
  const options = {
    labels: ["Black Lable", "Mosi", "Castle", "Jameson", "Hunters"],
  };
  const series = [4, 5, 6, 1, 5]; //our data

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Chart options={options} series={series} type="pie" width={350} />
    </Paper>
  );
};

export default TopProduct;
