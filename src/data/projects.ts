import type { Project } from "../types/project";
import { holoseogiImage,holoseogiWebImage ,mesApp} from "../assets";

export const projects: Project[] = [
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
    tech:[
      "SpringBoot","Flutter","JPA","MyBatis","JWT",
      "AWS EC2","Docker","GitHub Actions","FCM"
    ],
    image:holoseogiImage
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
      image: holoseogiWebImage
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
      image:mesApp
    },
];