import { Box, Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (email === "admin" && password === "123") {
      navigate("/home");
    } else {
      setError(true);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "500px",
        backgroundColor: "#fff",
        borderRadius: "10px",
      }}
    >
      <Typography sx={{ padding: "30px" }}> Login </Typography>

      <TextField
        sx={{ padding: "10px" }}
        id="outlined-email-input"
        label="Email"
        type="email"
        autoComplete="current-email"
        value={email}
        onChange={handleEmail}
      />

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={handlePassword}
      />
      <Button onClick={handleSubmit} variant="contained">
        {" "}
        Đăng Nhập{" "}
      </Button>
      {error && (
        <Typography sx={{ padding: "30px", color: "pink" }}>
          {" "}
          Sai pass hoac email
        </Typography>
      )}
    </Box>
  );
}
export default Login;
