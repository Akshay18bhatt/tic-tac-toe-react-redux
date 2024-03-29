import React from "react";


const NewSquare= ({value,onSquareClick})=>{

    return(
        <button className="square-btn" onClick={onSquareClick} >{value}</button>
    )
}

export default NewSquare