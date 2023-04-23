import { createTheme } from "@mui/material";
import palette from "./palette";
import shadows from "./shadows";
import { components } from "./components";

const theme = createTheme({
  palette,
  shape: {
    borderRadius: 12,
  },
  shadows,
});

theme.components = components(theme);

export default theme;
