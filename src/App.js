import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Modelli from "../src/components/Modelli";
import AcquistaAuto from "../src/components/AquistaAuto";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AcquistaAuto />} path="/aquistaauto" />
          <Route element={<Modelli />} path="/modelli" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
