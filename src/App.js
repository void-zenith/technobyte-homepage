import NavBar from "./Components/Navbar/Navbar";
import Mainbody from "./Components/Mainbody/Mainbody";
import "./assets/scss/index.scss";
import Services from "./Components/Services/services";
import OurTeam from "./Components/OurTeam/OurTeam";
import HowWeWork from "./Components/HowWeWork/index";
import FAQ from "./Components/FAQ/faq";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Mainbody />
      <Services />
      <HowWeWork />
      <OurTeam />
      <FAQ />
    </div>
  );
};

export default App;
