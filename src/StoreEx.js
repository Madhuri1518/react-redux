import React, {useState} from 'react'

import {useSelector, useDispatch} from 'react-redux';

const ReducerHookEx3 = () => {

    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()

    return (
        <div>
           <h2>Redux reducer</h2>
        <div>

        Counter: {counter}
        <button
            onClick={()=>{dispatch({type:'increment',payload:5})}}
        >
            +
        </button>
        <button
            onClick={()=>{dispatch({type:'decrement',payload:10})}}
        >
            -
        </button>
        {isLogged ? <div>Logout</div> : <div>Login</div>}
        </div>
        </div>
    )
}

export default ReducerHookEx3;