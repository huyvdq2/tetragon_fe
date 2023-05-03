import { Components, Theme } from "@mui/material";

export default function ChipOverride(theme: Theme): Components {
  return {
    MuiChip: {
      variants: [
        {
          props: {
            variant: "filled",
            color: "success",
          },
          style: {
            backgroundColor: "rgba(54, 179, 126, 0.16)",
            color: "rgb(27, 128, 106)",
            fontWeight: 600,
          },
        },
        {
          props: {
            variant: "filled",
            color: "info",
          },
          style: {
            backgroundColor: "rgba(0, 184, 217, 0.16)",
            color: "rgb(0, 108, 156)",
            fontWeight: 600,
          },
        },
        {
          props: {
            variant: "filled",
            color: "error",
          },
          style: {
            backgroundColor: "rgba(255, 86, 48, 0.16)",
            color: "rgb(183, 29, 24)",
            fontWeight: 600,
          },
        },
        {
          props: {
            variant: "filled",
            color: "warning",
          },
          style: {
            backgroundColor: "rgba(255, 171, 0, 0.16)",
            color: "rgb(183, 110, 0)",
            fontWeight: 600,
          },
        },
      ],
    },
  };
}
