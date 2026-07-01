import "./App.css";
import Header from "./Components/Top-level-components/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
