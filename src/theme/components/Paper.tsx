import { type Components } from "@mui/material";

const PaperOverride: Components = {
  MuiPaper: {
    defaultProps: {
      elevation: 3,
    },
  },
};

export default PaperOverride;
