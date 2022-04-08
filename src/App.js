import About from "./components/About/About";
import Contagion from "./components/Contagion/Contagion";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Solutions from "./components/Solutions/Solutions";
import Symptoms from "./components/Symptoms/Symptoms";
import "./styles/Global.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Contagion />
      <Symptoms />
      <Solutions />
    </div>
  );
}

export default App;
