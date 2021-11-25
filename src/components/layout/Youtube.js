import React from "react";

export default function Youtube(){
    return(
        <div style={{alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", marginTop: "150px", width: "100%"}}>
           <iframe width="560" height="315" src="https://www.youtube.com/embed/jpbog8j_wmY" title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
           </iframe>
        </div>
        
    )
   
}

