import { useState } from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
import Newcard from "./components/Newcard";
import axios from "axios";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Foodpage";
import Insidecard from "./components/Insidecards";
import Foodcard from "./components/FoodCard";
import Foodpage from "./pages/Foodpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/food" element={<MainLayout />}>
          <Route index element={<Foodpage />} />
          <Route path="/food/:id" element={<Insidecard />} />
        </Route>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
