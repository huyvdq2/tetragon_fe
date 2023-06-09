import { MonitorRounded, RefreshRounded } from "@mui/icons-material";
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
import Table from "./Table";
import { useGetPodsQuery, useGetResourcesQuery } from "store/api.slice";

export default function RootPage() {
  const { data = [], refetch } = useGetPodsQuery({});
  const { data: resources = [], refetch: resourcesRefetch } =
    useGetResourcesQuery({});

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
            <MonitorRounded fontSize="large" />
            <Typography variant="h4">Monitor</Typography>
          </Stack>
          <Button
            variant="contained"
            startIcon={<RefreshRounded />}
            onClick={async () => {
              await refetch();
              await resourcesRefetch();
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
          <CardHeader title="Cluster" />
          <CardContent>
            <Table data={data} resources={resources} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
