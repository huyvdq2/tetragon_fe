import { MoreVertRounded, SearchOffRounded } from "@mui/icons-material";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useGetResourcesQuery } from "store/api.slice";
import ActionMenu from "./ActionMenu";
import { PodData } from "types/api.type";

function createData(
  host_ip: string,
  image: string,
  image_id: string,
  ip: string,
  kind: string,
  name: string,
  namespace: string,
  status: string
) {
  return { host_ip, image, image_id, ip, kind, name, namespace, status };
}

export default function BasicTable({ data }: { data: PodData[] }) {
  const { data: resources = [] } = useGetResourcesQuery({});

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [target, setTarget] = React.useState<{
    name: string;
    namespace: string;
  }>({
    name: "",
    namespace: "",
  });
  const open = Boolean(anchorEl);

  const rows = React.useMemo(
    () =>
      data.map((e) =>
        createData(
          e.host_ip,
          e.image,
          e.image_id,
          e.ip,
          e.kind,
          e.name,
          e.namespace,
          e.status
        )
      ),
    [data]
  );

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string,
    namespace: string
  ) => {
    setAnchorEl(event.currentTarget);
    setTarget({
      name,
      namespace,
    });
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  if (data.length === 0) {
    return (
      <Box textAlign="center">
        <SearchOffRounded sx={{ color: "grey.700", fontSize: 80 }} />
        <Typography variant="h5" color="grey.700" fontWeight={600}>
          No data found
        </Typography>
        <Typography variant="body2" color="grey.500">
          There is maybe some issues.
          <br />
          Please troubleshoot it and try again.
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Pod</TableCell>
            <TableCell>Namespace</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>CPU</TableCell>
            <TableCell>Ram</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.namespace}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  variant="filled"
                  color="success"
                  size="small"
                />
              </TableCell>
              <TableCell>
                {resources.find((e) => e.name === row.name)?.cpu ?? "--"}
              </TableCell>
              <TableCell>
                {resources.find((e) => e.name === row.name)?.memory ?? "--"}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={(e) => {
                    handleMenuOpen(e, row.name, row.namespace);
                  }}
                >
                  <MoreVertRounded />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ActionMenu
        anchorEl={anchorEl}
        open={open}
        handleClose={handleMenuClose}
        target={target}
      />
    </TableContainer>
  );
}
