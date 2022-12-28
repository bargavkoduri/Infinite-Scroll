import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home"
import React, { useState } from "react";

export const loggedInContext = React.createContext()

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  return (
      <loggedInContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </loggedInContext.Provider>
  );
}

export default App;
