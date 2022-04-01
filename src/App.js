import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
