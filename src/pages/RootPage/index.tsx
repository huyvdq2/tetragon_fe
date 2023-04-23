import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import EnhancedTable from "./Table";

export default function RootPage() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h4">Monitor</Typography>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="CPU" />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Ram" />
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Disk" />
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Cluster" />
          <CardContent>
            <EnhancedTable />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
