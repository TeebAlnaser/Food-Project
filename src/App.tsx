import { useState } from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
import Newcard from "./components/Newcard";
import axios from "axios";
import Newheader from "./components/Newheader";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./pages/Foodpage";
import Insidecard from "./components/Insidecards";
import Foodcard from "./components/FoodCard";
import Foodpage from "./pages/Foodpage";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Profile from "./pages/profile";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <Router>
      <Newheader />
      <Routes>
        {/* this first route "/" is the root route which every child of will be wrapped with main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Foodpage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/food/:id" element={<Insidecard />} />
          <Route path="/home" element={<Homepage />} />
        </Route>
        {/* this is the second login register route which isnt wrapped with main layout \ */}
        <Route path="/login" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
