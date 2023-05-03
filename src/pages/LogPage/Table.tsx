import { SearchOffRounded } from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { LogData } from "types/api.type";

function createData(
  level: string,
  message: string,
  namespace: string,
  pod: string,
  timestamp: string
) {
  return { level, message, namespace, pod, timestamp };
}

export default function BasicTable({ data }: { data: LogData[] }) {
  const rows = React.useMemo(
    () =>
      data.map((e) =>
        createData(e.level, e.message, e.namespace, e.pod, e.timestamp)
      ),
    [data]
  );

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
            <TableCell>Level</TableCell>
            <TableCell>Pod</TableCell>
            <TableCell>Namespace</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={`${row.pod}${index}`}>
              <TableCell>
                <Chip
                  variant="filled"
                  color={(() => {
                    switch (row.level) {
                      case "INFO":
                        return "info";
                      case "ERROR":
                        return "error";
                      case "WARNING":
                        return "warning";
                      default:
                        return "default";
                    }
                  })()}
                  label={row.level}
                  size="small"
                  sx={{ fontSize: 11 }}
                />
              </TableCell>
              <TableCell>{row.pod}</TableCell>
              <TableCell>{row.namespace}</TableCell>
              <TableCell>{row.message}</TableCell>
              <TableCell>{row.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
