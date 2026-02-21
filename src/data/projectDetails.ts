import { ProjectDetail } from "../types/project";

export const projectDetails: Record<string, ProjectDetail> = {
  standAloneApp: {
    projectId: "standAloneApp",
    gif: "/holoseogiapp.gif",
    architecture: "/arch1.png",
    summary: [ `1인 가구 라이프스타일 증가에 아이디어를 얻어...` ],
    techDetail: [
      "App Store 구독형 결제 서버 검증 로직 연동",
      "iOS 배포 및 App Store 심사 대응 구조 경험",
      "Spring Boot 기반 REST API 서버 설계 및 구현",
      "Firebase Auth + UID 기반 서버 JWT 재발급 인증 구조 설계",
      "SecureStorage 기반 토큰 관리 및 인증 흐름 구현",
      "JPA + MyBatis 혼합 데이터 접근 구조 설계",
      "AWS EC2 환경 Docker 컨테이너 운영",
      "Nginx 기반 HTTPS 배포 구성",
      "GitHub Actions 기반 무중단 배포 파이프라인 구축",
      "Firebase FCM 알림 시스템 연동",
      "OpenAI LLM 기반 식자재 추천 AI 기능 구현"
    ]
  },

  standAloneWeb: {
    projectId: "standAloneWeb",
    gif: "/gif2.gif",
    architecture: "/arch2.png",
    summary: ["관리자 트래픽 분석 콘솔"],
    techDetail: ["React Hook 구조","API Layer 분리"]
  },

  mesApp: {
    projectId: "mesApp",
    gif: "/gif3.gif",
    architecture: "/arch3.png",
    summary: ["사내 PoC 채택 모바일 MES"],
    techDetail: ["Producer Retry Logic","Consumer DLQ 처리","Biometric Signing Flow"]
  }
};