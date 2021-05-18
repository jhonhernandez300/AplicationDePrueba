import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  colorPrimary: {
    color: "#fff",
    width: "20px",
  },
  wrapper: {
    display: "flex",
    margin: "23px auto 23px auto",
    justifyContent: "space-around",
  },
  messageError: {
    color: "red",
    textAlign: "center",
  },
}));

export default useStyles;
