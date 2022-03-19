import {
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";
import React from "react";
import CardItem from "./CardItem";
import SalesChart from "./SalesChart";
import SalesData from "./SalesData";
import TopProduct from "./TopProduct";

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CardItem cardTitle="Today's Sales" cardColor="green" />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardItem cardTitle="Yesterday's Sales" cardColor="black" />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardItem cardTitle="This Month's Sales" cardColor="blue" />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardItem cardTitle="Last Month's Sales" cardColor="red" />
        </Grid>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <SalesChart />
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <TopProduct />
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <SalesData />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
