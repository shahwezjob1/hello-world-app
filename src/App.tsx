import { Container, Typography, Box, Paper } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0f7fa 0%, #e8eaf6 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            borderRadius: 4,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Hey Shahwez Learn More React
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
