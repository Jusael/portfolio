import { FaX } from "react-icons/fa6";

export default function Architecture({
  imageSrc,
  close
}: {
  imageSrc: string;
  close: () => void;
}) {
  return (
    <div
      onClick={close}
      style={{
        position: "fixed",
        inset: 0,                        
        background: "rgba(0,0,0,0.55)", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
      }}
    >
      {/* 내부 클릭은 닫히지 않게 */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "60%",
          height: "60%",
          position: "relative",
          borderRadius: 14,
          background: "#fff",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          overflow: "hidden"
        }}
      >
        {/* 닫기 버튼 */}
        <div
          onClick={close}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            cursor: "pointer",
            zIndex: 2
          }}
        >
          <FaX color="#565555" size={22}/>
        </div>

        <img
          src={imageSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain"
          }}
        />
      </div>
    </div>
  );
}