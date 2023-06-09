import { Components, Theme } from "@mui/material";

export default function TableOverride(theme: Theme): Components {
  return {
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: `1px solid ${theme.palette.grey[200]}`,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingTop: 12,
          paddingBottom: 12,
        },
        head: {
          fontWeight: 600,
          backgroundColor: theme.palette.grey[100],
          ":first-of-type": {
            borderTopLeftRadius: 12,
          },
          ":last-of-type": {
            borderTopRightRadius: 12,
          },
        },
        body: {
          color: theme.palette.grey[700],
        },
      },
    },
  };
}
