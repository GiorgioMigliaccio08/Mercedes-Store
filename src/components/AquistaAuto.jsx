// AcquistaAuto.js
import React, { useState } from "react";
import NavBar from "./NavBar";

const AcquistaAuto = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    { id: 1, brand: "Mercedes", model: "C-Class", price: "$40,000" },
    { id: 2, brand: "Mercedes", model: "Coupè", price: "$45,000" },
    { id: 3, brand: "Mercedes", model: "Berlina", price: "$42,000" },
    { id: 4, brand: "Mercedes", model: "Hybrid", price: "$80,000" },
    { id: 5, brand: "Mercedes", model: "Hybrid-Plus", price: "$98,000" },
  ];

  const handleCarSelection = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <NavBar />
      <h2>Scegli l'auto dei tuoi sogni:</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div
            key={car.id}
            className="car-item"
            onClick={() => handleCarSelection(car)}
          >
            <h3>
              {car.brand} {car.model}
            </h3>
            <p>Prezzo: {car.price}</p>
          </div>
        ))}
      </div>
      {selectedCar && (
        <div className="selected-car">
          <h3>Hai selezionato:</h3>
          <p>Marca: {selectedCar.brand}</p>
          <p>Modello: {selectedCar.model}</p>
          <p>Prezzo: {selectedCar.price}</p>
        </div>
      )}
    </div>
  );
};

export default AcquistaAuto;
