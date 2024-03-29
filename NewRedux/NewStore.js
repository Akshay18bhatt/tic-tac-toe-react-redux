import { legacy_createStore as createStore } from "redux";


let initialState= {
    moves: []
}


function reducer(state=initialState, action){

    if(action.type==="UPDATE_MOVES"){
        state={
            ...state,
            moves: [...state.moves, action.payload]
        }
        console.log(state.moves);
        return state
    }
    return state
}
export const store = createStore(reducer);