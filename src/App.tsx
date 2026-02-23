import { useState } from "react";
import type { Project } from "./types/project";
import TopBar from "./components/TopBar";
import ProfileSection from "./components/Profile";
import SkillSection from "./components/SkillSection"
import ProjectSection from "./components/ProjectSection"
import ProjectModal from "./components/ProjectModal";
import Experience from "./components/Experience";
import Architecture from "./components/Architecture"
import { projectDetails } from "./data/projectDetails";


export default function App() {


  const [selectProject, setSelected] = useState<Project | null>(null);
  const [openArchitecture, setOpenArchitecture] = useState(false);
  const move = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>

      <TopBar move={move} />

      <div id="profile"></div>
      <ProfileSection />

      <div id="techStack"></div>
      <SkillSection />

      <div id="personalProject"> </div>
      <ProjectSection onSelect={(p) => setSelected(p)} />

      {selectProject &&
        <ProjectModal
          selected={selectProject}
          close={() => setSelected(null)}
          openArchitecture={() => setOpenArchitecture(true)}
        />}


      <div id="experience"></div>
      <Experience />

      <div style={{ display: "flex" }}>
        {openArchitecture && selectProject && (
          <Architecture
            imageSrc={projectDetails[selectProject.projectId].architecture}
            close={() => setOpenArchitecture(false)}
          />
        )}
      </div>

    </div>
  );
}