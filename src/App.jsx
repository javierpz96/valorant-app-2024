import Inicio from "./components/Inicio";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </>
  );
}

export default App;
