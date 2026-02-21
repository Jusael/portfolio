import { useState } from "react";
import type { Project } from "./types/project";
import TopBar from "./components/TopBar";
import ProfileSection  from "./components/Profile";
import SkillSection from "./components/SkillSection"
import ProjectSection from "./components/ProjectSection"
import ProjectModal from "./components/ProjectModal";
import Experience from "./components/Experience";




export default function App() {


  const [selectProject, setSelected] = useState<Project | null>(null);
  
  const move = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>

      <TopBar move={move} />

      <ProfileSection />

      <SkillSection/>

      <ProjectSection onSelect={(p) => setSelected(p)} />

      {selectProject &&
      <ProjectModal selected={ selectProject} close={() => setSelected(null)}/>}


      <Experience/>

    </div>
  );
}