import React, { useState } from "react";
import RandomAdviceLS from "./RandomAdviceLS";

function Advice(){
    const [advice,setAdvice]= useState("NA")
    return (
        <>
        <h1>ADVICE GENERATOR</h1>
        <RandomAdviceLS onSelectAdvice={setAdvice}></RandomAdviceLS>
        <h2>{advice}</h2>
        </>
    )
}
export default Advice; 