import Hero from "./components/Hero";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import Plans from "./components/Plans";
import NavMovil from "./components/NavMovil";
import Spiner from "./components/spiner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";

function App() {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    AOS.init();
    setTimeout(() => {
      setloading(false)
    }, 1500);
  }, []);

  return (
    <div>
      {loading && <Spiner />}
      <div className={loading ? "hidden" : ""}>
        <NavMovil></NavMovil>
        <NavBar></NavBar>
        <Hero></Hero>
        <Services></Services>
        <Plans></Plans>
      </div>
    </div>
  );
}

export default App;
