import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import Users from "./Users/Users";
import AppRouter from "./AppRouter/AppRouter";
import Navbar from "./Navbar/Navbar";

const App = () => (
  <>
    <AppRouter />
    <Navbar />
  </>
);

export default App;
