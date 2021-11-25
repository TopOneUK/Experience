import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import {MobileView} from 'react-device-detect';
// import Video from "../../video/3DWebVid_1.mp4";



const unityContext = new UnityContext({
  loaderUrl: "3D/build/Build.loader.js",
  dataUrl: "3D/build/Build.data",
  frameworkUrl: "3D/build/Build.framework.js",
  codeUrl: "3D/build/Build.wasm",
});



export default function WebGl() {

  const [progression, setProgression] = useState(0);
  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  return (
    
    <div style={{alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
        {/* Youtube Video */}
        {/* <div style={{marginTop: "150px"}}>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/jpbog8j_wmY" title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
        </div> */}
        <p>If interested don't hesitate to contact us at&nbsp;</p>
        <p style={{fontWeight: "bold"}}> Contact@TopOne.UK</p>        
        {/* Loading Text */}
        <p style={{marginTop: "300px", position: "absolute", zIndex: -1}}>Loading {Math.round(progression * 100)} %...</p>
        {/* WebGL */}
        <Unity unityContext={unityContext} 
        style={{
        height: "80%",
        width: "80%",
        //background: "grey",
        display: "flex",
        marginBottom: "50px",
        marginTop: "150px"
        }}
        />
        {/* Reload the page text */}
        <p style={{ display: "flex", margin: "20px"}}>Reload the page if loading is stuck on 90%</p>
        {/* Mobile Version */}
        <MobileView>
          <p style={{ display: "flex", zIndex: -1}}>Use on a desktop device for the better experience</p>
        </MobileView>
    </div>
  )
  
}