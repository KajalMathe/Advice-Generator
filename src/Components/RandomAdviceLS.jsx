import React from "react";

const advices=[
    "Work Hard",
    "Study Hard",
    "Be Good",
    "Be Kind",
    "Do what you love or love what you do"
]

const RandomAdviceLS=({onSelectAdvice})=>{
    const getRandomAdvice=()=>{
        const randomIndex=Math.floor(Math.random()*advices.length);
        return advices[randomIndex];
    }

    const handleClick=()=>{
           const advice = getRandomAdvice();
           onSelectAdvice(advice)

    }

    return(
        <>
        <button onClick={handleClick}>Generate Advice</button>
        </>
    )
}
export default RandomAdviceLS;