import React from "react";
import { legacy_createStore as createStore } from "redux";


let initialState= {
    moves:[]
}

function reducer(state=initialState,action){

    if(action.type==="UPDATE_MOVES"){
        state={
            ...state,
            moves:[...state.moves,action.payload]
        }
        return state;
    }
    else if(action.type==="RESTART"){
        state={
            ...state,
            moves:[]
        }
        return state
    }
    return state;
}

const store= createStore(reducer);
export default store