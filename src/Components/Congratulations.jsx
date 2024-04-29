import React from "react";
import RudoImage from "../images/Rudo.png"
import Gift from "../images/Gift.svg";
import { useNavigate } from "react-router-dom";

const Congratulations = () => {
    const navigate = useNavigate();
  return (
    <div style={{ background: "#FFF6DB", height: "100%" }}>
      <div>
        <img src={RudoImage} style={{ marginLeft: 40, padding: 10 }}></img>
      </div>
      <div style={{display:"flex", flexDirection : "column",justifyContent:"center", alignItems:"center",marginTop:"50px"}}>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",background:"white",width:"636px",gap:"20px"}}>
            <img src={Gift} style={{width:"fit-content"}} alt="" />
            <div style={{fontFamily:"urbanist", fontWeight:700,fontSize:"40px", lineHeight:"48px",textAlign:"center",color:"#FFA400"}}>CONGRATULATIONS!</div>
            <div style={{marginTop:"30px",fontFamily:"urbanist", fontWeight:600,fontSize:"30px", lineHeight:"36px"}}>You have been added on the waiting list </div>
            <button onClick={() => {
                navigate("/");
            }} style={{ cursor:"pointer",marginBottom:"50px",background: "linear-gradient(90deg, #E75553 0%, #E75553 107.32%)",paddingInline:"80px",paddingBlock:"10px",border:"none",color:"white",borderRadius:"8px",fontFamily:"urbanist",fontFamily:500,fontSize:"23.63px",lineHeight:"28.36px"}}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
