import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Formulaire } from "./components/Formulaire";
import { Footer } from "./components/Footer";
import Prestations from "./components/Prestations";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
     
      <Prestations /> 
      <Projects />
      <Formulaire />
      <Footer />
    </div>

  );
}

export default App;
