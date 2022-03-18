import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import theme from "./Theme";
import "react-toastify/dist/ReactToastify.css";
import AuthLoading from "./views/Auth/authLoading";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <AuthLoading />
    </ThemeProvider>
  );
}

export default App;
