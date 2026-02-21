export default function SkillSection() {
  return (
    <div className="skillSection">
      <section
        style={{
          background: "#f7f7f7",
          padding: "80px 0",
        }}
        id="skills"
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div className="skill">
            <div
              className="skillLeft"
              style={{}}
            >
              <p
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
              <p
                style={{
                  marginTop: 0,
                  lineHeight: 1.7,
                  fontSize: 24,
                  color: "gray",
                }}
              >
                <b>Backend</b> —
              </p>

              <p style={{ marginLeft: 25, marginTop: -10 }}>
                Java · JPA · Spring Boot · MyBatis · JWT · REST API · C# · ASP.NET
              </p>

              <p
                style={{
                  lineHeight: 1.7,
                  fontSize: 24,
                  color: "gray",
                }}
              >
                <b>Database</b> —
              </p>

              <p style={{ marginLeft: 25, marginTop: -10 }}>
                SQL Server · MySQL · Query Optimization
              </p>

              <p
                style={{
                  lineHeight: 1.7,
                  fontSize: 24,
                  color: "gray",
                }}
              >
                <b>Infra</b> —
              </p>

              <p style={{ marginLeft: 25, marginTop: -10 }}>
                AWS EC2 · Docker · Nginx · GitHub Actions · CI/CD
              </p>

              <p
                style={{
                  lineHeight: 1.7,
                  fontSize: 24,
                  color: "gray",
                }}
              >
                <b>Integration</b> —
              </p>

              <p style={{ marginLeft: 25, marginTop: -10 }}>
                Kafka · WebSocket · Firebase FCM · OpenAI API
              </p>

              <p
                style={{
                  lineHeight: 1.7,
                  fontSize: 24,
                  color: "gray",
                }}
              >
                <b>Frontend</b> —
              </p>

              <p style={{ marginLeft: 25, marginTop: -10 }}>
                React · TypeScript · Dart · Flutter
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}