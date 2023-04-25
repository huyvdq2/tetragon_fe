import { MonitorRounded } from "@mui/icons-material";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Logo from "assets/favicon.png";
import React from "react";
import docs from "assets/illustration_docs.svg";

export default function NavBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Drawer variant="permanent">
      <Stack
        sx={{ width: 280, p: 1, height: 1 }}
        justifyContent="space-between"
      >
        <Stack spacing={3}>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <img alt="Logo" src={Logo} width={40} height={40} />
            <Typography fontSize={17} fontWeight={600} color="primary">
              Kubernetes Security
            </Typography>
          </Stack>
          <Divider />
          <List>
            <ListItem
              sx={{
                "& .Mui-selected": {
                  bgcolor: "grey.100",
                  borderRadius: 1,
                  color: "primary.main",
                  fontWeight: 600,
                },
              }}
            >
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => {
                  handleListItemClick(event, 0);
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  <MonitorRounded />
                </ListItemIcon>
                <ListItemText sx={{ span: { fontWeight: "inherit" } }}>
                  Monitor
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
        <Stack alignItems="center" spacing={1} mb={2}>
          <img alt="Docs" src={docs} />
          <Typography variant="body1" fontWeight={600}>
            Hi, need help?
          </Typography>
          <Typography variant="body2" color="grey.500">
            Please check our docs.
          </Typography>
          <Button
            variant="contained"
            sx={{ fontWeight: 600, textTransform: "none" }}
          >
            Documentation
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
