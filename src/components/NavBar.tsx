import { LegendToggleRounded, MonitorRounded } from "@mui/icons-material";
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
import paths from "routes/paths";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const navigate = useNavigate();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    path: string
  ) => {
    navigate(path);
    setSelectedIndex(index);
  };

  const routes = [
    {
      icon: <MonitorRounded />,
      label: "Monitor",
      path: paths.root,
    },
    {
      icon: <LegendToggleRounded />,
      label: "Logging",
      path: paths.log,
    },
  ];

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
            {routes.map((route, index) => (
              <ListItem
                key={index}
                sx={{
                  mb: 1,
                  "& .Mui-selected": {
                    bgcolor: "grey.100",
                    color: "primary.main",
                    fontWeight: 600,
                  },
                }}
              >
                <ListItemButton
                  selected={selectedIndex === index}
                  sx={{
                    borderRadius: 1,
                  }}
                  onClick={(event) => {
                    handleListItemClick(event, index, route.path);
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText sx={{ span: { fontWeight: "inherit" } }}>
                    {route.label}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
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
            href="https://github.com/snowline2015/Kubernetes-Security"
            target="_blank"
          >
            Documentation
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
