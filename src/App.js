import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "../src/components/NavBar";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import Modelli from "../src/components/Modelli";
import AquistaAuto from "../src/components/AquistaAuto";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Header />
      <Routes>
        <Route element={<Modelli />} path="/modelli" />
        <Route element={<AquistaAuto />} path="/aquistaauto" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
