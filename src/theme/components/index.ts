import { Theme, type Components } from "@mui/material";
import CardOverride from "./Card";
import PaperOverride from "./Paper";
import TableOverride from "./Table";

export const components = (theme: Theme): Components => {
  return {
    ...CardOverride,
    ...PaperOverride,
    ...TableOverride(theme),
  };
};
