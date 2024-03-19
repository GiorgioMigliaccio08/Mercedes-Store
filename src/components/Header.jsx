import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Epoca from "../assets/MercedesEpoca.jpg";
import "../App.css";

const Header = () => {
  return (
    <div className="container mt-3 mb-3 bg-light">
      <div className="row">
        <div className="col-md-6">
          <img src={Epoca} alt="Mercedes D'epoca" className="img-fluid mt-5" />
        </div>
        <div className="col-md-6">
          <h2 className="text text-center">La storia</h2>
          <p className="text">
            Nel corso del tardo XIX secolo, l'industria automobilistica stava
            iniziando a prendere forma, alimentata dall'ingegno di pionieri
            visionari e imprenditori audaci. Uno di questi uomini era Karl Benz,
            un ingegnere tedesco noto per aver costruito il primo veicolo a
            motore alimentato a benzina. Nel 1886, Benz presentò il suo
            rivoluzionario "Benz Patent-Motorwagen", il primo veicolo a benzina
            prodotto in serie al mondo.Nel 1883, insieme al suo collaboratore
            Wilhelm Maybach, Daimler riuscì a sviluppare un motore a benzina
            funzionante e compatto, che aprì la strada a nuove possibilità nel
            campo del trasporto su strada. Le strade di Karl Benz e Gottlieb
            Daimler si incrociarono indirettamente quando, nel 1890,
            Daimler-Motoren-Gesellschaft venne fondata da Gottlieb Daimler e
            Wilhelm Maybach per commercializzare i motori sviluppati da Daimler.
            Nel frattempo, Karl Benz continuava a sviluppare e migliorare i suoi
            veicoli a motore. Nel 1926, le due società, DMG e Benz & Cie., si
            unirono per formare la Daimler-Benz AG, dando vita al marchio
            Mercedes-Benz. Il nome "Mercedes" derivava da un'automobile creata
            da Emil Jellinek, un imprenditore austriaco che divenne uno dei
            primi e più influenti clienti di Daimler. Jellinek chiamò la sua
            auto "Mercedes", in onore di sua figlia, e il nome divenne così
            iconico che venne adottato come marchio per i veicoli prodotti dalla
            nuova società.
          </p>
        </div>
      </div>
      <div className="row">
        <h2 className="text  mt-4 mb-3 text-center"> Novità</h2>
        <div className="col-md-3 mb-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              height={220}
              variant="top"
              src="https://www.mercedes-benz.it/content/italy/it/passengercars/brand/chi-siamo/il-futuro/_jcr_content/root/responsivegrid/simple_stage_copy_co.component.damq1.3355246544513.jpg/vision-avtr.jpg"
            />
            <Card.Body className="text text-center">
              <Card.Title>Elettrica</Card.Title>
              <Card.Text>
                Vieni a scoprire i nuovi modelli mercedes Eco-Green, per un
                maggiore risparmi edel consumi.
              </Card.Text>
              <Button variant="primary">Sopri!</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              height={220}
              variant="top"
              src="https://hd2.tudocdn.net/938555?w=1200&h=900"
            />
            <Card.Body className="text text-center">
              <Card.Title>Suv e Fuoristrada</Card.Title>
              <Card.Text>
                I nostri nuovi modelli Suv ti permettono di non avere confini
                alle tue avventure oltre natura!
              </Card.Text>
              <Button variant="primary">Sopri!</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              height={220}
              variant="top"
              src="https://www.ansa.it/webimages/img_620x438/2018/2/4/add21c0063f47b98f3d1b7b9bc71c949.jpg"
            />
            <Card.Body className="text text-center">
              <Card.Title>Nuova Classe A</Card.Title>
              <Card.Text>
                Vieni a scoprire i nuovi modelli Mercedes classe A, per un
                maggiore confort alla guida.
              </Card.Text>
              <Button variant="primary">Sopri!</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              height={220}
              variant="top"
              src="https://rcs.cdn.publieditor.it/w640/M1710_01.jpg"
            />
            <Card.Body className="text text-center">
              <Card.Title>Berline</Card.Title>
              <Card.Text>
                Vieni a scoprire i nuovi modelli Mercedes Berlina, maggiore
                confort per tutta la famiglia.
              </Card.Text>
              <Button variant="primary">Sopri!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <h2 className="text  mt-4 mb-3 text-center"> Gamma Mercedes-Benz</h2>
        <div className="col-md-3 mb-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              height={220}
              variant="top"
              src="https://www.mercedes-benz.it/content/italy/it/passengercars/models/hatchback/w177-fl-23-2/overview/_jcr_content/root/responsivegrid/tabs_515631913/tabitem/hotspot_module/hotspot_simple_image.component.damq1.3381269523515.jpg/mercedes-benz-a-class-w177-equipment-multimedia-simple-hotspot-3302x1858-03-2023.jpg"
            />
            <Card.Body className="text text-center">
              <Card.Title>Interni</Card.Title>
              <Card.Text>
                Gli interni Mercedes sono stati fin da sempre caratterizzati da
                mordernità senza confronti.
              </Card.Text>
              <Button variant="primary">Sopri!</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              height={220}
              variant="top"
              src="https://i.ebayimg.com/images/g/F0QAAOSwf05d4~wK/s-l1200.webp"
            />
            <Card.Body className="text text-center">
              <Card.Title>Freni</Card.Title>
              <Card.Text>
                I nostri modelli mercedes sono equipaggiati di ottimi freni per
                carantire maggior confort.
              </Card.Text>
              <Button variant="primary">Sopri!</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              height={220}
              variant="top"
              src="https://www.trivellato.it/data_files/pages/3204da6-autotelaio-sospensioni-attive-mercedes.jpg"
            />
            <Card.Body className="text text-center">
              <Card.Title>Sospensioni</Card.Title>
              <Card.Text>
                I nostri modelli mercedes sono equipaggiati di sospensioni per
                carantire maggior confort.
              </Card.Text>
              <Button variant="primary">Sopri!</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mb-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              height={220}
              variant="top"
              src="https://img.sm360.ca/ir/w770/images/article/mercedes-benz-ottawa/114964//2022-02-27_image_22c0128-040-source1685547571199.jpg"
            />
            <Card.Body className="text text-center">
              <Card.Title>Hybrid</Card.Title>
              <Card.Text>
                La nuova gamma Hybrid equipaggiata da interni ancora più
                modernizzati.
              </Card.Text>
              <Button variant="primary">Sopri!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Header;
