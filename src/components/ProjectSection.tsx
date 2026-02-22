import type { Project } from "../types/project";
import { projects } from "../data/projects";

export default function ProjectSection({
  onSelect
}:{onSelect?:(p:Project)=>void}) {

  return(
          <section
        style={{

          padding: "80px 0",
        }}
        id="skills"
      >
    <div className="personalProjectSection" >
        <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
          <div className="personalProject">
            <div className="personalProjectLeft">
              <p style={{ margin: 0, fontSize: 36, color: "#3153aa" }}>
                PERSONAL
              </p>
              <p style={{ margin: 0, fontSize: 36, color: "#3153aa" }}>PROJECT</p>
            </div>

            <div className="personalProjectRight">
              {projects.map((p) => (
                <div
                  className="projectCard"
                  key={p.title}
                  style={{
                    border: "1px solid #ddd",
                    padding: 20,
                    borderRadius: 10,
                    cursor: "pointer",
                    marginBottom: 15,
                    position: "relative",
                    width: "70%"
                  }}
                  onClick={() => onSelect?.(p)}
                >
                  <div
                    className="cardOverlay"
                    style={{
                      backgroundImage: `url(${p.image})`
                    }}
                  />
                  <h3 style={{ marginTop: 1 }}>{p.title}</h3>
                  <h4 style={{ marginTop: 1 }}>{p.subTitle}</h4>
                  <div
                    style={{

                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      columnGap: 20,
                      rowGap: 4,
                      marginTop: 8

                    }}
                  >

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