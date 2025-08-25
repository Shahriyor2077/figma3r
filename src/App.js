import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/servcie/Service";
import Testimonials from "./components/testimonials/Testimonials";
import Trusted from "./components/trusted/Trusted";
import "./index.css"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Trusted/>
      <Service/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
