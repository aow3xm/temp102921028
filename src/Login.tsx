import { Box, Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./redux/store";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === "admin" && password === "123") {
      dispatch(login());
      navigate("/home");
    } else {
      setError(true);
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
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
        type="text"
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
      <Button type="submit" variant="contained">
        {" "}
        Đăng Nhập{" "}
      </Button>{" "}
      {}
      {error && (
        <Typography sx={{ padding: "30px", color: "pink" }}>
          Sai pass hoac email
        </Typography>
      )}
    </Box>
  );
}
export default Login;
