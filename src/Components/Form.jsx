import React, { useState } from "react";
import RudoImage from "../images/Rudo.png";
import Trophy from "../images/Trophy.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ background: "#FFF6DB", height: "100%" }}>
      <div>
        <img src={RudoImage} style={{ marginLeft: 40, padding: 10 }}></img>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "525px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Trophy}
              alt=""
              style={{
                borderRadius: "50%",
                height: 80,
                width: 80,
                background:
                  "linear-gradient(180deg, #4ABE9B 13.55%, #7CC8C2 59.83%, rgba(255, 232, 193, 0) 94.35%)",
              }}
            />{" "}
            <div
              style={{
                fontFamily: "urbanist",
                fontWeight: 700,
                fontSize: "37.12px",
                color: "#23827A",
                lineHeight: "44.55px",
                textAlign: "center",
              }}
            >
              Join now and get AED50
            </div>
          </div>
          <form
            onSubmit={async(e) => {
              e.preventDefault();
              console.log(e.currentTarget[0].value);
              const data = await axios.post("http://localhost:4000/joinWaitlist",{
                name : e.currentTarget[0].value,
                email : e.currentTarget[1].value,
                mobile : e.currentTarget[2].value,
                message : e.currentTarget[3].value
              })
              navigate("/congratulations")
              

            }}
            className="form"
          >
            <input required type="text" placeholder="Full Name" />
            <input required type="email" placeholder="Email" />
            <input required type="number" placeholder="Contact no." />
            <textarea
              required
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "end",
              }}
            >
              <button
                type="submit"
                style={{
                  cursor: "pointer",
                  fontFamily: "urbanist",
                  fontWeight: 500,
                  fontSize: "23.63px",
                  borderRadius: "4px",
                  paddingInline: "60px",
                  paddingBlock: "12px",
                  background: "#313131",
                  width: "fit-content",
                  color: "white",
                  border: "none",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
