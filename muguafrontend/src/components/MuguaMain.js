// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

// React Router
import { Outlet } from "react-router-dom";

// Components
import MuguaTopbar from "./MuguaTopbar";
import MuguaMenu from "./MuguaMenu";

// MUI Theme
const muiLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#9fa8da",
      contrastText: "#000"
    },
    secondary: {
      main: "#f4511e"
    }
  }
});

export default function MuguaMain() {
  return (
    <ThemeProvider theme={muiLightTheme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <MuguaTopbar />
        </Grid>
        <Grid item xs={4} lg={2}>
          <MuguaMenu />
        </Grid>
        <Grid item xs={8} lg={10}>
          <Outlet />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}