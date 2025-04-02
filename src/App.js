import DummyComponent from "./home-page/dummy page/sample"; // "./"
import HeroPageComponent from "./home-page/hero-page/hero-page-component";
import LearnersTodayComponent from "./home-page/learners-today/learners-today";
import OurPromisesComponent from "./home-page/our-promises/our-promises";
import "./index.css";
function App() {
  return (
    <div>
      <HeroPageComponent />
      <LearnersTodayComponent />
      <DummyComponent />
      <OurPromisesComponent />
    </div>
  );
}

export default App;
