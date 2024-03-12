import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ButtonAppBar from "./Nav";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
