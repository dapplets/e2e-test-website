import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from "@mui/material/Switch";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      primary: { main: "#D9304F" },
      mode: isDarkMode ? "dark" : undefined,
    },
  });

  const handleDarkModeChange = (
    _: React.ChangeEvent<HTMLInputElement>,
    newValue: boolean
  ) => {
    setIsDarkMode(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Container  maxWidth="sm">
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Dapplets E2E Test Website
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "flex" }, alignItems: "center" }}>
              <Switch value={isDarkMode} onChange={handleDarkModeChange} />
              <Typography variant="body1" noWrap>
                Dark Mode
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ mt: 10 }} maxWidth="sm">{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
