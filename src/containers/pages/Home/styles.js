import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "30px",
    width: "315px",
    height: "100px",
    textAlign: "center",
    color: "white",
    background: "#8257e6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
}));

export const link = {
  textDecoration: "none",
};
