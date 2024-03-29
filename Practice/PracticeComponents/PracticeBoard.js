import React from "react";
import Square from "./Square";
import { useDispatch, useSelector } from "react-redux";


const PracticeBoard = ({squares,xIsNext,onPlay})=>{

    const winner= calculateWinner(squares)
    const dispatch= useDispatch();
    const movesArr= useSelector(state=>state.moves);
    console.log(movesArr);

    function handleClick(i){

        if(squares[i] || winner){
            return;
        }
        console.log("lic");
        let newSquares= [...squares];

        if(xIsNext){
            newSquares[i]="X";
        }
        else{
            newSquares[i]="O"
        }
        
        dispatch({type:"UPDATE_MOVES", payload:newSquares})
        onPlay(newSquares);
    }

    function prevMove(ind){
        let arr= movesArr[ind];
        onPlay(arr);
    }
    function restartGame(){
        onPlay(Array(9).fill(null))
        dispatch({type:"RESTART"})
    }
    return(
        <div>
            <div>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
                </div>
            
            </div>
            <div>
                <button onClick={restartGame}>Restart</button>
                {movesArr.length>0 && 
                <div>
                    {movesArr.map((move,ind)=>{
                        return(<button onClick={()=>prevMove(ind)}>Go to move {ind}</button>)
                    })}
                </div>
                }
            </div>
        </div>
    )
}

export default PracticeBoard

function calculateWinner(squares){
    const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8]

    ]

    for(let i=0;i<lines.length;i++){
        let [a,b,c]= lines[i];

        if(squares[a] && squares[a]==squares[b] && squares[a]==squares[c]){
            return squares[a];
        }
    }
    return null;
}