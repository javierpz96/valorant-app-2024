import Inicio from "./components/Inicio";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Personajes from "./components/Personajes";
import Footer from "./components/Footer";
import PersonajeDetail from "./components/PersonajeDetail";
import Mapas from "./components/Mapas";
import MapDetail from "./components/MapDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/personajes" element={<Personajes />}></Route>
        <Route path="/detalles/:id" element={<PersonajeDetail />}></Route>
        <Route path="/mapas" element={<Mapas />}></Route>
        <Route path="/detalleMapa/:id" element={<MapDetail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
