import { Components, Theme } from "@mui/material";

export default function ListOverride(theme: Theme): Components {
  return {
    MuiListItem: {
      defaultProps: {
        disablePadding: true,
      },
    },
  };
}
