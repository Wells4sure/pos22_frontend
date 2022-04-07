import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";

const customers = [
  { name: "Walk-in Customer", id: 1 },
  { name: "Wellington Chanda", id: 2 },
  { name: "Precious Nyirongo", id: 2 },
];

const Customers = () => {
  const [customer, setCustomer] = useState(1);
  return (
    <Paper
      component="form"
      elevation={0}
      square
      sx={{
        p: "2px 2px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px dashed #eee",
      }}
    >
      <Autocomplete
        freeSolo
        id="customer-names"
        disableClearable
        options={customers.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Customer"
            variant="standard"
            value={customer}
            onChange={(e) => {
              const value = customers.find((c) => c.name === e.target.value);
              if (value) setCustomer(value.id);
            }}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            fullWidth
          />
        )}
        sx={{
          width: "100%",
        }}
      />
    </Paper>
  );
};

export default Customers;
