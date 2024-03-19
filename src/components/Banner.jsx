import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/MercedesA.jpg";
import img2 from "../assets/MercedesB.jpg";
import img3 from "../assets/MercedesD.jpg";
import img4 from "../assets/MercedesC.jpg";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text">Classe A</h3>
          <p className="text">
            Scopri tutte le nostre vetture in pronta consegna
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h3 className="text">Coupè</h3>
          <p className="text">
            Scopri tutte le nostre vetture in pronta consegna
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="text">Berline</h3>
          <p className="text">
            Scopri tutte le nostre vetture in pronta consegna
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="text">Suv & Fuoristrada</h3>
          <p className="text">
            Scopri tutte le nostre vetture in pronta consegna
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
