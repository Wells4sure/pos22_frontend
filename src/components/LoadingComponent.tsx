import * as React from "react";
import { makeStyles } from "@mui/styles";
import RotateLoader from "react-spinners/RotateLoader";

export default function LoadingComponent() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <RotateLoader color="#0288d1" size={15} margin={2} />
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
  },
});
