import React, {useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        default:
            return state;
    }
}

const ReducerHookEx1 = () => {



    const [counter, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            counter: {counter}
            <button
                onClick={()=>dispatch({type:'increment'})}
            >
                increment
            </button>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
        </div>
    )
}

export default ReducerHookEx1;