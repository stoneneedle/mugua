import * as React from "react";

// MUI
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

// React Router
import { Routes, Route, Outlet, Link } from "react-router-dom";

// Routes
import Home from "./routes/Home";
import Discussions from "./routes/Dicussions";
import Pages from "./routes/Pages";
import Assignments from "./routes/Assignments";
import Files from "./routes/Files";

// CSS
import "./index.css";

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

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MuguaMain />}>
          <Route index element={<Home />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="pages" element={<Pages />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="files" element={<Files />} />
        </Route>
      </Routes>
    </>
  );
}

function MuguaMain() {
  return (
    <>
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
    </>
  );
}

function MuguaMenu() {
  return (
    <MenuList>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/discussions">Discussions</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/pages">Pages</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/assignments">Assignments</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/files">Files</Link>
      </MenuItem>
    </MenuList>
  );
}

function MuguaTopbar() {
  return <>Test</>;
}
