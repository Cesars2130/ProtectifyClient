// src/routes/Routes.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import AddAccess from "../pages/AddAccess";
import AddAffiliates from "../pages/AddAffiliates";
import Registrations from "../pages/Registrations";
import AddRooms from "../pages/AddRooms";
import PrivateRoute from "./PrivateRoute";
import Nav from "../organisms/Nav";

const AppRoutes = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/registrations" element={<Registrations />} /> */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-access"
          element={
            <PrivateRoute>
              <AddAccess />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-affiliates"
          element={
            <PrivateRoute>
              <AddAffiliates />
            </PrivateRoute>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
