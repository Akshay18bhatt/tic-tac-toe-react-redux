import React, { useState } from "react";
import NewBoard from "./NewComponents/NewBoard";
import "./newStyles.css"
import { store } from "./NewRedux/NewStore";
import { Provider } from "react-redux";

const NewApp= ()=>{

    const [squares, setSquares]= useState(Array(9).fill(null));
    const [xIsNext, setXisNext]= useState(true);
    

    return(
        <Provider store={store}>
            <div>
                <NewBoard 
                    squares={squares} 
                    xIsNext={xIsNext}
                    onPlay={(nextNewSquares)=>{
                        setSquares(nextNewSquares);
                        setXisNext(!xIsNext)
                    }}
                    
                />
            </div>
        </Provider>
    )
}

export default NewApp