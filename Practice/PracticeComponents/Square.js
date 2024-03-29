import React from "react";


const Square= ({value,onSquareClick})=>{

    return(
        <button onClick={onSquareClick}>{value}</button>
    )
}

export default Square