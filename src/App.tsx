import { useState } from "react";
import { FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

type Project = {
  projectId: string
  title: string;
  subTitle: string;
  desc: string[];
  tech: string[];
  image: string;
};

type ProjectDetail = {
  projectId: string;
  gif: string;
  architecture: string;
  summary: string[];
  techDetail: string[];
};


const projectDetails: Record<string, ProjectDetail> = {
  standAloneApp: {
    projectId: "standAloneApp",
    gif: "/holoseogiapp.gif",
    architecture: "/arch1.png",
    summary: [
      `1인 가구 라이프스타일 증가에 아이디어를 얻어, 설계 및 제작한 
구독형 개인 관리 플랫폼입니다. 현재 Appstore에 출시 되어 있습니다.

일정·식자재·식물 관리 데이터를 통합 관리하며, 사용자가 보유한 식자재 정보를
기반으로 OpenAI LLM을 활용한 AI 레시피 추천 기능을 제공합니다.

Firebase 인증 이후 서버 JWT 재발급 구조를 적용하여
클라이언트 의존도를 낮추고 서버 중심 인증 흐름으로 설계했습니다.`


    ],

    techDetail: [
      "App Store 구독형 결제 서버 검증 로직 연동",
      "iOS 배포 및 App Store 심사 대응 구조 경험",
      "Spring Boot 기반 REST API 서버 설계 및 구현",
      "Firebase Auth + UID 기반 서버 JWT 재발급 인증 구조 설계",
      "SecureStorage 기반 토큰 관리 및 인증 흐름 구현",
      "JPA + MyBatis 혼합 데이터 접근 구조 설계",
      "AWS EC2 환경 Docker 컨테이너 운영",
      "Nginx  기반 HTTPS 배포 구성",
      "GitHub Actions 기반 무중단 배포 파이프라인 구축",
      "Firebase FCM 알림 시스템 연동",
      "OpenAI LLM 기반 식자재 추천 AI 기능 구현",
            "OpenAI LLM 기반 식자재 추천 AI 기능 구현",
                  "OpenAI LLM 기반 식자재 추천 AI 기능 구현",
                        "OpenAI LLM 기반 식자재 추천 AI 기능 구현",
                              "OpenAI LLM 기반 식자재 추천 AI 기능 구현",
                                    "OpenAI LLM 기반 식자재 추천 AI 기능 구현",
                                          "OpenAI LLM 기반 식자재 추천 AI 기능 구현",
    ]
  },

  standAloneWeb: {
    projectId: "standAloneWeb",
    gif: "/gif2.gif",
    architecture: "/arch2.png",
    summary: ["관리자 트래픽 분석 콘솔"],
    techDetail: [
      "React Hook 구조",
      "API Layer 분리"
    ]
  },

  mesApp: {
    projectId: "mesApp",
    gif: "/gif3.gif",
    architecture: "/arch3.png",
    summary: ["사내 PoC 채택 모바일 MES"],
    techDetail: [
      "Producer Retry Logic",
      "Consumer DLQ 처리",
      "Biometric Signing Flow"
    ]
  }
};

export default function App() {


  const [selected, setSelected] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      projectId: "standAloneApp",
      title: "홀로서기 앱",
      subTitle: "구독형 개인 관리 서비스",
      desc: [
        "개인 구독형 SaaS 서비스",
        "App Store 출시 및 운영",
        "Firebase UID 기반 JWT 인증",
        "Spring Boot REST API 설계",
        "AWS Docker CI/CD 자동 배포",
        "OpenAI LLM 레시피 추천",
        "운영 환경 중심 아키텍처"
      ],
      tech: [
        "SpringBoot",
        "Flutter",
        "JPA",
        "MyBatis",
        "JWT",
        "AWS EC2",
        "Docker",
        "GitHub Actions",
        "FCM"
      ],
      image: "/holoseogiImage.jpg"
    },

    {
      projectId: "standAloneWeb",
      title: "홀로서기 어드민 웹",
      subTitle: "운영 관리용 관리자 웹 콘솔",
      desc: [
        "관리자 전용 웹 콘솔",
        "JWT 기반 관리자 인증 구조",
        "트래픽 대시보드 시각화",
        "React TypeScript UI 설계",
        "Nginx Docker 정적 배포",
        "CI/CD 자동화 구축"
      ],
      tech: [
        "React",
        "TypeScript",
        "REST API",
        "JWT",
        "Recharts",
        "Docker",
        "Nginx",
        "GitHub Actions"
      ],
      image: "/holoseogiWebImage.png"
    },
    {
      projectId: "mesApp",
      title: "모바일 MES",
      subTitle: "사내 PoC 제안 및 검증 후 채택된 모바일 MES",
      desc: [
        "Kafka 기반 외부 시스템 인터페이스 구성",
        "Producer/Consumer 상태 추적 로직 설계",
        "Queue 기반 메시지 안정성 처리",
        "생체인증 전자서명 프로세스 구현",
        "바코드 리딩 기반 현장 업무 지원",
        "실서비스 트랜잭션 흐름 반영"
      ],
      tech: [
        "Spring Boot",
        "Flutter",
        "Kafka",
        "WebSocket",
        "JWT",
        "MyBatis",
        "Stored Procedure",
        "Queue Pattern",
        "SQLite",
        "Biometric Auth",
        "FCM"
      ],
      image: "/mesApp.png"
    },
  ];


  const move = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const selectedDetail =
    selected ? projectDetails[selected.projectId] : null;

  const [openTech, setOpenTech] = useState(false);

  return (
    <div>
      {/* ================= TOP BAR ================= */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 60,
          background: "#ffffff",
          borderBottom: "1px solid #eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          zIndex: 1000,
        }}
      >
        <div style={{ fontWeight: 20, fontSize: 20 }}>Portfolio</div>

        <div style={{ display: "flex", gap: 20, cursor: "pointer" }}>
          <span onClick={() => move("profile")}>Profile</span>
          <span onClick={() => move("skills")}>Skills</span>
          <span onClick={() => move("projects")}>Projects</span>
          <span onClick={() => move("history")}>History</span>
        </div>
      </div>



      {/* ================= profile ================= */}

      <div className="heroSection">
        <div style={{

          paddingTop: 0,
          paddingBottom: 40,
          justifyContent: "center",
          display: "flex",
        }}>
          <div className="profile" >


            <div className="profileLeft">
              <img
                src="profilePicture.jpg"
                alt="Profile"
                style={{ width: "100%", height: "auto"}}
              />
            </div>

            <div className="profileRight">
              <p style={{ margin: 0, fontSize: 50, color: "#3153aa" }}>
                박정현
                <span style={{ marginLeft: 10, fontSize: 14, color: "#5a5a5c" }}>1997.10.24</span></p>
              <p style={{ color: "#3153aa" }}>Backend Engineer</p>

              <div style={{ marginTop: 30 }}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: 1,

                  padding: 1,
                  gap: 5
                }}>
                  <div><FaEnvelope color="#3153aa" /><span style={{ marginLeft: 12 }}>usael@naver.com</span></div>
                  <div><FaGithub color="#3153aa" /><span style={{ marginLeft: 12 }}>https://github.com/Jusael</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          justifyContent: "center",
          display: "flex",
        }}>
          <div className="inproduce"
            style={{
            }}>

            <div className="inproduceLeft" style={{ marginTop: 0 }}>
              <p style={{
                margin: 0,
                fontSize: 36,
                color: "#3153aa",

              }}>
                SUMMARY</p>
            </div>

            <div className="inproduceRight"
            >

              <p className="summaryText">
                {
                  `운영 환경까지 고려한 설계를 지향하는 백엔드 개발자입니다.

MES/WMS/RWS/GMP 일련번호 추적관리 우수 의약품 제조·관리 기준 프로젝트를 수행하며 복잡한 도메인 구조 속에서
안정성과 유지보수성, 대용량 데이터 처리, 데이터 무결성, 기능 고도화, 타 서비스와의 인터페이스 중심으로 시스템을 개발해왔습니다.
데이터 흐름과 트랜잭션 구조를 개선 하며 실제 운영 환경에서의 문제 해결과 성능 개선을 경험했습니다.

현재는 Spring Boot 기반으로 기술 스택을 확장하며 다양한 도메인 경험을 쌓고 있습니다.
개인 구독형 SaaS 프로젝트 ‘홀로서기’를 App Store에 출시하여
JWT 인증 구조와 CI/CD 자동 배포 환경을 직접 설계하고 운영하고 있습니다.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skillSection">
        {/* ================= TECH STACK ================= */}
        <section style={{
          background: "#f7f7f7",
          padding: "80px 0",
        }} id="skills">
          <div style={{

            justifyContent: "center",
            display: "flex"
          }}>

            <div className="skill" style={{
            }}>
              <div className="skillLeft"
                style={{
                }}>
                <p style={{
                  margin: 0,
                  fontSize: 36,
                  color: "#3153aa",

                }}>
                  TECH STACK</p>
              </div>

              <div className="skillRight">
                <p style={{ marginTop: 0, lineHeight: 1.7, fontSize: 24, color: "gray" }}>
                  <b>Backend</b> —
                </p>

                <p style={{ marginLeft: 25, marginTop: -10 }}>Java · JPA · Spring Boot · MyBatis · JWT · REST API · C#  · ASP.NET</p>

                <p style={{ lineHeight: 1.7, fontSize: 24, color: "gray" }}>
                  <b>Database</b> —
                </p>

                <p style={{ marginLeft: 25, marginTop: -10 }}> SQL Server · MySQL · Query Optimization</p>

                <p style={{ lineHeight: 1.7, fontSize: 24, color: "gray" }}>
                  <b>Infra</b> —
                </p>

                <p style={{ marginLeft: 25, marginTop: -10 }}>AWS EC2 · Docker · Nginx · GitHub Actions · CI/CD</p>

                <p style={{ lineHeight: 1.7, fontSize: 24, color: "gray" }}>
                  <b>Integration</b> —
                </p>

                <p style={{ marginLeft: 25, marginTop: -10 }}>Kafka · WebSocket · Firebase FCM · OpenAI API</p>

                <p style={{ lineHeight: 1.7, fontSize: 24, color: "gray" }}>
                  <b>Frontend</b> —
                </p>

                <p style={{ marginLeft: 25, marginTop: -10 }}>React · TypeScript · Dart · Flutter</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= PROJECT ================= */}

      <div className="personalProjectSection">
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
                  onClick={() => setSelected(p)}
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

      {/* ================= EXPERIENCE ================= */}
      <section id="history" style={{ background: "#f7f7f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <h2>EXPERIENCE</h2>

          <div style={{ marginBottom: 20 }}>
            <h4>2025 — MES 프로젝트</h4>
            <p>제조 MES 백엔드 개발 및 ERP 인터페이스 구축</p>
          </div>

          <div>
            <h4>2024 — WMS/PBS 프로젝트</h4>
            <p>현장 인터페이스 개발 및 운영 개선</p>
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selected
        && (
          <div
            onClick={() => setSelected(null)}

            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          <div
  onClick={(e) => e.stopPropagation()}
  style={{
    background: "white",
    padding: 30,
    width: 900,
    maxWidth: "55vw",
    borderRadius: 10,
    maxHeight: "72h",
    overflowY: "auto"
  }}
>
              <div
                style={{
                  margin: "-30px -30px 20px -30px",
                  padding: "18px 30px",
                  background: "#395a9d",
                  color: "white",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  fontSize: 20,
                  fontWeight: 600
                }}
              >
                {selected.title}
              </div>
              {selectedDetail && (
                <>
                  <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
                    <div style={{ width: "30%", }}>
                      <img
                        src={selectedDetail.gif}
                        style={{ width: "100%", height: "100%", borderRadius: 10, marginTop: 10 }}
                      />
                    </div>

                    <div style={{ width: "70%", display: "flex", flexDirection: "column", }}>
                      <h4 style={{ marginBottom: 0 }}>Summary</h4>
                      <div
                        style={{
                          width: "100%",
                          height: 1,
                          background: "#e5e5e5",
                          marginTop: 0
                        }}
                      />

                      <div style={{ marginTop: 3, whiteSpace: "pre-line" }}>
                        {selectedDetail.summary}
                      </div>

                      <h4 style={{ marginBottom: 0 }}>Architecture</h4>
                      <div
                        style={{
                          width: "100%",
                          height: 1,
                          background: "#e5e5e5",
                          marginTop: 0
                        }}
                      />
                      
                      <div>{selectedDetail.architecture}</div>

                   <h4
  style={{ marginBottom: 0, cursor: "pointer" }}
  onClick={() => setOpenTech(!openTech)}
>
  Tech Detail {openTech ? "▲" : "▼"}
</h4>

<div
  style={{
    width: "100%",
    height: 1,
    background: "#e5e5e5",
    marginTop: 0
  }}
/>

{openTech && (
  <div style={{ marginTop: 5, fontSize: 14, marginLeft: 10 }}>
    {selectedDetail.techDetail.map(t => (
      <div key={t}>· {t}</div>
    ))}
  </div>
)}
                    </div>
                  </div>
                </>
              )}



              <button
                style={{ marginTop: 20 }}
                onClick={() => setSelected(null)}
              >
                닫기
              </button>
            </div>
          </div>
        )}
    </div>
  );
}