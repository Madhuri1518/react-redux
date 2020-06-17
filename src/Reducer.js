
export default function reducer(state,action){
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