import type { ProjectDetail } from "../types/project";

export const projectDetails: Record<string, ProjectDetail> = {
    standAloneApp: {
        projectId: "standAloneApp",
        gif: "/holoseogiapp.gif",
        architecture: "/mesBackend.png",
        summary: [
            `1인 가구 라이프스타일 증가에 아이디어를 얻어, 설계 및 제작한 
구독형 개인 관리 플랫폼입니다. 현재 Appstore에 출시 되어 있습니다.

일정·식자재·식물 관리 데이터를 통합 관리하며, 사용자가 보유한 식자재 정보를
기반으로 OpenAI LLM을 활용한 AI 레시피 추천 기능을 제공합니다.

Firebase 인증 이후 서버 JWT 재발급 구조를 적용하여
클라이언트 의존도를 낮추고 서버 중심 인증 흐름으로 설계했습니다.`],
        techDetail: [
            "App Store 구독형 결제 서버 검증 로직 연동",
            "iOS 배포 및 App Store 심사 대응 구조 경험",
            "OpenAI LLM API를 활용한 AI 레시피 추천 기능 구현",
            "Spring Boot 기반 REST API 서버 설계 및 구현",
            "Firebase Auth + UID 기반 서버 JWT 재발급 인증 구조 설계",
            "SecureStorage 기반 토큰 관리 및 인증 흐름 구현",
            "JPA + MyBatis 혼합 데이터 접근 구조 설계",
            "AWS EC2 환경 Docker 컨테이너 운영",
            "Nginx 기반 HTTPS 배포 구성",
            "GitHub Actions 기반 무중단 배포 파이프라인 구축",
            "Firebase FCM 알림 시스템 연동",

        ],
        notionDocs: []
    },

    standAloneWeb: {
        projectId: "standAloneWeb",
        gif: "/holoseogiweb.gif",
        architecture: "/mesBackend.png",
        summary: [
            `홀로서기 서비스 운영을 위해 제작한 관리자 웹 콘솔입니다.

공휴일 API를 서버에서 수집·관리하고 앱과 동기화하는 구조를 포함해,
운영 데이터를 중앙에서 관리할 수 있도록 설계했습니다.

React + TypeScript 기반으로 API Layer를 분리하여
유지보수성을 고려한 구조로 구성했으며,
Docker + Nginx 환경에서 정적 배포됩니다.
`],
        techDetail: [
            "React + TypeScript 기반 관리자 콘솔 구현",
            "API Layer 분리 구조 설계 (hooks/api)",
            "DataBase Cache 구성",
            "트래픽 데이터 시각화 UI 구성",
            "Docker + Nginx 정적 배포 환경 구성",
            "GitHub Actions 기반 관리자 웹 자동 배포"
        ],
        notionDocs: []
    },

    mesApp: {
        projectId: "mesApp",
        gif: "/holoseogiapp.gif",
        architecture: "/mesBackend.png",
        summary: [`
사내 모바일 MES 프로젝트 경험을 기반으로,
기존 구조를 확장하여 개인적으로 설계·구현한 아키텍처 PoC입니다.

Kafka 메시지 큐, DLQ 재처리 전략,
WebSocket 기반 실시간 이벤트 흐름 등을 추가 설계했으며,
실무 환경을 가정한 이벤트 기반 백엔드 구조를 구축했습니다.

해당 구조는 개인 시간에 설계 후 사내 발표를 진행했고,
일부 아키텍처 아이디어가 내부적으로 채택되었습니다.

전체 절차도와 기술 상세 내용은 Deep Dive Docs에 정리했습니다.
`],
        techDetail: [
            "Kafka Producer/Consumer 이벤트 구조 적용",
            "DLQ 기반 메시지 재처리 전략 구현",
            "WebSocket 기반 실시간 알림 흐름 설계",
            "JWT + 생체인증 기반 전자서명 처리 구조",
            "Spring Boot 비동기 이벤트 처리 구조"
        ],
        notionDocs: [
            { title: "WebSocket 실시간 알림 구조", url: "https://www.notion.so/WebSocket-24a42636c5268011bc6de9acd16f1ea2?source=copy_link" },
            { title: "SP Queue 재시도 처리 로직", url: "https://www.notion.so/SP-Queue-24a42636c52680a79beae91f3b8dd56d?source=copy_link" },
            { title: "Kafka Queue 재전송 처리 로직", url: "https://www.notion.so/Kafka-Queue-24a42636c5268097b0e0faacac8a271b?source=copy_link" },
            { title: "CI/CD 파이프라인 구성도", url: "https://www.notion.so/CI-CD-25342636c526807b853bfa0d0ed29244?source=copy_link" },
            { title: "Database 성능 개선", url: "https://www.notion.so/Data-base-89b1c21073ab4a748c4cd13dd03821ca?source=copy_link" }]
    }
};