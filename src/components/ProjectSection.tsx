import type { Project } from "../types/project";
import { projects } from "../data/projects";


export default function ProjectSection({
  onSelect
}:{onSelect?:(p:Project)=>void}) {

  return(
          <section
        className="section-block section-block--personal"
        id="personalProject"
      >
    <div className="personalProjectSection" >
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className="personalProject">
            <div className="personalProjectLeft">
              <p className="section-label" style={{ margin: 0, fontSize: 36, color: "#3153aa" }}>
                PERSONAL
              </p>
              <p className="section-label" style={{ margin: 0, fontSize: 36, color: "#3153aa" }}>PROJECT</p>
            </div>

            <div className="personalProjectRight">
              {projects.map((p) => (
                <div
                  className="projectCard project-card-surface"
                  key={p.title}
                  style={{
                    border: "1px solid #ddd",
                    padding: 20,
                    borderRadius: 10,
                    cursor: "pointer",
                    marginBottom: 15,
                    position: "relative",
                  }}
                  onClick={() => onSelect?.(p)}
                >
  <div className="cornerRibbon">
    <span>CLICK</span>
  </div>
  
                  <div
                    className="cardOverlay"
                    style={{
                      backgroundImage: `url(${p.image})`
                    }}
                  />
                  <h3 style={{ marginTop: 1 }}>{p.title}</h3>
                  <h4 style={{ marginTop: 1 }}>{p.subTitle}</h4>
                  <div className="project-card-desc-grid">

                    {
                      p.desc.map((t) => (
                        <p
                          key={t}
                          style={{
                            marginLeft: 10,
                            fontSize: 12,
                          }}
                        >
                          {"· " + t}
                        </p>
                      ))
                    }

                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6
                    }}
                  >
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "#eee",
                          padding: "4px 10px",
                          marginRight: 5,
                          borderRadius: 6,
                          fontSize: 12,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
  )
}