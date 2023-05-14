import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderComponent } from "./Components/HeaderComponent";
import { SliderComponent } from "./Components/SliderComponent";
import { AboutMeComponent } from "./Components/AboutMeComponent";
import { ProjectsComponent } from "./Components/ProjectsComponent";
import { FormationComponent } from "./Components/FormationComponent";
import { ResumeComponent } from "./Components/ResumeComponent";
import { ContactMeComponent } from "./Components/ContactMeComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <SliderComponent />
      <AboutMeComponent />
      <ProjectsComponent />
      <FormationComponent />
      <ResumeComponent />
      <ContactMeComponent />
    </>
  );
}

export default App;
