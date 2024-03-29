import React from "react";
import { legacy_createStore as createStore } from "redux";


let initialValue= {
    moves: []
}
function reducer(state=initialValue,action){
    if(action.type==="UPDATE_MOVES"){
        console.log("before updating" ,state);
        
        
        state={
            ...state,
            moves:[...state.moves,action.payload]
            
        }
        console.log("after updating" , state);
        return state;
    }
    else{
        return state
    }
}

const store= createStore(reducer)
export default store