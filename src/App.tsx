import { useState } from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
import Newcard from "./components/Newcard";
import axios from "axios";
<<<<<<< Updated upstream
import Newheader from "./components/Newheader";
import Header from "./components/Header";
=======
>>>>>>> Stashed changes
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./pages/Foodpage";
import Insidecard from "./components/Insidecards";
import Foodcard from "./components/FoodCard";
import Foodpage from "./pages/Foodpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Authprovider from "./components/Auth";
import Profile from "./pages/profile";
import Footer from "./components/Footer";
import Header from "./components/header";

const App = () => {
  return (
    <Authprovider>
      <Router>
        <Newheader />
        <Routes>
          <Route path="/food" element={<Foodpage />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/food/:id" element={<Insidecard />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/login" element={<Profile />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
        </Routes>
      </Router>
    </Authprovider>
  );
};

export default App;
