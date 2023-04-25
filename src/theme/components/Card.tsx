import { type Components } from "@mui/material";

const CardOverride: Components = {
  MuiCardHeader: {
    styleOverrides: {
      title: {
        fontSize: 20,
        fontWeight: 600,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        paddingTop: 0,
      },
    },
  },
};

export default CardOverride;
