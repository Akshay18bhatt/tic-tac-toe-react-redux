import React, { useState } from "react";
import PracticeBoard from "./PracticeComponents/PracticeBoard";
import "./styles.css"
import { Provider } from "react-redux";
import store from "./PracticeRedux/store";


const PracticeApp= ()=>{

    const[squares,setSquares]= useState(Array(9).fill(null));
    const[xIsNext, setXIsNext]= useState(true);
    
    function onPlay(newSquares){
        console.log(newSquares);
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    return(
        <Provider store={store}>
            <div>
                <PracticeBoard squares={squares} xIsNext={xIsNext} onPlay={onPlay} />
            </div>
        </Provider>
    )
}

export default PracticeApp