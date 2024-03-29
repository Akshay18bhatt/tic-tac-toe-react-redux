import React from "react";
import NewSquare from "./NewSquare";
import { UseDispatch,useDispatch,useSelector } from "react-redux";


const NewBoard= ({squares, xIsNext,onPlay})=>{

    const dispatch= useDispatch();
    const movesArr= useSelector((state)=>state.moves)
    let winner= calculateWinner(squares);
    let status;
    if(winner){
        status= `Winner : ${winner}`
    }
    else{
        status= xIsNext? "Next : X": "Next : O"
    }

    function handleClick(ind){

        if(squares[ind] || winner){
            return
        }
        const nextNewSquares= squares.slice();

        if(xIsNext){
            nextNewSquares[ind]="X";
        }
        else{
            nextNewSquares[ind]="O"
        }
        dispatch({type:"UPDATE_MOVES", payload:[...nextNewSquares]})
        onPlay(nextNewSquares)
    }

    function goToPrevMove(ind){
        onPlay(movesArr[ind])
    }
    return(
        <div className="new-board">
            <div className="game">
                <h1>{status}</h1>
                <div>
                    <div className="new-board-row">
                        <NewSquare value={squares[0]} onSquareClick={()=>handleClick(0)} />
                        <NewSquare value={squares[1]} onSquareClick={()=>handleClick(1)} />
                        <NewSquare value={squares[2]} onSquareClick={()=>handleClick(2)} />
                    </div>
                    <div className="new-board-row">
                        <NewSquare value={squares[3]} onSquareClick={()=>handleClick(3)} />
                        <NewSquare value={squares[4]} onSquareClick={()=>handleClick(4)} />
                        <NewSquare value={squares[5]} onSquareClick={()=>handleClick(5)} />
                    </div>
                    <div className="new-board-row">
                        <NewSquare value={squares[6]} onSquareClick={()=>handleClick(6)} />
                        <NewSquare value={squares[7]} onSquareClick={()=>handleClick(7)} />
                        <NewSquare value={squares[8]} onSquareClick={()=>handleClick(8)} />
                    </div>
                </div>
            </div>
            <div className="moves-backtracking-container">
                {movesArr.length>0 && <div className="moves-backtracking">
                    {movesArr.map((move,ind)=><button onClick={()=>goToPrevMove(ind)} className="move-btn" key={ind}>Go to move {ind}</button>)}
                </div> }
            </div>
        </div>
    )
}

export default NewBoard



function calculateWinner(square){

    const lines= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0;i<lines.length;i++){
        let [a,b,c]= lines[i]

        if(square[a] && square[a]===square[b] && square[a]===square[c]){
            return square[a];
        }

    }
    return null
}