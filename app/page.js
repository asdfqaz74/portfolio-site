import Header from "./components/Header";
import Typing from "./components/Typing";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/AboutMe/Contact";
import HorizonLine from "./components/HorizonLine";
import Archive from "./components/Archive";
import Education from "./components/Education";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <Typing />
      <HorizonLine color={"bg-gray-300"} />
      <AboutMe />
      <Contact />
      <Archive />
      <HorizonLine color={"bg-gray-300"} />
      <Education />
      <Skills />
      <HorizonLine color={"bg-gray-300"} />
      <Portfolio />
    </div>
  );
}
