import React from "react";
// import routers
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";

const App = () => {
  return <Routes>
    <Route path="Login" element={<Login />} />
    <Route path="/*" element={<Home />} />
  </Routes>;
};

export default App;
