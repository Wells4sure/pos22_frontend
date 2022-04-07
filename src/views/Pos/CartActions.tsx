import React, { useState } from "react";
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
  const [paymentMethod, setPaymentMethod] = useState("");
  const [amountPaid, setAmountPaid] = useState(0);
  const [otherMode, setOtherMode] = useState("Not Specific");

  // List of payment methods
  const paymentMethods = [
    "Cash",
    "Mobile Money",
    "Credit Card",
    "Cheque",
    "Other",
  ];
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
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Add Payment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Add Payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <MenuItem value="">Select Payment Method</MenuItem>
            {paymentMethods.map((paymentMethod, index) => (
              <MenuItem key={index} value={paymentMethod}>
                {paymentMethod}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sx={{ p: 1, border: "1px dashed grey" }}>
        <FormControl
          fullWidth
          sx={{ display: paymentMethod === "Other" ? "none" : "block" }}
        >
          <TextField
            id="outlined-basic"
            type="number"
            label="Amount Paid"
            variant="outlined"
            size="small"
            value={amountPaid}
            onChange={(e) => {
              setAmountPaid(Number(e.target.value));
            }}
            disabled={
              paymentMethod === "" ||
              paymentMethod === "Other" ||
              paymentMethod !== "Cash"
            }
          />
        </FormControl>
        {/* // Other */}
        <FormControl
          fullWidth
          sx={{ display: paymentMethod === "Other" ? "block" : "none" }}
        >
          <TextField
            id="outlined-basic"
            label="Specify Other"
            variant="outlined"
            size="small"
            value={otherMode}
            onChange={(e) => {
              setOtherMode(e.target.value);
            }}
            disabled={paymentMethod === "" || paymentMethod !== "Other"}
          />
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
        <Button variant="contained" color="error" size="small">
          Cancel
        </Button>{" "}
        <Button variant="contained" color="secondary" size="small">
          Hold
        </Button>
        <Button variant="contained" color="primary" size="small">
          Complete Sale
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartActions;
