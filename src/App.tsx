import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ButtonAppBar from "./Nav";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<Home />} />
        </Routes>
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
