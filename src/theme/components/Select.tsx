import { Components, Theme } from "@mui/material";

export default function SelectOverride(theme: Theme): Components {
  return {
    MuiSelect: {
      styleOverrides: {
        outlined: {
          backgroundColor: "white",
          boxShadow: theme.shadows[1],
        },
      },
    },
  };
}
