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
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            CHat
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Top Products
                </ListSubheader>
              }
            >
              <ListItemButton
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <ListItemText primary="Mosi" />
                <ListItemText secondary="K 1000" />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </List>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            Recent Orders
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
