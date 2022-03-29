import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import defaultProductImage from "../../assets/images/products.png";

export default function TouchScreen() {
  return (
    <Box
      sx={{
        m: "10px 4px",
        height: "650px",
        overflowX: "scroll",
        overflowY: "none",
      }}
    >
      <Grid container spacing={2} sx={{ gap: 0 }}>
        {Array.from(Array(20)).map((_, index) => (
          <Grid item xs={12} md={3} lg={3}>
            <Card
              sx={{
                maxHeight: 210,
                maxWidth: 160,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={defaultProductImage}
                alt="default Product Image"
              />
              <CardContent sx={{ backgroundColor: "#eee" }}>
                <Typography component="p">Compound -D</Typography>
                <Typography component="p">Zambia Fertilizer</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
