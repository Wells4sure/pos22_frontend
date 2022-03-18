import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const navigate = useNavigate();
  const links = {
    home: {
      label: "Home",
      href: "/",
    },
    login: {
      label: "Login",
      href: "/login",
    },
  };
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            onClick={() => navigate("/", { replace: true })}
          >
            Very PO55able
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              sx={{ my: 1, mx: 1.5 }}
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#features"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#contact"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact Us
            </Link>
          </nav>
          <Button
            onClick={() =>
              navigate("/login", {
                replace: true,
              })
            }
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
