export default function TopBar({ move }: { move: (id: string) => void }) {
  return (
    <div className="top-bar">
      <div className="top-bar-brand">Portfolio</div>

      <nav className="top-bar-nav" aria-label="섹션 이동">
        <span onClick={() => move("profile")}>Profile</span>
        <span onClick={() => move("techStack")}>TechStack</span>
        <span onClick={() => move("personalProject")}>Personal Project</span>
        <span onClick={() => move("experience")}>Experience</span>
      </nav>
    </div>
  );
}
