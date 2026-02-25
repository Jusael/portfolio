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
    summary: "GMP 기반 MES/WMS 백엔드 개발 및 인터페이스 아키텍처 설계",

    works: [
      {
        title: "휴젤 바이오 URS 2차 개발",
        date: "2025.08 ~ 2025.12",
        desc: [
          "원·자재/반제품/완제품 Holding 프로세스 설계 및 구현 (공정 흐름 제어)",
          "LIMS 인터페이스 조율 및 데이터 연동 개발",
        ],
      },

      {
        title: "다산제약 WMS 완제품 모듈 고도화",
        date: "2025.07 ~ 2025.08",
        desc: [
          "대용량 Excel 업로드 병목을 트랜잭션 분리 및 인덱스 최적화로 개선 (70% 단축)",
          "반품 완제품 재출하 프로세스 신규 구현",
          "수입 의약품 전용 관리 프로그램 설계 및 개발",
        ],
      },

      {
        title: "하나제약 통합 MES 프로젝트",
        date: "2025.03 ~ 2025.07",
        desc: [
          "SAP 인터페이스 구축 및 MES ↔ SAP 생산·출하 데이터 연동",
          "RS-232 저울 연동 구조를 설비 마스터 기반 동적 매핑으로 개선",
          "재포장 프로세스 설계로 반제품 재고 활용도 향상",
        ],
      },

      {
        title: "케이바이오 원·자재 WMS 프로젝트",
        date: "2024.12 ~ 2025.03",
        desc: [
          "현재 재고·시험 재고를 통합 반영한 생산 가능 배치 예측 기능 구현",
        ],
      },

      {
        title: "녹십자 오창 PBS 프로젝트",
        date: "2023.12 ~ 2024.06",
        desc: [
          "다중 사용자 스캔 누락 문제를 Thread + Delegate 기반 동시 처리 구조로 개선",
          "출하 속도 안정화 및 동시 작업 효율 약 30% 향상",
        ],
      },

      {
        title: "녹십자 화순 WMS 프로젝트",
        date: "2023.04 ~ 2023.10",
        desc: [
          "발주 데이터 연계 및 발주서 첨부 기능 개발로 문서 추적성 강화",
          "폴링 기반 대시보드 구현으로 재고·적치 현황 가시성 개선",
        ],
      },

      {
        title: "휴젤 WMS URS 프로젝트",
        date: "2022.11 ~ 2022.12",
        desc: [
          "현장 검증 기반 개선 프로세스 반영 및 운영 환경 최적화",
        ],
      },

      {
        title: "MES Mobile PoC 및 개인 프로젝트",
        date: "2024 ~ 2025",
        desc: [
          "MES 모바일 PoC 설계 및 사내 채택",
          "개인 프로젝트 '홀로서기' AppStore 출시 및 운영",
        ],
      },
    ],
  },

  {
    company: "GST",
    period: "2021.08 ~ 2022.01",
    summary: "ERP 사용자 요구사항 기반 기능 개발",
    works: [
      {
        title: "ERP 유지보수 및 기능 개발",
        date: "2021",
        desc: [
          "업무 요청 기반 신규 화면 개발 및 기존 기능 개선",
        ],
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
                            width: 2,
                            background: "#747474",
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