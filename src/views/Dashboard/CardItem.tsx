import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { textAlign } from "@mui/system";
import CountUp from "react-countup";

export interface props {
  cardColor: string;
  cardTitle: string;
}
const CardItem = ({ cardColor, cardTitle }: props) => {
  const theme = useTheme();
  const colors = [
    {
      name: "black",
      value:
        "rgba(0,0,0,0) linear-gradient(195deg, rgb(66,66,74), rgb(25,25,25)) repeat scroll 0% 0%",
    },
    {
      name: "green",
      value:
        "rgba(0,0,0,0) linear-gradient(195deg, rgb(102,187,106), rgb(67,160,71)) repeat scroll 0% 0%",
    },
    {
      name: "blue",
      value:
        "rgba(0,0,0,0) linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232)) repeat scroll 0% 0%",
    },
    {
      name: "red",
      value:
        "rgba(0, 0, 0, 0) linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96)) repeat scroll 0% 0%",
    },
  ];
  const cl = colors.find((element) => {
    if (element.name === cardColor) {
      return element.value;
    }
  });

  return (
    <Card>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 1,
            background: cl?.value,
            color: "rgb(255, 255, 255)",
            borderRadius: "2px ,0, 2px ,0",
            width: 150,
          }}
        >
          <ShoppingCartIcon sx={{ height: 38, width: 38 }} />
        </Box>
        <CardContent
          sx={{ flex: "1 0 auto", justifyContent: "right", textAlign: "right" }}
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {cardTitle}
          </Typography>
          <Typography
            component="div"
            variant="h4"
            sx={{ fontWeight: "700", fontSize: "1.5rem" }}
          >
            <CountUp
              start={0.0}
              end={1285.5}
              duration={2.75}
              separator=" "
              decimals={2}
              decimal="."
              prefix="K "
            />
          </Typography>
          <Divider  />
          <Typography variant="subtitle1" color="text.secondary" mt={2}>
            2% + from Yesterday
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardItem;
