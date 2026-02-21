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

    width: "60%",
    height: "60%",
    objectFit: "contain",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,   // ⭐ ProjectModal보다 높게
        position: "fixed",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
      }}
    >
      {/* 내부 클릭은 닫히지 않게 */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative" }}
      >
        {/* 닫기 버튼 */}
        <div
          onClick={close}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer"
          }}
        >
          <FaX color="#565555" size={22}/>
        </div>

        <img
          src={imageSrc}
          style={{
    width: "100%",
    height: "100%",
            borderRadius: 12
          }}
        />
      </div>
    </div>
  );
}