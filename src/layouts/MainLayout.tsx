import { Box, Container, Stack } from "@mui/material";
import NavBar from "components/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack direction="row">
      <NavBar />
      <Box sx={{ ml: "280px", pt: 8, width: 1, pb: 5 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Stack>
  );
}
