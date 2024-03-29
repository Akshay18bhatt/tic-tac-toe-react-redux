import React, { useState } from "react";
import Board from "./Components/Board";
import "./styles.css"
import store from "./redux/store";

import { Provider } from "react-redux";

const App= ()=>{

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext]= useState(true);

    

    
    
    // console.log(squares);

    

    

    return(
        <Provider store={store}>
            <div  >
                <div className="board-container">
                    <Board 
                        squares={squares} 
                        xIsNext={xIsNext} 
                        onPlay={(newSquares)=>{

                            setSquares(newSquares)
                            setXisNext(!xIsNext)
                        }
                        } 
                    />
                </div>
                
            </div>
        </Provider>
    )
}

export default App