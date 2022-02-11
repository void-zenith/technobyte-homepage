import NavBar from "./Components/Navbar/Navbar";
import Mainbody from "./Components/Mainbody/Mainbody";
import { Provider } from "react-redux";
import store from "./store";
import "./assets/css/style.css";
import Services from "./Components/Services/services";
import OurTeam from "./Components/OurTeam/OurTeam";
import HowWeWork from "./Components/HowWeWork/index";
import FAQ from "./Components/FAQ/faq";
import Contact from "./Components/Contact";

import { Provider as ALertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


//alertoptions

const alertOptions = {
  timeout: 300,
  position: 'top center'
}
const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <Mainbody />
      <Services />
      <HowWeWork />
      {/* <OurTeam /> */}
      <FAQ />
      <Contact />
    </Provider>
  );
};

export default App;
