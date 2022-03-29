import {
  Container,
  Grid,
  Box,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React from "react";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { Search as SearchIcon } from "react-feather";
import ScanBarcode from "./ScanBarcode";
import TouchScreen from "./TouchScreen";
import CartTable from "./CartTable";
import Customers from "./Customers";
import CartActions from "./CartActions";

const POS = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} lg={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: "2px 2px",
              borderBottom: "3px solid #e0e0e0",
            }}
          >
            <ScanBarcode />
            <TouchScreen />
          </Box>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: "2px 2px",
              borderBottom: "3px solid #e0e0e0",
            }}
          >
            <Customers />
            <CartTable />
            <CartActions />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default POS;
