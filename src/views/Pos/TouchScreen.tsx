import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, useMediaQuery } from "@mui/material";
import defaultProductImage from "../../assets/images/products.png";
import theme from "../../Theme";

export default function TouchScreen() {
  const matches = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Box
      sx={{
        m: "10px 4px",
        height: matches ? "650px" : "300px",
        overflowX: "scroll",
        overflowY: "none",
      }}
    >
      <Grid container spacing={2} sx={{ gap: 0 }}>
        {Array.from(Array(20)).map((_, index) => (
          <Grid
            item
            sx={{
              "& :active": {
                background: "#34ff99",
              },
            }}
            xs={6}
            md={3}
            lg={2}
            key={index}
          >
            <Card
              sx={{
                maxHeight: 210,
                maxWidth: 130,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxWidth: 130,
                  maxHeight: 130,
                  p: "5px",
                }}
                title="Product Name | Description"
                image={defaultProductImage}
                alt="default Product Image"
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxHeight:80,
                  backgroundColor: "#e5e5e5",
                  overflow: "hidden",
                  whiteSpace: " pre-wrap",
                  fontSize: 12,
                  fontWeight: 400,
                  lineheight: 1.4,
                }}
              >
                <span>Compound -D</span>
                <span>Zambia Fertilizer</span>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
