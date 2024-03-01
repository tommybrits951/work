import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      {token === null ? (
        <Routes>
          <Route path="/*" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
