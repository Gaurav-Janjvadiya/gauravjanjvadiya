import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
