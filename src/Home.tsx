import { Outlet, NavLink } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";
export default function Home() {
  return (
    <div>
      <p> chao mung ban den trang chu </p>
      <Outlet />
    </div>
  );
}
