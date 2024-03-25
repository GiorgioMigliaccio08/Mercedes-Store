import React, { useState } from "react";
import { Card, Button, Col, Row, Form } from "react-bootstrap";
import NavBar from "./NavBar";

const AcquistaAuto = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [leftCardWidth, setLeftCardWidth] = useState("10rem");

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
      model: "Hybrid",
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
    {
      id: 7,
      brand: "Mercedes",
      model: "GT Coupè",
      price: "$40,000",
      image:
        "https://www.mercedes-benz.ch/content/switzerland/it/passengercars/models/coupe/c192-24-1/overview/_jcr_content/root/responsivegrid/simple_stage_copy_co.component.damq1.3405643967983.jpg/mercedes-amg-gt-c192-stage-3840x3840-07-2023.jpg",
    },
    {
      id: 8,
      brand: "Mercedes",
      model: "Classe S",
      price: "$45,000",
      image:
        "https://cdn.drivek.com/configurator-imgs/cars/it/Original/MERCEDES/MAYBACH-S-CLASS/41434_SUV-5-DOORS/mercedes-benz-maybach-s-class-2021-front-side-1.jpg",
    },
    {
      id: 9,
      brand: "Mercedes",
      model: "Hybrid",
      price: "$42,000",
      image:
        "https://cdn.motor1.com/images/mgl/BXAlP4/s3/mercedes-cla-elettrica-il-render-di-motor1.com.jpg",
    },
    {
      id: 10,
      brand: "Mercedes",
      model: "Classe A",
      price: "$80,000",
      image:
        "https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640/public/news_galleria/2018/02/mercedes-classe-a-2018-01-ufficiali_28.jpg",
    },
    {
      id: 11,
      brand: "Mercedes",
      model: "A Sedan",
      price: "$40,000",
      image: "https://i.ytimg.com/vi/x-OLGPX-K-M/maxresdefault.jpg",
    },
    {
      id: 12,
      brand: "Mercedes",
      model: "Classe A",
      price: "$45,000",
      image:
        "https://storage.edidomus.it/ListinoAuto/FOTO_A_16_9_640/00064640.JPG",
    },
    {
      id: 13,
      brand: "Mercedes",
      model: "Classe A",
      price: "$42,000",
      image: "https://images.automercato.it/297/45426/646902.jpg",
    },
    {
      id: 14,
      brand: "Mercedes",
      model: "A Sedan",
      price: "$80,000",
      image:
        "https://www.avvenire.it/c/2019/PublishingImages/3c5970acc8fa4473826516efc479b258/mercedesbe_67275499.jpg?width=677",
    },
    {
      id: 15,
      brand: "Mercedes",
      model: "Classe A",
      price: "$98,000",
      image:
        "https://www.italiaonroad.it/wp-content/uploads/2017/02/ClasseA-next-770x470.jpg",
    },
    {
      id: 16,
      brand: "Mercedes",
      model: "C-Class",
      price: "$40,000",
      image:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s158b4c721572b9be/image/i4d28d7cda733df80/version/1682519442/image.jpg",
    },
    {
      id: 17,
      brand: "Mercedes",
      model: "GT Coupè",
      price: "$40,000",
      image:
        "https://www.padovastar.it/data_files/custom_listing/npd-classe-a-thxqxx.webp",
    },
    {
      id: 18,
      brand: "Mercedes",
      model: "Classe S",
      price: "$45,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDu8accmjMVdF_wOGkWGuALQljtAXs3HvF_0fZHahIjtj1mHttiImKev5c06plPaBTxE&usqp=CAU",
    },
    {
      id: 19,
      brand: "Mercedes",
      model: "Hybrid",
      price: "$42,000",
      image:
        "https://web.imgstore.it/ec9a7fbd1aca4b7eb2b1d15cf8246269_orig.jpg",
    },
    {
      id: 20,
      brand: "Mercedes",
      model: "Classe A",
      price: "$80,000",
      image:
        "https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2022/11/mercedes_a_amg_ant_0.png?itok=54bVPTUM",
    },
    {
      id: 21,
      brand: "Mercedes",
      model: "C-Class",
      price: "$40,000",
      image:
        "https://cdn.drivek.com/configurator-imgs/cars/it/Original/MERCEDES/C-CLASS/40310_SEDAN-4-DOORS/mercedes-benz-c-class-sedan-2021-front-side-1.jpg",
    },
    {
      id: 22,
      brand: "Mercedes",
      model: "Coupè",
      price: "$45,000",
      image:
        "https://cdn.drivek.com/configurator-imgs/cars/it/Original/MERCEDES/CLE/42999_COUPE-2-DOORS/mercedes-benz-cle-coupe-front-view.jpg",
    },
    {
      id: 23,
      brand: "Mercedes",
      model: "Berlina",
      price: "$42,000",
      image:
        "https://cdn.drivek.com/configurator-imgs/cars/it/800/MERCEDES/A-CLASS-SEDAN/41354_SEDAN-4-DOORS/mercedes-benz-a-class-front-view.jpg",
    },
    {
      id: 24,
      brand: "Mercedes",
      model: "Hybrid",
      price: "$80,000",
      image:
        "https://www.mercedes-benz.it/content/italy/it/passengercars/models/hybrid/_jcr_content/root/responsivegrid/tabs/tabitem/media_gallery/media_gallery_item/image.component.damq1.3384358398609.jpg/mercedes-benz-plug-in-hybrid-landing-page-intelligence-flexibility-2176x1224-08-2023.jpg",
    },
    {
      id: 25,
      brand: "Mercedes",
      model: "Hybrid",
      price: "$98,000",
      image:
        "https://images.caradisiac.com/images/9/0/2/8/199028/S0-le-nouveau-mercedes-glc-a-partir-de-60-700eur-734113.jpg",
    },
    {
      id: 26,
      brand: "Mercedes",
      model: "C-Class",
      price: "$40,000",
      image:
        "https://www.gruppodemariani.it/files/2023/11/IMG_20231116_164615_cropped_2050_180102.jpg",
    },
    {
      id: 27,
      brand: "Mercedes",
      model: "GT Coupè",
      price: "$40,000",
      image:
        "https://www.mercedes-benz.ch/content/switzerland/it/passengercars/models/coupe/c192-24-1/overview/_jcr_content/root/responsivegrid/simple_stage_copy_co.component.damq1.3405643967983.jpg/mercedes-amg-gt-c192-stage-3840x3840-07-2023.jpg",
    },
    {
      id: 28,
      brand: "Mercedes",
      model: "Classe S",
      price: "$45,000",
      image:
        "https://cdn.drivek.com/configurator-imgs/cars/it/Original/MERCEDES/MAYBACH-S-CLASS/41434_SUV-5-DOORS/mercedes-benz-maybach-s-class-2021-front-side-1.jpg",
    },
    {
      id: 29,
      brand: "Mercedes",
      model: "Hybrid",
      price: "$42,000",
      image:
        "https://cdn.motor1.com/images/mgl/BXAlP4/s3/mercedes-cla-elettrica-il-render-di-motor1.com.jpg",
    },
    {
      id: 30,
      brand: "Mercedes",
      model: "Classe A",
      price: "$80,000",
      image:
        "https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640/public/news_galleria/2018/02/mercedes-classe-a-2018-01-ufficiali_28.jpg",
    },
    {
      id: 31,
      brand: "Mercedes",
      model: "A Sedan",
      price: "$40,000",
      image: "https://i.ytimg.com/vi/x-OLGPX-K-M/maxresdefault.jpg",
    },
    {
      id: 32,
      brand: "Mercedes",
      model: "Classe A",
      price: "$45,000",
      image:
        "https://storage.edidomus.it/ListinoAuto/FOTO_A_16_9_640/00064640.JPG",
    },
    {
      id: 33,
      brand: "Mercedes",
      model: "Classe A",
      price: "$42,000",
      image: "https://images.automercato.it/297/45426/646902.jpg",
    },
    {
      id: 34,
      brand: "Mercedes",
      model: "A Sedan",
      price: "$80,000",
      image:
        "https://www.avvenire.it/c/2019/PublishingImages/3c5970acc8fa4473826516efc479b258/mercedesbe_67275499.jpg?width=677",
    },
    {
      id: 35,
      brand: "Mercedes",
      model: "Classe A",
      price: "$98,000",
      image:
        "https://www.italiaonroad.it/wp-content/uploads/2017/02/ClasseA-next-770x470.jpg",
    },
    {
      id: 36,
      brand: "Mercedes",
      model: "C-Class",
      price: "$40,000",
      image:
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s158b4c721572b9be/image/i4d28d7cda733df80/version/1682519442/image.jpg",
    },
    {
      id: 37,
      brand: "Mercedes",
      model: "GT Coupè",
      price: "$40,000",
      image:
        "https://www.padovastar.it/data_files/custom_listing/npd-classe-a-thxqxx.webp",
    },
    {
      id: 38,
      brand: "Mercedes",
      model: "Classe S",
      price: "$45,000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDu8accmjMVdF_wOGkWGuALQljtAXs3HvF_0fZHahIjtj1mHttiImKev5c06plPaBTxE&usqp=CAU",
    },
    {
      id: 39,
      brand: "Mercedes",
      model: "Hybrid",
      price: "$42,000",
      image:
        "https://web.imgstore.it/ec9a7fbd1aca4b7eb2b1d15cf8246269_orig.jpg",
    },
    {
      id: 40,
      brand: "Mercedes",
      model: "Classe A",
      price: "$80,000",
      image:
        "https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2022/11/mercedes_a_amg_ant_0.png?itok=54bVPTUM",
    },
  ];

  const handleCarSelection = (car) => {
    setSelectedCar(car);
    setLeftCardWidth("10rem");
  };

  return (
    <div>
      <NavBar />
      <h2 className="texta">Scegli l'auto dei tuoi sogni:</h2>
      <Row>
        <Col sm={selectedCar ? 6 : 12} className="leftpart">
          <Row className="cars">
            {cars.map((car, index) => (
              <Col key={car.id} md={2} className="mb-3 ms-2">
                <Card style={{ width: "14rem" }}>
                  <Card.Img
                    variant="top"
                    src={car.image}
                    alt={car.model}
                    className="car-image"
                    height={180}
                  />
                  <Card.Body>
                    <Card.Title className="text">
                      {car.brand} {car.model}
                    </Card.Title>

                    <Button
                      variant="primary"
                      onClick={() => handleCarSelection(car)}
                    >
                      Acquista
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        {selectedCar && (
          <Col sm={6} className="rightpart">
            <div className="selected-car">
              <h3 className="textt">Hai selezionato:</h3>
              <img
                src={selectedCar.image}
                alt={selectedCar.model}
                className="selected-car-image"
                height={200}
                width={300}
              />
              <p className="textby">Marca: {selectedCar.brand}</p>
              <p className="textby">Modello: {selectedCar.model}</p>
              <p className="textby">Prezzo: {selectedCar.price}</p>
              <div className="color">
                <Form.Label htmlFor="exampleColorInput">
                  Scegli il colore:
                </Form.Label>
                <Form.Control
                  type="color"
                  className="colorpic"
                  id="exampleColorInput"
                  defaultValue="#563d7c"
                  title="Choose your color"
                />
              </div>
              <div>
                <Form.Select
                  aria-label="Default select example"
                  className="alimentazione"
                >
                  <option>Scegli il tipo di Alimentazione :</option>
                  <option value="1">Benzina</option>
                  <option value="2">Diesel</option>
                  <option value="3">Elettrica</option>
                  <option value="3">Ibrido</option>
                </Form.Select>
              </div>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default AcquistaAuto;
