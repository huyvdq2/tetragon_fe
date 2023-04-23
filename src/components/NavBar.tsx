import { Drawer, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <Drawer variant="permanent" open={true}>
      <Stack sx={{ width: 280 }}>this is nav bar</Stack>
    </Drawer>
  );
}
