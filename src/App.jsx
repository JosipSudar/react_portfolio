import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import HeadComponent from "./components/HeadComponent";
import HeroComponent from "./components/HeroComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import SkillsComponent from "./components/SkillsComponent";

const App = () => {
  return (
    <>
      <HeadComponent />
      <HeroComponent />
      <ProjectsComponent />
      <SkillsComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
};

export default App;
