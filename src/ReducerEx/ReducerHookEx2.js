import React, {useReducer, useState} from 'react'

function reducer(state,action){
    switch(action.type){
        case 'add-todo':
            return {
                todos: [...state.todos, {text:action.todoDesc,completed:false} ],
                todoCount: state.todoCount + 1
            };
        case 'toggle-todo':
            const flag=state.todos[action.payload.index].completed;
            const todos = state.todos.map((todo,index)=>
                (index === action.payload.index) ?
                { ...todo, completed: !todo.completed }
                :todo
           )
           const todoCount = state.todoCount + (flag? 1 : -1)
            return {
                todos:todos,
                todoCount: todoCount
            }
        default:
            return state;
    }
}

const ReducerHookEx2 = () => {

    const [{todos,todoCount}, dispatch] = useReducer(reducer, {todos:[],todoCount:0})
    const [todoDesc, setTodoDesc] = useState()

    return (
        <div>
            <form onSubmit={event=>{
                event.preventDefault()
                dispatch({type:"add-todo",todoDesc})
                setTodoDesc("");
            }}>
                <input
                    type="text"
                    value={todoDesc}
                    onChange={e=>{setTodoDesc(e.target.value)}} />
                <input type="submit" />
            </form>
            <pre>{JSON.stringify(todoDesc)}</pre>
            <br />
            {todos.map((todo,index) =>(
                <div
                    key={index}
                    style={{
                        textDecoration: todo.completed? "line-through" : ''
                    }}
                    onClick={() => dispatch({type:"toggle-todo",payload:{index:index}})}
                >
                    {todo.text}
                </div>
            ))}
            <div>Todo Count: {todoCount}</div>
            <pre>{JSON.stringify(todos,null,2)}</pre>
        </div>
    )
}

export default ReducerHookEx2;