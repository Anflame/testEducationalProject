import React, { FC } from "react";
import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import Users from "../Users/Users";
import UserDetailsPage from "../pages/UserDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/users" element={<Users />} />
    <Route path="/users/:id" element={<UserDetailsPage />} />
    <Route path="/*" element={<ErrorPage />} />
  </Routes>
);

export default AppRouter;
