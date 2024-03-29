import React from "react";
import Square from "./Square";
import { useDispatch, useSelector } from "react-redux";

const Board= ({squares,xIsNext,onPlay})=>{

    const dispatch= useDispatch();
    
    


    const winner= calculateWinner(squares);
    let status;
    if(winner){
        status=`Winner is ${winner}`;
    }
    else{
        status=`Next Player : ${xIsNext?"X": "O"}`;
    }

    function handleClick(i){

        if(calculateWinner(squares) || squares[i]!==null){
            return
        }
        const newSquares= [...squares];
        console.log(newSquares);

        if(xIsNext){
            newSquares[i]= 'X';
        }
        else{
            newSquares[i]= 'O';
        }

        dispatch({type:"UPDATE_MOVES", payload:newSquares})
        console.log(movesArr);
        onPlay(newSquares);
    }

    let movesArr= useSelector(state=>{
        console.log(state.moves);
        return state.moves
    });
    

    function goToMove(ind){
        console.log(movesArr);
        const arr= movesArr[ind];
        onPlay(arr);
    }

    

    return(
        <div >
            <h1>{status}</h1>
            <div className="board-row">
                <Square value={squares[0]}  onSquareClick={()=>handleClick(0)} />
                <Square value={squares[1]}  onSquareClick={()=>handleClick(1)} />
                <Square value={squares[2]}  onSquareClick={()=>handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]}  onSquareClick={()=>handleClick(3)} />
                <Square value={squares[4]}  onSquareClick={()=>handleClick(4)} />
                <Square value={squares[5]}  onSquareClick={()=>handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]}  onSquareClick={()=>handleClick(6)} />
                <Square value={squares[7]}  onSquareClick={()=>handleClick(7)} />
                <Square value={squares[8]}  onSquareClick={()=>handleClick(8)} />
            </div>

            <div>
                <div className="prev-moves">
                    <h2 >Previous moves :</h2>
                    <div>
                        
                        {
                        movesArr.length>0 &&
                        movesArr.map((move,i)=>{
                            console.log(i);
                         return <button onClick={()=>goToMove(i)} key={i}>Go to move {i}</button>})
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}


function calculateWinner(squares){
    const lines=[
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
        let [a,b,c]= lines[i];

        if(squares[a]!==null && squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Board