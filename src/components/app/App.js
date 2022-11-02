import { AboutMe } from "../aboutme/AboutMe";
import { DifferentInfo } from "../differentInfo/DifferentInfo";
import { Faq } from "../faq/Faq";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Structure } from "../structure/Structure";
import { Tarrifs } from "../tarrifs/Tarrifs";
import { Video } from "../video/Video";
import cl from "./App.module.css"

function App() {
  return (
    <div className={cl.app}>
      <Header/>
      <AboutMe/>
      <Video/>
      <DifferentInfo/>
      <Structure/>
      <Tarrifs/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
