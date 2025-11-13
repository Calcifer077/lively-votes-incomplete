import { AppBar, Box, Toolbar, Typography, Stack, Button } from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

import { useNavigate } from "react-router";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "var(--light-gray)", color: "var(--dark-gray)" }}
      >
        <Toolbar>
          <QueryStatsIcon
            sx={{
              mr: 2,
              padding: "10px",
              fontSize: "40px",
              backgroundColor: "var(--active-indigo)",
              color: "var(--light-gray)",
              borderRadius: "8px",
            }}
          />
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2>Live Polls</h2>
            <p>Real-time voting</p>
          </Typography>

          {/* Buttons group */}
          <Stack direction="row" spacing={2}>
            <Button
              variant="text"
              sx={{
                color: "var(--dark-gray)",
                "&:hover": {
                  backgroundColor: "var(--hover-indigo)",
                  color: "var(--light-gray)",
                },
                "&:active": {
                  backgroundColor: "var(--active-indigo)",
                  color: "var(--light-gray)",
                },
              }}
            >
              All Polls
            </Button>
            <Button
              variant="text"
              sx={{
                color: "var(--dark-gray)",
                "&:hover": {
                  backgroundColor: "var(--hover-indigo)",
                  color: "var(--light-gray)",
                },
                "&:active": {
                  backgroundColor: "var(--active-indigo)",
                  color: "var(--light-gray)",
                },
              }}
            >
              My Votes
            </Button>
            <Button
              onClick={() => navigate("/createPoll")}
              variant="text"
              sx={{
                color: "var(--dark-gray)",
                "&:hover": {
                  backgroundColor: "var(--hover-indigo)",
                  color: "var(--light-gray)",
                },
                "&:active": {
                  backgroundColor: "var(--active-indigo)",
                  color: "var(--light-gray)",
                },
              }}
            >
              Create Poll
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
