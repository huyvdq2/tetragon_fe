import { LegendToggleRounded, RefreshRounded } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useGetLogsQuery } from "store/api.slice";
import Table from "./Table";

export default function LogPage() {
  const { data = [], refetch } = useGetLogsQuery({
    status: "deleted",
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ color: "primary.dark" }}
          >
            <LegendToggleRounded fontSize="large" />
            <Typography variant="h4">Logs</Typography>
          </Stack>
          <Button
            variant="contained"
            startIcon={<RefreshRounded />}
            onClick={async () => {
              await refetch();
            }}
          >
            Refresh
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Deleted pods" />
          <CardContent>
            <Table data={data} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
