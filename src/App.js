import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "../src/components/NavBar";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Header />
    </>
  );
}

export default App;
