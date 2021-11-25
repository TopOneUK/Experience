import React from "react";
import Video from "../../video/3DWebVid_1.mp4";

export default function videoPlay() {
    return(
        <div style={{ width: "100%", height: "100vh", overflow: "hidden", 
        position: "relative", display: "flex", flexDirection: "column", marginTop: "50px"}}>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
        </div>
    )
}