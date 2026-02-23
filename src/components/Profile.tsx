import { FaEnvelope, FaGithub } from "react-icons/fa";
import { profilePicture } from "../assets";

    
 export default function ProfileSection() {   
    return (
    <div className="profileSection">
        <div style={{

          paddingTop: 0,
          paddingBottom: 40,
          justifyContent: "center",
          display: "flex",
        }}>
          <div className="profile" >


            <div className="profileLeft">
              <img
                src={profilePicture}
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
                  <div>
  <FaEnvelope color="#3153aa" />
  <a
    href="mailto:usael@naver.com"
    style={{ marginLeft: 12, textDecoration:"none", color:"#3153aa"}}
  >
    usael@naver.com
  </a>
</div>
               <div>
  <FaGithub color="#3153aa" />
  <a
    href="https://github.com/Jusael"
    target="_blank"
    rel="noopener noreferrer"
    style={{ marginLeft: 12, textDecoration:"none", color:"#3153aa"}}
  >
    github.com/Jusael
  </a>
</div>
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

              <p className="summaryText"style={{
  fontFamily: '-apple-system, BlinkMacSystemFont, "Malgun Gothic", "맑은 고딕", Arial, sans-serif'
}}>
                {
`운영 환경까지 고려한 설계를 지향하는 백엔드 개발자입니다.

MES/WMS/RWS/GMP 일련번호 추적관리 우수 의약품 제조·관리 기준 프로젝트를 수행하며 복잡한 도메인 구조 속에서
안정성과 유지보수성, 대용량 데이터 처리, 데이터 무결성, 기능 고도화, 타 서비스와의 인터페이스 중심으로 
시스템을 개발해왔습니다.

각 다른 클라이언트 요구사항에 대해 표준적인 비지니스 로직 확립 후,  데이터 흐름과 트랜잭션 구조를 개선 하며 
실제 운영 환경에서의 문제 해결과 성능 개선을 경험했습니다.

현재는 Spring Boot 기반으로 기술 스택을 확장하며 다양한 도메인 경험을 쌓고 있습니다.
개인 구독형 SaaS 프로젝트 ‘홀로서기’를 App Store에 출시하여
JWT 인증 구조와 CI/CD 자동 배포 환경을 직접 설계하고 운영하고 있습니다.`}
              </p>
            </div>
          </div>
        </div>
      </div>
)
 }