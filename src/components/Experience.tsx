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
    company: "ZeroQuest",
    period: "2026.04 ~ Present",
    summary:
      "중앙 계정·포인트 코어와 다수의 위성 서비스로 구성된 ESG 리워드 플랫폼 백엔드 개발·운영 및 서비스 통합 아키텍처 설계",
    works: [
      {
        title: "멀티 서비스 플랫폼 통합 설계 및 운영",
        date: "2026.04 ~ Present",
        desc: [
          "MSA 기반 통합 로그인(중앙 계정) 구조 설계 및 구현으로 위성 서비스 간 계정 통합",
          "위성 서비스 ↔ 중앙 계정·포인트 연동 구조 설계 및 서비스 간 데이터 정합성 관리",
          "서비스별로 분산된 스택·DB를 정리하고 중앙 코어 기반 통합 리뉴얼 방향 설계",
        ],
      },

      {
        title: "B2B SaaS 전환 및 멀티테넌시 아키텍처 도입",
        date: "2026",
        desc: [
          "기존 B2C 서비스를 B2B SaaS 모델로 전환하며 멀티테넌시(Multi-Tenancy) 구조 설계 및 도입",
          "테넌트별 데이터 격리와 공통 코어 재사용 구조로 서비스 확장성 확보",
        ],
      },

      {
        title: "통합 결제 플로우 설계 및 개발",
        date: "2026",
        desc: [
          "PG사 결제와 인앱결제(IAP)를 통합한 결제 플로우 설계 및 개발",
          "결제 요청 중복 방지를 위한 멱등성(Idempotency) 처리 및 검증 로직 구현",
        ],
      },

      {
        title: "포인트 출금·정산 기능 개발",
        date: "2026",
        desc: [
          "포인트 출금 신청·정산 백엔드 및 관리자 콘솔 기능 설계·구현",
          "출금 내역 관리 구조 및 이메일 알림 연동 구현",
        ],
      },

      {
        title: "NFC 태깅 기반 리워드 데이터 흐름 개발",
        date: "2026",
        desc: [
          "NFC 태깅 기반 적립·리워드 데이터 흐름 설계 및 백엔드 처리 구현",
        ],
      },
    ],
  },

  {
    company: "GAMPIT",
    period: "2022.02 ~ 2026.02",
    summary: "GMP 기반 제조·물류 시스템(MES/WMS) 백엔드 개발 및 시스템 인터페이스 아키텍처 설계",

    works: [
      {
        title: "MES Mobile PoC 및 개인 프로젝트",
        date: "2024 ~ 2025",
        desc: [
          "MES 모바일 PoC 백엔드 구조 설계 및 사내 시연 이후 운영 개선 방향으로 채택",
          "개인 구독형 SaaS 서비스 '홀로서기' Spring Boot 기반 백엔드 개발 및 App Store 출시",
        ],
      },

      {
        title: "휴젤 바이오 URS 2차 개발",
        date: "2025.08 ~ 2025.12",
        desc: [
          "원자재·반제품·완제품 재고 Holding 상태 관리 로직 설계 및 공정 흐름 제어 백엔드 구현",
          "LIMS 시스템 연동 API 설계 및 데이터 인터페이스 개발",
        ],
      },

      {
        title: "다산제약 WMS 완제품 모듈 고도화",
        date: "2025.07 ~ 2025.08",
        desc: [
          "대용량 Excel 업로드 처리 병목을 트랜잭션 분리 및 인덱스 최적화로 개선 (처리시간 약 70% 단축)",
          "반품 완제품 재출하 로직 설계 및 재고 처리 백엔드 구현",
          "수입 의약품 전용 관리 시스템 설계 및 백엔드 기능 개발",
        ],
      },

      {
        title: "하나제약 통합 MES 프로젝트",
        date: "2025.03 ~ 2025.07",
        desc: [
          "MES ↔ SAP 간 생산 및 출하 데이터 인터페이스 API 구축",
          "RS-232 저울 연동 구조를 설비 마스터 기반 동적 매핑 방식으로 개선",
          "재포장 프로세스 로직 설계로 반제품 재고 활용도 향상",
        ],
      },

      {
        title: "케이바이오 원·자재 WMS 프로젝트",
        date: "2024.12 ~ 2025.03",
        desc: [
          "현재 재고 및 시험 재고 데이터를 통합 반영한 생산 가능 배치 예측 로직 구현",
        ],
      },

      {
        title: "녹십자 오창 PBS 프로젝트",
        date: "2023.12 ~ 2024.06",
        desc: [
          "다중 사용자 스캔 이벤트 누락 문제를 Thread 기반 동시 처리 구조로 개선",
          "출하 처리 속도 안정화 및 동시 작업 효율 약 30% 향상",
        ],
      },

      {
        title: "녹십자 화순 WMS 프로젝트",
        date: "2023.04 ~ 2023.10",
        desc: [
          "발주 데이터 연동 및 발주서 첨부 기능 개발로 문서 추적성 개선",
          "폴링 기반 대시보드 구현으로 재고 및 적치 현황 가시성 개선",
        ],
      },

      {
        title: "휴젤 WMS URS 프로젝트",
        date: "2022.11 ~ 2022.12",
        desc: [
          "현장 검증 기반 개선 요구사항 반영 및 운영 환경 최적화",
        ],
      },
    ],
  },

  {
    company: "GST",
    period: "2021.08 ~ 2022.01",
    summary: "ERP 시스템 사용자 요구사항 기반 기능 개발 및 유지보수",
    works: [
      {
        title: "ERP 유지보수 및 기능 개발",
        date: "2021",
        desc: [
          "업무 요청 기반 신규 기능 개발 및 기존 시스템 기능 개선",
        ],
      },
    ],
  },
];

  return (
      <section
        className="section-block"
        style={{
          background: "#f7f7f7",
        }}
        id="experience"
      >
      <div style={{ display: "flex", justifyContent: "center", background: "#f7f7f7" }}>
        <div className="skill">
          {/* LEFT */}
          <div className="skillLeft">
            <p className="section-label" style={{ margin: 0, fontSize: 36 ,color: "#3153aa" }}>
              Experience
            </p>
          </div>

          {/* RIGHT */}
          <div className="skillRight">
            <div style={{ display: "flex", flexDirection: "column", gap: 42 }}>
              {data.map((block) => (
                <div key={block.company}>
                  {/* 회사명 */}
                  <div className="exp-company" style={{ fontSize: 24, fontWeight: 500 }}>{block.company}</div>

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