import React from "react";
import { isAuthenticated, logout } from "../auth";
import { useNavigate } from "react-router-dom";
import Enlace from "../atoms/Enlace";
import { Grid } from "@mui/material";
import "../index.css";
import Home from "../atoms/Home";
import "./organisms.css";
import LogoutButton from "../atoms/logoutButton";
import EnlaceBg from "../atoms/EnlaceBg";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const enlaces = [
    {
      nombrePage: "ADMIN DASHBOARD",
      href: "/admin",
    },
    {
      nombrePage: "ADD ACCES",
      href: "/add-acces",
    },
    {
      nombrePage: "ADD AFFILIATES",
      href: "/add-affiliates",
    },
    {
      nombrePage: "ADD ROOMS",
      href: "/add-rooms",
    },
    
  ];

  return (
    <nav className="navBar">
      <Grid container spacing={2} direction={"row"} className="container">
        <Grid item xs={12} lg={2} className="container">
          <Home/>
        </Grid>
        <Grid item xs={12} lg={8} >
          <Grid container spacing={2} direction={"row"} className="container">
            {enlaces.map((page) => (
              <Enlace key={page.nombrePage} {...page} />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={2} className="container">
        {isAuthenticated() ? (
            <LogoutButton onClick={handleLogout} />
          ) : (
            <EnlaceBg nombrePage="Login" href="/login" />
          )}
        </Grid>
      </Grid>
    </nav>
  );
};

export default Nav;
