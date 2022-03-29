import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const CartActions = () => {
  return (
    <Grid container spacing={2} sx={{ my: 1 }}>
      <Grid
        item
        xs={12}
        sx={{
          px: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px dashed grey",
        }}
      >
        <Typography variant="overline">Total</Typography>
        <Typography variant="h6" align="right">
          202.00
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          px: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "1px dashed grey",
        }}
      >
        <Typography variant="overline">Amount Due</Typography>
        <Typography variant="h6" align="right">
          202.00
        </Typography>
      </Grid>

      <Grid item xs={6} sx={{ p: 1, border: "1px dashed grey" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Add Payment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Add Payment"
          >
            <MenuItem value={10}>Cash</MenuItem>
            <MenuItem value={20}>Cheque</MenuItem>
            <MenuItem value={30}>Credit Card</MenuItem>
            <MenuItem value={40}>Mobile Money</MenuItem>
            <MenuItem value={50}>Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sx={{ p: 1, border: "1px dashed grey" }}>
        <FormControl fullWidth>
          <TextField id="outlined-basic" label="Amount Paid" variant="outlined" />
        </FormControl>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          border: "1px dashed grey",
        }}
      >
        <Button variant="contained" color="error">
          Cancel
        </Button>{" "}
        <Button variant="contained" color="secondary">
          Hold
        </Button>
        <Button size="large" variant="contained" color="primary">
          Complete Sale
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartActions;
