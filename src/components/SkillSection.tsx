export default function SkillSection() {
  return (
    <div className="skillSection">
      <section
        className="section-block"
        style={{
          background: "#f7f7f7",
        }}
        id="techStack"
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div className="skill">
            <div className="skillLeft">
              <p
                className="section-label"
                style={{
                  margin: 0,
                  fontSize: 36,
                  color: "#3153aa",
                }}
              >
                TECH STACK
              </p>
            </div>

            <div className="skillRight">
              <p className="skill-cat" style={{ marginTop: 0 }}>
                <b>Backend</b> —
              </p>

              <p className="skill-list">
                Java · JPA · Spring Boot · MyBatis · JWT · REST API · C# · ASP.NET
              </p>

              <p className="skill-cat-spaced">
                <b>Database</b> —
              </p>

              <p className="skill-list">
                SQL Server · MySQL · Query Optimization
              </p>

              <p className="skill-cat-spaced">
                <b>Infra</b> —
              </p>

              <p className="skill-list">
                AWS EC2 · Docker · Nginx · GitHub Actions · CI/CD
              </p>

              <p className="skill-cat-spaced">
                <b>Integration</b> —
              </p>

              <p className="skill-list">
                Kafka · WebSocket · Firebase FCM · OpenAI API
              </p>

              <p className="skill-cat-spaced">
                <b>Frontend</b> —
              </p>

              <p className="skill-list">
                React · TypeScript · Dart · Flutter
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}