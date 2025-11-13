import { useState } from "react";
import { Box, Button, Typography, Link, Paper } from "@mui/material";
import TextField from "../ui/TextField";

import { useAuth } from "./../features/authentication/AuthContext";

export default function SignupPage() {
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.userName.trim() ||
      !form.email.trim() ||
      !form.password.trim()
    ) {
      setError(true);
      return;
    }

    // Here 'login' function from context api will run which is responsible for setting userId and userEmail.
    // It expects a object such as {id: '1', email: 'test@email.com'}
    // Do a request to backend and than set the id
    // login();

    setError(false);
    console.log("Signup submitted:", form);
    // TODO: connect to backend or Firebase
  };

  return (
    <Box
      sx={{
        height: "120vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 400,
          borderRadius: 3,
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography variant="h5" fontWeight={600} textAlign="center" mb={3}>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            value={form.name}
            onChange={handleChange}
            error={error && !form.name}
            helperText={error && !form.name ? "Name is required" : ""}
          />

          <TextField
            label="User name"
            name="userName"
            fullWidth
            margin="normal"
            value={form.userName}
            onChange={handleChange}
            error={error && !form.userName}
            helperText={error && !form.userName ? "User name is required" : ""}
          />

          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={handleChange}
            error={error && !form.email}
            helperText={error && !form.email ? "Email is required" : ""}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            value={form.password}
            onChange={handleChange}
            error={error && !form.password}
            helperText={error && !form.password ? "Password is required" : ""}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            margin="normal"
            value={form.confirmPassword}
            onChange={handleChange}
            error={error && form.password !== form.confirmPassword}
            helperText={
              error && form.password !== form.confirmPassword
                ? "Passwords do not match"
                : ""
            }
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.2,
              backgroundColor: "var(--active-indigo)",
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 900,
              "&:hover": {
                backgroundColor: "var(--hover-indigo)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Sign Up
          </Button>

          <Typography textAlign="center" mt={2}>
            Already have an account?{" "}
            <Link href="/login" underline="hover">
              Log In
            </Link>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
}
