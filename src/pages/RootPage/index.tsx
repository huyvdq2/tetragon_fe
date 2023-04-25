import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
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
import { MonitorRounded } from "@mui/icons-material";
import React from "react";

export default function RootPage() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [interval, setInterval] = React.useState<number>(0);

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
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const handleInterval = (e: SelectChangeEvent<number>) => {
    setInterval(Number(e.target.value));
  };

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
          <FormControl size="small">
            <InputLabel>Interval</InputLabel>
            <Select value={interval} onChange={handleInterval} label="Interval">
              <MenuItem value={0}>15 seconds</MenuItem>
              <MenuItem value={1}>30 seconds</MenuItem>
              <MenuItem value={2}>1 minute</MenuItem>
              <MenuItem value={3}>10 minutes</MenuItem>
            </Select>
          </FormControl>
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
