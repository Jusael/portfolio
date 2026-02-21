export default function TopBar({ move }: { move:(id:string)=>void }) {
  return (
    <div style={{
      position:"fixed",top:0,left:0,width:"100%",height:60,
      background:"#fff",borderBottom:"1px solid #eee",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      padding:"0 40px",zIndex:1000
    }}>
      <div style={{fontWeight:20,fontSize:20}}>Portfolio</div>

      <div style={{display:"flex",gap:20,cursor:"pointer"}}>
        <span onClick={()=>move("profile")}>Profile</span>
        <span onClick={()=>move("skills")}>Skills</span>
        <span onClick={()=>move("projects")}>Projects</span>
        <span onClick={()=>move("history")}>History</span>
      </div>
    </div>
  );
}