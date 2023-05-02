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
      ],
    },
  };
}
