import React from "react";
import RightArrow from "./../images/RightArrow.svg";
import Lemon from "../images/Lemon.svg";
import Practical from "../images/PracticalAchiever.svg";
import Optimistic from "../images/Optimistic.svg";
import OverSpender from "../images/Overspender.svg";
import Sleeping from "../images/sleeping.svg";
import stablizer from "../images/stablizer.svg";
import { useNavigate } from "react-router-dom";
import RudoImage from "../images/Rudo.png"


const MainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ background: "#FFFFFF", display:"flex", flexDirection:"row",justifyContent:"space-between", alignItems:"center" }}>
        <img src={RudoImage} style={{ marginLeft: 40, padding: 10 }}></img>
        <button
              style={{
                cursor:"pointer",
                width: "max-content",
                paddingBlock: "8px",
                paddingInline: "20px",
                borderRadius: "8px",
                background:
                  "linear-gradient(90deg, #E75553 0%, #ED8663 107.32%)",
                border: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "white",
                fontSize: "27px",
                fontFamily: "urbanist",
              }}
              onClick={() => navigate("/waitlist")}
            >
              <span>See WaitList</span> <img src={RightArrow} alt="" />
            </button>
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 226, 92, 0.1) 0%, rgba(255, 231, 163, 0.056) 100%)",
          height: "100%",
        }}
      >
        <div className="main-page-top">
          <div className="top-left">
            <div
              className="big-text"
              style={{ fontWeight: 700, lineHeight: "53.2px", fontSize: "2vw" }}
            >
              They say, when life gives you lemons, make lemonade!{" "}
            </div>
            <div
              style={{
                fontWeight: 500,
                fontSize: "1.4vw",
                lineHeight: "33.6px",
                fontFamily: "urbanist",
              }}
            >
              But your lemonade might taste different from others considering
              how well you play with the ingredients.{" "}
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 24,
                lineHeight: "33.6px",
                fontFamily: "urbanist",
              }}
            >
              Let’s see how your lemonade tastes!
            </div>
            <button
              style={{
                cursor:"pointer",
                width: "max-content",
                paddingBlock: "8px",
                paddingInline: "20px",
                borderRadius: "8px",
                background:
                  "linear-gradient(90deg, #E75553 0%, #ED8663 107.32%)",
                border: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "white",
                fontSize: "27px",
                fontFamily: "urbanist",
                marginTop: 30,
              }}
              onClick={() => navigate("/form")}
            >
              <span>Join now</span> <img src={RightArrow} alt="" />
            </button>
             
          </div>
          <div className="top-right">
            <img src={Lemon} style={{ height: 400 }} />
          </div>
        </div>
        <div className="main-page-bottom">
          <div
            style={{
              width: "40%",
              textAlign: "center",
              fontWeight: 600,
              lineHeight: "53.2px",
              fontSize: "2vw",
              fontFamily: "urbanist",
            }}
          >
            Take the test & know which of the lemon personalities you resonate
            with{" "}
          </div>
          <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
            <img src={Practical} alt="" />
            <img src={Optimistic} alt="" />
            <img src={stablizer} alt="" />
            <img src={Sleeping} alt="" />
            <img src={OverSpender} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
