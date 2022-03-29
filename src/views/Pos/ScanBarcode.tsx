import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function ScanBarcode() {
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
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search product by code or name, you can scan barcode too"
        inputProps={{ "aria-label": "search", type: "text" }}
        autoFocus
      />

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
