import Hero from "./components/Hero";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import Plans from "./components/Plans";
import NavMovil from "./components/NavMovil";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavMovil></NavMovil>
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <Plans></Plans>
    </>
  );
}

export default App;
