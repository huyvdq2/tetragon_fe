import { MonitorRounded } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import EnhancedTable from "./Table";

export default function RootPage() {
  const theme = useTheme();
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [4, 23, 23, 12, 3, 5, 7],
        borderColor: theme.palette.primary.light,
        backgroundColor: theme.palette.primary.dark,
      },
    ],
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ color: "primary.dark" }}
        >
          <MonitorRounded fontSize="large" />
          <Typography variant="h4">Monitor</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="CPU (%)" />
          <CardContent>
            <Line options={options} data={data} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Ram (%)" />
          <CardContent>
            <Line options={options} data={data} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Disk (%)" />
          <CardContent>
            <Line options={options} data={data} />
          </CardContent>
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
