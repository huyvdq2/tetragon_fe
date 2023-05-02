import { Theme, type Components } from "@mui/material";
import CardOverride from "./Card";
import PaperOverride from "./Paper";
import TableOverride from "./Table";
import ListOverride from "./List";
import SelectOverride from "./Select";
import ChipOverride from "./Chip";

export const components = (theme: Theme): Components => {
  return {
    ...CardOverride,
    ...PaperOverride,
    ...TableOverride(theme),
    ...ListOverride(theme),
    ...SelectOverride(theme),
    ...ChipOverride(theme),
  };
};
