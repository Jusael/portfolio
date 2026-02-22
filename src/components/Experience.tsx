type ExperienceBlock = {
  company: string;
  period: string;
  summary: string;
  works: {
    title: string;
    date?: string;
    desc: string[]; // ✅ string -> string[] 로 변경
  }[];
};

export default function Experience() {
  const data: ExperienceBlock[] = [
    {
      company: "GAMPIT",
      period: "2022.02 ~ 2026.02",
      summary: "GMP 기반 MES/WMS 시스템 개발 및 운영 구조 설계",
      works: [
        {
          title: "통합 MES 및 WMS 고도화 프로젝트 진행",
          date: "2025",
          desc: [
            "SAP 인터페이스 · 인터페이스 큐 기반 운영 구조 개선 및 재전송 로직 구현",
            "GMP 비즈니스 플로우(재포장·Holding) 설계",
            "Mobile MES 아키텍처 설계 및 사내 PoC 채택",
            "(개인 프로젝트) ‘홀로서기’ AppStore 출시",
          ],
        },
        {
          title: "원/자재 WMS 및 GC녹십자 PBS 시스템 개발",
          date: "2024",
          desc: [
            "동시성 처리 개선 및 생산 배치 모니터링 기능 구현",
            "인터페이스 기반 운영 시스템 개발",
            "표준 코드 정립 및 레거시 리팩토링",
          ],
        },
        {
          title: "GC녹십자 WMS 개발 참여",
          date: "2023",
          desc: ["현장 인터페이스 및 대시보드 운영 기능 개발"],
        },
        {
          title: "바이오 WMS URS 프로젝트 참여",
          date: "2022",
          desc: ["현장 검증 기반 개선 프로세스 보완 및 운영 환경 최적화"],
        },
      ],
    },
    {
      company: "GST",
      period: "2021.08 ~ 2022.01",
      summary: "",
      works: [
        {
          title: "ERP 사용자 요구 기능 개발",
          date: "2021",
          desc: ["업무 요청 기반 기능 수정 및 신규 화면 개발"],
        },
      ],
    },
  ];

  return (
      <section
        style={{
          background: "#f7f7f7",
          padding: "80px 0",
        }}
        id="skills"
      >
      <div style={{ display: "flex", justifyContent: "center", background: "#f7f7f7" }}>
        <div className="skill">
          {/* LEFT */}
          <div className="skillLeft">
            <p style={{ margin: 0, fontSize: 36 ,color: "#3153aa" }}>
              Experience
            </p>
          </div>

          {/* RIGHT */}
          <div className="skillRight">
            <div style={{ display: "flex", flexDirection: "column", gap: 42 }}>
              {data.map((block) => (
                <div key={block.company}>
                  {/* 회사명 */}
                  <div style={{ fontSize: 24, fontWeight: 500 }}>{block.company}</div>

                  {/* 기간 */}
                  <div style={{ color: "#777", fontSize: 14, marginTop: 4 }}>{block.period}</div>

                  {/* 설명 (summary가 비어있으면 공간 안 잡게) */}
                  {block.summary?.trim() && (
                    <div style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6 }}>
                      {block.summary}
                    </div>
                  )}

                  {/* 프로젝트 리스트 */}
                  <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 20 }}>
                    {block.works.map((w) => (
                      <div
                        key={w.title}
                        style={{
                          display: "flex",
                          gap: 14,
                          alignItems: "stretch", 
                        }}
                      >
                        {/* 세로 라인: 항상 항목 높이만큼 */}
                        <div
                          style={{
                            width: 3,
                            background: "#111",
                            borderRadius: 2,
                            alignSelf: "stretch", 
                            marginTop: 2,
                            marginBottom: 2,
                          }}
                        />

                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 700 }}>{w.title}</div>

                          {w.date && (
                            <div style={{ fontSize: 13, color: "#777", marginTop: 2 }}>{w.date}</div>
                          )}

                          {/* desc를 불릿 형태로 */}
                          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                            {w.desc.map((d) => (
                              <div
                                key={d}
                                style={{
                                  fontSize: 14,
                                  lineHeight: 1.6,
                                  display: "flex",
                                  gap: 10,
                                }}
                              >
                                <span style={{ fontWeight: 900 }}>·</span>
                                <span>{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}