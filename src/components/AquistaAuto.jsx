import React, { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import NavBar from "./NavBar";

const AcquistaAuto = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
      id: 1,
      brand: "Mercedes",
      model: "C-Class",
      price: "$40,000",
      image:
        "https://cdn.drivek.com/configurator-imgs/cars/it/Original/MERCEDES/C-CLASS/40310_SEDAN-4-DOORS/mercedes-benz-c-class-sedan-2021-front-side-1.jpg",
    },
    {
      id: 2,
      brand: "Mercedes",
      model: "Coupè",
      price: "$45,000",
      image:
        "https://cdn.drivek.com/configurator-imgs/cars/it/Original/MERCEDES/CLE/42999_COUPE-2-DOORS/mercedes-benz-cle-coupe-front-view.jpg",
    },
    {
      id: 3,
      brand: "Mercedes",
      model: "Berlina",
      price: "$42,000",
      image:
        "https://cdn.drivek.com/configurator-imgs/cars/it/800/MERCEDES/A-CLASS-SEDAN/41354_SEDAN-4-DOORS/mercedes-benz-a-class-front-view.jpg",
    },
    {
      id: 4,
      brand: "Mercedes",
      model: "Hybrid",
      price: "$80,000",
      image:
        "https://www.mercedes-benz.it/content/italy/it/passengercars/models/hybrid/_jcr_content/root/responsivegrid/tabs/tabitem/media_gallery/media_gallery_item/image.component.damq1.3384358398609.jpg/mercedes-benz-plug-in-hybrid-landing-page-intelligence-flexibility-2176x1224-08-2023.jpg",
    },
    {
      id: 5,
      brand: "Mercedes",
      model: "Hybrid-Plus",
      price: "$98,000",
      image:
        "https://images.caradisiac.com/images/9/0/2/8/199028/S0-le-nouveau-mercedes-glc-a-partir-de-60-700eur-734113.jpg",
    },
    {
      id: 6,
      brand: "Mercedes",
      model: "C-Class",
      price: "$40,000",
      image:
        "https://www.gruppodemariani.it/files/2023/11/IMG_20231116_164615_cropped_2050_180102.jpg",
    },
  ];

  const handleCarSelection = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <NavBar />
      <h2 className="text">Scegli l'auto dei tuoi sogni:</h2>
      <Row>
        <Col sm={6}>
          <Row className="justify-content-between">
            {cars.map((car, index) => (
              <Col key={car.id} md={4} className="mb-3 ms-2">
                <Card style={{ width: "18rem", margin: "0 auto" }}>
                  <Card.Img
                    variant="top"
                    src={car.image}
                    alt={car.model}
                    className="car-image"
                    height={200}
                  />
                  <Card.Body>
                    <Card.Title className="text">
                      {car.brand} {car.model}
                    </Card.Title>

                    <Button
                      variant="primary"
                      onClick={() => handleCarSelection(car)}
                    >
                      Aquista
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col sm={6}>
          {selectedCar && (
            <div className="selected-car">
              <h3>Hai selezionato:</h3>
              <img
                src={selectedCar.image}
                alt={selectedCar.model}
                className="selected-car-image"
                height={400}
                width={500}
              />
              <p>Marca: {selectedCar.brand}</p>
              <p>Modello: {selectedCar.model}</p>
              <p>Prezzo: {selectedCar.price}</p>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AcquistaAuto;
